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
exports.EmailDailyProtestSummaryService = void 0;
const moment_1 = __importDefault(require("moment"));
const jarvis_common_1 = require("jarvis-common");
const jarvis_common_2 = require("jarvis-common");
const jarvis_service_1 = require("../../shared/services/jarvis.service");
const email_service_1 = require("../../shared/services/email.service");
const activity_log_service_1 = require("../../shared/services/activity-log.service");
const jarvis_1 = require("../../shared/graphql/jarvis");
const jarvis_api_helper_1 = require("../../shared/utils/jarvis-api-helper");
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = require("../../shared/utils/logger");
const functions_1 = require("@azure/functions");
const inversify_1 = require("inversify");
const config_service_1 = require("../../shared/config/config.service");
dotenv_1.default.config();
let EmailDailyProtestSummaryService = class EmailDailyProtestSummaryService {
    constructor(jarvisService, emailService, activityLogService, invocationContext) {
        this.jarvisService = jarvisService;
        this.emailService = emailService;
        this.activityLogService = activityLogService;
        this.invocationContext = invocationContext;
        this.excelFileCache = new jarvis_common_1.CacheMapByArrayKey();
        this.logger = new logger_1.Logger();
        console.log(String.raw `
     ____.                  .__        
    |    |____ __________  _|__| ______
    |    \__  \\_  __ \  \/ /  |/  ___/
/\__|    |/ __ \|  | \/\   /|  |\___ \ 
\________(____  /__|    \_/ |__/____  )
              \/                    \/  Email Daily Protest Summary`);
        this.logger = new logger_1.Logger('EmailDailyProtestSummaryService', invocationContext);
        this.logger.info(`Connecting to: ${config_service_1.configService.getValue('GRAPHQL_SERVER')}\n\n`);
    }
    async distributeDPS(test = false, date = null) {
        const now = date ? (0, moment_1.default)(date).utc() : (0, moment_1.default)().utc();
        const today = now.startOf('day');
        const title = `FORESIGHT - Daily Protest Summary (DPS) for ${(0, moment_1.default)(today).format(jarvis_common_1.DATE_LONG_FORMAT)}`;
        // don't run on Sun or Sat
        if (![0, 6].includes(now.day())) {
            try {
                this.logger.info('emailing customers the daily protest summary');
                // get all company_contacts who have sub is not null
                let subscribers = await this.jarvisService.getSubscriptions();
                //const notifications = await this.jarvis.getNotifications();
                // const titleUnbranded = `Proactive Alert for ${moment(today).format(
                //   DATE_LONG_FORMAT
                // )}`;
                // sort the subscribers
                subscribers = subscribers.sort((a, b) => a.client.name > b.client.name
                    ? 1
                    : b.client.name > a.client.name
                        ? -1
                        : 0);
                for (const subscriber of subscribers.filter((x) => x.access.emails.dps &&
                    // no gsheet integration
                    !x?.client?.integrations?.find((x) => x.type === jarvis_1.IntegrationType.Gsheet) &&
                    // no airtable integration
                    !x?.client?.integrations?.find((x) => x.type === jarvis_1.IntegrationType.Airtable))) {
                    // prep audience array
                    const audiences = (0, jarvis_common_1.audiencesToArray)(subscriber.audiences || '');
                    this.logger.info(`> Processing subscription for ${subscriber.client.name} (${subscriber.type}: ${audiences.join(', ')})`);
                    // skip all together if no one to send to
                    const { sendToEmails, optedOut } = await this.jarvisService.filterSubscriptionEmailsByPreferences(subscriber, jarvis_common_1.EmailDistributionType.dps);
                    if (sendToEmails.length === 0) {
                        continue;
                    }
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
                    // check if already emailed today
                    const lastRun = await this.activityLogService.getLast(jarvis_1.ActivityLogType.EmailDps, subscriber?.client?.id ?? '');
                    this.logger.info(`DPS for this client last run: ${lastRun}`);
                    //if (!test) {
                    if (moment_1.default.utc(lastRun).format('YYYY-MM-DD') ===
                        today.format('YYYY-MM-DD')) {
                        this.logger.info(`already emailed ${subscriber.client.name} the DPS today`);
                        continue;
                    }
                    // }
                    // check if limit to 48 hours
                    const limit48Hours = subscriber.access.constraints
                        ?.outlook48 ?? false;
                    if (limit48Hours) {
                        this.logger.info(`limiting ${subscriber.client.name} to 48 hours`);
                    }
                    // check if excel file needs to be downloaded
                    if (!this.excelFileCache.get([...audiences, limit48Hours.toString()])) {
                        this.logger.info(`  ** downloading excel for audience: ${audiences.join(', ')}, ${limit48Hours ? '(48hrs Outlook)' : ''}`);
                        this.excelFileCache.set([...audiences, limit48Hours.toString()], await (0, jarvis_api_helper_1.downloadExcelFromRestApi)(audiences, limit48Hours));
                    }
                    // get the excel file
                    const excel = this.excelFileCache.get([
                        ...audiences,
                        limit48Hours.toString(),
                    ]);
                    const emailMessage = new jarvis_common_2.HTMLEmailMessage(jarvis_common_2.HTMLEmailMessageType.External);
                    emailMessage.setTitle(title);
                    emailMessage.setIntro(`${subscriber.client.name + ' Team,'}<br/>Please find attached your FORESIGHT Daily Protest Summary for ${audiences
                        .filter((x) => x !== jarvis_common_1.GLOBALAUDIENCE)
                        .join(', ')} ${limit48Hours ? '(48hrs Outlook)' : ''}`);
                    // send the email
                    if (test) {
                        await this.emailService.sendHTMLEmailMessage(['chris@foresightreports.com'], emailMessage, [
                            {
                                Filename: excel.fileName,
                                Base64Content: excel.file.toString('base64'),
                                ContentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                            },
                        ]);
                    }
                    else {
                        try {
                            if (subscriber.access.constraints.foi) {
                                this.logger.info(`  ! ${subscriber.client.name} is a FOI account, not emailing unbranded emailer`);
                                // send version with only the link
                                // await this.emailService.sendHTMLEmail(
                                //   sendToEmails,
                                //   titleUnbranded,
                                //   contentUnbranded
                                // );
                            }
                            else {
                                // sending with attachments causes the API to suck, and through exception when lots of email accounts.. bad design. so sending in batches
                                this.logger.info(`  --> sending email to : ${sendToEmails.join(', ')}`);
                                await this.emailService.sendHTMLEmailMessage(sendToEmails, emailMessage, [
                                    {
                                        Filename: excel.fileName,
                                        Base64Content: excel.file.toString('base64'),
                                        ContentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                                    },
                                ]);
                            }
                            //track the sending of this email
                            await this.activityLogService.create(jarvis_1.ActivityLogType.EmailDps, subscriber.client.name, null, subscriber?.client?.id ?? '', this.constructor.name);
                        }
                        catch (e) {
                            this.logger.error(`  !!! Exception occured emailing ${subscriber.client.name}`, e);
                        }
                    }
                }
                this.logger.info(`distribute DPS email completed...`);
                // handle employees
                const employees = await this.jarvisService.getEmployeeUsers();
                // get all the employee preferences
                const employeePreferences = await this.jarvisService.getPortalPreferencesForUsers(employees.map((x) => x.email));
                const excel = await (0, jarvis_api_helper_1.downloadExcelFromRestApi)(['NORAM', 'EMEA', 'APAC', 'LATAM', 'Global'], false);
                const employeeEmails = [];
                for (const employee of employees) {
                    if ((0, jarvis_common_1.checkEmailPreferences)(employeePreferences.find((x) => x.email === employee.email), jarvis_common_1.EmailDistributionType.dps)) {
                        employeeEmails.push(employee.email);
                    }
                }
                const emailMessage = new jarvis_common_2.HTMLEmailMessage(jarvis_common_2.HTMLEmailMessageType.Internal);
                emailMessage.setTitle(title);
                emailMessage.setIntro(`Internal Team,<br/>Please find attached your FORESIGHT Daily Protest Summary`);
                await this.emailService.sendHTMLEmailMessage(employeeEmails, emailMessage, [
                    {
                        Filename: excel.fileName,
                        Base64Content: excel.file.toString('base64'),
                        ContentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    },
                ]);
                // only send admin the distro summary
                const emails = employees
                    .filter((x) => x?.systemEmails?.includes('daily-protest-distro-summary'))
                    .map((x) => x.email);
                if (emails.length > 0) {
                    const distroSummaryEmailMessage = new jarvis_common_2.HTMLEmailMessage(jarvis_common_2.HTMLEmailMessageType.Internal);
                    distroSummaryEmailMessage.setTitle('FORESIGHT - Distribution Log : ' + title);
                    distroSummaryEmailMessage.setIntro(this.logger.getLogTrace('<br/>'));
                    await this.emailService.sendHTMLEmailMessage(emails, distroSummaryEmailMessage);
                }
            }
            catch (e) {
                this.logger.error(e);
                await this.emailService.sendHTMLEmail(this.emailService.defaultTo, 'Error : Email Daily Protest Summary Service', `<h3>Distribution Log</h3>${this.logger.getLogTrace('<br/>')}`);
            }
        }
    }
};
exports.EmailDailyProtestSummaryService = EmailDailyProtestSummaryService;
exports.EmailDailyProtestSummaryService = EmailDailyProtestSummaryService = __decorate([
    (0, inversify_1.injectable)(),
    __param(3, (0, inversify_1.inject)(functions_1.InvocationContext)),
    __param(3, (0, inversify_1.optional)()),
    __metadata("design:paramtypes", [jarvis_service_1.JarvisService,
        email_service_1.EmailService,
        activity_log_service_1.ActivityLogService,
        functions_1.InvocationContext])
], EmailDailyProtestSummaryService);
//# sourceMappingURL=email-dps.service.js.map