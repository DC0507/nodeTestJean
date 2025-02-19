"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("@azure/functions");
const timer_bus_process_alert_daily_summary_1 = require("../functions/timer-bus-process-alert-daily-summary");
const context = new functions_1.InvocationContext();
context.log = (...args) => {
    console.log(...args);
};
(0, timer_bus_process_alert_daily_summary_1.processAlertDailySummary)(null, context);
//# sourceMappingURL=test-alert-summary.js.map