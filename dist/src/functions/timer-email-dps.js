"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailDPS = emailDPS;
const functions_1 = require("@azure/functions");
const email_dps_service_1 = require("../services/email-dps/email-dps.service");
const setup_container_1 = require("../shared/services/setup-container");
const config_service_1 = require("../shared/config/config.service");
async function emailDPS(myTimer, context) {
    if (!config_service_1.configService.isProduction &&
        !config_service_1.configService.getValue('SERVICES').includes('DPS')) {
        context.log(`DPS service is not enabled, skipping execution of emailDPS`);
        return;
    }
    context.log('Processing DPS Email Service');
    const container = (0, setup_container_1.setupContainer)(context);
    const emailController = container.get(email_dps_service_1.EmailDailyProtestSummaryService);
    await emailController.distributeDPS();
}
functions_1.app.timer('timerEmailDPS', {
    schedule: '0 0 10 * * 1-5',
    handler: emailDPS,
});
//# sourceMappingURL=timer-email-dps.js.map