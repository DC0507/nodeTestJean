"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const everbridge_integration_service_1 = require("../services/everbridge-integration/everbridge-integration.service");
const setup_container_1 = require("../shared/services/setup-container");
const container = (0, setup_container_1.setupContainer)();
const everbridgeIntegrationService = container.get(everbridge_integration_service_1.EverbridgeIntegrationService);
everbridgeIntegrationService.processIntegration();
//# sourceMappingURL=everbridge-integration.js.map