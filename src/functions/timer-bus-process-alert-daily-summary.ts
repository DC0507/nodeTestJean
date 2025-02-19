import { ServiceBusClient, isServiceBusError } from '@azure/service-bus';
import { EmailService } from '../shared/services/email.service';
import moment from 'moment';
import { app, InvocationContext, Timer } from '@azure/functions';
import { GraphQLClientService } from '../shared/services/graphql-client.service';
import {
  ClientNotificationType,
  CreateOneClientNotificationDocument,
  AlertEntry,
  AlertDeliveryMethod,
} from '../shared/graphql/jarvis';
import {
  DATE_LONG_FORMAT,
  getServiceBusName,
  HTMLEmailMessage,
  HTMLEmailMessageType,
} from 'jarvis-common';
import { configService } from '../shared/config/config.service';
import { setupContainer } from '../shared/services/setup-container';
import { AlertSummaryProcessingService } from '../services/alert-processing/alert-summary-processing.service';
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

export async function processAlertDailySummary(
  myTimer: Timer,
  context: InvocationContext,
): Promise<void> {
  if (
    !configService.isProduction &&
    !configService.getValue('SERVICES').includes('ALERTS')
  ) {
    context.log(
      `ALERTS service is not enabled, skipping execution of processAlertDailySummary`,
    );
    return;
  }

  const serviceBusClient = new ServiceBusClient(
    configService.getValue('jarvismq_SERVICEBUS'),
  );
  const queueName = getServiceBusName(
    configService.getValue('BUS_EMAIL_ALERT_BATCH_QUEUE'),
  );
  const sessionIdleTimeoutMs = 500;

  let sessionReceiver;
  do {
    sessionReceiver = null;
    try {
      context.log('checking for new sessions');
      sessionReceiver = await serviceBusClient.acceptNextSession(queueName, {
        maxAutoLockRenewalDurationInMs: sessionIdleTimeoutMs,
      });
    } catch (err) {
      if (
        isServiceBusError(err) &&
        (err.code === 'SessionCannotBeLocked' || err.code === 'ServiceTimeout')
      ) {
        context.log(`INFO: no available sessions.. done.`);
      } else {
        context.log(
          `Error when creating the receiver for next available session`,
          err,
        );
      }
      // this is the exit of the while loop
      break;
    }

    context.log(`processing alerts for ${sessionReceiver.sessionId}`);

    const messages = [];
    const sessionFullyRead = new Promise(
      (resolveSessionAsFullyRead, rejectSessionWithError) => {
        const refreshTimer = createRefreshableTimer(
          sessionIdleTimeoutMs,
          resolveSessionAsFullyRead,
        );
        refreshTimer();

        sessionReceiver.subscribe(
          {
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
          },
          {
            abortSignal: abortController.signal,
          },
        );
      },
    );

    await sessionFullyRead;
    context.log(
      `${sessionReceiver.sessionId} processed, ${messages.length} posts to alert`,
    );

      const container = setupContainer(context);
      const alertProcessingService = container.get(AlertSummaryProcessingService);
      await alertProcessingService.processSummaryAlerts(sessionReceiver.sessionId, messages);
      context.log(` *** done processing alerts for ${sessionReceiver.sessionId}`);
  } while (true);

  //console.log("out of loop");
  await serviceBusClient.close();
  context.log(`Exiting...`);
}

if (configService.getValue('BUS_EMAIL_ALERT_BATCH_QUEUE')) {
  app.timer('busProcessAlertDailySummary', {
    schedule: '0 0 17 * * 1-5',
    handler: processAlertDailySummary,
  });
} else {
  console.log(
    'BUS_EMAIL_ALERT_BATCH_QUEUE is not set, cannot start busProcessAlertDailySummary',
  );
}
