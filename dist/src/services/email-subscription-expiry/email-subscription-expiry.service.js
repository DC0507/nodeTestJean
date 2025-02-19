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
exports.EmailSubscriptionExpiryService = void 0;
const moment_1 = __importDefault(require("moment"));
const jarvis_common_1 = require("jarvis-common");
const jarvis_common_2 = require("jarvis-common");
const email_service_1 = require("../../shared/services/email.service");
const jarvis_service_1 = require("../../shared/services/jarvis.service");
const dotenv_1 = __importDefault(require("dotenv"));
const inversify_1 = require("inversify");
const functions_1 = require("@azure/functions");
const logger_1 = require("../../shared/utils/logger");
const config_service_1 = require("../../shared/config/config.service");
dotenv_1.default.config();
// we create new notifications on these days remaining
const notificationDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 30, 60, 90];
// determine how long for which the notification should be valid
function getDaysUntilNextNotification(daysLeft, notificationDays) {
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
let EmailSubscriptionExpiryService = class EmailSubscriptionExpiryService {
    constructor(jarvisService, emailService, invocationContext) {
        this.jarvisService = jarvisService;
        this.emailService = emailService;
        this.invocationContext = invocationContext;
        console.log(String.raw `
     ____.                  .__        
    |    |____ __________  _|__| ______
    |    \__  \\_  __ \  \/ /  |/  ___/
/\__|    |/ __ \|  | \/\   /|  |\___ \ 
\________(____  /__|    \_/ |__/____  )
              \/                    \/  Check Annual Subscriptiopns`);
        this.logger = new logger_1.Logger('EmailSubscriptionExpiryService', invocationContext);
        this.logger.info(`connecting to: ${config_service_1.configService.getValue('GRAPHQL_SERVER')}`);
    }
    async checkSubscriptions(test = false) {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 6, 0, 0);
        const dayOfWeek = now.getDay();
        if ([1, 2, 3, 4, 5].includes(dayOfWeek)) {
            // 0 is Sunday, 6 is Saturday
            // checking 90 days forward
            const nextEpoch = new Date(today.getTime() + 90 * 60 * 60 * 24 * 1000);
            this.logger.info(`checking annual subscriptions set to expire before ${nextEpoch}`);
            // get any that are expiring soon
            const expiringAnnualSubscriptions = (await this.jarvisService.getAnnualSubscriptionsExpiringBefore(nextEpoch)).sort((a, b) => {
                return new Date(a.endDate).getTime() - new Date(b.endDate).getTime();
            });
            // get existing renewal subscriptions
            const renewedAnnualSubscriptions = (await this.jarvisService.getFutureAnnualSubscriptions()).sort((a, b) => {
                return new Date(a.endDate).getTime() - new Date(b.endDate).getTime();
            });
            const needsAttention = expiringAnnualSubscriptions.filter((x) => renewedAnnualSubscriptions.filter((y) => y.client.id === x.client.id)
                .length === 0);
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
            const emailMessage = new jarvis_common_2.HTMLEmailMessage(jarvis_common_2.HTMLEmailMessageType.Internal);
            emailMessage.setTitle(`FORESIGHT - Expiring Subscriptions before ${(0, moment_1.default)(nextEpoch).format(jarvis_common_1.DATE_LONG_FORMAT)}`);
            emailMessage.setIntro('The following subscriptions will expire soon and <b>DO NOT</b> have a renewed subscription:');
            needsAttention.map((as) => emailMessage.addSummaryLineItem(`<b>${as.client.name} (${as.type})</b> expires ${(0, moment_1.default)(as.endDate).format('MMM DD YYYY')} ${as.isActive ? '' : '<b>(Disabled)</b>'}`));
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
};
exports.EmailSubscriptionExpiryService = EmailSubscriptionExpiryService;
exports.EmailSubscriptionExpiryService = EmailSubscriptionExpiryService = __decorate([
    (0, inversify_1.injectable)(),
    __param(2, (0, inversify_1.inject)(functions_1.InvocationContext)),
    __param(2, (0, inversify_1.optional)()),
    __metadata("design:paramtypes", [jarvis_service_1.JarvisService,
        email_service_1.EmailService,
        functions_1.InvocationContext])
], EmailSubscriptionExpiryService);
//# sourceMappingURL=email-subscription-expiry.service.js.map