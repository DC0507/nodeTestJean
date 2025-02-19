import { EmailService } from '../../shared/services/email.service';
import { ActivityLogService } from '../../shared/services/activity-log.service';
import { JarvisService } from '../../shared/services/jarvis.service';
import {
  Article,
  ActivityLogType,
  Action,
  AnnualSubscriptionAccess,
} from '../../shared/graphql/jarvis';
import { IFYSAInput } from './fysa-interfaces';
import {
  audiencesToArray,
  DATE_LONG_FORMAT,
  EmailDistributionType,
  HTMLEmailMessage,
  HTMLEmailMessageType,
} from 'jarvis-common';
import moment from 'moment';
import { InvocationContext } from '@azure/functions';
import { inject, injectable, optional } from 'inversify';
import { Logger } from '../../shared/utils/logger';
import { configService } from '../../shared/config/config.service';

@injectable()
export class EmailFYSAService {
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
              \/                    \/  Email FYSA`);
    this.logger = new Logger('EmailFYSAService', invocationContext);
    this.logger.info(
      `Connecting to: ${configService.getValue('GRAPHQL_SERVER')}\n\n`,
    );
  }

  extractTargettingYou(
    articles: Article[],
    actions: Action[],
    rawActions: Action[],
    companyId: string,
  ) {
    // Find indices of items where any company in their companies array has matching id
    const actionIndices = actions
      .map((x, index) =>
        x.companies.some((company) => company.id === companyId) ? index : -1,
      )
      .filter((x) => x !== -1)
      .reverse();

    const articleIndices = articles
      .map((x, index) =>
        x.companies.some((company) => company.id === companyId) ? index : -1,
      )
      .filter((x) => x !== -1)
      .reverse();

    const rawActionIndices = rawActions
      .map((x, index) =>
        x.companies.some((company) => company.id === companyId) ? index : -1,
      )
      .filter((x) => x !== -1)
      .reverse();

    // Extract and remove matching items
    const actionsTargetingYou = actionIndices.map(
      (i) => actions.splice(i, 1)[0],
    );
    const articlesTargetingYou = articleIndices.map(
      (i) => articles.splice(i, 1)[0],
    );
    const rawActionsTargetingYou = rawActionIndices.map(
      (i) => rawActions.splice(i, 1)[0],
    );

    return {
      articlesTargetingYou,
      actionsTargetingYou,
      rawActionsTargetingYou,
    };
  }

  extractInSector(articles: Article[], actions: Action[], sectorIds: string[]) {
    // Find indices of items where any sector in their sectors array has an id that matches any sectorId
    const actionIndices = actions
      .map((x, index) =>
        x.sectors.some((sector) => sectorIds.includes(sector.id)) ? index : -1,
      )
      .filter((x) => x !== -1)
      .reverse();

    const articleIndices = articles
      .map((x, index) =>
        x.sectors.some((sector) => sectorIds.includes(sector.id)) ? index : -1,
      )
      .filter((x) => x !== -1)
      .reverse();

    // Extract and remove matching items
    const actionsInSector = actionIndices.map((i) => actions.splice(i, 1)[0]);
    const articlesInSector = articleIndices.map(
      (i) => articles.splice(i, 1)[0],
    );

    return {
      actionsInSector,
      articlesInSector,
    };
  }

  async processFYSAInput(
    fysa: IFYSAInput,
    invokerEmail = '',
    test = false,
    date = null,
  ): Promise<string[]> {
    const now = date ? moment(date).utc() : moment().utc();
    const today = now.startOf('day');
    const commonMessage = fysa.message ?? null;
    const submissions = fysa.entries ?? [];

    for (const entry of submissions) {
      try {
        let actions: Action[] = [];
        let articles: Article[] = [];
        let rawActions: Action[] = [];

        // grab the subscriber
        const subscriber = await this.jarvisService.getSubscription(
          entry.subscriptionId,
        );
        if (!subscriber) {
          throw new Error('Subscriber does not exist');
        }
        // need to test this since we grabbed the subscriber by id
        if (!subscriber.isActive) {
          this.logger.info(
            `!! skipping ${subscriber.client.name}, subscription is not active`,
          );
          continue;
        }
        if (!(subscriber.access as AnnualSubscriptionAccess).emails.fysa) {
          this.logger.info(
            `!! skipping ${subscriber.client.name}, subscription does not include fysa`,
          );
          continue;
        }
        this.logger.info(`processing FYSA for ${subscriber.client.name}`);

        const longForm =
          (subscriber.access as AnnualSubscriptionAccess).constraints
            .longFormEmails ?? false;
        if (longForm) {
          this.logger.info(
            ` -> long form emails are enabled for ${subscriber.client.name}`,
          );
        }

        // const lastRun = await this.activityLogService.getLast(
        //   ActivityLogType.Fysa,
        //   entry.subscriptionId,
        // );
        // if (!test) {
        //   if (moment.utc(lastRun).diff(today, 'hours') < 8) {
        //     this.logger.info(
        //       `already emailed ${
        //         subscriber.client.name
        //       } FYSA within last 8 hours (sent: ${moment
        //         .utc(lastRun)
        //         .toISOString()})`,
        //     );
        //     continue;
        //   }
        // }

        const audiences = audiencesToArray(subscriber.audiences || '');

        // get the articles
        if (entry.articleIds && entry.articleIds.length > 0) {
          articles = await this.jarvisService.getArticlesByIds(
            entry.articleIds,
          );
        }

        // if we are sending articles via FYSA that do not have ofInterestTo set, we will set it here
        // pulled out 31 Jul.. decided FYSA too broad to set ofInterestTo
        // for (const article of articles) {
        //   if (
        //     !article.ofInterestTo.some((x) => x.id === subscription.client.id)
        //   ) {
        //     logArray.push(
        //       `adding ${subscription.client.name} to ofInterestTo for article ${article.id}`,
        //     );
        //     await this.addSubscriberToArticleOfInterestTo(
        //       article.id,
        //       subscription.client.id,
        //     );
        //   }
        // }

        // get the actions
        if (entry.actionIds && entry.actionIds.length > 0) {
          actions = await this.jarvisService.getActionsByIds(entry.actionIds);
        }

        // if we are sending actions via FYSA that do not have ofInterestTo set, we will set it here
        // pulled out 31 Jul.. decided FYSA too broad to set ofInterestTo
        // for (const action of actions) {
        //   if (
        //     !action.ofInterestTo.some((x) => x.id === subscription.client.id)
        //   ) {
        //     logArray.push(
        //       `adding ${subscription.client.name} to ofInterestTo for action ${action.id}`,
        //     );
        //     await this.addSubscriberToActionOfInterestTo(
        //       action.id,
        //       subscription.client.id,
        //     );
        //   }
        // }

        // get suitable raw actions for the client
        rawActions = await this.jarvisService.getRawActionsForClient(
          subscriber.client.id,
          today.toDate(),
          audiences,
        );
        actions.concat(rawActions);

        // generate the email content
        const emailMessage = new HTMLEmailMessage(
          HTMLEmailMessageType.External,
        );
        emailMessage.title = `FYSA - ${
          subscriber.client.name
        } update for ${moment(today).format(DATE_LONG_FORMAT)}`;
        emailMessage.setIntro(
          `Below is a curated collection of FORESIGHT content added today that is directly 
          related to your organization or included for your situational awareness.
          ${entry.message ? '<hr/>' + entry.message : ''} 
          ${commonMessage ? '<hr/>' + commonMessage : ''}<br/>`,
        );

        // get notifications, including any specific for the client, and set on email form
        const notifications =
          await this.jarvisService.getServiceAndPlatformNotifications(
            subscriber.client.id,
          );
        notifications.forEach((x) => emailMessage.addNotification(x.notice));

        // targeting you
        const {
          actionsTargetingYou,
          articlesTargetingYou,
          rawActionsTargetingYou,
        } = this.extractTargettingYou(
          articles,
          actions,
          rawActions,
          subscriber.client.id,
        );

        const targettingCount =
          actionsTargetingYou.length +
          articlesTargetingYou.length +
          rawActionsTargetingYou.length;
        if (targettingCount > 0) {
          const sectionTitle = `${targettingCount} items targeting ${subscriber.client.name}`;
          emailMessage.addSummaryLineItem(sectionTitle, 'targeting');
          emailMessage.createSection('targeting', sectionTitle, 'targeting');
          articlesTargetingYou.forEach((x) =>
            emailMessage.addSectionContent(
              'targeting',
              emailMessage.articleMarkup(x, longForm),
            ),
          );
          actionsTargetingYou.forEach((x) =>
            emailMessage.addSectionContent(
              'targeting',
              emailMessage.actionMarkup(x, longForm),
            ),
          );
        }

        // your sector
        const { actionsInSector, articlesInSector } = this.extractInSector(
          articles,
          actions,
          subscriber.client.sectors.map((x) => x.id),
        );

        const InSectorCount = actionsInSector.length + articlesInSector.length;
        if (InSectorCount > 0) {
          const sectionTitle = `${InSectorCount} items in your sector${
            subscriber.client.sectors.length > 1 ? 's' : ''
          }: ${subscriber.client.sectors.map((x) => x.name).join(', ')}`;
          emailMessage.addSummaryLineItem(sectionTitle, 'sectors');
          emailMessage.createSection('sectors', sectionTitle, 'sectors');
          articlesInSector.forEach((x) =>
            emailMessage.addSectionContent(
              'sectors',
              emailMessage.articleMarkup(x, longForm),
            ),
          );
          actionsInSector.forEach((x) =>
            emailMessage.addSectionContent(
              'sectors',
              emailMessage.actionMarkup(x, longForm),
            ),
          );
        }

        // we think you might be interested in
        const ofInterest = actions.length + articles.length;
        if (ofInterest > 0) {
          const sectionTitle = `${ofInterest} items of interest`;
          emailMessage.addSummaryLineItem(sectionTitle, 'interest');
          emailMessage.createSection('interest', sectionTitle, 'interest');
          articles.forEach((x) =>
            emailMessage.addSectionContent(
              'interest',
              emailMessage.articleMarkup(x, longForm),
            ),
          );
          actions.forEach((x) =>
            emailMessage.addSectionContent(
              'interest',
              emailMessage.actionMarkup(x, longForm),
            ),
          );
        }

        // get emails and skip if no one to send to
        const { sendToEmails, optedOut } =
          await this.jarvisService.filterSubscriptionEmailsByPreferences(
            subscriber,
            EmailDistributionType.fysa,
          );
        if (sendToEmails.length === 0) {
          this.logger.info(`${subscriber.client.name} has no users to send to`);
          continue;
        }

        // send the email
        if (test) {
          this.logger.info(
            `  --> sending (TEST) email to : ${this.emailService.defaultTo}`,
          );
          await this.emailService.sendHTMLEmailMessage(
            this.emailService.defaultTo,
            emailMessage,
            [],
            invokerEmail,
          );
        } else {
          this.logger.info(
            `  --> sending email to : ${sendToEmails.join(', ')}`,
          );
          await this.emailService.sendHTMLEmailMessage(
            sendToEmails,
            emailMessage,
            [],
            invokerEmail,
          );
          // track the sending of this email
          await this.activityLogService.create(
            ActivityLogType.Fysa,
            JSON.stringify(entry),
            null,
            subscriber.client.id,
            null,
          );
        }
      } catch (e) {
        this.logger.error(
          `Failed to send fysa for ${JSON.stringify(entry)}`,
          e,
        );
      }
    }
    this.logger.info('FYSA complete');
    return this.logger.getLogTraceArray();
  }
}
