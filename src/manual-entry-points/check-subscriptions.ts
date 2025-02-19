import { EmailSubscriptionExpiryService } from '../services/email-subscription-expiry/email-subscription-expiry.service';
import { setupContainer } from '../shared/services/setup-container';

const container = setupContainer();
const emailSubscriptionExpiry = container.get(EmailSubscriptionExpiryService);

emailSubscriptionExpiry.checkSubscriptions();
