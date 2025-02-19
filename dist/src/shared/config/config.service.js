"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configService = void 0;
const jarvis_common_1 = require("jarvis-common");
const configService = new jarvis_common_1.BaseConfigService(process.env).ensureValues([
    'AZURE_FUNCTIONS_ENVIRONMENT', // environment: development, production, staging
    'jarvismq_SERVICEBUS', // service bus connection string
    'BUS_EMAIL_ALERT_QUEUE',
    'BUS_EMAIL_ALERT_BATCH_QUEUE',
    'BUS_PUBLISHED_POST_TOPIC',
]);
exports.configService = configService;
//# sourceMappingURL=config.service.js.map