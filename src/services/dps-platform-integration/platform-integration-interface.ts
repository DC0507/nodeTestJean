import { Action } from '../../shared/graphql/jarvis';
import { CompanyIntegration } from '../../shared/graphql/jarvis';

export interface IPlatformIntegration {
  (
    integrationConfig: CompanyIntegration,
    actions: Action[],
    title: string,
    sendToEmails: string[],
  ): Promise<string>;
}
