"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const email_subscription_expiry_service_1 = require("../services/email-subscription-expiry/email-subscription-expiry.service");
const setup_container_1 = require("../shared/services/setup-container");
const container = (0, setup_container_1.setupContainer)();
const emailSubscriptionExpiry = container.get(email_subscription_expiry_service_1.EmailSubscriptionExpiryService);
emailSubscriptionExpiry.checkSubscriptions();
//# sourceMappingURL=check-subscriptions.js.map