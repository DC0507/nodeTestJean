import { app, InvocationContext, Timer } from '@azure/functions';
import { EmailDailyProtestSummaryService } from '../services/email-dps/email-dps.service';
import { setupContainer } from '../shared/services/setup-container';
import { configService } from '../shared/config/config.service';

export async function emailDPS(
  myTimer: Timer,
  context: InvocationContext,
): Promise<void> {
  if (
    !configService.isProduction &&
    !configService.getValue('SERVICES').includes('DPS')
  ) {
    context.log(`DPS service is not enabled, skipping execution of emailDPS`);
    return;
  }

  context.log('Processing DPS Email Service');

  const container = setupContainer(context);
  const emailController = container.get(EmailDailyProtestSummaryService);

  await emailController.distributeDPS();
}

app.timer('timerEmailDPS', {
  schedule: '0 0 10 * * 1-5',
  handler: emailDPS,
});
