import moment from 'moment';
import { DATE_LONG_FORMAT } from 'jarvis-common';
import { HTMLEmailMessage, HTMLEmailMessageType } from 'jarvis-common';
import { EmailService } from '../../shared/services/email.service';
import { JarvisService } from '../../shared/services/jarvis.service';

import dotenv from 'dotenv';
import { inject, injectable, optional } from 'inversify';
import { InvocationContext } from '@azure/functions';
import { Logger } from '../../shared/utils/logger';
import { configService } from '../../shared/config/config.service';
dotenv.config();

// we create new notifications on these days remaining
const notificationDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 30, 60, 90];

// determine how long for which the notification should be valid
function getDaysUntilNextNotification(
  daysLeft: number,
  notificationDays: number[],
): number {
  // Sort array in descending order
  const sortedDays = [...notificationDays].sort((a, b) => b - a);

  // Find first number that's smaller than daysLeft
  const nextNotificationDay = sortedDays.find((days) => days < daysLeft);

  // If no smaller number found, return daysLeft
  if (nextNotificationDay === undefined) {
    return daysLeft;
  }

  // Return difference
  return daysLeft - nextNotificationDay;
}

@injectable()
export class EmailSubscriptionExpiryService {
  private readonly logger: Logger;

  constructor(
    private readonly jarvisService: JarvisService,
    private readonly emailService: EmailService,
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
              \/                    \/  Check Annual Subscriptiopns`);
    this.logger = new Logger(
      'EmailSubscriptionExpiryService',
      invocationContext,
    );
    this.logger.info(
      `connecting to: ${configService.getValue('GRAPHQL_SERVER')}`,
    );
  }

  async checkSubscriptions(test = false) {
    const now = new Date();
    const today = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      6,
      0,
      0,
    );
    const dayOfWeek = now.getDay();
    if ([1, 2, 3, 4, 5].includes(dayOfWeek)) {
      // 0 is Sunday, 6 is Saturday
      // checking 90 days forward
      const nextEpoch = new Date(today.getTime() + 90 * 60 * 60 * 24 * 1000);
      this.logger.info(
        `checking annual subscriptions set to expire before ${nextEpoch}`,
      );

      // get any that are expiring soon
      const expiringAnnualSubscriptions = (
        await this.jarvisService.getAnnualSubscriptionsExpiringBefore(nextEpoch)
      ).sort((a, b) => {
        return new Date(a.endDate).getTime() - new Date(b.endDate).getTime();
      });

      // get existing renewal subscriptions
      const renewedAnnualSubscriptions = (
        await this.jarvisService.getFutureAnnualSubscriptions()
      ).sort((a, b) => {
        return new Date(a.endDate).getTime() - new Date(b.endDate).getTime();
      });

      const needsAttention = expiringAnnualSubscriptions.filter(
        (x) =>
          renewedAnnualSubscriptions.filter((y) => y.client.id === x.client.id)
            .length === 0,
      );

      // for (const subscrtiption of needsAttention) {
      //   if (subscrtiption.type !== "Trial") {
      //     const daysLeft = moment(subscrtiption.endDate).diff(moment(), "days");
      //     const notification = `Please note your '${
      //       subscrtiption.type
      //     }' subscription expires on ${moment(subscrtiption.endDate).format(
      //       DATE_LONG_FORMAT
      //     )}.  Please contact <a href="mailto:engage@foresightreports.com">engage@foresightreports.com</a> to finalize a renewal and avoid disruption to your service.`;

      //     send notification if within 14 days or 30, 60, 90 days
      //     if (notificationDays.includes(daysLeft)) {
      //       const daysUntilNextNotification = getDaysUntilNextNotification(
      //         daysLeft,
      //         notificationDays
      //       );
      //       const until = moment
      //         .utc(today)
      //         .add(daysUntilNextNotification, "days")
      //         .toISOString();

      //       await this.jarvis.createClientNotification({
      //         companyIds: [subscrtiption.client.id],
      //         notice: notification,
      //         startDate: today.toISOString(),
      //         type: ClientNotificationType.Service,
      //         title: `Your ${
      //           subscrtiption.type
      //         } Subscription is Expiring in ${daysLeft} day${
      //           daysLeft === 1 ? "" : "s"
      //         }`,
      //         endDate: until,
      //       });
      //     }
      //   }
      // }

      const emailMessage = new HTMLEmailMessage(HTMLEmailMessageType.Internal);
      emailMessage.setTitle(
        `FORESIGHT - Expiring Subscriptions before ${moment(nextEpoch).format(
          DATE_LONG_FORMAT,
        )}`,
      );
      emailMessage.setIntro(
        'The following subscriptions will expire soon and <b>DO NOT</b> have a renewed subscription:',
      );
      needsAttention.map((as) =>
        emailMessage.addSummaryLineItem(
          `<b>${as.client.name} (${as.type})</b> expires ${moment(
            as.endDate,
          ).format('MMM DD YYYY')} ${as.isActive ? '' : '<b>(Disabled)</b>'}`,
        ),
      );

      const employees = await this.jarvisService.getEmployeeUsers();
      const emails = employees
        .filter((x) => x?.systemEmails?.includes('expiring-subscriptions'))
        .map((x) => x.email);
      if (emails.length > 0) {
        this.logger.info(`sending email to [${emails.join(',')}]`);
        await this.emailService.sendHTMLEmailMessage(emails, emailMessage);
      }
    }
  }
}
