import { EmailTemplateTestingService } from '../services/email-template-testing/email-template-testing.service';
import { setupContainer } from '../shared/services/setup-container';

const container = setupContainer();
const emailDPSService = container.get(EmailTemplateTestingService);

emailDPSService.emailActionsSample();
