"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const email_daily_update_service_1 = require("../services/email-daily-update/email-daily-update.service");
const setup_container_1 = require("../shared/services/setup-container");
const container = (0, setup_container_1.setupContainer)();
const emailController = container.get(email_daily_update_service_1.EmailDailyUpdateService);
emailController.sendDailyUpdates();
//# sourceMappingURL=send-daily.js.map