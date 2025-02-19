import { EmailDailyProtestSummaryService } from '../services/email-dps/email-dps.service';
import { setupContainer } from '../shared/services/setup-container';

const container = setupContainer();
const emailDPSService = container.get(EmailDailyProtestSummaryService);

emailDPSService.distributeDPS();
