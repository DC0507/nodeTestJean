"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailDailyUpdate = emailDailyUpdate;
const functions_1 = require("@azure/functions");
const setup_container_1 = require("../shared/services/setup-container");
const config_service_1 = require("../shared/config/config.service");
const email_daily_update_service_1 = require("../services/email-daily-update/email-daily-update.service");
async function emailDailyUpdate(myTimer, context) {
    if (!config_service_1.configService.isProduction &&
        !config_service_1.configService.getValue('SERVICES').includes('DAILYUPDATE')) {
        context.log(`DAILYUPDATE service is not enabled, skipping execution of emailDailyUpdate`);
        return;
    }
    context.log('Processing Daily Update Emailer');
    const container = (0, setup_container_1.setupContainer)(context);
    const emailController = container.get(email_daily_update_service_1.EmailDailyUpdateService);
    await emailController.sendDailyUpdates();
}
functions_1.app.timer('timerEmailDailyUpdate', {
    schedule: '0 0 4 * * 1-5',
    handler: emailDailyUpdate,
});
//# sourceMappingURL=timer-email-daily-update.js.map