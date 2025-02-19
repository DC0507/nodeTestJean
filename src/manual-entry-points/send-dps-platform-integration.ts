import { DPSPlatformIntegrationService } from '../services/dps-platform-integration/dps-platform-integration.service';
import { setupContainer } from '../shared/services/setup-container';

const container = setupContainer();
const googleDPSService = container.get(DPSPlatformIntegrationService);

googleDPSService.processIntegrations();
//googleDPSService.deleteOwnedFiles();
