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
exports.EmailDailyUpdateService = void 0;
const moment_1 = __importDefault(require("moment"));
const jarvis_common_1 = require("jarvis-common");
const jarvis_service_1 = require("../../shared/services/jarvis.service");
const email_service_1 = require("../../shared/services/email.service");
const activity_log_service_1 = require("../../shared/services/activity-log.service");
const jarvis_1 = require("../../shared/graphql/jarvis");
const chart_helper_1 = require("../../shared/utils/chart-helper");
const dotenv_1 = __importDefault(require("dotenv"));
const functions_1 = require("@azure/functions");
const logger_1 = require("../../shared/utils/logger");
const inversify_1 = require("inversify");
const config_service_1 = require("../../shared/config/config.service");
dotenv_1.default.config();
let EmailDailyUpdateService = class EmailDailyUpdateService {
    constructor(jarvisService, emailService, activityLogService, invocationContext) {
        this.jarvisService = jarvisService;
        this.emailService = emailService;
        this.activityLogService = activityLogService;
        this.invocationContext = invocationContext;
        this.emailContentCache = new jarvis_common_1.CacheMapByArrayKey();
        console.log(String.raw `
     ____.                  .__        
    |    |____ __________  _|__| ______
    |    \__  \\_  __ \  \/ /  |/  ___/
/\__|    |/ __ \|  | \/\   /|  |\___ \ 
\________(____  /__|    \_/ |__/____  )
              \/                    \/ Email Daily Update`);
        this.logger = new logger_1.Logger('EmailDailyUpdateService', invocationContext);
        this.logger.info(`Connecting to: ${config_service_1.configService.getValue('GRAPHQL_SERVER')}\n\n`);
    }
    async createEmailMessage(audiences, today, previousEpoch, nextEpoch, longForm = false) {
        if (!this.emailContentCache.get([...audiences, longForm.toString()])) {
            this.logger.info(` --> generating email content for '${audiences}, long Form: ${longForm}'`);
            // load the content
            const newArticles = await this.jarvisService.getArticlesByCreatedDateWindow(previousEpoch.toDate(), today.toDate(), []);
            const newProtests = await this.jarvisService.getActionsByDateWindow(previousEpoch.toDate(), today.toDate(), true, 'lastModifiedDate', audiences);
            const highlightProtests = newProtests
                .filter((x) => x.type !== jarvis_1.PostType.RawAction && !x.title.startsWith('-'))
                .sort((x, y) => new Date(x.date).getTime() - new Date(y.date).getTime());
            const newActivities = await this.jarvisService.getActionsByDateWindow(previousEpoch.toDate(), today.toDate(), false, 'lastModifiedDate', audiences);
            const highlightActions = newActivities
                .filter((x) => x.type !== jarvis_1.PostType.RawAction && !x.title.startsWith('-'))
                .sort((x, y) => new Date(x.date).getTime() - new Date(y.date).getTime());
            const upcomingProtests = await this.jarvisService.getActionsByDateWindow(today.toDate(), nextEpoch.toDate(), true, 'actionDate', audiences);
            const title = `FORESIGHT - Your Daily Update for ${today.format(jarvis_common_1.DATE_LONG_FORMAT)}`;
            //create the email
            const emailMessage = new jarvis_common_1.HTMLEmailMessage();
            emailMessage.setTitle(title);
            // add articles
            const articleTitle = `${newArticles.length} Articles added since ${previousEpoch.format(jarvis_common_1.DATE_FORMAT_NO_YEAR)}`;
            emailMessage.addSummaryLineItem(articleTitle, 'articles');
            emailMessage.createSection('Articles', articleTitle, 'articles');
            newArticles.forEach((x) => emailMessage.addSectionContent('Articles', emailMessage.articleMarkup(x, longForm)));
            // add highlighted protests
            const protestTitle = `${highlightProtests.length} Highlighted protests added since ${previousEpoch.format(jarvis_common_1.DATE_FORMAT_NO_YEAR)}`;
            emailMessage.addSummaryLineItem(protestTitle, 'highlightProtests');
            emailMessage.createSection('Protests', protestTitle, 'highlightProtests');
            highlightProtests.forEach((x) => emailMessage.addSectionContent('Protests', emailMessage.actionMarkup(x, longForm)));
            // add highlighted actions
            const actionTitle = `${highlightActions.length} Highlighted activities added since ${previousEpoch.format(jarvis_common_1.DATE_FORMAT_NO_YEAR)}`;
            emailMessage.addSummaryLineItem(actionTitle, 'highlightActions');
            emailMessage.createSection('Actions', actionTitle, 'highlightActions');
            highlightActions.forEach((x) => emailMessage.addSectionContent('Actions', emailMessage.actionMarkup(x, longForm)));
            const upcomingProtestsTitle = `${upcomingProtests.length} Protests to occur between ${today.format(jarvis_common_1.DATE_FORMAT_NO_YEAR)} and ${nextEpoch.format(jarvis_common_1.DATE_FORMAT_NO_YEAR)}`;
            emailMessage.addSummaryLineItem(upcomingProtestsTitle, 'upcomingProtests');
            emailMessage.createSection('Charts1', upcomingProtestsTitle, 'upcomingProtests');
            const issues = (0, chart_helper_1.getTopIssues)(upcomingProtests).slice(0, 10); // Use slice instead of splice to not modify array
            const config = (0, chart_helper_1.createBarChartConfiguration)();
            config.labels = issues.map((x) => x.name);
            config.dataValues = issues.map((x) => x.count);
            const issueChartBuffer = await (0, chart_helper_1.generateBarChartBuffer)(config);
            emailMessage.addSectionContent('Charts1', `<p>Top 10 Issues</p>
       <p align="center">${(0, jarvis_common_1.createHtmlImageTagFromBuffer)(issueChartBuffer)}</p>`);
            const cities = (0, chart_helper_1.getTopCities)(upcomingProtests).slice(0, 10);
            const cityConfig = (0, chart_helper_1.createBarChartConfiguration)();
            cityConfig.labels = cities.map((x) => x.city);
            cityConfig.dataValues = cities.map((x) => x.count);
            const cityChartBuffer = await (0, chart_helper_1.generateBarChartBuffer)(cityConfig);
            emailMessage.addSectionContent('Charts1', `<p>Top 10 Cities</p>
       <p align="center">${(0, jarvis_common_1.createHtmlImageTagFromBuffer)(cityChartBuffer)}</p>`);
            this.emailContentCache.set([...audiences, longForm.toString()], emailMessage);
        }
        this.logger.info(`returning email content for ${audiences.join(',')}, longForm: ${longForm}`);
        return this.emailContentCache.get([...audiences, longForm.toString()]);
    }
    async sendDailyUpdates(test = false, date = null) {
        const now = date ? (0, moment_1.default)(date).utc() : (0, moment_1.default)().utc();
        const today = now.startOf('day');
        // don't run on Sun or Sat
        if (![0, 6].includes(now.day())) {
            try {
                this.logger.info('emailing customers the daily update');
                let daysBack = -1;
                if (today.day() === 1) {
                    // monday, so get all articles since last Friday at 6am
                    this.logger.info('its Monday, pulling for last 3 days');
                    daysBack = -3;
                }
                let daysForward = 3;
                if (today.day() === 5) {
                    // friday, so get activities/protests through the weekend
                    this.logger.info('its Friday, looking ahead for next 3 days');
                    daysForward = 3;
                }
                const previousEpoch = (0, moment_1.default)(now)
                    .utc()
                    .add(daysBack, 'days')
                    .startOf('day');
                const nextEpoch = (0, moment_1.default)(now)
                    .utc()
                    .add(daysForward, 'days')
                    .startOf('day')
                    .add(-1, 'second');
                // get all company_contacts who have sub is not null
                let subscriptions = await this.jarvisService.getSubscriptions();
                // filter to only those with dailyUpdate and sort the subscribers
                subscriptions = subscriptions
                    .filter((x) => x.access.emails.dailyUpdate)
                    .sort((a, b) => a.client.name > b.client.name
                    ? 1
                    : b.client.name > a.client.name
                        ? -1
                        : 0);
                // iterate over each subscription
                for (const subscriber of subscriptions) {
                    // get emails and skip if no one to send to
                    const { sendToEmails, optedOut } = await this.jarvisService.filterSubscriptionEmailsByPreferences(subscriber, jarvis_common_1.EmailDistributionType.dailyUpdate);
                    if (sendToEmails.length === 0) {
                        this.logger.info(`${subscriber.client.name} has no users to send to, skipping`);
                        continue;
                    }
                    const longForm = subscriber.access.constraints
                        .longFormEmails ?? false;
                    if (longForm) {
                        this.logger.info(` -> long form emails are enabled for ${subscriber.client.name}`);
                    }
                    // skip if testing otherwise ensure we only send one email per day
                    const lastRun = await this.activityLogService.getLast(jarvis_1.ActivityLogType.EmailDaily, subscriber.client.id);
                    if (!test) {
                        if (moment_1.default.utc(lastRun).format('YYYY-MM-DD') ===
                            today.format('YYYY-MM-DD')) {
                            this.logger.info(`already emailed ${subscriber.client.name} the Daily Update today`);
                            continue;
                        }
                    }
                    const audiences = (0, jarvis_common_1.audiencesToArray)(subscriber.audiences);
                    this.logger.info(`> Processing subscription for ${subscriber.client.name} - ${subscriber.type} (${audiences.join(',')}), longForm: ${longForm}`);
                    // get email form
                    const emailMessage = await this.createEmailMessage(audiences, today, previousEpoch, nextEpoch, longForm);
                    emailMessage.setNotifications([]);
                    // get notifications, including any specific for the client, and set on email form
                    const notifications = await this.jarvisService.getServiceAndPlatformNotifications(subscriber.client.id);
                    notifications.forEach((x) => emailMessage.addNotification(x.notice));
                    const friendlyRegions = audiences.filter((x) => x !== 'Global');
                    emailMessage.setIntro(`Your Daily Update is for the ${friendlyRegions.join(',')} region${friendlyRegions.length > 1 ? 's' : ''}.`);
                    if (test) {
                        await this.emailService.sendHTMLEmailMessage(this.emailService.defaultTo, emailMessage);
                    }
                    else {
                        // note: these are not async as we only want to track successful emailing of the daily update
                        try {
                            this.logger.info(`  --> sending email to : ${sendToEmails.join(', ')}`);
                            await this.emailService.sendHTMLEmailMessage(sendToEmails, emailMessage);
                            // track the sending of this email
                            await this.activityLogService.create(jarvis_1.ActivityLogType.EmailDaily, subscriber.client.name, null, subscriber.client.id, null);
                        }
                        catch (e) {
                            this.logger.error(`Failed sending email for ${subscriber.client.name} to ${sendToEmails.join(',')}`, e);
                        }
                    }
                }
                this.logger.info(`distribute email for last ${daysBack} day(s) completed...`);
                // handle employees
                const notifications = await this.jarvisService.getServiceAndPlatformNotifications();
                const internalEmailMessage = await this.createEmailMessage([], today, previousEpoch, nextEpoch);
                notifications.forEach((x) => internalEmailMessage.addNotification(x.notice));
                if (!test) {
                    await this.emailService.sendHTMLEmailMessage(['chris@foresightreports.com'], internalEmailMessage);
                }
                else {
                    // get all the employees
                    const employees = await this.jarvisService.getEmployeeUsers();
                    const employeePreferences = await this.jarvisService.getPortalPreferencesForUsers(employees.map((x) => x.email));
                    const employeeEmails = [];
                    for (const employee of employees) {
                        if ((0, jarvis_common_1.checkEmailPreferences)(employeePreferences.find((x) => x.email === employee.email), jarvis_common_1.EmailDistributionType.dailyUpdate)) {
                            employeeEmails.push(employee.email);
                        }
                    }
                    //send all employees the daily update content
                    if (employeeEmails.length == 0) {
                        this.logger.info('No employees have subscribed to the daily update');
                    }
                    else {
                        await this.emailService.sendHTMLEmailMessage(employeeEmails, internalEmailMessage);
                    }
                    const adminEmails = employees
                        .filter((x) => x.systemEmails.includes('daily-update-summary'))
                        .map((x) => x.email);
                    if (adminEmails.length == 0) {
                        this.logger.info('No admins for the daily update logs');
                    }
                    else {
                        // send the distribution log to the admin
                        const distTitle = `Distribution Log : FORESIGHT Daily Update for ${today.format(jarvis_common_1.DATE_LONG_FORMAT)}`;
                        // only send admin the distro summary
                        await this.emailService.sendHTMLEmail(adminEmails, distTitle, `<h3>Daily Update - Distribution Log</h3><br/>${this.logger.getLogTrace('<br/>')}`);
                    }
                }
            }
            catch (e) {
                this.logger.error(e);
                await this.emailService.sendHTMLEmail(config_service_1.configService.getValue('PORTAL_FROM_EMAIL'), 'Error : Email Daily Update Service', `<h3>Distribution Log</h3><br/>${this.logger.getLogTrace('<br/>')}`);
            }
        }
    }
};
exports.EmailDailyUpdateService = EmailDailyUpdateService;
exports.EmailDailyUpdateService = EmailDailyUpdateService = __decorate([
    (0, inversify_1.injectable)(),
    __param(3, (0, inversify_1.inject)(functions_1.InvocationContext)),
    __param(3, (0, inversify_1.optional)()),
    __metadata("design:paramtypes", [jarvis_service_1.JarvisService,
        email_service_1.EmailService,
        activity_log_service_1.ActivityLogService,
        functions_1.InvocationContext])
], EmailDailyUpdateService);
//# sourceMappingURL=email-daily-update.service.js.map