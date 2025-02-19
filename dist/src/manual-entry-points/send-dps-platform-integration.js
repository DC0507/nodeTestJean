"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dps_platform_integration_service_1 = require("../services/dps-platform-integration/dps-platform-integration.service");
const setup_container_1 = require("../shared/services/setup-container");
const container = (0, setup_container_1.setupContainer)();
const googleDPSService = container.get(dps_platform_integration_service_1.DPSPlatformIntegrationService);
googleDPSService.processIntegrations();
//googleDPSService.deleteOwnedFiles();
//# sourceMappingURL=send-dps-platform-integration.js.map