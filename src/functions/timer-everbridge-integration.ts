import { app, InvocationContext, Timer } from '@azure/functions';
import { EverbridgeIntegrationService } from '../services/everbridge-integration/everbridge-integration.service';
import { setupContainer } from '../shared/services/setup-container';
import { configService } from '../shared/config/config.service';

export async function everbridgeIntegration(
  myTimer: Timer,
  context: InvocationContext,
): Promise<void> {
  if (
    !configService.isProduction &&
    !configService.getValue('SERVICES').includes('EVERBRIDGE')
  ) {
    context.log(
      `EVERBRIDGE service is not enabled, skipping execution of everbridgeIntegration`,
    );
    return;
  }

  context.log('Processing Everbridge Integration');
  const container = setupContainer(context);
  const everbridgeIntegrationService = container.get(
    EverbridgeIntegrationService,
  );

  await everbridgeIntegrationService.processIntegration();
}

app.timer('timerEverbridgeIntegration', {
  schedule: '0 */30 * * * *',
  handler: everbridgeIntegration,
});
