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
exports.AlertSummaryProcessingService = void 0;
const jarvis_service_1 = require("../../shared/services/jarvis.service");
const functions_1 = require("@azure/functions");
const jarvis_1 = require("../../shared/graphql/jarvis");
const inversify_1 = require("inversify");
const logger_1 = require("../../shared/utils/logger");
const moment_1 = __importDefault(require("moment"));
const config_service_1 = require("../../shared/config/config.service");
const jarvis_common_1 = require("jarvis-common");
const email_service_1 = require("../../shared/services/email.service");
let AlertSummaryProcessingService = class AlertSummaryProcessingService {
    constructor(jarvisService, emailService, invocationContext) {
        this.jarvisService = jarvisService;
        this.emailService = emailService;
        this.invocationContext = invocationContext;
        //     console.log(String.raw`
        //      ____.                  .__        
        //     |    |____ __________  _|__| ______
        //     |    \__  \\_  __ \  \/ /  |/  ___/
        // /\__|    |/ __ \|  | \/\   /|  |\___ \ 
        // \________(____  /__|    \_/ |__/____  )
        //               \/                    \/  Alert Summary Processing`);
        this.logger = new logger_1.Logger('AlertSummaryProcessingService', invocationContext);
        this.logger.info(`Connecting to: ${config_service_1.configService.getValue('GRAPHQL_SERVER')}\n\n`);
    }
    async processSummaryAlerts(email, messages) {
        const now = (0, moment_1.default)().utc();
        const today = now.startOf('day');
        const userContext = await this.jarvisService.checkUserContext(email);
        if (!userContext) {
            this.logger.info(`${email} no longer valid`);
            return;
        }
        const longForm = userContext.access?.constraints
            ?.longFormEmails ?? false;
        // process email summary alerts
        const emailAlertMessages = messages.filter((m) => m.alert?.deliveryMethod ===
            jarvis_1.AlertDeliveryMethod.PortalAndEmail);
        this.logger.info(` *** identified ${emailAlertMessages.length} messages out of ${messages.length} messages with email distribution`);
        if (emailAlertMessages.length > 0) {
            this.logger.info(` *** prepping email for ${email} for email alerts`);
            // get the alerts names, sort them.
            const alerts = Array.from(new Set(emailAlertMessages.map((message) => message.alert.name))).sort((a, b) => a.localeCompare(b));
            const emailMessage = new jarvis_common_1.HTMLEmailMessage(jarvis_common_1.HTMLEmailMessageType.External, config_service_1.configService.getValue('PORTAL_FROM_EMAIL'), 'email');
            const title = `FORESIGHT - Summary Alert Matches for ${today.format(jarvis_common_1.DATE_LONG_FORMAT)}`;
            emailMessage.setTitle(title);
            emailMessage.setIntro(`Your summary alerts resulted in the following matches:`);
            // process each alert
            for (const [index, alert] of alerts.entries()) {
                const articles = messages.filter((message) => message.alert.name === alert && message.article);
                const actions = messages.filter((message) => message.alert.name === alert && message.action);
                const matchParts = [];
                if (articles.length > 0) {
                    matchParts.push(`${articles.length} articles`);
                }
                if (actions.length > 0) {
                    matchParts.push(`${actions.length} actions`);
                }
                const alertTitle = `${index + 1}) '${alert}' matches (${matchParts.join(', ')})`;
                emailMessage.addSummaryLineItem(alertTitle, alert);
                emailMessage.createSection(alert, alertTitle, alert);
                // add articles
                articles.forEach((message) => {
                    emailMessage.addSectionContent(alert, emailMessage.articleMarkup(message.article, longForm));
                });
                // add actions
                actions.forEach((message) => {
                    emailMessage.addSectionContent(alert, emailMessage.actionMarkup(message.action, longForm));
                });
            }
            this.logger.info(` *** sending email to ${email}`);
            const emailService = new email_service_1.EmailService();
            await emailService.sendHTMLEmailMessage(email, emailMessage);
        }
        // process all summary alerts
        const alerts = Array.from(new Set(messages.map((message) => message.alert.name))).sort((a, b) => a.localeCompare(b));
        const portalMessage = new jarvis_common_1.HTMLEmailMessage(jarvis_common_1.HTMLEmailMessageType.External, config_service_1.configService.getValue('PORTAL_FROM_EMAIL'), 'portal');
        const title = `FORESIGHT - Summary Alert Matches for ${today.format(jarvis_common_1.DATE_LONG_FORMAT)}`;
        portalMessage.setTitle(title);
        for (const [index, alert] of alerts.entries()) {
            const articles = messages.filter((message) => message.alert.name === alert && message.article);
            const actions = messages.filter((message) => message.alert.name === alert && message.action);
            const matchParts = [];
            if (articles.length > 0) {
                matchParts.push(`${articles.length} articles`);
            }
            if (actions.length > 0) {
                matchParts.push(`${actions.length} actions`);
            }
            const alertTitle = `${index + 1}) '${alert}' matches (${matchParts.join(', ')})`;
            portalMessage.addSummaryLineItem(alertTitle, alert);
            portalMessage.createSection(alert, alertTitle, alert);
            // add articles
            articles.forEach((message) => {
                portalMessage.addSectionContent(alert, portalMessage.articleMarkup(message.article, longForm));
            });
            // add actions
            actions.forEach((message) => {
                portalMessage.addSectionContent(alert, portalMessage.actionMarkup(message.action, longForm));
            });
        }
        // add it to notifications table
        this.logger.info(` *** adding to alerts table for ${email}`);
        await this.jarvisService.client.mutate({
            mutation: jarvis_1.CreateOneClientNotificationDocument,
            variables: {
                input: {
                    clientNotification: {
                        notice: portalMessage.renderSections(),
                        title: portalMessage.title,
                        startDate: (0, moment_1.default)().toDate(),
                        endDate: (0, moment_1.default)().add(7, 'days').toDate(),
                        type: jarvis_1.ClientNotificationType.SummaryAlert,
                        companyContactId: email,
                    },
                },
            },
        });
    }
};
exports.AlertSummaryProcessingService = AlertSummaryProcessingService;
exports.AlertSummaryProcessingService = AlertSummaryProcessingService = __decorate([
    (0, inversify_1.injectable)(),
    __param(2, (0, inversify_1.inject)(functions_1.InvocationContext)),
    __param(2, (0, inversify_1.optional)()),
    __metadata("design:paramtypes", [jarvis_service_1.JarvisService,
        email_service_1.EmailService,
        functions_1.InvocationContext])
], AlertSummaryProcessingService);
//# sourceMappingURL=alert-summary-processing.service.js.map