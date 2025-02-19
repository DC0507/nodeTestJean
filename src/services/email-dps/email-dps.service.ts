import moment from 'moment';
import {
  audiencesToArray,
  checkEmailPreferences,
  CacheMapByArrayKey,
  DATE_LONG_FORMAT,
  EmailDistributionType,
  GLOBALAUDIENCE,
} from 'jarvis-common';
import { HTMLEmailMessage, HTMLEmailMessageType } from 'jarvis-common';
import { JarvisService } from '../../shared/services/jarvis.service';
import { EmailService } from '../../shared/services/email.service';
import { ActivityLogService } from '../../shared/services/activity-log.service';
import {
  ActivityLogType,
  AnnualSubscriptionAccess,
  IntegrationType,
} from '../../shared/graphql/jarvis';
import { downloadExcelFromRestApi } from '../../shared/utils/jarvis-api-helper';
import dotenv from 'dotenv';
import { Logger } from '../../shared/utils/logger';
import { InvocationContext } from '@azure/functions';
import { inject, injectable, optional } from 'inversify';
import { configService } from '../../shared/config/config.service';
dotenv.config();

@injectable()
export class EmailDailyProtestSummaryService {
  excelFileCache = new CacheMapByArrayKey();
  private readonly logger: Logger;

  constructor(
    private readonly jarvisService: JarvisService,
    private readonly emailService: EmailService,
    private readonly activityLogService: ActivityLogService,
    @inject(InvocationContext)
    @optional()
    private readonly invocationContext?: InvocationContext,
  ) {
    this.logger = new Logger();
    console.log(String.raw`
     ____.                  .__        
    |    |____ __________  _|__| ______
    |    \__  \\_  __ \  \/ /  |/  ___/
/\__|    |/ __ \|  | \/\   /|  |\___ \ 
\________(____  /__|    \_/ |__/____  )
              \/                    \/  Email Daily Protest Summary`);
    this.logger = new Logger(
      'EmailDailyProtestSummaryService',
      invocationContext,
    );
    this.logger.info(
      `Connecting to: ${configService.getValue('GRAPHQL_SERVER')}\n\n`,
    );
  }

  async distributeDPS(test = false, date = null) {
    const now = date ? moment(date).utc() : moment().utc();
    const today = now.startOf('day');
    const title = `FORESIGHT - Daily Protest Summary (DPS) for ${moment(
      today,
    ).format(DATE_LONG_FORMAT)}`;
    // don't run on Sun or Sat
    if (![0, 6].includes(now.day())) {
      try {
        this.logger.info('emailing customers the daily protest summary');

        // get all company_contacts who have sub is not null
        let subscribers = await this.jarvisService.getSubscriptions();
        //const notifications = await this.jarvis.getNotifications();

        // const titleUnbranded = `Proactive Alert for ${moment(today).format(
        //   DATE_LONG_FORMAT
        // )}`;

        // sort the subscribers
        subscribers = subscribers.sort((a, b) =>
          a.client.name > b.client.name
            ? 1
            : b.client.name > a.client.name
            ? -1
            : 0,
        );

        for (const subscriber of subscribers.filter(
          (x) =>
            (x.access as AnnualSubscriptionAccess).emails.dps &&
            // no gsheet integration
            !x?.client?.integrations?.find(
              (x) => x.type === IntegrationType.Gsheet,
            ) &&
            // no airtable integration
            !x?.client?.integrations?.find(
              (x) => x.type === IntegrationType.Airtable,
            ),
        )) {
          // prep audience array
          const audiences = audiencesToArray(subscriber.audiences || '');
          this.logger.info(
            `> Processing subscription for ${subscriber.client.name} (${
              subscriber.type
            }: ${audiences.join(', ')})`,
          );

          // skip all together if no one to send to
          const { sendToEmails, optedOut } =
            await this.jarvisService.filterSubscriptionEmailsByPreferences(
              subscriber,
              EmailDistributionType.dps,
            );

          if (sendToEmails.length === 0) {
            continue;
          }

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
                `skipping ${subscriber.client.name}, only receive DPS on days ${
                  (subscriber.access as AnnualSubscriptionAccess).constraints
                    ?.dpsOnDaysOfWeek ?? []
                }`,
              );
              continue;
            }
          }

          // check if already emailed today
          const lastRun = await this.activityLogService.getLast(
            ActivityLogType.EmailDps,
            subscriber?.client?.id ?? '',
          );
          this.logger.info(`DPS for this client last run: ${lastRun}`);
          //if (!test) {
          if (
            moment.utc(lastRun).format('YYYY-MM-DD') ===
            today.format('YYYY-MM-DD')
          ) {
            this.logger.info(
              `already emailed ${subscriber.client.name} the DPS today`,
            );
            continue;
          }
          // }

          // check if limit to 48 hours
          const limit48Hours =
            (subscriber.access as AnnualSubscriptionAccess).constraints
              ?.outlook48 ?? false;
          if (limit48Hours) {
            this.logger.info(`limiting ${subscriber.client.name} to 48 hours`);
          }

          // check if excel file needs to be downloaded
          if (
            !this.excelFileCache.get([...audiences, limit48Hours.toString()])
          ) {
            this.logger.info(
              `  ** downloading excel for audience: ${audiences.join(', ')}, ${
                limit48Hours ? '(48hrs Outlook)' : ''
              }`,
            );
            this.excelFileCache.set(
              [...audiences, limit48Hours.toString()],
              await downloadExcelFromRestApi(audiences, limit48Hours),
            );
          }

          // get the excel file
          const excel = this.excelFileCache.get([
            ...audiences,
            limit48Hours.toString(),
          ]);

          const emailMessage = new HTMLEmailMessage(
            HTMLEmailMessageType.External,
          );
          emailMessage.setTitle(title);
          emailMessage.setIntro(
            `${
              subscriber.client.name + ' Team,'
            }<br/>Please find attached your FORESIGHT Daily Protest Summary for ${audiences
              .filter((x) => x !== GLOBALAUDIENCE)
              .join(', ')} ${limit48Hours ? '(48hrs Outlook)' : ''}`,
          );

          // send the email
          if (test) {
            await this.emailService.sendHTMLEmailMessage(
              ['chris@foresightreports.com'],
              emailMessage,
              [
                {
                  Filename: excel.fileName,
                  Base64Content: excel.file.toString('base64'),
                  ContentType:
                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                },
              ],
            );
          } else {
            try {
              if (
                (subscriber.access as AnnualSubscriptionAccess).constraints.foi
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
                // sending with attachments causes the API to suck, and through exception when lots of email accounts.. bad design. so sending in batches
                this.logger.info(
                  `  --> sending email to : ${sendToEmails.join(', ')}`,
                );
                await this.emailService.sendHTMLEmailMessage(
                  sendToEmails,
                  emailMessage,
                  [
                    {
                      Filename: excel.fileName,
                      Base64Content: excel.file.toString('base64'),
                      ContentType:
                        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    },
                  ],
                );
              }

              //track the sending of this email
              await this.activityLogService.create(
                ActivityLogType.EmailDps,
                subscriber.client.name,
                null,
                subscriber?.client?.id ?? '',
                this.constructor.name,
              );
            } catch (e) {
              this.logger.error(
                `  !!! Exception occured emailing ${subscriber.client.name}`,
                e,
              );
            }
          }
        }
        this.logger.info(`distribute DPS email completed...`);

        // handle employees
        const employees = await this.jarvisService.getEmployeeUsers();
        // get all the employee preferences
        const employeePreferences =
          await this.jarvisService.getPortalPreferencesForUsers(
            employees.map((x) => x.email),
          );
        const excel = await downloadExcelFromRestApi(
          ['NORAM', 'EMEA', 'APAC', 'LATAM', 'Global'],
          false,
        );

        const employeeEmails = [];
        for (const employee of employees) {
          if (
            checkEmailPreferences(
              employeePreferences.find((x) => x.email === employee.email),
              EmailDistributionType.dps,
            )
          ) {
            employeeEmails.push(employee.email);
          }
        }
        const emailMessage = new HTMLEmailMessage(
          HTMLEmailMessageType.Internal,
        );
        emailMessage.setTitle(title);
        emailMessage.setIntro(
          `Internal Team,<br/>Please find attached your FORESIGHT Daily Protest Summary`,
        );

        await this.emailService.sendHTMLEmailMessage(
          employeeEmails,
          emailMessage,
          [
            {
              Filename: excel.fileName,
              Base64Content: excel.file.toString('base64'),
              ContentType:
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            },
          ],
        );

        // only send admin the distro summary
        const emails = employees
          .filter((x) =>
            x?.systemEmails?.includes('daily-protest-distro-summary'),
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

          await this.emailService.sendHTMLEmailMessage(
            emails,
            distroSummaryEmailMessage,
          );
        }
      } catch (e) {
        this.logger.error(e);

        await this.emailService.sendHTMLEmail(
          this.emailService.defaultTo,
          'Error : Email Daily Protest Summary Service',
          `<h3>Distribution Log</h3>${this.logger.getLogTrace('<br/>')}`,
        );
      }
    }
  }
}
