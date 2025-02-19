import {
  ActivityLogType,
  AnnualSubscriptionAccess,
  IntegrationType,
} from '../../shared/graphql/jarvis';
import { JarvisService } from '../../shared/services/jarvis.service';
import moment from 'moment';
import { EmailService } from '../../shared/services/email.service';
import { ActivityLogService } from '../../shared/services/activity-log.service';
import { AirTablePlatformIntegration } from './airtable-platform-integration';
import { GSheetPlatformIntegration } from './gsheet-platform-integration';
import { downloadActionsFromRestApi } from '../../shared/utils/jarvis-api-helper';
import {
  audiencesToArray,
  DATE_LONG_FORMAT,
  GLOBALAUDIENCE,
  HTMLEmailMessage,
  HTMLEmailMessageType,
  EmailDistributionType,
} from 'jarvis-common';
import dotenv from 'dotenv';
import { inject, injectable, optional } from 'inversify';
import { Logger } from '../../shared/utils/logger';
import { InvocationContext } from '@azure/functions';
import { configService } from '../../shared/config/config.service';
dotenv.config();

@injectable()
export class DPSPlatformIntegrationService {
  private readonly logger: Logger;

  constructor(
    private readonly jarvisService: JarvisService,
    private readonly emailService: EmailService,
    private readonly activityLogService: ActivityLogService,
    @inject(InvocationContext)
    @optional()
    private readonly invocationContext?: InvocationContext,
  ) {
    console.log(String.raw`
     ____.                  .__        
    |    |____ __________  _|__| ______
    |    \__  \\_  __ \  \/ /  |/  ___/
/\__|    |/ __ \|  | \/\   /|  |\___ \ 
\________(____  /__|    \_/ |__/____  )
              \/                    \/  DPS Platform Integration`);
    this.logger = new Logger(
      'DPSPlatformIntegrationService',
      invocationContext,
    );
    this.logger.info(
      `Connecting to: ${configService.getValue('GRAPHQL_SERVER')}\n\n`,
    );
  }

  async processIntegrations(test = false) {
    const now = new Date();
    // don't run on Sun or Sat
    const today = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0,
      0,
      0,
    );
    const title = `FORESIGHT - Protest Platform Integration Summary for ${moment(
      today,
    ).format(DATE_LONG_FORMAT)}`;

    if (![0, 6].includes(now.getDay())) {
      try {
        this.logger.info(
          'pushing protest summary data onto supported platforms',
        );

        // get all subscriptions
        let subscribers = await this.jarvisService.getSubscriptions();

        // sort the subscribers
        subscribers = subscribers.sort((a, b) =>
          a.client.name > b.client.name
            ? 1
            : b.client.name > a.client.name
            ? -1
            : 0,
        );

        // iterating through platform types (gsheet, airtable)
        for (const integrationType of [
          IntegrationType.Gsheet,
          IntegrationType.Airtable,
        ]) {
          for (const subscriber of subscribers.filter(
            (x) =>
              (x.access as AnnualSubscriptionAccess).emails.dps &&
              x?.client?.integrations?.find((x) => x.type === integrationType),
          )) {
            // check if subscription supports this day of the week
            if (
              (subscriber.access as AnnualSubscriptionAccess).constraints
                ?.dpsOnDaysOfWeek?.length
            ) {
              this.logger.info(
                `subscription has a day of the week limit, testing ${moment()
                  .day()
                  .toString()} against ${
                  (subscriber.access as AnnualSubscriptionAccess).constraints
                    ?.dpsOnDaysOfWeek
                }: skip? ${!(
                  subscriber.access as AnnualSubscriptionAccess
                ).constraints?.dpsOnDaysOfWeek?.includes(
                  moment().day().toString(),
                )}`,
              );
              if (
                !(
                  subscriber.access as AnnualSubscriptionAccess
                ).constraints?.dpsOnDaysOfWeek?.includes(
                  moment().day().toString(),
                )
              ) {
                this.logger.info(
                  `skipping ${
                    subscriber.client.name
                  }, only receive DPS on days ${
                    (subscriber.access as AnnualSubscriptionAccess).constraints
                      ?.dpsOnDaysOfWeek ?? []
                  }`,
                );
                continue;
              }
            }

            const audiences = audiencesToArray(subscriber?.audiences || '');
            const limit48Hours = (subscriber.access as AnnualSubscriptionAccess)
              .constraints.outlook48;
            if (limit48Hours) {
              this.logger.info(
                `limiting ${subscriber.client.name} to 48 hours`,
              );
            }

            this.logger.info(
              `downloading data for audiences: ${audiences.join(', ')}, ${
                limit48Hours ? '(48hrs Outlook)' : ''
              }`,
            );
            const spreadsheetTitle = `FORESIGHT - Protest Summary for ${audiences
              .filter((x: any) => x !== GLOBALAUDIENCE)
              .join(', ')} for ${moment(today).format(DATE_LONG_FORMAT)}`;

            this.logger.info(
              `> Processing ${integrationType} subscription for ${
                subscriber.client.name
              } (${subscriber.type}), ${
                subscriber?.client?.contacts?.length || 0
              } total contacts, audiences: ${audiences.join(', ')}`,
            );

            //get the existing integration entry
            const integrationConfig = subscriber?.client?.integrations?.find(
              (x: any) => x.type === integrationType,
            );

            if (!integrationConfig) {
              this.logger.info(
                `skipping ${subscriber.client.name}, no integration found`,
              );
              continue;
            }

            this.logger.info(`downloading data for ${audiences.join(', ')}`);
            const actions = await downloadActionsFromRestApi(
              audiences,
              limit48Hours,
            );

            this.logger.info(`${actions.length} actions downloaded`);

            const { sendToEmails, optedOut } =
              await this.jarvisService.filterSubscriptionEmailsByPreferences(
                subscriber,
                EmailDistributionType.dps,
              );

            let innerContent = '';
            if (integrationType === IntegrationType.Airtable && !test) {
              innerContent = await AirTablePlatformIntegration(
                integrationConfig,
                actions,
                spreadsheetTitle,
                sendToEmails,
              );
            } else if (integrationType === IntegrationType.Gsheet && !test) {
              innerContent = await GSheetPlatformIntegration(
                integrationConfig,
                actions,
                spreadsheetTitle,
                sendToEmails,
              );
            }

            const emailMessage = new HTMLEmailMessage(
              HTMLEmailMessageType.External,
            );
            emailMessage.setTitle(title);
            emailMessage.setIntro(
              `${
                subscriber.client.name + ' Team,'
              }<br/>Your ${integrationType} Integration Platform has been updated with the FORESIGHT Protest Summary (${audiences
                .filter((x: any) => x !== GLOBALAUDIENCE)
                .join(', ')})<br/>${innerContent}<br/>`,
            );

            if (sendToEmails.length === 0) {
              continue;
            }

            if (!test) {
              try {
                if (
                  (subscriber.access as AnnualSubscriptionAccess).constraints
                    .foi
                ) {
                  this.logger.info(
                    `  ! ${subscriber.client.name} is a FOI account, not emailing unbranded emailer`,
                  );
                  // send version with only the link
                  // await this.emailService.sendHTMLEmail(
                  //   sendToEmails,
                  //   titleUnbranded,
                  //   contentUnbranded
                  // );
                } else {
                  this.logger.info(
                    `  --> sending email to : ${sendToEmails.join(', ')}`,
                  );
                  await this.emailService.sendHTMLEmailMessage(
                    sendToEmails,
                    emailMessage,
                  );
                }
                //track the sending of this email
                await this.activityLogService.create(
                  ActivityLogType.EmailDps,
                  subscriber.client.name,
                  null,
                  subscriber?.client?.id || 'Unknown Client ID',
                  this.constructor.name, // name of the class
                );
              } catch (e) {
                this.logger.error(
                  `  !!! Exception occured emailing ${subscriber.client.name}`,
                  e,
                );
              }
            }
          }
        }
        this.logger.info(`distribute DPS email completed...`);

        // handle employees
        const employees = await this.jarvisService.getEmployeeUsers();
        // only send admin the distro summary
        const emails = employees
          .filter((x) =>
            x?.systemEmails?.includes('protest-platform-integration-summary'),
          )
          .map((x) => x.email);
        if (emails.length > 0) {
          const distroSummaryEmailMessage = new HTMLEmailMessage(
            HTMLEmailMessageType.Internal,
          );
          distroSummaryEmailMessage.setTitle(
            'FORESIGHT - Distribution Log : ' + title,
          );
          distroSummaryEmailMessage.setIntro(this.logger.getLogTrace('<br/>'));

          await this.emailService.sendHTMLEmail(
            emails,
            distroSummaryEmailMessage.title,
            distroSummaryEmailMessage.render(),
          );
        }
      } catch (e) {
        this.logger.error(e);

        await this.emailService.sendHTMLEmail(
          this.emailService.defaultTo,
          'Error : ' + title,
          `<h3>Distribution Log</h3>${this.logger.getLogTrace('<br/>')}`,
        );
      }
    }
  }
}
