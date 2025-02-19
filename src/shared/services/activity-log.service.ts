import { injectable } from 'inversify';
import {
  ActivityLogAggregateDocument,
  ActivityLogType,
  CreateOneActivityLogDocument,
} from '../graphql/jarvis';
import { GraphQLClientService } from './graphql-client.service';
import { GRAPHQL_MINDATE } from 'jarvis-common';

@injectable()
export class ActivityLogService {
  constructor(private readonly graphqlClient: GraphQLClientService) {}

  async getLast(type: ActivityLogType, referenceId: string): Promise<Date> {
    const results = await this.getActivityLogAggregate(type, referenceId);
    if (results && results.length > 0) return new Date(results[0].max.updated);
    return GRAPHQL_MINDATE;
  }

  private async getActivityLogAggregate(
    type: ActivityLogType,
    referenceId: string,
  ) {
    try {
      const results = await this.graphqlClient.client.query({
        query: ActivityLogAggregateDocument,
        variables: {
          filter: {
            referenceId: {
              eq: referenceId,
            },
            type: {
              eq: type,
            },
          },
        },
        fetchPolicy: 'no-cache',
      });
      const maxUpdatedByGroup = results.data.activityLogAggregate;
      if (!maxUpdatedByGroup) return [];
      return maxUpdatedByGroup;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async create(
    activity: ActivityLogType,
    details = '',
    referenceEntity: string | null,
    referenceId: string | null,
    createdBy: string,
  ) {
    try {
      const results = await this.graphqlClient.client.mutate({
        mutation: CreateOneActivityLogDocument,
        variables: {
          input: {
            activityLog: {
              type: activity,
              referenceEntity: referenceEntity,
              referenceId: referenceId,
              details,
              createdBy,
            },
          },
        },
      });
      return results.data.createOneActivityLog.created;
    } catch (e) {
      console.log(JSON.stringify(e));
      throw e;
    }
  }
}
