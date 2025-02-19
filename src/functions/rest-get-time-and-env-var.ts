import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from '@azure/functions';
import { configService } from '../shared/config/config.service';

export async function getTimeAndEnvVar(
  request: HttpRequest,
  context: InvocationContext,
): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  return {
    status: 200,
    body: `PORTAL_FROM_EMAIL : ${
      configService.getValue('PORTAL_FROM_EMAIL')
    }, CURRENT_TIME : ${Math.floor(
      new Date().getTime() / 1000,
    )}, CURRENT LOCAL TIME : ${new Date().toLocaleString()}`,
  };
}

app.http('getTimeAndEnvVar', {
  methods: ['GET'],
  authLevel: 'anonymous',
  handler: getTimeAndEnvVar,
});
