"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dpsPlatformIntegration = dpsPlatformIntegration;
const functions_1 = require("@azure/functions");
const dps_platform_integration_service_1 = require("../services/dps-platform-integration/dps-platform-integration.service");
const setup_container_1 = require("../shared/services/setup-container");
const config_service_1 = require("../shared/config/config.service");
async function dpsPlatformIntegration(myTimer, context) {
    if (!config_service_1.configService.isProduction &&
        !config_service_1.configService.getValue('SERVICES').includes('DPSPLATFORM')) {
        context.log(`DPSPLATFORM service is not enabled, skipping execution of dpsPlatformIntegration`);
        return;
    }
    context.log('Processing DPS Platform Integration');
    const container = (0, setup_container_1.setupContainer)(context);
    const dpsPlatformIntegrationService = container.get(dps_platform_integration_service_1.DPSPlatformIntegrationService);
    await dpsPlatformIntegrationService.processIntegrations();
}
functions_1.app.timer('timerDPSPlatformIntegration', {
    schedule: '0 0 7,10,13,16,19 * * 1-5',
    handler: dpsPlatformIntegration,
});
//# sourceMappingURL=timer-dps-platform-integration.js.map