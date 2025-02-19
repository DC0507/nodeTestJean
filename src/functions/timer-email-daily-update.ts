import { app, InvocationContext, Timer } from '@azure/functions';
import { setupContainer } from '../shared/services/setup-container';
import { configService } from '../shared/config/config.service';
import { EmailDailyUpdateService } from '../services/email-daily-update/email-daily-update.service';

export async function emailDailyUpdate(
  myTimer: Timer,
  context: InvocationContext,
): Promise<void> {
  if (
    !configService.isProduction &&
    !configService.getValue('SERVICES').includes('DAILYUPDATE')
  ) {
    context.log(
      `DAILYUPDATE service is not enabled, skipping execution of emailDailyUpdate`,
    );
    return;
  }

  context.log('Processing Daily Update Emailer');

  const container = setupContainer(context);
  const emailController = container.get(EmailDailyUpdateService);

  await emailController.sendDailyUpdates();
}

app.timer('timerEmailDailyUpdate', {
  schedule: '0 0 4 * * 1-5',
  handler: emailDailyUpdate,
});
