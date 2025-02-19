import { app, InvocationContext, Timer } from '@azure/functions';
import { DPSPlatformIntegrationService } from '../services/dps-platform-integration/dps-platform-integration.service';
import { setupContainer } from '../shared/services/setup-container';
import { configService } from '../shared/config/config.service';

export async function dpsPlatformIntegration(
  myTimer: Timer,
  context: InvocationContext,
): Promise<void> {
  if (
    !configService.isProduction &&
    !configService.getValue('SERVICES').includes('DPSPLATFORM')
  ) {
    context.log(
      `DPSPLATFORM service is not enabled, skipping execution of dpsPlatformIntegration`,
    );
    return;
  }

  context.log('Processing DPS Platform Integration');
  const container = setupContainer(context);
  const dpsPlatformIntegrationService = container.get(
    DPSPlatformIntegrationService,
  );

  await dpsPlatformIntegrationService.processIntegrations();
}

app.timer('timerDPSPlatformIntegration', {
  schedule: '0 0 7,10,13,16,19 * * 1-5',
  handler: dpsPlatformIntegration,
});
