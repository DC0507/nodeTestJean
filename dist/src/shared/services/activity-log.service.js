"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityLogService = void 0;
const inversify_1 = require("inversify");
const jarvis_1 = require("../graphql/jarvis");
const graphql_client_service_1 = require("./graphql-client.service");
const jarvis_common_1 = require("jarvis-common");
let ActivityLogService = class ActivityLogService {
    constructor(graphqlClient) {
        this.graphqlClient = graphqlClient;
    }
    async getLast(type, referenceId) {
        const results = await this.getActivityLogAggregate(type, referenceId);
        if (results && results.length > 0)
            return new Date(results[0].max.updated);
        return jarvis_common_1.GRAPHQL_MINDATE;
    }
    async getActivityLogAggregate(type, referenceId) {
        try {
            const results = await this.graphqlClient.client.query({
                query: jarvis_1.ActivityLogAggregateDocument,
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
            if (!maxUpdatedByGroup)
                return [];
            return maxUpdatedByGroup;
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }
    async create(activity, details = '', referenceEntity, referenceId, createdBy) {
        try {
            const results = await this.graphqlClient.client.mutate({
                mutation: jarvis_1.CreateOneActivityLogDocument,
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
        }
        catch (e) {
            console.log(JSON.stringify(e));
            throw e;
        }
    }
};
exports.ActivityLogService = ActivityLogService;
exports.ActivityLogService = ActivityLogService = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [graphql_client_service_1.GraphQLClientService])
], ActivityLogService);
//# sourceMappingURL=activity-log.service.js.map