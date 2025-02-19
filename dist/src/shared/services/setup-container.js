"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupContainer = setupContainer;
const inversify_1 = require("inversify");
const functions_1 = require("@azure/functions");
require("reflect-metadata");
const jarvis_service_1 = require("./jarvis.service");
const email_service_1 = require("./email.service");
const activity_log_service_1 = require("./activity-log.service");
const email_fysa_service_1 = require("../../services/email-fysa/email-fysa.service");
const graphql_client_service_1 = require("./graphql-client.service");
const alert_processing_service_1 = require("../../services/alert-processing/alert-processing.service");
const alert_summary_processing_service_1 = require("../../services/alert-processing/alert-summary-processing.service");
const everbridge_integration_service_1 = require("../../services/everbridge-integration/everbridge-integration.service");
const dps_platform_integration_service_1 = require("../../services/dps-platform-integration/dps-platform-integration.service");
const email_daily_update_service_1 = require("../../services/email-daily-update/email-daily-update.service");
const email_dps_service_1 = require("../../services/email-dps/email-dps.service");
const email_subscription_expiry_service_1 = require("../../services/email-subscription-expiry/email-subscription-expiry.service");
const load_azure_search_service_1 = require("../../services/load-azure-search/load-azure-search.service");
const email_template_testing_service_1 = require("../../services/email-template-testing/email-template-testing.service");
function setupContainer(context) {
    const container = new inversify_1.Container();
    // Register services using class types directly
    container.bind(jarvis_service_1.JarvisService).to(jarvis_service_1.JarvisService);
    container.bind(email_service_1.EmailService).to(email_service_1.EmailService);
    container.bind(activity_log_service_1.ActivityLogService).to(activity_log_service_1.ActivityLogService);
    container.bind(graphql_client_service_1.GraphQLClientService).to(graphql_client_service_1.GraphQLClientService);
    container.bind(email_fysa_service_1.EmailFYSAService).to(email_fysa_service_1.EmailFYSAService);
    container.bind(alert_processing_service_1.AlertProcessingService).to(alert_processing_service_1.AlertProcessingService);
    container.bind(email_template_testing_service_1.EmailTemplateTestingService).to(email_template_testing_service_1.EmailTemplateTestingService);
    container
        .bind(alert_summary_processing_service_1.AlertSummaryProcessingService)
        .to(alert_summary_processing_service_1.AlertSummaryProcessingService);
    container.bind(everbridge_integration_service_1.EverbridgeIntegrationService).to(everbridge_integration_service_1.EverbridgeIntegrationService);
    container
        .bind(dps_platform_integration_service_1.DPSPlatformIntegrationService)
        .to(dps_platform_integration_service_1.DPSPlatformIntegrationService);
    container.bind(email_daily_update_service_1.EmailDailyUpdateService).to(email_daily_update_service_1.EmailDailyUpdateService);
    container
        .bind(email_dps_service_1.EmailDailyProtestSummaryService)
        .to(email_dps_service_1.EmailDailyProtestSummaryService);
    container
        .bind(email_subscription_expiry_service_1.EmailSubscriptionExpiryService)
        .to(email_subscription_expiry_service_1.EmailSubscriptionExpiryService);
    container.bind(load_azure_search_service_1.LoadAzureSearchService).to(load_azure_search_service_1.LoadAzureSearchService);
    // Conditionally bind InvocationContext if context is provided
    if (context) {
        container.bind(functions_1.InvocationContext).toConstantValue(context);
    }
    return container;
}
//# sourceMappingURL=setup-container.js.map