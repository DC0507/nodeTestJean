"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishedPostProcessAlerts = publishedPostProcessAlerts;
const functions_1 = require("@azure/functions");
const setup_container_1 = require("../shared/services/setup-container");
const alert_processing_service_1 = require("../services/alert-processing/alert-processing.service");
const config_service_1 = require("../shared/config/config.service");
const jarvis_common_1 = require("jarvis-common");
async function publishedPostProcessAlerts(message, context, test = false) {
    if (!config_service_1.configService.isProduction) {
        context.log('receivePublishedPostProcessAlerts received message in non-production environment');
        context.log(message);
    }
    if (!config_service_1.configService.isProduction &&
        !config_service_1.configService.getValue('SERVICES').includes('ALERTS')) {
        context.log(` !! ALERTS service is not enabled, skipping execution of publishedPostProcessAlerts`);
        return;
    }
    const container = (0, setup_container_1.setupContainer)(context);
    const alertProcessingService = container.get(alert_processing_service_1.AlertProcessingService);
    await alertProcessingService.processAlert(message);
}
if (config_service_1.configService.getValue('BUS_PUBLISHED_POST_TOPIC')) {
    functions_1.app.serviceBusTopic('receivePublishedPostProcessAlerts', {
        connection: 'jarvismq_SERVICEBUS',
        topicName: (0, jarvis_common_1.getServiceBusName)(config_service_1.configService.getValue('BUS_PUBLISHED_POST_TOPIC')),
        subscriptionName: 'process-alerts',
        handler: publishedPostProcessAlerts,
    });
}
else {
    console.log('BUS_PUBLISHED_POST_TOPIC is not set, cannot start receivePublishedPostProcessAlerts');
}
//# sourceMappingURL=bus-rx-published-post-process-alerts.js.map