import { EmailDailyUpdateService } from '../services/email-daily-update/email-daily-update.service';
import { setupContainer } from '../shared/services/setup-container';

const container = setupContainer();
const emailController = container.get(EmailDailyUpdateService);

emailController.sendDailyUpdates(true, '2025-01-15');
