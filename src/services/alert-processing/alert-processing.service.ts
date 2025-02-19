import { JarvisService } from '../../shared/services/jarvis.service';
import { InvocationContext } from '@azure/functions';
import {
  AlertCollectionEntry,
  AlertDeliveryMethod,
  AnnualSubscriptionAccess,
  ClientNotificationType,
  CreateOneClientNotificationDocument,
} from '../../shared/graphql/jarvis';
import { inject, injectable, optional } from 'inversify';
import { Logger } from '../../shared/utils/logger';
import moment from 'moment';
import { ServiceBusClient, ServiceBusSender } from '@azure/service-bus';
import { configService } from '../../shared/config/config.service';
import {
  getServiceBusName,
  HTMLEmailMessage,
  HTMLEmailMessageType,
} from 'jarvis-common';
import { EmailService } from '../../shared/services/email.service';

const keyMapping = {
  locations: 'location',
  tactics: 'tactic',
  companies: 'companies',
  sectors: 'sectors',
  events: 'events',
  groups: 'groups',
  campaigns: 'campaigns',
  issues: 'issues',
};

@injectable()
export class AlertProcessingService {
  private readonly logger: Logger;
  alertBatchSender: ServiceBusSender;

  constructor(
    private readonly jarvisService: JarvisService,
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
              \/                    \/  Alert Processing`);
    this.logger = new Logger('AlertProcessingService', invocationContext);
    this.logger.info(`Connecting to: ${configService.getValue('GRAPHQL_SERVER')}\n\n`);

    const serviceBusClient = new ServiceBusClient(
      configService.getValue('jarvismq_SERVICEBUS'),
    );

    this.alertBatchSender = serviceBusClient.createSender(
      getServiceBusName(configService.getValue('BUS_EMAIL_ALERT_BATCH_QUEUE')),
    );
  }

  private async createImmediateAlert(inputMessage: any, test = false) {
    const message = inputMessage?.body;
    const alert = message.alert;
    const userContext = message.userContext;
    const longForm =
      (userContext.access as AnnualSubscriptionAccess)?.constraints
        ?.longFormEmails ?? false;

    const portalMessage = new HTMLEmailMessage(
      HTMLEmailMessageType.External,
      configService.getValue('PORTAL_FROM_EMAIL'),
      'portal',
    );
    const emailMessage = new HTMLEmailMessage(
      HTMLEmailMessageType.External,
      configService.getValue('PORTAL_FROM_EMAIL'),
      'portal',
    );
    const title = `FORESIGHT - ${alert?.delivery} Alert Match for '${alert?.name}'`;
    emailMessage.setTitle(title);

    let innerContent = '';
    if (message.action) {
      innerContent += portalMessage.actionMarkup(message.action, longForm);
      emailMessage.setIntro(
        emailMessage.actionMarkup(message.action, longForm),
      );
    }
    if (message.article) {
      innerContent += portalMessage.articleMarkup(message.article, longForm);
      emailMessage.setIntro(
        emailMessage.articleMarkup(message.article, longForm),
      );
    }

    // add it to alerts table
    this.logger.info(
      ` --> alert's delivery method: ${alert?.deliveryMethod}, adding to alerts table`,
    );
    await this.jarvisService.client.mutate({
      mutation: CreateOneClientNotificationDocument,
      variables: {
        input: {
          clientNotification: {
            companyIds: [],
            notice: innerContent,
            title: emailMessage.title,
            startDate: moment().toDate(),
            endDate: moment().add(7, 'days').toDate(),
            type: ClientNotificationType.ImmediateAlert,
            companyContactId: userContext.email,
          },
        },
      },
    });

    if (
      alert?.deliveryMethod &&
      alert?.deliveryMethod === AlertDeliveryMethod.PortalAndEmail
    ) {
      this.logger.info(` --> sending email to ${userContext.email}`);
      const emailService = new EmailService();
      await emailService.sendHTMLEmailMessage(userContext.email, emailMessage);
    }
  }

  async processAlert(message: any, test = false) {
    this.logger.info("processing received message from 'published-post'");
    const post = message?.article || message?.action;

    if (!post?.alertNotification || post.alertNotification === false) {
      this.logger.info('post does not have alertNotification, skipping');
      return;
    }

    const portalPreferences = await this.jarvisService.getAlerts();
    this.logger.info(
      `loaded ${portalPreferences.length} portal preferences with alerts`,
    );

    // process the alerts
    for (const portalPreference of portalPreferences) {
      // confirm the user is still valid
      this.logger.info(
        `** processing \x1b[34m${portalPreference.email}\x1b[0m alerts`,
      );
      const userContext = await this.jarvisService.checkUserContext(
        portalPreference.email,
      );
      if (!userContext) {
        this.logger.info(`${portalPreference.email} no longer valid`);
        continue;
      }
      for (const alert of (portalPreference.alerts as AlertCollectionEntry)
        .collection) {
        this.logger.info(
          `-> processing alert: ${alert.name} for ${userContext.email}`,
        );
        let match = true;

        // audience test first (if not internal user)
        try {
          if (
            userContext.type !== 'internal' &&
            userContext.audiences &&
            !userContext.audiences
              .split(';')
              .filter(Boolean)
              .some((item) => post.audience.includes(item))
          ) {
            this.logger.info(`--> '${post.title}' failed match on audience`);
            match = false;
            break;
          }
        } catch (e) {
          this.logger.error(`--> issue validating audience`, e);
          match = false;
          break;
        }

        for (const key of Object.keys(alert).filter((x) =>
          Object.keys(keyMapping).includes(x),
        )) {
          const postKey = keyMapping[key];
          // location
          if (!post[postKey]) {
            this.logger.info(
              `--> '${post.title}' missing ${postKey}, match failed`,
            );
            match = false;
            break;
          }
          if (['locations'].includes(key)) {
            const alertFilterNames = alert[key].map((x) => x.id);
            this.logger.info(
              `--> checking if ${postKey} matches ${alertFilterNames.join(
                ',',
              )}`,
            );
            const alertFilterValues = alert[key].map((x) =>
              x.id.replace(/--+/g, '-'),
            );
            if (
              alertFilterValues.filter((x) => post.location.id.startsWith(x))
                .length === 0
            ) {
              match = false;
              break;
            } else {
              this.logger.info(
                `---> compare of ${key} values ${alertFilterValues} matched`,
              );
              match = true;
            }
          }
          // all else
          if (
            [
              'companies',
              'sectors',
              'events',
              'groups',
              'campaigns',
              'issues',
              'tactics',
            ].includes(key)
          ) {
            const alertFilterNames = alert[key].map((x) => x.name);
            this.logger.info(
              `--> checking if ${postKey} matches ${alertFilterNames.join(
                ',',
              )}`,
            );
            const alertFilterIds = alert[key].map((x) => x.id);
            const postReferenceIds = post[postKey].map((x) => x.id);

            if (
              postReferenceIds.filter((item) => alertFilterIds.includes(item))
                .length === 0
            ) {
              match = false;
              break;
            } else {
              this.logger.info(
                `---> compare of ${key} values ${alertFilterIds} matched`,
              );
              match = true;
            }
          }
        }
        if (match) {
          this.logger.info(`\x1b[32m✔\x1b[0m MATCH for alert: ${alert.name}`);
          if (alert.delivery === 'Immediate') {
            const alertMessage = {
              body: { ...message, userContext, alert },
              contentType: 'application/json',
              messageId: `${portalPreference.email}-${post.id}-${alert.name}`,
              scheduledEnqueueTimeUtc: moment
                .utc(moment().add(5, 'minutes'))
                .toDate(),
            };
            this.logger.info('--> \x1b[34m✉\x1b[0m Sending as Immediate alert');

            await this.createImmediateAlert(alertMessage);
          } else {
            const alertBatchMessage = {
              body: { ...message, email: portalPreference.email, alert },
              contentType: 'application/json',
              sessionId: portalPreference.email,
              messageId: `${portalPreference.email}-${post.id}-${alert.name}`,
            };
            this.logger.info('--> \x1b[34m✉\x1b[0m Adding to Summary alert');
            if (test) {
              this.logger.info('*** WOULD add message to batch queue: ');
            } else {
              await this.alertBatchSender.sendMessages(alertBatchMessage);
            }
          }
        } else {
          this.logger.info(
            `\x1b[31m✖\x1b[0m NO MATCH for alert: ${alert.name}`,
          );
        }
      }
    }
  }
}
