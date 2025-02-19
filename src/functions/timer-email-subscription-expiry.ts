import { EmailSubscriptionExpiryService } from '../services/email-subscription-expiry/email-subscription-expiry.service';
import { app, InvocationContext, Timer } from '@azure/functions';
import { setupContainer } from '../shared/services/setup-container';
import { configService } from '../shared/config/config.service';

export async function emailSubscriptionExpiry(
  myTimer: Timer,
  context: InvocationContext,
): Promise<void> {
  if (
    !configService.isProduction &&
    !configService.getValue('SERVICES').includes('SUBSCRIPTIONEXPIRY')
  ) {
    context.log(
      `SUBSCRIPTIONEXPIRY service is not enabled, skipping execution of emailSubscriptionExpiry`,
    );
    return;
  }

  context.log('Processing DPS Email Service');

  const container = setupContainer(context);
  const emailController = container.get(EmailSubscriptionExpiryService);

  await emailController.checkSubscriptions();
}

app.timer('timerEmailSubscriptionExpiry', {
  schedule: '0 0 10 * * 1-5',
  handler: emailSubscriptionExpiry,
});
