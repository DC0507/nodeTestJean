import {
  app,
  HttpRequest,
  InvocationContext,
  HttpResponseInit,
} from '@azure/functions';
import { IFYSAInput, IFYSAInputSchema } from '../services/email-fysa/fysa-interfaces';
import { authMiddleware } from '../shared/middleware/auth';
import { EmailFYSAService } from '../services/email-fysa/email-fysa.service';
import { setupContainer } from '../shared/services/setup-container';
import { configService } from '../shared/config/config.service';

// Define the handler function
async function sendFYFA(
  request: HttpRequest,
  context: InvocationContext,
): Promise<HttpResponseInit> {
  try {
    // Apply the JWT auth middleware
    try {
      await authMiddleware(context, request);
    } catch (err) {
      return {
        status: 401,
        body: 'Authentication failed.',
      };
    }

    const requestBody = await request.json();
    if (!configService.isProduction) {
      context.log('sendFYSA received message in non-production environment');
      context.log(requestBody);
    }

    if (
      !configService.isProduction &&
      !configService.getValue('SERVICES').includes('FYSA')
    ) {
      context.log(
        `FYSA service is not enabled, skipping execution of sendFYFA`,
      );
      return;
    }

    const user: any = context.extraInputs.get('user');

    // validate the request body
    const parseResult = IFYSAInputSchema.safeParse(requestBody);
    if (!parseResult.success) {
      return {
        status: 400,
        body: `Invalid request body: ${JSON.stringify(
          parseResult.error.format(),
        )}`,
      };
    }
    const fysaInput: IFYSAInput = parseResult.data;

    const container = setupContainer(context);
    const sendFYSAService = container.get(EmailFYSAService);

    const results = await sendFYSAService.processFYSAInput(fysaInput, user.emails[0]);

    return {
      status: 200,
      body: JSON.stringify(['FYSA Processed Successfully'].concat(results))
    };
  } catch (e) {
    console.error(e);
    return {
      status: 500,
      body: `Error processing FYSA: ${e}`,
    };
  }
}

app.http('sendFYSA', {
  methods: ['POST'],
  authLevel: 'anonymous',
  handler: sendFYFA,
});
