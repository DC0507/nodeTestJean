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
exports.DPSPlatformIntegrationService = void 0;
const jarvis_1 = require("../../shared/graphql/jarvis");
const jarvis_service_1 = require("../../shared/services/jarvis.service");
const moment_1 = __importDefault(require("moment"));
const email_service_1 = require("../../shared/services/email.service");
const activity_log_service_1 = require("../../shared/services/activity-log.service");
const airtable_platform_integration_1 = require("./airtable-platform-integration");
const gsheet_platform_integration_1 = require("./gsheet-platform-integration");
const jarvis_api_helper_1 = require("../../shared/utils/jarvis-api-helper");
const jarvis_common_1 = require("jarvis-common");
const dotenv_1 = __importDefault(require("dotenv"));
const inversify_1 = require("inversify");
const logger_1 = require("../../shared/utils/logger");
const functions_1 = require("@azure/functions");
const config_service_1 = require("../../shared/config/config.service");
dotenv_1.default.config();
let DPSPlatformIntegrationService = class DPSPlatformIntegrationService {
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
              \/                    \/  DPS Platform Integration`);
        this.logger = new logger_1.Logger('DPSPlatformIntegrationService', invocationContext);
        this.logger.info(`Connecting to: ${config_service_1.configService.getValue('GRAPHQL_SERVER')}\n\n`);
    }
    async processIntegrations(test = false) {
        const now = new Date();
        // don't run on Sun or Sat
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
        const title = `FORESIGHT - Protest Platform Integration Summary for ${(0, moment_1.default)(today).format(jarvis_common_1.DATE_LONG_FORMAT)}`;
        if (![0, 6].includes(now.getDay())) {
            try {
                this.logger.info('pushing protest summary data onto supported platforms');
                // get all subscriptions
                let subscribers = await this.jarvisService.getSubscriptions();
                // sort the subscribers
                subscribers = subscribers.sort((a, b) => a.client.name > b.client.name
                    ? 1
                    : b.client.name > a.client.name
                        ? -1
                        : 0);
                // iterating through platform types (gsheet, airtable)
                for (const integrationType of [
                    jarvis_1.IntegrationType.Gsheet,
                    jarvis_1.IntegrationType.Airtable,
                ]) {
                    for (const subscriber of subscribers.filter((x) => x.access.emails.dps &&
                        x?.client?.integrations?.find((x) => x.type === integrationType))) {
                        // check if subscription supports this day of the week
                        if (subscriber.access.constraints
                            ?.dpsOnDaysOfWeek?.length) {
                            this.logger.info(`subscription has a day of the week limit, testing ${(0, moment_1.default)()
                                .day()
                                .toString()} against ${subscriber.access.constraints
                                ?.dpsOnDaysOfWeek}: skip? ${!subscriber.access.constraints?.dpsOnDaysOfWeek?.includes((0, moment_1.default)().day().toString())}`);
                            if (!subscriber.access.constraints?.dpsOnDaysOfWeek?.includes((0, moment_1.default)().day().toString())) {
                                this.logger.info(`skipping ${subscriber.client.name}, only receive DPS on days ${subscriber.access.constraints
                                    ?.dpsOnDaysOfWeek ?? []}`);
                                continue;
                            }
                        }
                        const audiences = (0, jarvis_common_1.audiencesToArray)(subscriber?.audiences || '');
                        const limit48Hours = subscriber.access
                            .constraints.outlook48;
                        if (limit48Hours) {
                            this.logger.info(`limiting ${subscriber.client.name} to 48 hours`);
                        }
                        this.logger.info(`downloading data for audiences: ${audiences.join(', ')}, ${limit48Hours ? '(48hrs Outlook)' : ''}`);
                        const spreadsheetTitle = `FORESIGHT - Protest Summary for ${audiences
                            .filter((x) => x !== jarvis_common_1.GLOBALAUDIENCE)
                            .join(', ')} for ${(0, moment_1.default)(today).format(jarvis_common_1.DATE_LONG_FORMAT)}`;
                        this.logger.info(`> Processing ${integrationType} subscription for ${subscriber.client.name} (${subscriber.type}), ${subscriber?.client?.contacts?.length || 0} total contacts, audiences: ${audiences.join(', ')}`);
                        //get the existing integration entry
                        const integrationConfig = subscriber?.client?.integrations?.find((x) => x.type === integrationType);
                        if (!integrationConfig) {
                            this.logger.info(`skipping ${subscriber.client.name}, no integration found`);
                            continue;
                        }
                        this.logger.info(`downloading data for ${audiences.join(', ')}`);
                        const actions = await (0, jarvis_api_helper_1.downloadActionsFromRestApi)(audiences, limit48Hours);
                        this.logger.info(`${actions.length} actions downloaded`);
                        const { sendToEmails, optedOut } = await this.jarvisService.filterSubscriptionEmailsByPreferences(subscriber, jarvis_common_1.EmailDistributionType.dps);
                        let innerContent = '';
                        if (integrationType === jarvis_1.IntegrationType.Airtable && !test) {
                            innerContent = await (0, airtable_platform_integration_1.AirTablePlatformIntegration)(integrationConfig, actions, spreadsheetTitle, sendToEmails);
                        }
                        else if (integrationType === jarvis_1.IntegrationType.Gsheet && !test) {
                            innerContent = await (0, gsheet_platform_integration_1.GSheetPlatformIntegration)(integrationConfig, actions, spreadsheetTitle, sendToEmails);
                        }
                        const emailMessage = new jarvis_common_1.HTMLEmailMessage(jarvis_common_1.HTMLEmailMessageType.External);
                        emailMessage.setTitle(title);
                        emailMessage.setIntro(`${subscriber.client.name + ' Team,'}<br/>Your ${integrationType} Integration Platform has been updated with the FORESIGHT Protest Summary (${audiences
                            .filter((x) => x !== jarvis_common_1.GLOBALAUDIENCE)
                            .join(', ')})<br/>${innerContent}<br/>`);
                        if (sendToEmails.length === 0) {
                            continue;
                        }
                        if (!test) {
                            try {
                                if (subscriber.access.constraints
                                    .foi) {
                                    this.logger.info(`  ! ${subscriber.client.name} is a FOI account, not emailing unbranded emailer`);
                                    // send version with only the link
                                    // await this.emailService.sendHTMLEmail(
                                    //   sendToEmails,
                                    //   titleUnbranded,
                                    //   contentUnbranded
                                    // );
                                }
                                else {
                                    this.logger.info(`  --> sending email to : ${sendToEmails.join(', ')}`);
                                    await this.emailService.sendHTMLEmailMessage(sendToEmails, emailMessage);
                                }
                                //track the sending of this email
                                await this.activityLogService.create(jarvis_1.ActivityLogType.EmailDps, subscriber.client.name, null, subscriber?.client?.id || 'Unknown Client ID', this.constructor.name);
                            }
                            catch (e) {
                                this.logger.error(`  !!! Exception occured emailing ${subscriber.client.name}`, e);
                            }
                        }
                    }
                }
                this.logger.info(`distribute DPS email completed...`);
                // handle employees
                const employees = await this.jarvisService.getEmployeeUsers();
                // only send admin the distro summary
                const emails = employees
                    .filter((x) => x?.systemEmails?.includes('protest-platform-integration-summary'))
                    .map((x) => x.email);
                if (emails.length > 0) {
                    const distroSummaryEmailMessage = new jarvis_common_1.HTMLEmailMessage(jarvis_common_1.HTMLEmailMessageType.Internal);
                    distroSummaryEmailMessage.setTitle('FORESIGHT - Distribution Log : ' + title);
                    distroSummaryEmailMessage.setIntro(this.logger.getLogTrace('<br/>'));
                    await this.emailService.sendHTMLEmail(emails, distroSummaryEmailMessage.title, distroSummaryEmailMessage.render());
                }
            }
            catch (e) {
                this.logger.error(e);
                await this.emailService.sendHTMLEmail(this.emailService.defaultTo, 'Error : ' + title, `<h3>Distribution Log</h3>${this.logger.getLogTrace('<br/>')}`);
            }
        }
    }
};
exports.DPSPlatformIntegrationService = DPSPlatformIntegrationService;
exports.DPSPlatformIntegrationService = DPSPlatformIntegrationService = __decorate([
    (0, inversify_1.injectable)(),
    __param(3, (0, inversify_1.inject)(functions_1.InvocationContext)),
    __param(3, (0, inversify_1.optional)()),
    __metadata("design:paramtypes", [jarvis_service_1.JarvisService,
        email_service_1.EmailService,
        activity_log_service_1.ActivityLogService,
        functions_1.InvocationContext])
], DPSPlatformIntegrationService);
//# sourceMappingURL=dps-platform-integration.service.js.map