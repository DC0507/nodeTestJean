"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JarvisService = void 0;
const jarvis_1 = require("../graphql/jarvis");
const inversify_1 = require("inversify");
const moment_1 = __importDefault(require("moment"));
const jarvis_common_1 = require("jarvis-common");
const graphql_client_service_1 = require("./graphql-client.service");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let JarvisService = class JarvisService extends graphql_client_service_1.GraphQLClientService {
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
    async getActionsByDateWindow(from, to, protest, dateField = 'actionDate', audienceArray = null) {
        try {
            let results = [];
            let cursor = null;
            const query = {
                query: jarvis_1.ActionsDocument,
                variables: {
                    paging: {
                        first: 1000,
                        after: cursor,
                    },
                    filter: {
                        and: [
                            { status: { eq: jarvis_1.PostStatus.Published } },
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
                query.variables.filter.and.push({
                    or: audienceArray.map((x) => {
                        return { audienceRaw: { iLike: `%${x}%` } };
                    }),
                });
            }
            // add the appropriate date related filter
            if (dateField === 'actionDate') {
                // actionDate
                query.variables.filter.and.push((0, jarvis_common_1.getDateRangeFilterQuery)('date', moment_1.default.utc(from).startOf('day').toISOString().substring(0, 10), moment_1.default.utc(to).toISOString().substring(0, 10), 'endDate'));
            }
            else {
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
                results = results.concat(this.extractArrayResults(pagedResults));
            } while (!!cursor);
            return results;
        }
        catch (e) {
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
    async getRawActionsForClient(clientId, modifiedSince = null, audienceArray = null) {
        try {
            let results = [];
            let cursor = null;
            const query = {
                query: jarvis_1.ActionsDocument,
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
                                    gt: modifiedSince ??
                                        (0, moment_1.default)().utc().startOf('day').toISOString(),
                                },
                            },
                            { date: { gt: (0, moment_1.default)().utc().startOf('day').toISOString() } },
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
                query.variables.filter.and.push({
                    or: audienceArray.map((x) => {
                        return { audienceRaw: { iLike: `%${x}%` } };
                    }),
                });
            }
            do {
                query.variables.paging.after = cursor;
                const pagedResults = await this.client.query(query);
                cursor = pagedResults.data.actions.pageInfo.endCursor;
                results = results.concat(this.extractArrayResults(pagedResults));
            } while (!!cursor);
            return results;
        }
        catch (e) {
            console.log(JSON.stringify(e));
            throw e;
        }
    }
    /**
     * Get actions by ids
     * @param actionIds: string[] - array of action ids
     * @returns Promise<Article[]>
     */
    async getActionsByIds(actionIds) {
        try {
            const rsp = await this.client.query({
                query: jarvis_1.ActionsDocument,
                variables: {
                    filter: {
                        id: {
                            in: actionIds,
                        },
                    },
                },
            });
            return this.extractArrayResults(rsp);
            // return rsp.data.actions.edges.map((x: any) => x.node);
        }
        catch (e) {
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
    async getArticlesByCreatedDateWindow(from, to, audienceArray = null) {
        try {
            let cursor = null;
            let results = [];
            const query = {
                query: jarvis_1.ArticlesDocument,
                variables: {
                    paging: {
                        first: 1000,
                        after: cursor,
                    },
                    filter: {
                        and: [
                            { status: { eq: jarvis_1.PostStatus.Published } },
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
                query.variables.filter.and.push({
                    or: audienceArray.map((x) => {
                        return { audienceRaw: { iLike: `%${x}%` } };
                    }),
                });
            }
            do {
                query.variables.paging.after = cursor;
                const pagedResults = await this.client.query(query);
                cursor = pagedResults.data.articles.pageInfo.endCursor;
                results = results.concat(this.extractArrayResults(pagedResults));
            } while (!!cursor);
            return results;
        }
        catch (e) {
            console.log(JSON.stringify(e));
            throw e;
        }
    }
    /**
     * Get articles by ids
     * @param articleIds: string[] - array of article ids
     * @returns Promise<Article[]>
     */
    async getArticlesByIds(articleIds) {
        try {
            const rsp = await this.client.query({
                query: jarvis_1.ArticlesDocument,
                variables: {
                    filter: {
                        id: {
                            in: articleIds,
                        },
                    },
                },
            });
            return rsp.data.articles.edges.map((x) => x.node);
        }
        catch (e) {
            console.log(JSON.stringify(e));
            throw e;
        }
    }
    /**
     * Get active users for a company. Does not account for user's email preferences.
     * @param companyId
     * @returns Promise<CompanyContact[]>
     */
    async getUsersByCompany(companyId) {
        try {
            const rsp = await this.client.query({
                query: jarvis_1.CompanyContactsDocument,
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
            return rsp.data.companyContacts.edges.map((x) => x.node);
        }
        catch (e) {
            console.log(JSON.stringify(e));
            throw e;
        }
    }
    /**
     * Get portal preferences for a list of emails
     * @param emails
     * @returns Promise<PortalPreference[]>
     */
    async getPortalPreferencesForUsers(emails) {
        try {
            const rsp = await this.client.query({
                query: jarvis_1.PortalPreferencesDocument,
                variables: {
                    filter: {
                        email: {
                            in: emails,
                        },
                    },
                },
            });
            return rsp.data.portalPreferences.edges.map((x) => x.node);
        }
        catch (e) {
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
    async getAlerts() {
        const graphql = new graphql_client_service_1.GraphQLClientService();
        try {
            let results = [];
            let cursor = null;
            const query = {
                query: jarvis_1.PortalPreferencesAlertsDocument,
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
                results = results.concat(graphql.extractArrayResults(pagedResults));
            } while (!!cursor);
            return results;
        }
        catch (e) {
            console.log(JSON.stringify(e));
            throw e;
        }
    }
    /**
     * Get a subscription by id
     * @param annualSubscriptionId
     * @returns Promise<AnnualSubscription>
     */
    async getSubscription(annualSubscriptionId) {
        try {
            const rsp = await this.client.query({
                query: jarvis_1.AnnualSubscriptionDocument,
                variables: {
                    annualSubscriptionId,
                },
            });
            return rsp.data?.annualSubscription;
        }
        catch (e) {
            console.log(JSON.stringify(e));
            throw e;
        }
    }
    /**
     * Get all active subscriptions
     * @returns Promise<AnnualSubscription[]>
     */
    async getSubscriptions() {
        try {
            const rsp = await this.client.query({
                query: jarvis_1.AnnualSubscriptionsDocument,
                variables: {
                    filter: {
                        isActive: {
                            is: true,
                        },
                    },
                },
            });
            return rsp.data.annualSubscriptions.edges.map((x) => x.node);
        }
        catch (e) {
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
    async getGsheetIntegrations() {
        try {
            const rsp = await this.client.query({
                query: jarvis_1.CompanyIntegrationsLightDocument,
                variables: {
                    filter: {
                        type: {
                            eq: jarvis_1.IntegrationType.Gsheet,
                        },
                    },
                },
            });
            return rsp.data.companyIntegrations.edges.map((x) => x.node);
        }
        catch (e) {
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
    async getServiceAndPlatformNotifications(companyId = null) {
        try {
            const filter = {
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
                query: jarvis_1.ClientNotificationsDocument,
                variables: {
                    filter,
                },
            });
            return rsp.data.clientNotifications.edges.map((x) => x.node);
        }
        catch (e) {
            console.log(JSON.stringify(e));
            throw e;
        }
    }
    /**
     * Get user context for an email
     * @param email
     * @returns Promise<UserContext>
     */
    async getUserContext(email) {
        try {
            const rsp = await this.client.query({
                query: jarvis_1.UserContextDocument,
                variables: {
                    email: email,
                },
            });
            return rsp.data.getUserContext;
        }
        catch (e) {
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
    async checkUserContext(email) {
        try {
            const userProfileResults = await this.client.query({
                query: jarvis_1.CheckUserContextDocument,
                variables: {
                    email: email,
                },
            });
            const userProfile = userProfileResults.data?.getUserContext;
            return userProfile;
        }
        catch (e) {
            console.log(JSON.stringify(e));
            throw e;
        }
    }
    /**
     * Create a client notification
     * @param clientNotification
     * @returns Promise<ClientNotification>
     */
    async createClientNotification(clientNotification) {
        try {
            const rsp = await this.client.mutate({
                mutation: jarvis_1.CreateOneClientNotificationDocument,
                variables: {
                    input: {
                        clientNotification,
                    },
                },
            });
            return rsp.data.createOneClientNotification;
        }
        catch (e) {
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
    async getAnnualSubscriptionsExpiringBefore(date) {
        try {
            const rsp = await this.client.query({
                query: jarvis_1.AnnualSubscriptionsSummaryDocument,
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
            return rsp.data.annualSubscriptions.edges.map((x) => x.node);
        }
        catch (e) {
            console.log(JSON.stringify(e));
            throw e;
        }
    }
    /**
     * Get all future annual subscriptions
     * Does NOT use a cursor, results expected to be < 1000
     * @returns Promise<AnnualSubscription[]>
     */
    async getFutureAnnualSubscriptions() {
        try {
            const rsp = await this.client.query({
                query: jarvis_1.AnnualSubscriptionsSummaryDocument,
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
            return rsp.data.annualSubscriptions.edges.map((x) => x.node);
        }
        catch (e) {
            console.log(JSON.stringify(e));
            throw e;
        }
    }
    /**
     * Get all active internal users
     * Does NOT use a cursor, results expected to be < 1000
     * @returns Promise<AdUser[]>
     */
    async getEmployeeUsers() {
        try {
            const rsp = await this.client.query({
                query: jarvis_1.AdUsersDocument,
                variables: {},
            });
            return rsp.data.adUsers.edges.map((x) => x.node);
        }
        catch (e) {
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
    async filterSubscriptionEmailsByPreferences(subscriber, distributionType) {
        const sendToEmails = [];
        const optedOut = [];
        const users = subscriber.client.contacts?.filter((x) => x.inActive !== true) ?? [];
        // get all the user's preferences
        const userPreferences = await this.getPortalPreferencesForUsers(users?.map((x) => x.email));
        for (const user of users) {
            if ((0, jarvis_common_1.checkEmailPreferences)(userPreferences.find((x) => x.email === user.email), distributionType)) {
                sendToEmails.push(user.email);
            }
            else {
                optedOut.push(user.email);
            }
        }
        console.log(`  > checking ${subscriber.client.name} emails for (${distributionType})`);
        console.log(`  ! emails subscribed: : [${sendToEmails.join(', ')}]`);
        console.log(`  ! emails opted out: [${optedOut.join(', ')}]`);
        return { sendToEmails, optedOut };
    }
};
exports.JarvisService = JarvisService;
exports.JarvisService = JarvisService = __decorate([
    (0, inversify_1.injectable)()
], JarvisService);
//# sourceMappingURL=jarvis.service.js.map