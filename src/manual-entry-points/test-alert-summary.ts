import { InvocationContext } from '@azure/functions';
import { processAlertDailySummary } from '../functions/timer-bus-process-alert-daily-summary';

const context = new InvocationContext();
context.log = (...args: any[]) => {
  console.log(...args);
};

processAlertDailySummary(null, context);
