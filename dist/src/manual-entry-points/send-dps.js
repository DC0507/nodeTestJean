"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const email_dps_service_1 = require("../services/email-dps/email-dps.service");
const setup_container_1 = require("../shared/services/setup-container");
const container = (0, setup_container_1.setupContainer)();
const emailDPSService = container.get(email_dps_service_1.EmailDailyProtestSummaryService);
emailDPSService.distributeDPS();
//# sourceMappingURL=send-dps.js.map