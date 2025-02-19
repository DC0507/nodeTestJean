import { app, InvocationContext, Timer } from '@azure/functions';
import { LoadAzureSearchService } from '../services/load-azure-search/load-azure-search.service';
import { setupContainer } from '../shared/services/setup-container';
import { configService } from '../shared/config/config.service';

export async function loadAzureSearch(
  myTimer: Timer,
  context: InvocationContext,
): Promise<void> {
  if (
    !configService.isProduction &&
    !configService.getValue('SERVICES').includes('AZURESEARCH')
  ) {
    context.log(
      `AZURESEARCH service is not enabled, skipping execution of loadAzureSearch`,
    );
    return;
  }

  context.log('Processing Load Azure Search');
  const container = setupContainer(context);
  const loadAzureSearchService = container.get(LoadAzureSearchService);

  await loadAzureSearchService.loadNewDocuments();
}

app.timer('timerLoadAzureSearch', {
  schedule: '0 */30 * * * *',
  handler: loadAzureSearch,
});
