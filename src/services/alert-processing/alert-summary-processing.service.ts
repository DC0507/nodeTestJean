import { JarvisService } from '../../shared/services/jarvis.service';
import { InvocationContext } from '@azure/functions';
import {
  AlertCollectionEntry,
  AlertDeliveryMethod,
  AlertEntry,
  AnnualSubscriptionAccess,
  ClientNotificationType,
  CreateOneClientNotificationDocument,
} from '../../shared/graphql/jarvis';
import { inject, injectable, optional } from 'inversify';
import { Logger } from '../../shared/utils/logger';
import moment from 'moment';
import { configService } from '../../shared/config/config.service';
import {
  DATE_LONG_FORMAT,
  getServiceBusName,
  HTMLEmailMessage,
  HTMLEmailMessageType,
} from 'jarvis-common';
import { EmailService } from '../../shared/services/email.service';

@injectable()
export class AlertSummaryProcessingService {
  private readonly logger: Logger;

  constructor(
    private readonly jarvisService: JarvisService,
    private readonly emailService: EmailService,
    @inject(InvocationContext)
    @optional()
    private readonly invocationContext?: InvocationContext,
  ) {
//     console.log(String.raw`
//      ____.                  .__        
//     |    |____ __________  _|__| ______
//     |    \__  \\_  __ \  \/ /  |/  ___/
// /\__|    |/ __ \|  | \/\   /|  |\___ \ 
// \________(____  /__|    \_/ |__/____  )
//               \/                    \/  Alert Summary Processing`);
    this.logger = new Logger(
      'AlertSummaryProcessingService',
      invocationContext,
    );
    this.logger.info(
      `Connecting to: ${configService.getValue('GRAPHQL_SERVER')}\n\n`,
    );
  }

  async processSummaryAlerts(email, messages) {
    const now = moment().utc();
    const today = now.startOf('day');

    const userContext = await this.jarvisService.checkUserContext(email);
    if (!userContext) {
      this.logger.info(`${email} no longer valid`);
      return;
    }
    const longForm =
      (userContext.access as AnnualSubscriptionAccess)?.constraints
        ?.longFormEmails ?? false;

    // process email summary alerts
    const emailAlertMessages = messages.filter(
      (m) =>
        (m.alert as AlertEntry)?.deliveryMethod ===
        AlertDeliveryMethod.PortalAndEmail,
    );

    this.logger.info(
      ` *** identified ${emailAlertMessages.length} messages out of ${messages.length} messages with email distribution`,
    );

    if (emailAlertMessages.length > 0) {
      this.logger.info(` *** prepping email for ${email} for email alerts`);
      // get the alerts names, sort them.
      const alerts = Array.from<string>(
        new Set(emailAlertMessages.map((message) => message.alert.name)),
      ).sort((a, b) => a.localeCompare(b));

      const emailMessage = new HTMLEmailMessage(
        HTMLEmailMessageType.External,
        configService.getValue('PORTAL_FROM_EMAIL'),
        'email',
      );
      const title = `FORESIGHT - Summary Alert Matches for ${today.format(
        DATE_LONG_FORMAT,
      )}`;
      emailMessage.setTitle(title);
      emailMessage.setIntro(`Your summary alerts resulted in the following matches:`);

      // process each alert
      for (const [index, alert] of alerts.entries()) {
        const articles = messages.filter(
          (message) => message.alert.name === alert && message.article,
        );
        const actions = messages.filter(
          (message) => message.alert.name === alert && message.action,
        );

        const matchParts = [];
        if (articles.length > 0) {
          matchParts.push(`${articles.length} articles`);
        }
        if (actions.length > 0) {
          matchParts.push(`${actions.length} actions`);
        }
        const alertTitle = `${index + 1}) '${alert}' matches (${matchParts.join(
          ', ',
        )})`;
        emailMessage.addSummaryLineItem(alertTitle, alert);
        emailMessage.createSection(alert, alertTitle, alert);

        // add articles
        articles.forEach((message) => {
          emailMessage.addSectionContent(
            alert,
            emailMessage.articleMarkup(message.article, longForm),
          );
        });
        // add actions
        actions.forEach((message) => {
          emailMessage.addSectionContent(
            alert,
            emailMessage.actionMarkup(message.action, longForm),
          );
        });
      }

      this.logger.info(` *** sending email to ${email}`);
      const emailService = new EmailService();
      await emailService.sendHTMLEmailMessage(email, emailMessage);
    }

    // process all summary alerts
    const alerts = Array.from<string>(
      new Set(messages.map((message) => message.alert.name)),
    ).sort((a, b) => a.localeCompare(b));

    const portalMessage = new HTMLEmailMessage(
      HTMLEmailMessageType.External,
      configService.getValue('PORTAL_FROM_EMAIL'),
      'portal',
    );
    const title = `FORESIGHT - Summary Alert Matches for ${today.format(
      DATE_LONG_FORMAT,
    )}`;
    portalMessage.setTitle(title);

    for (const [index, alert] of alerts.entries()) {
      const articles = messages.filter(
        (message) => message.alert.name === alert && message.article,
      );
      const actions = messages.filter(
        (message) => message.alert.name === alert && message.action,
      );

      const matchParts = [];
      if (articles.length > 0) {
        matchParts.push(`${articles.length} articles`);
      }
      if (actions.length > 0) {
        matchParts.push(`${actions.length} actions`);
      }
      const alertTitle = `${index + 1}) '${alert}' matches (${matchParts.join(
        ', ',
      )})`;
      portalMessage.addSummaryLineItem(alertTitle, alert);
      portalMessage.createSection(alert, alertTitle, alert);

      // add articles
      articles.forEach((message) => {
        portalMessage.addSectionContent(
          alert,
          portalMessage.articleMarkup(message.article, longForm),
        );
      });
      // add actions
      actions.forEach((message) => {
        portalMessage.addSectionContent(
          alert,
          portalMessage.actionMarkup(message.action, longForm),
        );
      });
    }

    // add it to notifications table
    this.logger.info(` *** adding to alerts table for ${email}`);
    await this.jarvisService.client.mutate({
      mutation: CreateOneClientNotificationDocument,
      variables: {
        input: {
          clientNotification: {
            notice: portalMessage.renderSections(),
            title: portalMessage.title,
            startDate: moment().toDate(),
            endDate: moment().add(7, 'days').toDate(),
            type: ClientNotificationType.SummaryAlert,
            companyContactId: email,
          },
        },
      },
    });
  }
}
