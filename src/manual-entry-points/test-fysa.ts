import { EmailFYSAService } from '../services/email-fysa/email-fysa.service';
import { setupContainer } from '../shared/services/setup-container';

const fysaInputGoogle = {
  message: 'common message',
  entries: [
    {
      subscriptionId: 'cd5f9165-670d-403c-9b20-ed16ae3d4f66',
      message: 'unique message',
      articleIds: [
        '80cf6567-b59e-4e7d-ade6-ee709ce5dce4',
        'a1474376-8d5a-45fd-a6d2-39dfa5d027bf',
        '5c444820-40d0-401b-a69e-368968a473f2',
        'e205da05-185d-4da6-8a2b-df67f2a92ddb',
        'a1474376-8d5a-45fd-a6d2-39dfa5d027bf',
      ],
      actionIds: [
        'cfdbd433-a461-4f90-9a02-69b42904d572',
        'ed225ba7-f7c5-405b-ad1e-60319e7dead7',
        '2e76d7e2-7b74-430b-994c-82d944ce0beb',
        '4104fa36-3822-4eed-9655-13b7f114232b',
        '2f7f63d7-4c94-4f29-9672-539e0e5574f6',
        'db0a588d-166d-4180-802f-0b192c91b3f8',
        'cfdbd433-a461-4f90-9a02-69b42904d572',
        'a63026bd-a65f-420b-a4bc-7ccce8cbb2e2',
        '70b3ac4f-0e09-47bb-8372-4758bcff3eff',
        '0ee231d7-e2fc-4b4a-a7c2-9b9adfbb5bf0',
        '0aa72874-9d4c-4f77-90bd-8349ec0ce0a3',
      ],
    },
  ],
};
const fysaInputBlackrock = {
  message: 'common message',
  entries: [
    {
      subscriptionId: 'e82c6a10-ad82-4b72-874e-0e409276c756',
      message: 'unique message',
      articleIds: [
        '80cf6567-b59e-4e7d-ade6-ee709ce5dce4',
        'a1474376-8d5a-45fd-a6d2-39dfa5d027bf',
        '5c444820-40d0-401b-a69e-368968a473f2',
        'e205da05-185d-4da6-8a2b-df67f2a92ddb',
        'a1474376-8d5a-45fd-a6d2-39dfa5d027bf',
      ],
      actionIds: [
        'cfdbd433-a461-4f90-9a02-69b42904d572',
        'ed225ba7-f7c5-405b-ad1e-60319e7dead7',
        '2e76d7e2-7b74-430b-994c-82d944ce0beb',
        '4104fa36-3822-4eed-9655-13b7f114232b',
        '2f7f63d7-4c94-4f29-9672-539e0e5574f6',
        'db0a588d-166d-4180-802f-0b192c91b3f8',
        'cfdbd433-a461-4f90-9a02-69b42904d572',
        'a63026bd-a65f-420b-a4bc-7ccce8cbb2e2',
        '70b3ac4f-0e09-47bb-8372-4758bcff3eff',
        '0ee231d7-e2fc-4b4a-a7c2-9b9adfbb5bf0',
        '0aa72874-9d4c-4f77-90bd-8349ec0ce0a3',
      ],
    },
  ],
};

const container = setupContainer();
const emailFYSAService = container.get(EmailFYSAService);

emailFYSAService.processFYSAInput(
  fysaInputGoogle,
  'katie@foresightreports.com',
  true,
).then((results) => {
  console.log(JSON.stringify(results, null, 2));
});
