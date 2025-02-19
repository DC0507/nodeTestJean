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
exports.EmailTemplateTestingService = void 0;
const jarvis_service_1 = require("../../shared/services/jarvis.service");
const jarvis_1 = require("../../shared/graphql/jarvis");
const email_service_1 = require("../../shared/services/email.service");
const moment_1 = __importDefault(require("moment"));
const chart_helper_1 = require("../../shared/utils/chart-helper");
const jarvis_common_1 = require("jarvis-common");
const jarvis_common_2 = require("jarvis-common");
const chart_helper_2 = require("../../shared/utils/chart-helper");
const dotenv_1 = __importDefault(require("dotenv"));
const inversify_1 = require("inversify");
const functions_1 = require("@azure/functions");
const logger_1 = require("../../shared/utils/logger");
const config_service_1 = require("../../shared/config/config.service");
dotenv_1.default.config();
let EmailTemplateTestingService = class EmailTemplateTestingService {
    constructor(jarvisService, emailService, invocationContext) {
        this.jarvisService = jarvisService;
        this.emailService = emailService;
        this.invocationContext = invocationContext;
        this.locationIssues = new Set();
        console.log(String.raw `
     ____.                  .__        
    |    |____ __________  _|__| ______
    |    \__  \\_  __ \  \/ /  |/  ___/
/\__|    |/ __ \|  | \/\   /|  |\___ \ 
\________(____  /__|    \_/ |__/____  )
              \/                    \/  Email Template Testing Utility`);
        this.logger = new logger_1.Logger('EmailTemplateTestingService', invocationContext);
        this.logger.info(`connecting to: ${config_service_1.configService.getValue('GRAPHQL_SERVER')}`);
    }
    async emailActionsSample() {
        const now = (0, moment_1.default)().utc();
        const today = now.startOf('day');
        let daysBack = -1;
        if (today.day() === 1) {
            // monday
            // get all articles since last Friday at 6am
            this.logger.info('its Monday, pulling for last 3 days');
            daysBack = -3;
        }
        let daysForward = 3;
        if (today.day() === 5) {
            // friday
            // get activities/protests through the weekend
            this.logger.info('its Friday, looking ahead for next 3 days');
            daysForward = 3;
        }
        const previousEpoch = (0, moment_1.default)().utc().add(daysBack, 'days').startOf('day');
        const nextEpoch = (0, moment_1.default)()
            .utc()
            .add(daysForward, 'days')
            .startOf('day')
            .add(-1, 'second');
        // load the content
        const newArticles = await this.jarvisService.getArticlesByCreatedDateWindow(previousEpoch.toDate(), today.toDate());
        //const newArticles = [];
        const newProtests = await this.jarvisService.getActionsByDateWindow(previousEpoch.toDate(), today.toDate(), true, 'lastModifiedDate');
        const highlightProtests = newProtests
            .filter((x) => x.type !== jarvis_1.PostType.RawAction && !x?.title?.startsWith('-'))
            .sort((x, y) => new Date(x.date).getTime() - new Date(y.date).getTime());
        const notifications = await this.jarvisService.getServiceAndPlatformNotifications();
        const newActivities = await this.jarvisService.getActionsByDateWindow(previousEpoch.toDate(), today.toDate(), false, 'lastModifiedDate');
        const highlightActions = newActivities
            .filter((x) => x.type !== jarvis_1.PostType.RawAction && !x?.title?.startsWith('-'))
            .sort((x, y) => new Date(x.date).getTime() - new Date(y.date).getTime());
        const upcomingProtests = await this.jarvisService.getActionsByDateWindow(today.toDate(), nextEpoch.toDate(), true, 'actionDate');
        const emailMessage = new jarvis_common_2.HTMLEmailMessage();
        emailMessage.setTitle(`FORESIGHT - (template test) Daily Update for ${today.format(jarvis_common_1.DATE_LONG_FORMAT)}`);
        emailMessage.setSummaryHeader(`Today's Summary:
   ${(0, jarvis_common_1.getActivityIconSVG)('black')}, ${(0, jarvis_common_1.getProtestIconSVG)('black')}, ${(0, jarvis_common_1.getArticleIconSVG)('black')}
       `);
        notifications.forEach((x) => emailMessage.addNotification(x.notice));
        // add articles
        const articleTitle = `${newArticles.length} Articles added since ${previousEpoch.format(jarvis_common_1.DATE_FORMAT_NO_YEAR)}`;
        emailMessage.addSummaryLineItem(articleTitle, 'articles');
        emailMessage.createSection('Articles', articleTitle, 'articles');
        newArticles.forEach((x) => emailMessage.addSectionContent('Articles', emailMessage.articleMarkup(x)));
        // add highlighted protests
        const protestTitle = `${highlightProtests.length} Highlighted protests added since ${previousEpoch.format(jarvis_common_1.DATE_FORMAT_NO_YEAR)}`;
        emailMessage.addSummaryLineItem(protestTitle, 'highlightProtests');
        emailMessage.createSection('Protests', protestTitle, 'highlightProtests');
        highlightProtests.forEach((x) => emailMessage.addSectionContent('Protests', emailMessage.actionMarkup(x)));
        // add highlighted actions
        const actionTitle = `${highlightActions.length} Highlighted activities added since ${previousEpoch.format(jarvis_common_1.DATE_FORMAT_NO_YEAR)}`;
        emailMessage.addSummaryLineItem(actionTitle, 'highlightActions');
        emailMessage.createSection('Actions', actionTitle, 'highlightActions');
        highlightActions.forEach((x) => emailMessage.addSectionContent('Actions', emailMessage.actionMarkup(x)));
        const upcomingProtestsTitle = `${upcomingProtests.length} Protests to occur between ${(0, jarvis_common_2.formatDatePeriod)(today, nextEpoch)}`;
        emailMessage.addSummaryLineItem(upcomingProtestsTitle, 'upcomingProtests');
        emailMessage.createSection('Charts1', upcomingProtestsTitle, 'upcomingProtests');
        const issues = (0, chart_helper_1.getTopIssues)(upcomingProtests).slice(0, 10); // Use slice instead of splice to not modify array
        const config = (0, chart_helper_2.createBarChartConfiguration)();
        config.labels = issues.map((x) => x.name);
        config.dataValues = issues.map((x) => x.count);
        const issueChartBuffer = await (0, chart_helper_2.generateBarChartBuffer)(config);
        emailMessage.addSectionContent('Charts1', `<p>Top 10 Issues</p>
       <p align="center">${(0, jarvis_common_2.createHtmlImageTagFromBuffer)(issueChartBuffer)}</p>`);
        const cities = (0, chart_helper_1.getTopCities)(upcomingProtests).slice(0, 10);
        const cityConfig = (0, chart_helper_2.createBarChartConfiguration)();
        cityConfig.labels = cities.map((x) => x.city);
        cityConfig.dataValues = cities.map((x) => x.count);
        const cityChartBuffer = await (0, chart_helper_2.generateBarChartBuffer)(cityConfig);
        emailMessage.addSectionContent('Charts1', `<p>Top 10 Cities</p>
       <p align="center">${(0, jarvis_common_2.createHtmlImageTagFromBuffer)(cityChartBuffer)}</p>`);
        await this.emailService.sendHTMLEmailMessage(['chris@foresightreports.com'], emailMessage);
        this.logger.info('done');
    }
};
exports.EmailTemplateTestingService = EmailTemplateTestingService;
exports.EmailTemplateTestingService = EmailTemplateTestingService = __decorate([
    (0, inversify_1.injectable)(),
    __param(2, (0, inversify_1.inject)(functions_1.InvocationContext)),
    __param(2, (0, inversify_1.optional)()),
    __metadata("design:paramtypes", [jarvis_service_1.JarvisService,
        email_service_1.EmailService,
        functions_1.InvocationContext])
], EmailTemplateTestingService);
//# sourceMappingURL=email-template-testing.service.js.map