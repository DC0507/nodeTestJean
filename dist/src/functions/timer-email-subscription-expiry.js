"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailSubscriptionExpiry = emailSubscriptionExpiry;
const email_subscription_expiry_service_1 = require("../services/email-subscription-expiry/email-subscription-expiry.service");
const functions_1 = require("@azure/functions");
const setup_container_1 = require("../shared/services/setup-container");
const config_service_1 = require("../shared/config/config.service");
async function emailSubscriptionExpiry(myTimer, context) {
    if (!config_service_1.configService.isProduction &&
        !config_service_1.configService.getValue('SERVICES').includes('SUBSCRIPTIONEXPIRY')) {
        context.log(`SUBSCRIPTIONEXPIRY service is not enabled, skipping execution of emailSubscriptionExpiry`);
        return;
    }
    context.log('Processing DPS Email Service');
    const container = (0, setup_container_1.setupContainer)(context);
    const emailController = container.get(email_subscription_expiry_service_1.EmailSubscriptionExpiryService);
    await emailController.checkSubscriptions();
}
functions_1.app.timer('timerEmailSubscriptionExpiry', {
    schedule: '0 0 10 * * 1-5',
    handler: emailSubscriptionExpiry,
});
//# sourceMappingURL=timer-email-subscription-expiry.js.map