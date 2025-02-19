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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadAzureSearchService = void 0;
const inversify_1 = require("inversify");
const jarvis_1 = require("../../shared/graphql/jarvis");
const jarvis_service_1 = require("../../shared/services/jarvis.service");
const to_delete_1 = require("./to-delete");
const dotenv_1 = __importDefault(require("dotenv"));
const functions_1 = require("@azure/functions");
const logger_1 = require("../../shared/utils/logger");
const config_service_1 = require("../../shared/config/config.service");
dotenv_1.default.config();
const apiVersion = 'api-version=2023-10-01-Preview';
let LoadAzureSearchService = class LoadAzureSearchService {
    constructor(jarvisService, invocationContext) {
        this.jarvisService = jarvisService;
        this.invocationContext = invocationContext;
        this.getHeaders = () => {
            return {
                'Content-Type': 'application/json',
                'api-key': config_service_1.configService.getValue('SEARCH_API_KEY'),
            };
        };
        this.getMostRecentIndexEntry = async (rootType) => {
            const response = await fetch(`https://${this.searchInstance}.search.windows.net/indexes/${this.searchIndex}/docs?search=*&$orderby=updated desc&$top=1&$filter=rootType eq '${rootType}'&${apiVersion}`, {
                method: 'GET',
                headers: this.getHeaders(),
            });
            const result = await response.json(); //extract JSON from the http response
            if (result?.value?.length == 0)
                return new Date('2000-01-01');
            return result.value[0].updated;
        };
        this.deleteDocument = async (id) => {
            const response = await fetch(`https://${this.searchInstance}.search.windows.net/indexes/${this.searchIndex}/docs/index?${apiVersion}`, {
                method: 'post',
                headers: this.getHeaders(),
                body: JSON.stringify({
                    value: [
                        {
                            '@search.action': 'delete',
                            id: id,
                        },
                    ],
                }),
            });
            const result = await response.json(); //extract JSON from the http response
            return result;
        };
        this.getIndexes = async () => {
            const response = await fetch(`https://${this.searchInstance}.search.windows.net/indexes?${apiVersion}&$select=name `, {
                method: 'GET',
                headers: this.getHeaders(),
            });
            const result = await response.json(); //extract JSON from the http response
            return result.value;
        };
        this.postToIndexJarisContent = async (content) => {
            const response = await fetch(`https://${this.searchInstance}.search.windows.net/indexes/${this.searchIndex}/docs/index?${apiVersion}`, {
                method: 'POST',
                body: JSON.stringify({ value: content }), // string or object
                headers: this.getHeaders(),
            });
            const result = await response.json(); //extract JSON from the http response
        };
        console.log(String.raw `
     ____.                  .__        
    |    |____ __________  _|__| ______
    |    \__  \\_  __ \  \/ /  |/  ___/
/\__|    |/ __ \|  | \/\   /|  |\___ \ 
\________(____  /__|    \_/ |__/____  )
              \/                    \/  Azure Search Synchronization Utility`);
        this.logger = new logger_1.Logger('LoadAzureSearchService', invocationContext);
        this.logger.info(`Connecting to: ${config_service_1.configService.getValue('GRAPHQL_SERVER')}\n\n`);
        this.searchInstance = config_service_1.configService.getValue('SEARCH_INSTANCE');
        this.searchIndex = config_service_1.configService.getValue('SEARCH_INDEX');
        this.logger.info(`azure search instance: ${this.searchInstance}`);
        this.logger.info(`azure search index: ${this.searchIndex}\n\n`);
    }
    async createNewIndex(name) {
        const indexMeta = {
            '@odata.context': `https://${this.searchInstance}.search.windows.net/$metadata#indexes/$entity`,
            '@odata.etag': '"0x8DB5D6C6E22D714"',
            name: name,
            defaultScoringProfile: null,
            fields: [
                {
                    name: 'id',
                    type: 'Edm.String',
                    searchable: false,
                    filterable: false,
                    retrievable: true,
                    sortable: false,
                    facetable: false,
                    key: true,
                    indexAnalyzer: null,
                    searchAnalyzer: null,
                    analyzer: null,
                    synonymMaps: [],
                },
                {
                    name: 'title',
                    type: 'Edm.String',
                    searchable: true,
                    filterable: false,
                    retrievable: true,
                    sortable: false,
                    facetable: false,
                    key: false,
                    indexAnalyzer: null,
                    searchAnalyzer: null,
                    analyzer: 'standard.lucene',
                    synonymMaps: [],
                },
                {
                    name: 'content',
                    type: 'Edm.String',
                    searchable: true,
                    filterable: false,
                    retrievable: true,
                    sortable: false,
                    facetable: false,
                    key: false,
                    indexAnalyzer: null,
                    searchAnalyzer: null,
                    analyzer: 'standard.lucene',
                    synonymMaps: [],
                },
                {
                    name: 'type',
                    type: 'Edm.String',
                    searchable: false,
                    filterable: true,
                    retrievable: true,
                    sortable: false,
                    facetable: true,
                    key: false,
                    indexAnalyzer: null,
                    searchAnalyzer: null,
                    analyzer: null,
                    synonymMaps: [],
                },
                {
                    name: 'rootType',
                    type: 'Edm.String',
                    searchable: false,
                    filterable: true,
                    retrievable: true,
                    sortable: false,
                    facetable: false,
                    key: false,
                    indexAnalyzer: null,
                    searchAnalyzer: null,
                    analyzer: null,
                    synonymMaps: [],
                },
                {
                    name: 'date',
                    type: 'Edm.DateTimeOffset',
                    searchable: false,
                    filterable: true,
                    retrievable: true,
                    sortable: true,
                    facetable: true,
                    key: false,
                    indexAnalyzer: null,
                    searchAnalyzer: null,
                    analyzer: null,
                    synonymMaps: [],
                },
                {
                    name: 'lastModifiedDate',
                    type: 'Edm.DateTimeOffset',
                    searchable: false,
                    filterable: true,
                    retrievable: true,
                    sortable: true,
                    facetable: true,
                    key: false,
                    indexAnalyzer: null,
                    searchAnalyzer: null,
                    analyzer: null,
                    synonymMaps: [],
                },
                {
                    name: 'updated',
                    type: 'Edm.DateTimeOffset',
                    searchable: false,
                    filterable: true,
                    retrievable: true,
                    sortable: true,
                    facetable: true,
                    key: false,
                    indexAnalyzer: null,
                    searchAnalyzer: null,
                    analyzer: null,
                    synonymMaps: [],
                },
                {
                    name: 'sectors',
                    type: 'Collection(Edm.String)',
                    searchable: true,
                    filterable: true,
                    retrievable: true,
                    sortable: false,
                    facetable: true,
                    key: false,
                    indexAnalyzer: null,
                    searchAnalyzer: null,
                    analyzer: 'standard.lucene',
                    synonymMaps: [],
                },
                {
                    name: 'geoLocation',
                    type: 'Collection(Edm.GeographyPoint)',
                    searchable: false,
                    filterable: true,
                    retrievable: true,
                    sortable: false,
                    facetable: false,
                    key: false,
                    indexAnalyzer: null,
                    searchAnalyzer: null,
                    analyzer: null,
                    normalizer: null,
                    dimensions: null,
                    synonymMaps: [],
                },
                {
                    name: 'companies',
                    type: 'Collection(Edm.String)',
                    searchable: true,
                    filterable: true,
                    retrievable: true,
                    sortable: false,
                    facetable: true,
                    key: false,
                    indexAnalyzer: null,
                    searchAnalyzer: null,
                    analyzer: 'standard.lucene',
                    synonymMaps: [],
                },
                {
                    name: 'groups',
                    type: 'Collection(Edm.String)',
                    searchable: true,
                    filterable: true,
                    retrievable: true,
                    sortable: false,
                    facetable: true,
                    key: false,
                    indexAnalyzer: null,
                    searchAnalyzer: null,
                    analyzer: 'standard.lucene',
                    synonymMaps: [],
                },
                {
                    name: 'campaigns',
                    type: 'Collection(Edm.String)',
                    searchable: true,
                    filterable: true,
                    retrievable: true,
                    sortable: false,
                    facetable: true,
                    key: false,
                    indexAnalyzer: null,
                    searchAnalyzer: null,
                    analyzer: 'standard.lucene',
                    synonymMaps: [],
                },
                {
                    name: 'issues',
                    type: 'Collection(Edm.String)',
                    searchable: true,
                    filterable: true,
                    retrievable: true,
                    sortable: false,
                    facetable: true,
                    key: false,
                    indexAnalyzer: null,
                    searchAnalyzer: null,
                    analyzer: 'standard.lucene',
                    synonymMaps: [],
                },
                {
                    name: 'tactic',
                    type: 'Edm.String',
                    searchable: true,
                    filterable: true,
                    retrievable: true,
                    sortable: false,
                    facetable: true,
                    key: false,
                    indexAnalyzer: null,
                    searchAnalyzer: null,
                    analyzer: 'standard.lucene',
                    synonymMaps: [],
                },
                {
                    name: 'region',
                    type: 'Edm.String',
                    searchable: true,
                    filterable: true,
                    retrievable: true,
                    sortable: false,
                    facetable: true,
                    key: false,
                    indexAnalyzer: null,
                    searchAnalyzer: null,
                    analyzer: 'standard.lucene',
                    synonymMaps: [],
                },
                {
                    name: 'location',
                    type: 'Edm.String',
                    searchable: true,
                    filterable: true,
                    retrievable: true,
                    sortable: false,
                    facetable: true,
                    key: false,
                    indexAnalyzer: null,
                    searchAnalyzer: null,
                    analyzer: 'standard.lucene',
                    synonymMaps: [],
                },
                {
                    name: 'impact',
                    type: 'Edm.String',
                    searchable: false,
                    filterable: true,
                    retrievable: true,
                    sortable: false,
                    facetable: true,
                    key: false,
                    indexAnalyzer: null,
                    searchAnalyzer: null,
                    analyzer: null,
                    synonymMaps: [],
                },
            ],
            scoringProfiles: [],
            corsOptions: {
                allowedOrigins: ['*'],
                maxAgeInSeconds: 300,
            },
            suggesters: [
                {
                    name: 'title-suggester',
                    searchMode: 'analyzingInfixMatching',
                    sourceFields: ['title'],
                },
            ],
            analyzers: [],
            tokenizers: [],
            tokenFilters: [],
            charFilters: [],
            encryptionKey: null,
            similarity: {
                '@odata.type': '#Microsoft.Azure.Search.BM25Similarity',
                k1: null,
                b: null,
            },
        };
        const response = await fetch(`https://${this.searchInstance}.search.windows.net/indexes/${name}?${apiVersion}`, {
            method: 'PUT',
            body: JSON.stringify(indexMeta), // string or object
            headers: this.getHeaders(),
        });
        const result = await response.json(); //extract JSON from the http response
        return result;
    }
    transformArticleForSearchIndex(input) {
        return {
            '@search.action': 'upload',
            id: input.id,
            title: input.title,
            content: input.content,
            type: 'Article',
            rootType: 'article',
            date: input.lastModifiedDate,
            lastModifiedDate: input.lastModifiedDate,
            updated: input.updated,
            geolocation: [],
            sectors: input.sectors ? input.sectors.map((x) => x.name) : [],
            companies: input.companies ? input.companies.map((x) => x.name) : [],
            groups: input.groups ? input.groups.map((x) => x.name) : [],
            campaigns: input.campaigns ? input.campaigns.map((x) => x.name) : [],
            issues: input.issues ? input.issues.map((x) => x.name) : [],
            tactic: '',
            location: input.location
                ? `${input.location.city}, ${input.location.province ? input.location.province + ', ' : ''} ${input.location.country}`
                : '',
            region: input.location?.region ? input.location?.region : '',
            audience: input.audience ? input.audience : 'Global',
            impact: '',
        };
    }
    transformActionForSearchIndex(input) {
        return {
            '@search.action': 'upload',
            id: input.id,
            title: input.title,
            content: input.content,
            type: !input.tactic
                ? 'Activity'
                : input.tactic?.protest
                    ? 'Protest'
                    : 'Activity',
            rootType: 'action',
            date: input.date,
            endDate: input.endDate,
            lastModifiedDate: input.lastModifiedDate,
            updated: input.updated,
            geolocation: input.longitude && input.latitude
                ? [
                    {
                        type: 'Point',
                        coordinates: [input.longitude, input.latitude],
                    },
                ]
                : [],
            sectors: input.sectors ? input.sectors.map((x) => x.name) : [],
            companies: input.companies ? input.companies.map((x) => x.name) : [],
            groups: input.groups ? input.groups.map((x) => x.name) : [],
            campaigns: input.campaigns ? input.campaigns.map((x) => x.name) : [],
            issues: input.issues ? input.issues.map((x) => x.name) : [],
            tactic: input.tactic ? input.tactic.name : '',
            location: input.location
                ? `${input.location.city}, ${input.location.province ? input.location.province + ', ' : ''} ${input.location.country}`
                : '',
            region: input.location?.region ? input.location?.region : '',
            audience: input.audience && input.audience.length > 0
                ? input.audience
                : ['Global'],
            impact: input.impact ? input.impact : '',
        };
    }
    async getDeletedPostsSince(from) {
        const rsp = await this.jarvisService.client.query({
            query: jarvis_1.PostsDeletedSinceDocument,
            variables: {
                since: from,
            },
        });
        return rsp.data.statsPostsDeletedSince;
    }
    async loadActionsUpdatedSince(from, to) {
        try {
            let cursor = null;
            let count = 0;
            do {
                const rsp = await this.jarvisService.client.query({
                    query: jarvis_1.ActionsForSearchDocument,
                    variables: {
                        paging: {
                            first: 50,
                            after: cursor,
                        },
                        filter: {
                            status: { eq: jarvis_1.PostStatus.Published },
                            updated: {
                                between: {
                                    lower: from,
                                    upper: to,
                                },
                            },
                        },
                        sorting: [
                            {
                                field: 'updated',
                                direction: 'ASC',
                            },
                        ],
                    },
                });
                const results = rsp.data.actions.edges.map((x) => x.node);
                count += results.length;
                cursor = rsp.data.actions.pageInfo.endCursor;
                if (results.length > 0) {
                    this.logger.info(`loading from ${results[0].updated}`);
                    const protestsForIndex = results.map((x) => this.transformActionForSearchIndex(x));
                    await this.postToIndexJarisContent(protestsForIndex);
                }
            } while (!!cursor);
            this.logger.info(`completed ${count}`);
            return count;
        }
        catch (e) {
            this.logger.error(e);
            throw e;
        }
    }
    async loadActionById(id) {
        try {
            let count = 0;
            const rsp = await this.jarvisService.client.query({
                query: jarvis_1.ActionsForSearchDocument,
                variables: {
                    filter: {
                        status: { eq: jarvis_1.PostStatus.Published },
                        id: {
                            eq: id,
                        },
                    },
                    sorting: [],
                },
            });
            const results = rsp.data.actions.edges.map((x) => x.node);
            count += results.length;
            if (results.length > 0) {
                this.logger.info(`loading from ${results[0].updated}`);
                const protestsForIndex = results.map((x) => this.transformActionForSearchIndex(x));
                await this.postToIndexJarisContent(protestsForIndex);
            }
            this.logger.info(`completed ${count}`);
            return count;
        }
        catch (e) {
            this.logger.error(e);
            throw e;
        }
    }
    async loadArticlesUpdatedSince(from, to) {
        try {
            let cursor = null;
            let count = 0;
            do {
                const rsp = await this.jarvisService.client.query({
                    query: jarvis_1.ArticlesForSearchDocument,
                    variables: {
                        paging: {
                            first: 50,
                            after: cursor,
                        },
                        filter: {
                            status: { eq: jarvis_1.PostStatus.Published },
                            updated: {
                                between: {
                                    lower: from,
                                    upper: to,
                                },
                            },
                        },
                        sorting: [
                            {
                                field: 'updated',
                                direction: 'ASC',
                            },
                        ],
                    },
                });
                const results = rsp.data.articles.edges.map((x) => x.node);
                count += results.length;
                cursor = rsp.data.articles.pageInfo.endCursor;
                if (results.length > 0) {
                    this.logger.info(`loading from ${results[0].updated}`);
                    const protestsForIndex = results.map((x) => this.transformArticleForSearchIndex(x));
                    await this.postToIndexJarisContent(protestsForIndex);
                }
            } while (!!cursor);
            this.logger.info(`completed ${count}`);
            return count;
        }
        catch (e) {
            this.logger.error(e);
            throw e;
        }
    }
    async loadArticleById(id) {
        try {
            let count = 0;
            const rsp = await this.jarvisService.client.query({
                query: jarvis_1.ArticlesForSearchDocument,
                variables: {
                    filter: {
                        status: { eq: jarvis_1.PostStatus.Published },
                        id: {
                            eq: id,
                        },
                    },
                    sorting: [],
                },
            });
            const results = rsp.data.articles.edges.map((x) => x.node);
            count += results.length;
            if (results.length > 0) {
                this.logger.info(`loading from ${results[0].updated}`);
                const protestsForIndex = results.map((x) => this.transformArticleForSearchIndex(x));
                await this.postToIndexJarisContent(protestsForIndex);
            }
            this.logger.info(`completed ${count}`);
            return count;
        }
        catch (e) {
            this.logger.error(e);
            throw e;
        }
    }
    async deleteDocuments() {
        for (const id of to_delete_1.toDelete) {
            this.logger.info(`deleting ${id}`);
            const results = await this.deleteDocument(id);
        }
    }
    async loadDocument(id) {
        await this.loadActionById(id);
        await this.loadArticleById(id);
    }
    async loadNewDocuments() {
        const now = new Date();
        const indexes = await this.getIndexes();
        // if (!indexes.some((x) => x.name === this.searchIndex)) {
        //   console.log(`creating index ${this.searchIndex}`);
        //   await this.createNewIndex(this.searchIndex);
        //   console.log("done creating index");
        // }
        //await this.jarvis.createActivityLog(ActivityLogType.Searchindexload);
        let lastRun = null;
        lastRun = await this.getMostRecentIndexEntry('action');
        let deletedSince = lastRun;
        this.logger.info(`building/updating azure search ${this.searchIndex} for actions index since ${lastRun}`);
        await this.loadActionsUpdatedSince(lastRun, now);
        lastRun = await this.getMostRecentIndexEntry('article');
        this.logger.info(`actions last run: ${deletedSince}, articles: ${lastRun}`);
        deletedSince = lastRun > deletedSince ? lastRun : deletedSince;
        this.logger.info(`building/updating azure search ${this.searchIndex} for articles index since ${lastRun}`);
        await this.loadArticlesUpdatedSince(lastRun, now);
        // Get start of day for deletedSince
        const startOfDay = new Date(deletedSince);
        startOfDay.setHours(0, 0, 0, 0);
        const deletedPosts = await this.getDeletedPostsSince(startOfDay);
        this.logger.info(`removing ${deletedPosts.length} entries since ${deletedSince}`);
        await Promise.all(deletedPosts.map((x) => (x.id ? this.deleteDocument(x.id) : null)));
    }
};
exports.LoadAzureSearchService = LoadAzureSearchService;
exports.LoadAzureSearchService = LoadAzureSearchService = __decorate([
    (0, inversify_1.injectable)(),
    __param(1, (0, inversify_1.inject)(functions_1.InvocationContext)),
    __param(1, (0, inversify_1.optional)()),
    __metadata("design:paramtypes", [jarvis_service_1.JarvisService,
        functions_1.InvocationContext])
], LoadAzureSearchService);
//# sourceMappingURL=load-azure-search.service.js.map