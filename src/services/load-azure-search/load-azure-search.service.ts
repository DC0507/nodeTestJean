import { inject, injectable, optional } from 'inversify';
import {
  Action,
  ActionsForSearchDocument,
  Article,
  ArticlesForSearchDocument,
  PostsDeletedResult,
  PostsDeletedSinceDocument,
  PostStatus,
} from '../../shared/graphql/jarvis';
import { JarvisService } from '../../shared/services/jarvis.service';
import { toDelete } from './to-delete';
import dotenv from 'dotenv';
import { InvocationContext } from '@azure/functions';
import { Logger } from '../../shared/utils/logger';
import { configService } from '../../shared/config/config.service';
dotenv.config();

const apiVersion = 'api-version=2023-10-01-Preview';

@injectable()
export class LoadAzureSearchService {
  searchInstance: string;
  searchIndex: string;
  private readonly logger: Logger;

  constructor(
    private readonly jarvisService: JarvisService,
    @inject(InvocationContext)
    @optional()
    private readonly invocationContext?: InvocationContext,
  ) {
    console.log(String.raw`
     ____.                  .__        
    |    |____ __________  _|__| ______
    |    \__  \\_  __ \  \/ /  |/  ___/
/\__|    |/ __ \|  | \/\   /|  |\___ \ 
\________(____  /__|    \_/ |__/____  )
              \/                    \/  Azure Search Synchronization Utility`);
    this.logger = new Logger('LoadAzureSearchService', invocationContext);
    this.logger.info(
      `Connecting to: ${configService.getValue('GRAPHQL_SERVER')}\n\n`,
    );

    this.searchInstance = configService.getValue('SEARCH_INSTANCE');
    this.searchIndex = configService.getValue('SEARCH_INDEX');

    this.logger.info(`azure search instance: ${this.searchInstance}`);
    this.logger.info(`azure search index: ${this.searchIndex}\n\n`);
  }

  getHeaders = () => {
    return {
      'Content-Type': 'application/json',
      'api-key': configService.getValue('SEARCH_API_KEY'),
    };
  };

  async createNewIndex(name: string) {
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

    const response = await fetch(
      `https://${this.searchInstance}.search.windows.net/indexes/${name}?${apiVersion}`,
      {
        method: 'PUT',
        body: JSON.stringify(indexMeta), // string or object
        headers: this.getHeaders(),
      },
    );
    const result = await response.json(); //extract JSON from the http response
    return result;
  }

  getMostRecentIndexEntry = async (rootType: string): Promise<Date> => {
    const response = await fetch(
      `https://${this.searchInstance}.search.windows.net/indexes/${this.searchIndex}/docs?search=*&$orderby=updated desc&$top=1&$filter=rootType eq '${rootType}'&${apiVersion}`,
      {
        method: 'GET',
        headers: this.getHeaders(),
      },
    );
    const result = await response.json(); //extract JSON from the http response
    if (result?.value?.length == 0) return new Date('2000-01-01');
    return result.value[0].updated;
  };

  deleteDocument = async (id: string): Promise<any> => {
    const response = await fetch(
      `https://${this.searchInstance}.search.windows.net/indexes/${this.searchIndex}/docs/index?${apiVersion}`,
      {
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
      },
    );
    const result = await response.json(); //extract JSON from the http response
    return result;
  };

  getIndexes = async () => {
    const response = await fetch(
      `https://${this.searchInstance}.search.windows.net/indexes?${apiVersion}&$select=name `,
      {
        method: 'GET',
        headers: this.getHeaders(),
      },
    );
    const result = await response.json(); //extract JSON from the http response
    return result.value;
  };

  transformArticleForSearchIndex(input: Article) {
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
        ? `${input.location.city}, ${
            input.location.province ? input.location.province + ', ' : ''
          } ${input.location.country}`
        : '',
      region: input.location?.region ? input.location?.region : '',
      audience: input.audience ? input.audience : 'Global',
      impact: '',
    };
  }

  transformActionForSearchIndex(input: Action) {
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
      geolocation:
        input.longitude && input.latitude
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
        ? `${input.location.city}, ${
            input.location.province ? input.location.province + ', ' : ''
          } ${input.location.country}`
        : '',
      region: input.location?.region ? input.location?.region : '',
      audience:
        input.audience && input.audience.length > 0
          ? input.audience
          : ['Global'],
      impact: input.impact ? input.impact : '',
    };
  }

  postToIndexJarisContent = async (content) => {
    const response = await fetch(
      `https://${this.searchInstance}.search.windows.net/indexes/${this.searchIndex}/docs/index?${apiVersion}`,
      {
        method: 'POST',
        body: JSON.stringify({ value: content }), // string or object
        headers: this.getHeaders(),
      },
    );
    const result = await response.json(); //extract JSON from the http response
  };

  async getDeletedPostsSince(from: Date): Promise<PostsDeletedResult[]> {
    const rsp = await this.jarvisService.client.query({
      query: PostsDeletedSinceDocument,
      variables: {
        since: from,
      },
    });
    return rsp.data.statsPostsDeletedSince;
  }

  async loadActionsUpdatedSince(from: Date, to: Date): Promise<number> {
    try {
      let cursor = null;
      let count = 0;
      do {
        const rsp = await this.jarvisService.client.query({
          query: ActionsForSearchDocument,
          variables: {
            paging: {
              first: 50,
              after: cursor,
            },
            filter: {
              status: { eq: PostStatus.Published },
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
          const protestsForIndex = results.map((x) =>
            this.transformActionForSearchIndex(x),
          );
          await this.postToIndexJarisContent(protestsForIndex);
        }
      } while (!!cursor);
      this.logger.info(`completed ${count}`);
      return count;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  async loadActionById(id: string): Promise<number> {
    try {
      let count = 0;
      const rsp = await this.jarvisService.client.query({
        query: ActionsForSearchDocument,
        variables: {
          filter: {
            status: { eq: PostStatus.Published },
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
        const protestsForIndex = results.map((x) =>
          this.transformActionForSearchIndex(x),
        );
        await this.postToIndexJarisContent(protestsForIndex);
      }
      this.logger.info(`completed ${count}`);
      return count;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  async loadArticlesUpdatedSince(from: Date, to: Date): Promise<number> {
    try {
      let cursor = null;
      let count = 0;
      do {
        const rsp = await this.jarvisService.client.query({
          query: ArticlesForSearchDocument,
          variables: {
            paging: {
              first: 50,
              after: cursor,
            },
            filter: {
              status: { eq: PostStatus.Published },
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
        const results = rsp.data.articles.edges.map((x: any) => x.node);
        count += results.length;
        cursor = rsp.data.articles.pageInfo.endCursor;
        if (results.length > 0) {
          this.logger.info(`loading from ${results[0].updated}`);
          const protestsForIndex = results.map((x: any) =>
            this.transformArticleForSearchIndex(x),
          );
          await this.postToIndexJarisContent(protestsForIndex);
        }
      } while (!!cursor);
      this.logger.info(`completed ${count}`);
      return count;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  async loadArticleById(id: string): Promise<number> {
    try {
      let count = 0;
      const rsp = await this.jarvisService.client.query({
        query: ArticlesForSearchDocument,
        variables: {
          filter: {
            status: { eq: PostStatus.Published },
            id: {
              eq: id,
            },
          },
          sorting: [],
        },
      });
      const results = rsp.data.articles.edges.map((x: any) => x.node);
      count += results.length;
      if (results.length > 0) {
        this.logger.info(`loading from ${results[0].updated}`);
        const protestsForIndex = results.map((x: any) =>
          this.transformArticleForSearchIndex(x),
        );
        await this.postToIndexJarisContent(protestsForIndex);
      }
      this.logger.info(`completed ${count}`);
      return count;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  async deleteDocuments() {
    for (const id of toDelete) {
      this.logger.info(`deleting ${id}`);
      const results = await this.deleteDocument(id);
    }
  }

  async loadDocument(id: string) {
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
    this.logger.info(
      `building/updating azure search ${this.searchIndex} for actions index since ${lastRun}`,
    );
    await this.loadActionsUpdatedSince(lastRun, now);
    lastRun = await this.getMostRecentIndexEntry('article');
    this.logger.info(`actions last run: ${deletedSince}, articles: ${lastRun}`);
    deletedSince = lastRun > deletedSince ? lastRun : deletedSince;
    this.logger.info(
      `building/updating azure search ${this.searchIndex} for articles index since ${lastRun}`,
    );
    await this.loadArticlesUpdatedSince(lastRun, now);

    // Get start of day for deletedSince
    const startOfDay = new Date(deletedSince);
    startOfDay.setHours(0, 0, 0, 0);
    const deletedPosts = await this.getDeletedPostsSince(startOfDay);
    this.logger.info(
      `removing ${deletedPosts.length} entries since ${deletedSince}`,
    );
    await Promise.all(
      deletedPosts.map((x) => (x.id ? this.deleteDocument(x.id) : null)),
    );
  }
}
