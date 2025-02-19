import {
  Action,
  Article,
  CompanyContact,
  ClientNotification,
  AnnualSubscription,
  AdUser,
  AnnualSubscriptionsDocument,
  AnnualSubscriptionsSummaryDocument,
  ClientNotificationsDocument,
  CompanyContactsDocument,
  PostStatus,
  UserContextDocument,
  UserContext,
  AdUsersDocument,
  CompanyIntegration,
  IntegrationType,
  ClientNotificationDto,
  CreateOneClientNotificationDocument,
  PortalPreferencesDocument,
  PortalPreference,
  CompanyIntegrationsLightDocument,
  CheckUserContextDocument,
  PortalPreferencesAlertsDocument,
  AnnualSubscriptionDocument,
  ActionsDocument,
  ArticlesDocument,
} from '../graphql/jarvis';
import { injectable } from 'inversify';
import moment from 'moment';
import {
  checkEmailPreferences,
  getDateRangeFilterQuery,
  EmailDistributionType,
} from 'jarvis-common';
import { GraphQLClientService } from './graphql-client.service';
import dotenv from 'dotenv';
dotenv.config();

@injectable()
export class JarvisService extends GraphQLClientService {
  /**
   * Get actions by date window, supporting either lastModifiedDate or the action's date.
   * Action's Date requires a complex filter accounting for the start and end date of the action and addressing timeline overlap conditions.
   * Uses cursor to ensure all alerts are returned. Could take long time to run.
   * @param from
   * @param to
   * @param protest
   * @param dateField  'actionDate' or 'lastModifiedDate', defaults to 'actionDate'
   * @param audienceArray
   * @returns Promise<Action[]>
   */
  async getActionsByDateWindow(
    from: Date,
    to: Date,
    protest: boolean,
    dateField: 'actionDate' | 'lastModifiedDate' = 'actionDate',
    audienceArray: string[] | null = null,
  ): Promise<Action[]> {
    try {
      let results: Action[] = [];
      let cursor = null;
      const query: any = {
        query: ActionsDocument,
        variables: {
          paging: {
            first: 1000,
            after: cursor,
          },
          filter: {
            and: [
              { status: { eq: PostStatus.Published } },
              {
                tactic: {
                  protest: {
                    is: protest,
                  },
                },
              },
            ],
          },
        },
      };
      if (audienceArray) {
        (query.variables.filter.and as any[]).push({
          or: audienceArray.map((x) => {
            return { audienceRaw: { iLike: `%${x}%` } };
          }),
        });
      }
      // add the appropriate date related filter
      if (dateField === 'actionDate') {
        // actionDate
        query.variables.filter.and.push(
          getDateRangeFilterQuery(
            'date',
            moment.utc(from).startOf('day').toISOString().substring(0, 10),
            moment.utc(to).toISOString().substring(0, 10),
            'endDate',
          ),
        );
      } else {
        // lastModifiedDate
        query.variables.filter.and.push({
          lastModifiedDate: {
            between: {
              lower: from,
              upper: to,
            },
          },
        });
      }
      do {
        query.variables.paging.after = cursor;
        const pagedResults = await this.client.query(query);
        cursor = pagedResults.data.actions.pageInfo.endCursor;
        results = results.concat(
          this.extractArrayResults<Action>(pagedResults),
        );
      } while (!!cursor);

      return results;
    } catch (e) {
      console.log(JSON.stringify(e));
      throw e;
    }
  }

  /**
   * Get raw actions that either targets a client or is of interest to a client.
   * Uses cursor to ensure all alerts are returned. Could take long time to run.
   * @param clientId
   * @param modifiedSince
   * @param audienceArray
   * @returns Promise<Action[]>
   */
  async getRawActionsForClient(
    clientId: string,
    modifiedSince: Date = null,
    audienceArray: string[] | null = null,
  ): Promise<Action[]> {
    try {
      let results: Action[] = [];
      let cursor = null;
      const query: any = {
        query: ActionsDocument,
        variables: {
          paging: {
            first: 1000,
            after: cursor,
          },
          filter: {
            and: [
              { status: { eq: 'Published' } },
              {
                lastModifiedDate: {
                  gt:
                    modifiedSince ??
                    moment().utc().startOf('day').toISOString(),
                },
              },
              { date: { gt: moment().utc().startOf('day').toISOString() } },
              { type: { eq: 'RawAction' } },
              {
                or: [
                  {
                    companies: {
                      id: { eq: clientId },
                    },
                  },
                  {
                    ofInterestTo: {
                      id: { eq: clientId },
                    },
                  },
                ],
              },
            ],
          },
        },
      };
      if (audienceArray) {
        (query.variables.filter.and as any[]).push({
          or: audienceArray.map((x) => {
            return { audienceRaw: { iLike: `%${x}%` } };
          }),
        });
      }
      do {
        query.variables.paging.after = cursor;
        const pagedResults = await this.client.query(query);
        cursor = pagedResults.data.actions.pageInfo.endCursor;
        results = results.concat(
          this.extractArrayResults<Action>(pagedResults),
        );
      } while (!!cursor);
      return results;
    } catch (e) {
      console.log(JSON.stringify(e));
      throw e;
    }
  }

  /**
   * Get actions by ids
   * @param actionIds: string[] - array of action ids
   * @returns Promise<Article[]>
   */
  async getActionsByIds(actionIds: string[]): Promise<Action[]> {
    try {
      const rsp = await this.client.query({
        query: ActionsDocument,
        variables: {
          filter: {
            id: {
              in: actionIds,
            },
          },
        },
      });
      return this.extractArrayResults<Action>(rsp);
      // return rsp.data.actions.edges.map((x: any) => x.node);
    } catch (e) {
      console.log(JSON.stringify(e));
      throw e;
    }
  }

  /**
   * Get articles by created date window.
   * Uses cursor to ensure all alerts are returned. Could take long time to run.
   * @param from
   * @param to
   * @param audienceArray
   * @returns Promise<Article[]>
   */
  async getArticlesByCreatedDateWindow(
    from: Date,
    to: Date,
    audienceArray: string[] | null = null,
  ): Promise<Article[]> {
    try {
      let cursor = null;
      let results: Article[] = [];
      const query: any = {
        query: ArticlesDocument,
        variables: {
          paging: {
            first: 1000,
            after: cursor,
          },
          filter: {
            and: [
              { status: { eq: PostStatus.Published } },
              {
                lastModifiedDate: {
                  between: {
                    lower: from,
                    upper: to,
                  },
                },
              },
            ],
          },
        },
      };
      // restrict the results to allowed audiences for on subscription
      if (audienceArray) {
        (query.variables.filter.and as any[]).push({
          or: audienceArray.map((x) => {
            return { audienceRaw: { iLike: `%${x}%` } };
          }),
        });
      }

      do {
        query.variables.paging.after = cursor;
        const pagedResults = await this.client.query(query);
        cursor = pagedResults.data.articles.pageInfo.endCursor;
        results = results.concat(
          this.extractArrayResults<Article>(pagedResults),
        );
      } while (!!cursor);

      return results;
    } catch (e) {
      console.log(JSON.stringify(e));
      throw e;
    }
  }

  /**
   * Get articles by ids
   * @param articleIds: string[] - array of article ids
   * @returns Promise<Article[]>
   */
  async getArticlesByIds(articleIds: string[]): Promise<Article[]> {
    try {
      const rsp = await this.client.query({
        query: ArticlesDocument,
        variables: {
          filter: {
            id: {
              in: articleIds,
            },
          },
        },
      });
      return rsp.data.articles.edges.map((x: any) => x.node);
    } catch (e) {
      console.log(JSON.stringify(e));
      throw e;
    }
  }

  /**
   * Get active users for a company. Does not account for user's email preferences.
   * @param companyId
   * @returns Promise<CompanyContact[]>
   */
  async getUsersByCompany(companyId: string): Promise<CompanyContact[]> {
    try {
      const rsp = await this.client.query({
        query: CompanyContactsDocument,
        variables: {
          filter: {
            inActive: {
              is: false,
            },
            company: {
              id: { eq: companyId },
            },
          },
        },
      });
      return rsp.data.companyContacts.edges.map((x: any) => x.node);
    } catch (e) {
      console.log(JSON.stringify(e));
      throw e;
    }
  }

  /**
   * Get portal preferences for a list of emails
   * @param emails
   * @returns Promise<PortalPreference[]>
   */
  async getPortalPreferencesForUsers(
    emails: string[],
  ): Promise<PortalPreference[]> {
    try {
      const rsp = await this.client.query({
        query: PortalPreferencesDocument,
        variables: {
          filter: {
            email: {
              in: emails,
            },
          },
        },
      });
      return rsp.data.portalPreferences.edges.map((x: any) => x.node);
    } catch (e) {
      console.log(JSON.stringify(e));
      throw e;
    }
  }

  /**
   * Get all non-null alerts from the portal preferences entity. Note this DOES NOT account for users being
   * inactive or not having a subscription. TODO: fix this.
   * Uses cursor to ensure all alerts are returned. Could take long time to run.
   * @returns Promise<PortalPreference[]>
   */
  async getAlerts(): Promise<PortalPreference[]> {
    const graphql = new GraphQLClientService();
    try {
      let results: PortalPreference[] = [];
      let cursor = null;
      const query = {
        query: PortalPreferencesAlertsDocument,
        variables: {
          filter: {
            alerts: {
              isNot: null,
            },
          },
          paging: {
            first: 1000,
            after: cursor,
          },
        },
      };

      do {
        query.variables.paging.after = cursor;
        const pagedResults = await graphql.client.query(query);
        cursor = pagedResults.data.portalPreferences.pageInfo.endCursor;
        results = results.concat(
          graphql.extractArrayResults<PortalPreference>(pagedResults),
        );
      } while (!!cursor);

      return results;
    } catch (e) {
      console.log(JSON.stringify(e));
      throw e;
    }
  }

  /**
   * Get a subscription by id
   * @param annualSubscriptionId
   * @returns Promise<AnnualSubscription>
   */
  async getSubscription(
    annualSubscriptionId: string,
  ): Promise<AnnualSubscription> {
    try {
      const rsp = await this.client.query({
        query: AnnualSubscriptionDocument,
        variables: {
          annualSubscriptionId,
        },
      });
      return rsp.data?.annualSubscription;
    } catch (e) {
      console.log(JSON.stringify(e));
      throw e;
    }
  }

  /**
   * Get all active subscriptions
   * @returns Promise<AnnualSubscription[]>
   */
  async getSubscriptions(): Promise<AnnualSubscription[]> {
    try {
      const rsp = await this.client.query({
        query: AnnualSubscriptionsDocument,
        variables: {
          filter: {
            isActive: {
              is: true,
            },
          },
        },
      });
      return rsp.data.annualSubscriptions.edges.map((x: any) => x.node);
    } catch (e) {
      console.log(JSON.stringify(e));
      throw e;
    }
  }

  /**
   * Get all integrations for a company which are of type Gsheet.
   * Does NOT use a cursor, results expected to be < 1000
   * @param companyId
   * @returns Promise<CompanyIntegration[]>
   */
  async getGsheetIntegrations(): Promise<CompanyIntegration[]> {
    try {
      const rsp = await this.client.query({
        query: CompanyIntegrationsLightDocument,
        variables: {
          filter: {
            type: {
              eq: IntegrationType.Gsheet,
            },
          },
        },
      });
      return rsp.data.companyIntegrations.edges.map((x: any) => x.node);
    } catch (e) {
      console.log(JSON.stringify(e));
      throw e;
    }
  }

  /**
   * Get all active notifications (a notification is active if now between start and end date)
   * Does NOT use a cursor, results expected to be < 1000
   * @param companyId optional
   * @returns Promise<ClientNotification[]>
   */
  async getServiceAndPlatformNotifications(
    companyId: string | null = null,
  ): Promise<ClientNotification[]> {
    try {
      const filter: any = {
        type: {
          in: ['Service', 'Platform'],
        },
        isActive: {
          is: true,
        },
        or: [
          {
            companies: {
              id: {
                is: null,
              },
            },
          },
        ],
      };

      if (companyId) {
        filter.or.push({
          companies: {
            id: {
              eq: companyId,
            },
          },
        });
      }

      //console.log(JSON.stringify(filter));
      const rsp = await this.client.query({
        query: ClientNotificationsDocument,
        variables: {
          filter,
        },
      });
      return rsp.data.clientNotifications.edges.map((x: any) => x.node);
    } catch (e) {
      console.log(JSON.stringify(e));
      throw e;
    }
  }

  /**
   * Get user context for an email
   * @param email
   * @returns Promise<UserContext>
   */
  async getUserContext(email: string): Promise<UserContext> {
    try {
      const rsp = await this.client.query({
        query: UserContextDocument,
        variables: {
          email: email,
        },
      });
      return rsp.data.getUserContext;
    } catch (e) {
      console.log(JSON.stringify(e));
      throw e;
    }
  }

  /**
   * Check if a user has a user context (to validate if they are active with a subscription).
   * Similar to getUserContext, but uses a lighterweight query.
   * @param email
   * @returns Promise<UserContext>
   */
  async checkUserContext(email: string): Promise<UserContext> {
    try {
      const userProfileResults = await this.client.query({
        query: CheckUserContextDocument,
        variables: {
          email: email,
        },
      });
      const userProfile = userProfileResults.data?.getUserContext;
      return userProfile;
    } catch (e) {
      console.log(JSON.stringify(e));
      throw e;
    }
  }

  /**
   * Create a client notification
   * @param clientNotification
   * @returns Promise<ClientNotification>
   */
  async createClientNotification(
    clientNotification: ClientNotificationDto,
  ): Promise<ClientNotification> {
    try {
      const rsp = await this.client.mutate({
        mutation: CreateOneClientNotificationDocument,
        variables: {
          input: {
            clientNotification,
          },
        },
      });
      return rsp.data.createOneClientNotification;
    } catch (e) {
      console.log(JSON.stringify(e));
      throw e;
    }
  }

  /**
   * Get all subscriptions expiring before a given date
   * Does NOT use a cursor, results expected to be < 1000
   * @param date
   * @returns Promise<AnnualSubscription[]>
   */
  async getAnnualSubscriptionsExpiringBefore(
    date: Date,
  ): Promise<AnnualSubscription[]> {
    try {
      const rsp = await this.client.query({
        query: AnnualSubscriptionsSummaryDocument,
        variables: {
          filter: {
            and: [
              {
                endDate: {
                  lte: date.toISOString(),
                },
              },
              {
                isActive: {
                  is: true,
                },
              },
            ],
          },
        },
      });
      return rsp.data.annualSubscriptions.edges.map((x: any) => x.node);
    } catch (e) {
      console.log(JSON.stringify(e));
      throw e;
    }
  }

  /**
   * Get all future annual subscriptions
   * Does NOT use a cursor, results expected to be < 1000
   * @returns Promise<AnnualSubscription[]>
   */
  async getFutureAnnualSubscriptions(): Promise<AnnualSubscription[]> {
    try {
      const rsp = await this.client.query({
        query: AnnualSubscriptionsSummaryDocument,
        variables: {
          filter: {
            and: [
              {
                startDate: {
                  gte: new Date().toISOString(),
                },
              },
              {
                isActive: {
                  is: false,
                },
              },
            ],
          },
        },
      });
      return rsp.data.annualSubscriptions.edges.map((x: any) => x.node);
    } catch (e) {
      console.log(JSON.stringify(e));
      throw e;
    }
  }

  /**
   * Get all active internal users
   * Does NOT use a cursor, results expected to be < 1000
   * @returns Promise<AdUser[]>
   */
  async getEmployeeUsers(): Promise<AdUser[]> {
    try {
      const rsp = await this.client.query({
        query: AdUsersDocument,
        variables: {},
      });
      return rsp.data.adUsers.edges.map((x: any) => x.node);
    } catch (e) {
      console.log(JSON.stringify(e));
      throw e;
    }
  }

  /**
   * Filter subscription emails by user preferences
   * @param subscriber AnnualSubscription, with clients sub-entity collection
   * @param distributionType which EmailDistributionType to filter by
   * @returns Promise<{sendToEmails: string[], optedOut: string[]}>
   */
  async filterSubscriptionEmailsByPreferences(
    subscriber: AnnualSubscription,
    distributionType: EmailDistributionType,
  ) {
    const sendToEmails = [];
    const optedOut = [];

    const users =
      subscriber.client.contacts?.filter((x) => x.inActive !== true) ?? [];
    // get all the user's preferences
    const userPreferences = await this.getPortalPreferencesForUsers(
      users?.map((x) => x.email),
    );

    for (const user of users) {
      if (
        checkEmailPreferences(
          userPreferences.find((x) => x.email === user.email),
          distributionType,
        )
      ) {
        sendToEmails.push(user.email);
      } else {
        optedOut.push(user.email);
      }
    }

    console.log(
      `  > checking ${subscriber.client.name} emails for (${distributionType})`,
    );
    console.log(`  ! emails subscribed: : [${sendToEmails.join(', ')}]`);
    console.log(`  ! emails opted out: [${optedOut.join(', ')}]`);

    return { sendToEmails, optedOut };
  }
}
