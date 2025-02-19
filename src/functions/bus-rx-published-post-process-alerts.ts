import { app, InvocationContext } from '@azure/functions';
import { setupContainer } from '../shared/services/setup-container';
import { AlertProcessingService } from '../services/alert-processing/alert-processing.service';
import { configService } from '../shared/config/config.service';
import { getServiceBusName } from 'jarvis-common';

export async function publishedPostProcessAlerts(
  message: any,
  context: InvocationContext,
  test = false,
): Promise<void> {
  if(!configService.isProduction){
    context.log('receivePublishedPostProcessAlerts received message in non-production environment');
    context.log(message);
  }

  if (
    !configService.isProduction &&
    !configService.getValue('SERVICES').includes('ALERTS')
  ) {
    context.log(
      ` !! ALERTS service is not enabled, skipping execution of publishedPostProcessAlerts`,
    );
    return;
  }

  const container = setupContainer(context);
  const alertProcessingService = container.get(AlertProcessingService);
  await alertProcessingService.processAlert(message);
}

if (configService.getValue('BUS_PUBLISHED_POST_TOPIC')) {
  app.serviceBusTopic('receivePublishedPostProcessAlerts', {
    connection: 'jarvismq_SERVICEBUS',
    topicName: getServiceBusName(configService.getValue('BUS_PUBLISHED_POST_TOPIC')),
    subscriptionName: 'process-alerts',
    handler: publishedPostProcessAlerts,
  });
} else {
  console.log(
    'BUS_PUBLISHED_POST_TOPIC is not set, cannot start receivePublishedPostProcessAlerts',
  );
}
