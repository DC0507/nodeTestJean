import { injectable } from 'inversify';
import { EmailCoreService } from 'jarvis-common';
import { configService } from '../config/config.service';

@injectable()
export class EmailService extends EmailCoreService {
  constructor() {
    super({
      defaultFrom: configService.getValue('PORTAL_FROM_EMAIL'),
      defaultTo: configService.getValue('PORTAL_TO_EMAIL'),
      apiKey: configService.getValue('MAILJET_API_KEY'),
      apiSecret: configService.getValue('MAILJET_API_SECRET'),
      releaseEmails: configService.getValue('RELEASE_EMAILS') === 'true',
    });
  }
  sendHTMLEmailInternal(subject: string, htmlBody: string) {
    return super.sendHTMLEmail(this.defaultTo, subject, htmlBody);
  }
}
