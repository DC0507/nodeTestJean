import { EverbridgeIntegrationService } from '../services/everbridge-integration/everbridge-integration.service';
import { setupContainer } from '../shared/services/setup-container';

const container = setupContainer();
const everbridgeIntegrationService = container.get(
  EverbridgeIntegrationService,
);

everbridgeIntegrationService.processIntegration();
