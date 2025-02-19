import { Container } from 'inversify';
import { InvocationContext } from '@azure/functions';
import 'reflect-metadata';

// Import your services
import { Logger } from '../utils/logger';
import { JarvisService } from './jarvis.service';
import { EmailService } from './email.service';
import { ActivityLogService } from './activity-log.service';
import { EmailFYSAService } from '../../services/email-fysa/email-fysa.service';
import { GraphQLClientService } from './graphql-client.service';
import { AlertProcessingService } from '../../services/alert-processing/alert-processing.service';
import { AlertSummaryProcessingService } from '../../services/alert-processing/alert-summary-processing.service';
import { EverbridgeIntegrationService } from '../../services/everbridge-integration/everbridge-integration.service';
import { DPSPlatformIntegrationService } from '../../services/dps-platform-integration/dps-platform-integration.service';
import { EmailDailyUpdateService } from '../../services/email-daily-update/email-daily-update.service';
import { EmailDailyProtestSummaryService } from '../../services/email-dps/email-dps.service';
import { EmailSubscriptionExpiryService } from '../../services/email-subscription-expiry/email-subscription-expiry.service';
import { LoadAzureSearchService } from '../../services/load-azure-search/load-azure-search.service';
import { EmailTemplateTestingService } from '../../services/email-template-testing/email-template-testing.service';

export function setupContainer(context?: InvocationContext): Container {
  const container = new Container();

  // Register services using class types directly
  container.bind(JarvisService).to(JarvisService);
  container.bind(EmailService).to(EmailService);
  container.bind(ActivityLogService).to(ActivityLogService);
  container.bind(GraphQLClientService).to(GraphQLClientService);
  container.bind(EmailFYSAService).to(EmailFYSAService);
  container.bind(AlertProcessingService).to(AlertProcessingService);
  container.bind(EmailTemplateTestingService).to(EmailTemplateTestingService)
  container
    .bind(AlertSummaryProcessingService)
    .to(AlertSummaryProcessingService);
  container.bind(EverbridgeIntegrationService).to(EverbridgeIntegrationService);
  container
    .bind(DPSPlatformIntegrationService)
    .to(DPSPlatformIntegrationService);
  container.bind(EmailDailyUpdateService).to(EmailDailyUpdateService);
  container
    .bind(EmailDailyProtestSummaryService)
    .to(EmailDailyProtestSummaryService);
  container
    .bind(EmailSubscriptionExpiryService)
    .to(EmailSubscriptionExpiryService);
  container.bind(LoadAzureSearchService).to(LoadAzureSearchService);

  // Conditionally bind InvocationContext if context is provided
  if (context) {
    container.bind(InvocationContext).toConstantValue(context);
  }

  return container;
}
