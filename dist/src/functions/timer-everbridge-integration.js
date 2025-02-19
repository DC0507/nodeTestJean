"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.everbridgeIntegration = everbridgeIntegration;
const functions_1 = require("@azure/functions");
const everbridge_integration_service_1 = require("../services/everbridge-integration/everbridge-integration.service");
const setup_container_1 = require("../shared/services/setup-container");
const config_service_1 = require("../shared/config/config.service");
async function everbridgeIntegration(myTimer, context) {
    if (!config_service_1.configService.isProduction &&
        !config_service_1.configService.getValue('SERVICES').includes('EVERBRIDGE')) {
        context.log(`EVERBRIDGE service is not enabled, skipping execution of everbridgeIntegration`);
        return;
    }
    context.log('Processing Everbridge Integration');
    const container = (0, setup_container_1.setupContainer)(context);
    const everbridgeIntegrationService = container.get(everbridge_integration_service_1.EverbridgeIntegrationService);
    await everbridgeIntegrationService.processIntegration();
}
functions_1.app.timer('timerEverbridgeIntegration', {
    schedule: '0 */30 * * * *',
    handler: everbridgeIntegration,
});
//# sourceMappingURL=timer-everbridge-integration.js.map