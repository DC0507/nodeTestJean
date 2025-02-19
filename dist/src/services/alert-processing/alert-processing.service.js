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
exports.AlertProcessingService = void 0;
const jarvis_service_1 = require("../../shared/services/jarvis.service");
const functions_1 = require("@azure/functions");
const jarvis_1 = require("../../shared/graphql/jarvis");
const inversify_1 = require("inversify");
const logger_1 = require("../../shared/utils/logger");
const moment_1 = __importDefault(require("moment"));
const service_bus_1 = require("@azure/service-bus");
const config_service_1 = require("../../shared/config/config.service");
const jarvis_common_1 = require("jarvis-common");
const email_service_1 = require("../../shared/services/email.service");
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
let AlertProcessingService = class AlertProcessingService {
    constructor(jarvisService, invocationContext) {
        this.jarvisService = jarvisService;
        this.invocationContext = invocationContext;
        console.log(String.raw `
     ____.                  .__        
    |    |____ __________  _|__| ______
    |    \__  \\_  __ \  \/ /  |/  ___/
/\__|    |/ __ \|  | \/\   /|  |\___ \ 
\________(____  /__|    \_/ |__/____  )
              \/                    \/  Alert Processing`);
        this.logger = new logger_1.Logger('AlertProcessingService', invocationContext);
        this.logger.info(`Connecting to: ${config_service_1.configService.getValue('GRAPHQL_SERVER')}\n\n`);
        const serviceBusClient = new service_bus_1.ServiceBusClient(config_service_1.configService.getValue('jarvismq_SERVICEBUS'));
        this.alertBatchSender = serviceBusClient.createSender((0, jarvis_common_1.getServiceBusName)(config_service_1.configService.getValue('BUS_EMAIL_ALERT_BATCH_QUEUE')));
    }
    async createImmediateAlert(inputMessage, test = false) {
        const message = inputMessage?.body;
        const alert = message.alert;
        const userContext = message.userContext;
        const longForm = userContext.access?.constraints
            ?.longFormEmails ?? false;
        const portalMessage = new jarvis_common_1.HTMLEmailMessage(jarvis_common_1.HTMLEmailMessageType.External, config_service_1.configService.getValue('PORTAL_FROM_EMAIL'), 'portal');
        const emailMessage = new jarvis_common_1.HTMLEmailMessage(jarvis_common_1.HTMLEmailMessageType.External, config_service_1.configService.getValue('PORTAL_FROM_EMAIL'), 'portal');
        const title = `FORESIGHT - ${alert?.delivery} Alert Match for '${alert?.name}'`;
        emailMessage.setTitle(title);
        let innerContent = '';
        if (message.action) {
            innerContent += portalMessage.actionMarkup(message.action, longForm);
            emailMessage.setIntro(emailMessage.actionMarkup(message.action, longForm));
        }
        if (message.article) {
            innerContent += portalMessage.articleMarkup(message.article, longForm);
            emailMessage.setIntro(emailMessage.articleMarkup(message.article, longForm));
        }
        // add it to alerts table
        this.logger.info(` --> alert's delivery method: ${alert?.deliveryMethod}, adding to alerts table`);
        await this.jarvisService.client.mutate({
            mutation: jarvis_1.CreateOneClientNotificationDocument,
            variables: {
                input: {
                    clientNotification: {
                        companyIds: [],
                        notice: innerContent,
                        title: emailMessage.title,
                        startDate: (0, moment_1.default)().toDate(),
                        endDate: (0, moment_1.default)().add(7, 'days').toDate(),
                        type: jarvis_1.ClientNotificationType.ImmediateAlert,
                        companyContactId: userContext.email,
                    },
                },
            },
        });
        if (alert?.deliveryMethod &&
            alert?.deliveryMethod === jarvis_1.AlertDeliveryMethod.PortalAndEmail) {
            this.logger.info(` --> sending email to ${userContext.email}`);
            const emailService = new email_service_1.EmailService();
            await emailService.sendHTMLEmailMessage(userContext.email, emailMessage);
        }
    }
    async processAlert(message, test = false) {
        this.logger.info("processing received message from 'published-post'");
        const post = message?.article || message?.action;
        if (!post?.alertNotification || post.alertNotification === false) {
            this.logger.info('post does not have alertNotification, skipping');
            return;
        }
        const portalPreferences = await this.jarvisService.getAlerts();
        this.logger.info(`loaded ${portalPreferences.length} portal preferences with alerts`);
        // process the alerts
        for (const portalPreference of portalPreferences) {
            // confirm the user is still valid
            this.logger.info(`** processing \x1b[34m${portalPreference.email}\x1b[0m alerts`);
            const userContext = await this.jarvisService.checkUserContext(portalPreference.email);
            if (!userContext) {
                this.logger.info(`${portalPreference.email} no longer valid`);
                continue;
            }
            for (const alert of portalPreference.alerts
                .collection) {
                this.logger.info(`-> processing alert: ${alert.name} for ${userContext.email}`);
                let match = true;
                // audience test first (if not internal user)
                try {
                    if (userContext.type !== 'internal' &&
                        userContext.audiences &&
                        !userContext.audiences
                            .split(';')
                            .filter(Boolean)
                            .some((item) => post.audience.includes(item))) {
                        this.logger.info(`--> '${post.title}' failed match on audience`);
                        match = false;
                        break;
                    }
                }
                catch (e) {
                    this.logger.error(`--> issue validating audience`, e);
                    match = false;
                    break;
                }
                for (const key of Object.keys(alert).filter((x) => Object.keys(keyMapping).includes(x))) {
                    const postKey = keyMapping[key];
                    // location
                    if (!post[postKey]) {
                        this.logger.info(`--> '${post.title}' missing ${postKey}, match failed`);
                        match = false;
                        break;
                    }
                    if (['locations'].includes(key)) {
                        const alertFilterNames = alert[key].map((x) => x.id);
                        this.logger.info(`--> checking if ${postKey} matches ${alertFilterNames.join(',')}`);
                        const alertFilterValues = alert[key].map((x) => x.id.replace(/--+/g, '-'));
                        if (alertFilterValues.filter((x) => post.location.id.startsWith(x))
                            .length === 0) {
                            match = false;
                            break;
                        }
                        else {
                            this.logger.info(`---> compare of ${key} values ${alertFilterValues} matched`);
                            match = true;
                        }
                    }
                    // all else
                    if ([
                        'companies',
                        'sectors',
                        'events',
                        'groups',
                        'campaigns',
                        'issues',
                        'tactics',
                    ].includes(key)) {
                        const alertFilterNames = alert[key].map((x) => x.name);
                        this.logger.info(`--> checking if ${postKey} matches ${alertFilterNames.join(',')}`);
                        const alertFilterIds = alert[key].map((x) => x.id);
                        const postReferenceIds = post[postKey].map((x) => x.id);
                        if (postReferenceIds.filter((item) => alertFilterIds.includes(item))
                            .length === 0) {
                            match = false;
                            break;
                        }
                        else {
                            this.logger.info(`---> compare of ${key} values ${alertFilterIds} matched`);
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
                            scheduledEnqueueTimeUtc: moment_1.default
                                .utc((0, moment_1.default)().add(5, 'minutes'))
                                .toDate(),
                        };
                        this.logger.info('--> \x1b[34m✉\x1b[0m Sending as Immediate alert');
                        await this.createImmediateAlert(alertMessage);
                    }
                    else {
                        const alertBatchMessage = {
                            body: { ...message, email: portalPreference.email, alert },
                            contentType: 'application/json',
                            sessionId: portalPreference.email,
                            messageId: `${portalPreference.email}-${post.id}-${alert.name}`,
                        };
                        this.logger.info('--> \x1b[34m✉\x1b[0m Adding to Summary alert');
                        if (test) {
                            this.logger.info('*** WOULD add message to batch queue: ');
                        }
                        else {
                            await this.alertBatchSender.sendMessages(alertBatchMessage);
                        }
                    }
                }
                else {
                    this.logger.info(`\x1b[31m✖\x1b[0m NO MATCH for alert: ${alert.name}`);
                }
            }
        }
    }
};
exports.AlertProcessingService = AlertProcessingService;
exports.AlertProcessingService = AlertProcessingService = __decorate([
    (0, inversify_1.injectable)(),
    __param(1, (0, inversify_1.inject)(functions_1.InvocationContext)),
    __param(1, (0, inversify_1.optional)()),
    __metadata("design:paramtypes", [jarvis_service_1.JarvisService,
        functions_1.InvocationContext])
], AlertProcessingService);
//# sourceMappingURL=alert-processing.service.js.map