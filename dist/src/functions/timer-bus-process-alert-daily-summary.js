"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processAlertDailySummary = processAlertDailySummary;
const service_bus_1 = require("@azure/service-bus");
const functions_1 = require("@azure/functions");
const jarvis_common_1 = require("jarvis-common");
const config_service_1 = require("../shared/config/config.service");
const setup_container_1 = require("../shared/services/setup-container");
const alert_summary_processing_service_1 = require("../services/alert-processing/alert-summary-processing.service");
//import { AbortController } from "@azure/abort-controller";
// This can be used control when the round-robin processing will terminate
// by calling abortController.abort().
const abortController = new AbortController();
// utility function to create a timer that can be refreshed
function createRefreshableTimer(timeoutMs, resolve) {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => resolve(), timeoutMs);
    };
}
async function processAlertDailySummary(myTimer, context) {
    if (!config_service_1.configService.isProduction &&
        !config_service_1.configService.getValue('SERVICES').includes('ALERTS')) {
        context.log(`ALERTS service is not enabled, skipping execution of processAlertDailySummary`);
        return;
    }
    const serviceBusClient = new service_bus_1.ServiceBusClient(config_service_1.configService.getValue('jarvismq_SERVICEBUS'));
    const queueName = (0, jarvis_common_1.getServiceBusName)(config_service_1.configService.getValue('BUS_EMAIL_ALERT_BATCH_QUEUE'));
    const sessionIdleTimeoutMs = 500;
    let sessionReceiver;
    do {
        sessionReceiver = null;
        try {
            context.log('checking for new sessions');
            sessionReceiver = await serviceBusClient.acceptNextSession(queueName, {
                maxAutoLockRenewalDurationInMs: sessionIdleTimeoutMs,
            });
        }
        catch (err) {
            if ((0, service_bus_1.isServiceBusError)(err) &&
                (err.code === 'SessionCannotBeLocked' || err.code === 'ServiceTimeout')) {
                context.log(`INFO: no available sessions.. done.`);
            }
            else {
                context.log(`Error when creating the receiver for next available session`, err);
            }
            // this is the exit of the while loop
            break;
        }
        context.log(`processing alerts for ${sessionReceiver.sessionId}`);
        const messages = [];
        const sessionFullyRead = new Promise((resolveSessionAsFullyRead, rejectSessionWithError) => {
            const refreshTimer = createRefreshableTimer(sessionIdleTimeoutMs, resolveSessionAsFullyRead);
            refreshTimer();
            sessionReceiver.subscribe({
                async processMessage(msg) {
                    refreshTimer();
                    //   console.log(
                    //     `--> [${msg.sessionId}] received message`
                    //   );
                    messages.push(msg.body);
                },
                async processError(args) {
                    rejectSessionWithError(args.error);
                },
            }, {
                abortSignal: abortController.signal,
            });
        });
        await sessionFullyRead;
        context.log(`${sessionReceiver.sessionId} processed, ${messages.length} posts to alert`);
        const container = (0, setup_container_1.setupContainer)(context);
        const alertProcessingService = container.get(alert_summary_processing_service_1.AlertSummaryProcessingService);
        await alertProcessingService.processSummaryAlerts(sessionReceiver.sessionId, messages);
        context.log(` *** done processing alerts for ${sessionReceiver.sessionId}`);
    } while (true);
    //console.log("out of loop");
    await serviceBusClient.close();
    context.log(`Exiting...`);
}
if (config_service_1.configService.getValue('BUS_EMAIL_ALERT_BATCH_QUEUE')) {
    functions_1.app.timer('busProcessAlertDailySummary', {
        schedule: '0 0 17 * * 1-5',
        handler: processAlertDailySummary,
    });
}
else {
    console.log('BUS_EMAIL_ALERT_BATCH_QUEUE is not set, cannot start busProcessAlertDailySummary');
}
//# sourceMappingURL=timer-bus-process-alert-daily-summary.js.map