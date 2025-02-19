"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const email_template_testing_service_1 = require("../services/email-template-testing/email-template-testing.service");
const setup_container_1 = require("../shared/services/setup-container");
const container = (0, setup_container_1.setupContainer)();
const emailDPSService = container.get(email_template_testing_service_1.EmailTemplateTestingService);
emailDPSService.emailActionsSample();
//# sourceMappingURL=email-test.js.map