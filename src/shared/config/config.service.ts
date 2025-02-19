import { BaseConfigService } from "jarvis-common";

const configService = new BaseConfigService(process.env).ensureValues([
  'AZURE_FUNCTIONS_ENVIRONMENT', // environment: development, production, staging
  'jarvismq_SERVICEBUS', // service bus connection string
  'BUS_EMAIL_ALERT_QUEUE',
  'BUS_EMAIL_ALERT_BATCH_QUEUE',
  'BUS_PUBLISHED_POST_TOPIC',
]);

export { configService };
