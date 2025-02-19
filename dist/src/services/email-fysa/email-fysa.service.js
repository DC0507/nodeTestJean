"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailFYSAService = void 0;
const email_service_1 = require("../../shared/services/email.service");
const activity_log_service_1 = require("../../shared/services/activity-log.service");
const jarvis_service_1 = require("../../shared/services/jarvis.service");
const jarvis_1 = require("../../shared/graphql/jarvis");
const jarvis_common_1 = require("jarvis-common");
const moment_1 = __importDefault(require("moment"));
const functions_1 = require("@azure/functions");
const inversify_1 = require("inversify");
const logger_1 = require("../../shared/utils/logger");
const config_service_1 = require("../../shared/config/config.service");
let EmailFYSAService = class EmailFYSAService {
    constructor(jarvisService, emailService, activityLogService, invocationContext) {
        this.jarvisService = jarvisService;
        this.emailService = emailService;
        this.activityLogService = activityLogService;
        this.invocationContext = invocationContext;
        console.log(String.raw `
     ____.                  .__        
    |    |____ __________  _|__| ______
    |    \__  \\_  __ \  \/ /  |/  ___/
/\__|    |/ __ \|  | \/\   /|  |\___ \ 
\________(____  /__|    \_/ |__/____  )
              \/                    \/  Email FYSA`);
        this.logger = new logger_1.Logger('EmailFYSAService', invocationContext);
        this.logger.info(`Connecting to: ${config_service_1.configService.getValue('GRAPHQL_SERVER')}\n\n`);
    }
    extractTargettingYou(articles, actions, rawActions, companyId) {
        // Find indices of items where any company in their companies array has matching id
        const actionIndices = actions
            .map((x, index) => x.companies.some((company) => company.id === companyId) ? index : -1)
            .filter((x) => x !== -1)
            .reverse();
        const articleIndices = articles
            .map((x, index) => x.companies.some((company) => company.id === companyId) ? index : -1)
            .filter((x) => x !== -1)
            .reverse();
        const rawActionIndices = rawActions
            .map((x, index) => x.companies.some((company) => company.id === companyId) ? index : -1)
            .filter((x) => x !== -1)
            .reverse();
        // Extract and remove matching items
        const actionsTargetingYou = actionIndices.map((i) => actions.splice(i, 1)[0]);
        const articlesTargetingYou = articleIndices.map((i) => articles.splice(i, 1)[0]);
        const rawActionsTargetingYou = rawActionIndices.map((i) => rawActions.splice(i, 1)[0]);
        return {
            articlesTargetingYou,
            actionsTargetingYou,
            rawActionsTargetingYou,
        };
    }
    extractInSector(articles, actions, sectorIds) {
        // Find indices of items where any sector in their sectors array has an id that matches any sectorId
        const actionIndices = actions
            .map((x, index) => x.sectors.some((sector) => sectorIds.includes(sector.id)) ? index : -1)
            .filter((x) => x !== -1)
            .reverse();
        const articleIndices = articles
            .map((x, index) => x.sectors.some((sector) => sectorIds.includes(sector.id)) ? index : -1)
            .filter((x) => x !== -1)
            .reverse();
        // Extract and remove matching items
        const actionsInSector = actionIndices.map((i) => actions.splice(i, 1)[0]);
        const articlesInSector = articleIndices.map((i) => articles.splice(i, 1)[0]);
        return {
            actionsInSector,
            articlesInSector,
        };
    }
    async processFYSAInput(fysa, invokerEmail = '', test = false, date = null) {
        const now = date ? (0, moment_1.default)(date).utc() : (0, moment_1.default)().utc();
        const today = now.startOf('day');
        const commonMessage = fysa.message ?? null;
        const submissions = fysa.entries ?? [];
        for (const entry of submissions) {
            try {
                let actions = [];
                let articles = [];
                let rawActions = [];
                // grab the subscriber
                const subscriber = await this.jarvisService.getSubscription(entry.subscriptionId);
                if (!subscriber) {
                    throw new Error('Subscriber does not exist');
                }
                // need to test this since we grabbed the subscriber by id
                if (!subscriber.isActive) {
                    this.logger.info(`!! skipping ${subscriber.client.name}, subscription is not active`);
                    continue;
                }
                if (!subscriber.access.emails.fysa) {
                    this.logger.info(`!! skipping ${subscriber.client.name}, subscription does not include fysa`);
                    continue;
                }
                this.logger.info(`processing FYSA for ${subscriber.client.name}`);
                const longForm = subscriber.access.constraints
                    .longFormEmails ?? false;
                if (longForm) {
                    this.logger.info(` -> long form emails are enabled for ${subscriber.client.name}`);
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
                const audiences = (0, jarvis_common_1.audiencesToArray)(subscriber.audiences || '');
                // get the articles
                if (entry.articleIds && entry.articleIds.length > 0) {
                    articles = await this.jarvisService.getArticlesByIds(entry.articleIds);
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
                rawActions = await this.jarvisService.getRawActionsForClient(subscriber.client.id, today.toDate(), audiences);
                actions.concat(rawActions);
                // generate the email content
                const emailMessage = new jarvis_common_1.HTMLEmailMessage(jarvis_common_1.HTMLEmailMessageType.External);
                emailMessage.title = `FYSA - ${subscriber.client.name} update for ${(0, moment_1.default)(today).format(jarvis_common_1.DATE_LONG_FORMAT)}`;
                emailMessage.setIntro(`Below is a curated collection of FORESIGHT content added today that is directly 
          related to your organization or included for your situational awareness.
          ${entry.message ? '<hr/>' + entry.message : ''} 
          ${commonMessage ? '<hr/>' + commonMessage : ''}<br/>`);
                // get notifications, including any specific for the client, and set on email form
                const notifications = await this.jarvisService.getServiceAndPlatformNotifications(subscriber.client.id);
                notifications.forEach((x) => emailMessage.addNotification(x.notice));
                // targeting you
                const { actionsTargetingYou, articlesTargetingYou, rawActionsTargetingYou, } = this.extractTargettingYou(articles, actions, rawActions, subscriber.client.id);
                const targettingCount = actionsTargetingYou.length +
                    articlesTargetingYou.length +
                    rawActionsTargetingYou.length;
                if (targettingCount > 0) {
                    const sectionTitle = `${targettingCount} items targeting ${subscriber.client.name}`;
                    emailMessage.addSummaryLineItem(sectionTitle, 'targeting');
                    emailMessage.createSection('targeting', sectionTitle, 'targeting');
                    articlesTargetingYou.forEach((x) => emailMessage.addSectionContent('targeting', emailMessage.articleMarkup(x, longForm)));
                    actionsTargetingYou.forEach((x) => emailMessage.addSectionContent('targeting', emailMessage.actionMarkup(x, longForm)));
                }
                // your sector
                const { actionsInSector, articlesInSector } = this.extractInSector(articles, actions, subscriber.client.sectors.map((x) => x.id));
                const InSectorCount = actionsInSector.length + articlesInSector.length;
                if (InSectorCount > 0) {
                    const sectionTitle = `${InSectorCount} items in your sector${subscriber.client.sectors.length > 1 ? 's' : ''}: ${subscriber.client.sectors.map((x) => x.name).join(', ')}`;
                    emailMessage.addSummaryLineItem(sectionTitle, 'sectors');
                    emailMessage.createSection('sectors', sectionTitle, 'sectors');
                    articlesInSector.forEach((x) => emailMessage.addSectionContent('sectors', emailMessage.articleMarkup(x, longForm)));
                    actionsInSector.forEach((x) => emailMessage.addSectionContent('sectors', emailMessage.actionMarkup(x, longForm)));
                }
                // we think you might be interested in
                const ofInterest = actions.length + articles.length;
                if (ofInterest > 0) {
                    const sectionTitle = `${ofInterest} items of interest`;
                    emailMessage.addSummaryLineItem(sectionTitle, 'interest');
                    emailMessage.createSection('interest', sectionTitle, 'interest');
                    articles.forEach((x) => emailMessage.addSectionContent('interest', emailMessage.articleMarkup(x, longForm)));
                    actions.forEach((x) => emailMessage.addSectionContent('interest', emailMessage.actionMarkup(x, longForm)));
                }
                // get emails and skip if no one to send to
                const { sendToEmails, optedOut } = await this.jarvisService.filterSubscriptionEmailsByPreferences(subscriber, jarvis_common_1.EmailDistributionType.fysa);
                if (sendToEmails.length === 0) {
                    this.logger.info(`${subscriber.client.name} has no users to send to`);
                    continue;
                }
                // send the email
                if (test) {
                    this.logger.info(`  --> sending (TEST) email to : ${this.emailService.defaultTo}`);
                    await this.emailService.sendHTMLEmailMessage(this.emailService.defaultTo, emailMessage, [], invokerEmail);
                }
                else {
                    this.logger.info(`  --> sending email to : ${sendToEmails.join(', ')}`);
                    await this.emailService.sendHTMLEmailMessage(sendToEmails, emailMessage, [], invokerEmail);
                    // track the sending of this email
                    await this.activityLogService.create(jarvis_1.ActivityLogType.Fysa, JSON.stringify(entry), null, subscriber.client.id, null);
                }
            }
            catch (e) {
                this.logger.error(`Failed to send fysa for ${JSON.stringify(entry)}`, e);
            }
        }
        this.logger.info('FYSA complete');
        return this.logger.getLogTraceArray();
    }
};
exports.EmailFYSAService = EmailFYSAService;
exports.EmailFYSAService = EmailFYSAService = __decorate([
    (0, inversify_1.injectable)(),
    __param(3, (0, inversify_1.inject)(functions_1.InvocationContext)),
    __param(3, (0, inversify_1.optional)()),
    __metadata("design:paramtypes", [jarvis_service_1.JarvisService,
        email_service_1.EmailService,
        activity_log_service_1.ActivityLogService,
        functions_1.InvocationContext])
], EmailFYSAService);
//# sourceMappingURL=email-fysa.service.js.map