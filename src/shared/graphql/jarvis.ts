import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ConnectionCursor: any;
  DateTime: any;
  JSONObject: any;
};

export type Action = {
  __typename?: 'Action';
  actionStatus?: Maybe<ActionStatus>;
  alertNotification?: Maybe<Scalars['Boolean']>;
  audience?: Maybe<Array<Scalars['String']>>;
  bringForward?: Maybe<Scalars['String']>;
  campaigns?: Maybe<Array<Campaign>>;
  campaignsAggregate: Array<ActionCampaignsAggregateResponse>;
  companies?: Maybe<Array<Company>>;
  companiesAggregate: Array<ActionCompaniesAggregateResponse>;
  content?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  events?: Maybe<Array<Event>>;
  eventsAggregate: Array<ActionEventsAggregateResponse>;
  featureCollection?: Maybe<Scalars['JSONObject']>;
  going?: Maybe<Scalars['Float']>;
  gridId?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<Group>>;
  groupsAggregate: Array<ActionGroupsAggregateResponse>;
  hashtags?: Maybe<Array<Scalars['String']>>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  inActive?: Maybe<Scalars['Boolean']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  issues?: Maybe<Array<Issue>>;
  issuesAggregate: Array<ActionIssuesAggregateResponse>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  location?: Maybe<Location>;
  locationDescription?: Maybe<Scalars['String']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  ofInterestTo?: Maybe<Array<Company>>;
  ofInterestToAggregate: Array<ActionOfInterestToAggregateResponse>;
  ongoing?: Maybe<Scalars['Boolean']>;
  originalContent?: Maybe<Scalars['String']>;
  prominentIndividuals?: Maybe<Array<ProminentIndividual>>;
  prominentIndividualsAggregate: Array<ActionProminentIndividualsAggregateResponse>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  sectors?: Maybe<Array<Sector>>;
  sectorsAggregate: Array<ActionSectorsAggregateResponse>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sources?: Maybe<Array<Scalars['String']>>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tactic?: Maybe<Tactic>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type ActionCampaignsArgs = {
  filter?: CampaignFilter;
  sorting?: Array<CampaignSort>;
};


export type ActionCampaignsAggregateArgs = {
  filter?: InputMaybe<CampaignAggregateFilter>;
};


export type ActionCompaniesArgs = {
  filter?: CompanyFilter;
  sorting?: Array<CompanySort>;
};


export type ActionCompaniesAggregateArgs = {
  filter?: InputMaybe<CompanyAggregateFilter>;
};


export type ActionEventsArgs = {
  filter?: EventFilter;
  sorting?: Array<EventSort>;
};


export type ActionEventsAggregateArgs = {
  filter?: InputMaybe<EventAggregateFilter>;
};


export type ActionGroupsArgs = {
  filter?: GroupFilter;
  sorting?: Array<GroupSort>;
};


export type ActionGroupsAggregateArgs = {
  filter?: InputMaybe<GroupAggregateFilter>;
};


export type ActionIssuesArgs = {
  filter?: IssueFilter;
  sorting?: Array<IssueSort>;
};


export type ActionIssuesAggregateArgs = {
  filter?: InputMaybe<IssueAggregateFilter>;
};


export type ActionOfInterestToArgs = {
  filter?: CompanyFilter;
  sorting?: Array<CompanySort>;
};


export type ActionOfInterestToAggregateArgs = {
  filter?: InputMaybe<CompanyAggregateFilter>;
};


export type ActionProminentIndividualsArgs = {
  filter?: ProminentIndividualFilter;
  sorting?: Array<ProminentIndividualSort>;
};


export type ActionProminentIndividualsAggregateArgs = {
  filter?: InputMaybe<ProminentIndividualAggregateFilter>;
};


export type ActionSectorsArgs = {
  filter?: SectorFilter;
  sorting?: Array<SectorSort>;
};


export type ActionSectorsAggregateArgs = {
  filter?: InputMaybe<SectorAggregateFilter>;
};

export type ActionAggregateFilter = {
  actionStatus?: InputMaybe<ActionStatusFilterComparison>;
  alertNotification?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<ActionAggregateFilter>>;
  audienceRaw?: InputMaybe<StringFieldComparison>;
  bringForward?: InputMaybe<StringFieldComparison>;
  campaigns?: InputMaybe<ActionAggregateFilterCampaignAggregateFilter>;
  companies?: InputMaybe<ActionAggregateFilterCompanyAggregateFilter>;
  contentApprovedBy?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  draftedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  events?: InputMaybe<ActionAggregateFilterEventAggregateFilter>;
  going?: InputMaybe<NumberFieldComparison>;
  groups?: InputMaybe<ActionAggregateFilterGroupAggregateFilter>;
  hashtagsRaw?: InputMaybe<StringFieldComparison>;
  highlightImageUrl?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  impact?: InputMaybe<StringFieldComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  interested?: InputMaybe<NumberFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  issues?: InputMaybe<ActionAggregateFilterIssueAggregateFilter>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  latitude?: InputMaybe<FloatFieldComparison>;
  location?: InputMaybe<ActionAggregateFilterLocationAggregateFilter>;
  locationId?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  longitude?: InputMaybe<FloatFieldComparison>;
  mainUntilDate?: InputMaybe<DateFieldComparison>;
  ofInterestTo?: InputMaybe<ActionAggregateFilterCompanyAggregateFilter>;
  ongoing?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<ActionAggregateFilter>>;
  prominentIndividuals?: InputMaybe<ActionAggregateFilterProminentIndividualAggregateFilter>;
  publishedBy?: InputMaybe<StringFieldComparison>;
  publishedDate?: InputMaybe<DateFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  sectors?: InputMaybe<ActionAggregateFilterSectorAggregateFilter>;
  source?: InputMaybe<StringFieldComparison>;
  sourceRefId?: InputMaybe<StringFieldComparison>;
  sourcesRaw?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  styleApprovedBy?: InputMaybe<StringFieldComparison>;
  tactic?: InputMaybe<ActionAggregateFilterTacticAggregateFilter>;
  tacticId?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ActionAggregateFilterCampaignAggregateFilter = {
  and?: InputMaybe<Array<ActionAggregateFilterCampaignAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ActionAggregateFilterCampaignAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ActionAggregateFilterCompanyAggregateFilter = {
  and?: InputMaybe<Array<ActionAggregateFilterCompanyAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ActionAggregateFilterCompanyAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  ssoEmailPatterns?: InputMaybe<StringFieldComparison>;
  team?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ActionAggregateFilterEventAggregateFilter = {
  and?: InputMaybe<Array<ActionAggregateFilterEventAggregateFilter>>;
  briefingRequired?: InputMaybe<BooleanFieldComparison>;
  companyId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  latitude?: InputMaybe<FloatFieldComparison>;
  locationId?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  longitude?: InputMaybe<FloatFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ActionAggregateFilterEventAggregateFilter>>;
  private?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  risk?: InputMaybe<StringFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  type?: InputMaybe<EventTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ActionAggregateFilterGroupAggregateFilter = {
  and?: InputMaybe<Array<ActionAggregateFilterGroupAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ActionAggregateFilterGroupAggregateFilter>>;
  parentGroupId?: InputMaybe<StringFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ActionAggregateFilterIssueAggregateFilter = {
  and?: InputMaybe<Array<ActionAggregateFilterIssueAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ActionAggregateFilterIssueAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ActionAggregateFilterLocationAggregateFilter = {
  and?: InputMaybe<Array<ActionAggregateFilterLocationAggregateFilter>>;
  city?: InputMaybe<StringFieldComparison>;
  country?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  metropolitanArea?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ActionAggregateFilterLocationAggregateFilter>>;
  province?: InputMaybe<StringFieldComparison>;
  region?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ActionAggregateFilterProminentIndividualAggregateFilter = {
  and?: InputMaybe<Array<ActionAggregateFilterProminentIndividualAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ActionAggregateFilterProminentIndividualAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ActionAggregateFilterSectorAggregateFilter = {
  and?: InputMaybe<Array<ActionAggregateFilterSectorAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ActionAggregateFilterSectorAggregateFilter>>;
  ppd21?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ActionAggregateFilterTacticAggregateFilter = {
  and?: InputMaybe<Array<ActionAggregateFilterTacticAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ActionAggregateFilterTacticAggregateFilter>>;
  protest?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
  virtual?: InputMaybe<BooleanFieldComparison>;
};

export type ActionAggregateGroupBy = {
  __typename?: 'ActionAggregateGroupBy';
  actionStatus?: Maybe<ActionStatus>;
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  inActive?: Maybe<Scalars['Boolean']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  ongoing?: Maybe<Scalars['Boolean']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type ActionAggregateGroupByCreatedArgs = {
  by?: GroupBy;
};


export type ActionAggregateGroupByDateArgs = {
  by?: GroupBy;
};


export type ActionAggregateGroupByEndDateArgs = {
  by?: GroupBy;
};


export type ActionAggregateGroupByLastModifiedDateArgs = {
  by?: GroupBy;
};


export type ActionAggregateGroupByMainUntilDateArgs = {
  by?: GroupBy;
};


export type ActionAggregateGroupByPublishedDateArgs = {
  by?: GroupBy;
};


export type ActionAggregateGroupByRemoteUpdatedArgs = {
  by?: GroupBy;
};


export type ActionAggregateGroupByUpdatedArgs = {
  by?: GroupBy;
};

export type ActionAggregateResponse = {
  __typename?: 'ActionAggregateResponse';
  avg?: Maybe<ActionAvgAggregate>;
  count?: Maybe<ActionCountAggregate>;
  groupBy?: Maybe<ActionAggregateGroupBy>;
  max?: Maybe<ActionMaxAggregate>;
  min?: Maybe<ActionMinAggregate>;
  sum?: Maybe<ActionSumAggregate>;
};

export type ActionAvgAggregate = {
  __typename?: 'ActionAvgAggregate';
  going?: Maybe<Scalars['Float']>;
  interested?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type ActionBatchEntry = {
  actionStatus?: InputMaybe<ActionStatus>;
  alertNotification?: InputMaybe<Scalars['Boolean']>;
  audience?: InputMaybe<Array<Scalars['String']>>;
  bringForward?: InputMaybe<Scalars['String']>;
  campaignsIds?: InputMaybe<Array<Scalars['String']>>;
  companiesIds?: InputMaybe<Array<Scalars['String']>>;
  content?: InputMaybe<Scalars['String']>;
  contentApprovedBy?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  draftedBy?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  eventsIds?: InputMaybe<Array<Scalars['String']>>;
  featureCollection?: InputMaybe<Scalars['JSONObject']>;
  going?: InputMaybe<Scalars['Float']>;
  gridId?: InputMaybe<Scalars['String']>;
  groupsIds?: InputMaybe<Array<Scalars['String']>>;
  hashtags?: InputMaybe<Array<Scalars['String']>>;
  highlightImageUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  impact?: InputMaybe<Scalars['String']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  interested?: InputMaybe<Scalars['Float']>;
  internalComment?: InputMaybe<Scalars['String']>;
  issuesIds?: InputMaybe<Array<Scalars['String']>>;
  lastModifiedDate?: InputMaybe<Scalars['DateTime']>;
  latitude?: InputMaybe<Scalars['Float']>;
  locationDescription?: InputMaybe<Scalars['String']>;
  locationId?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Float']>;
  mainUntilDate?: InputMaybe<Scalars['DateTime']>;
  ofInterestToIds?: InputMaybe<Array<Scalars['String']>>;
  ongoing?: InputMaybe<Scalars['Boolean']>;
  originalContent?: InputMaybe<Scalars['String']>;
  prominentIndividualsIds?: InputMaybe<Array<Scalars['String']>>;
  publishedBy?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['DateTime']>;
  sectorIds?: InputMaybe<Array<Scalars['String']>>;
  source?: InputMaybe<Scalars['String']>;
  sourceRefId?: InputMaybe<Scalars['String']>;
  sources?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<PostStatus>;
  styleApprovedBy?: InputMaybe<Scalars['String']>;
  tacticId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type ActionBatchEntryResult = {
  __typename?: 'ActionBatchEntryResult';
  action?: Maybe<Action>;
  error?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type ActionCampaignsAggregateGroupBy = {
  __typename?: 'ActionCampaignsAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  monitoring?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionCampaignsAggregateResponse = {
  __typename?: 'ActionCampaignsAggregateResponse';
  count?: Maybe<ActionCampaignsCountAggregate>;
  groupBy?: Maybe<ActionCampaignsAggregateGroupBy>;
  max?: Maybe<ActionCampaignsMaxAggregate>;
  min?: Maybe<ActionCampaignsMinAggregate>;
};

export type ActionCampaignsCountAggregate = {
  __typename?: 'ActionCampaignsCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  monitoring?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ActionCampaignsMaxAggregate = {
  __typename?: 'ActionCampaignsMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionCampaignsMinAggregate = {
  __typename?: 'ActionCampaignsMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionCompaniesAggregateGroupBy = {
  __typename?: 'ActionCompaniesAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  ssoEmailPatterns?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionCompaniesAggregateResponse = {
  __typename?: 'ActionCompaniesAggregateResponse';
  count?: Maybe<ActionCompaniesCountAggregate>;
  groupBy?: Maybe<ActionCompaniesAggregateGroupBy>;
  max?: Maybe<ActionCompaniesMaxAggregate>;
  min?: Maybe<ActionCompaniesMinAggregate>;
};

export type ActionCompaniesCountAggregate = {
  __typename?: 'ActionCompaniesCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  ssoEmailPatterns?: Maybe<Scalars['Int']>;
  team?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ActionCompaniesMaxAggregate = {
  __typename?: 'ActionCompaniesMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  ssoEmailPatterns?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionCompaniesMinAggregate = {
  __typename?: 'ActionCompaniesMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  ssoEmailPatterns?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionConnection = {
  __typename?: 'ActionConnection';
  /** Array of edges. */
  edges: Array<ActionEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ActionCountAggregate = {
  __typename?: 'ActionCountAggregate';
  actionStatus?: Maybe<Scalars['Int']>;
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Int']>;
  going?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  impact?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  interested?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  ongoing?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  tacticId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ActionDeleteResponse = {
  __typename?: 'ActionDeleteResponse';
  actionStatus?: Maybe<ActionStatus>;
  alertNotification?: Maybe<Scalars['Boolean']>;
  audience?: Maybe<Array<Scalars['String']>>;
  bringForward?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  featureCollection?: Maybe<Scalars['JSONObject']>;
  going?: Maybe<Scalars['Float']>;
  gridId?: Maybe<Scalars['String']>;
  hashtags?: Maybe<Array<Scalars['String']>>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  inActive?: Maybe<Scalars['Boolean']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationDescription?: Maybe<Scalars['String']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  ongoing?: Maybe<Scalars['Boolean']>;
  originalContent?: Maybe<Scalars['String']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sources?: Maybe<Array<Scalars['String']>>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionEdge = {
  __typename?: 'ActionEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Action */
  node: Action;
};

export type ActionEventsAggregateGroupBy = {
  __typename?: 'ActionEventsAggregateGroupBy';
  briefingRequired?: Maybe<Scalars['Boolean']>;
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  monitoring?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Boolean']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  risk?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  type?: Maybe<EventType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionEventsAggregateResponse = {
  __typename?: 'ActionEventsAggregateResponse';
  avg?: Maybe<ActionEventsAvgAggregate>;
  count?: Maybe<ActionEventsCountAggregate>;
  groupBy?: Maybe<ActionEventsAggregateGroupBy>;
  max?: Maybe<ActionEventsMaxAggregate>;
  min?: Maybe<ActionEventsMinAggregate>;
  sum?: Maybe<ActionEventsSumAggregate>;
};

export type ActionEventsAvgAggregate = {
  __typename?: 'ActionEventsAvgAggregate';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type ActionEventsCountAggregate = {
  __typename?: 'ActionEventsCountAggregate';
  briefingRequired?: Maybe<Scalars['Int']>;
  companyId?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  monitoring?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  private?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  risk?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ActionEventsMaxAggregate = {
  __typename?: 'ActionEventsMaxAggregate';
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  risk?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  type?: Maybe<EventType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionEventsMinAggregate = {
  __typename?: 'ActionEventsMinAggregate';
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  risk?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  type?: Maybe<EventType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionEventsSumAggregate = {
  __typename?: 'ActionEventsSumAggregate';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type ActionFilter = {
  actionStatus?: InputMaybe<ActionStatusFilterComparison>;
  alertNotification?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<ActionFilter>>;
  audienceRaw?: InputMaybe<StringFieldComparison>;
  bringForward?: InputMaybe<StringFieldComparison>;
  campaigns?: InputMaybe<ActionFilterCampaignFilter>;
  companies?: InputMaybe<ActionFilterCompanyFilter>;
  contentApprovedBy?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  draftedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  events?: InputMaybe<ActionFilterEventFilter>;
  going?: InputMaybe<NumberFieldComparison>;
  groups?: InputMaybe<ActionFilterGroupFilter>;
  hashtagsRaw?: InputMaybe<StringFieldComparison>;
  highlightImageUrl?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  impact?: InputMaybe<StringFieldComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  interested?: InputMaybe<NumberFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  issues?: InputMaybe<ActionFilterIssueFilter>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  latitude?: InputMaybe<FloatFieldComparison>;
  location?: InputMaybe<ActionFilterLocationFilter>;
  locationId?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  longitude?: InputMaybe<FloatFieldComparison>;
  mainUntilDate?: InputMaybe<DateFieldComparison>;
  ofInterestTo?: InputMaybe<ActionFilterCompanyFilter>;
  ongoing?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<ActionFilter>>;
  prominentIndividuals?: InputMaybe<ActionFilterProminentIndividualFilter>;
  publishedBy?: InputMaybe<StringFieldComparison>;
  publishedDate?: InputMaybe<DateFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  sectors?: InputMaybe<ActionFilterSectorFilter>;
  source?: InputMaybe<StringFieldComparison>;
  sourceRefId?: InputMaybe<StringFieldComparison>;
  sourcesRaw?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  styleApprovedBy?: InputMaybe<StringFieldComparison>;
  tactic?: InputMaybe<ActionFilterTacticFilter>;
  tacticId?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ActionFilterCampaignFilter = {
  and?: InputMaybe<Array<ActionFilterCampaignFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ActionFilterCampaignFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ActionFilterCompanyFilter = {
  and?: InputMaybe<Array<ActionFilterCompanyFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ActionFilterCompanyFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  ssoEmailPatterns?: InputMaybe<StringFieldComparison>;
  team?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ActionFilterEventFilter = {
  and?: InputMaybe<Array<ActionFilterEventFilter>>;
  briefingRequired?: InputMaybe<BooleanFieldComparison>;
  companyId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  latitude?: InputMaybe<FloatFieldComparison>;
  locationId?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  longitude?: InputMaybe<FloatFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ActionFilterEventFilter>>;
  private?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  risk?: InputMaybe<StringFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  type?: InputMaybe<EventTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ActionFilterGroupFilter = {
  and?: InputMaybe<Array<ActionFilterGroupFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ActionFilterGroupFilter>>;
  parentGroupId?: InputMaybe<StringFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ActionFilterIssueFilter = {
  and?: InputMaybe<Array<ActionFilterIssueFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ActionFilterIssueFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ActionFilterLocationFilter = {
  and?: InputMaybe<Array<ActionFilterLocationFilter>>;
  city?: InputMaybe<StringFieldComparison>;
  country?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  metropolitanArea?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ActionFilterLocationFilter>>;
  province?: InputMaybe<StringFieldComparison>;
  region?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ActionFilterProminentIndividualFilter = {
  and?: InputMaybe<Array<ActionFilterProminentIndividualFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ActionFilterProminentIndividualFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ActionFilterSectorFilter = {
  and?: InputMaybe<Array<ActionFilterSectorFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ActionFilterSectorFilter>>;
  ppd21?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ActionFilterTacticFilter = {
  and?: InputMaybe<Array<ActionFilterTacticFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ActionFilterTacticFilter>>;
  protest?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
  virtual?: InputMaybe<BooleanFieldComparison>;
};

export type ActionGeographicCleanupResults = {
  __typename?: 'ActionGeographicCleanupResults';
  diffLat: Scalars['Float'];
  diffLon: Scalars['Float'];
  locationId?: Maybe<Scalars['String']>;
  maxLat: Scalars['Float'];
  maxLon: Scalars['Float'];
  minLat: Scalars['Float'];
  minLon: Scalars['Float'];
};

export type ActionGroupsAggregateGroupBy = {
  __typename?: 'ActionGroupsAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  monitoring?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  parentGroupId?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionGroupsAggregateResponse = {
  __typename?: 'ActionGroupsAggregateResponse';
  count?: Maybe<ActionGroupsCountAggregate>;
  groupBy?: Maybe<ActionGroupsAggregateGroupBy>;
  max?: Maybe<ActionGroupsMaxAggregate>;
  min?: Maybe<ActionGroupsMinAggregate>;
};

export type ActionGroupsCountAggregate = {
  __typename?: 'ActionGroupsCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  monitoring?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  parentGroupId?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ActionGroupsMaxAggregate = {
  __typename?: 'ActionGroupsMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parentGroupId?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionGroupsMinAggregate = {
  __typename?: 'ActionGroupsMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parentGroupId?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionIssuesAggregateGroupBy = {
  __typename?: 'ActionIssuesAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  monitoring?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionIssuesAggregateResponse = {
  __typename?: 'ActionIssuesAggregateResponse';
  count?: Maybe<ActionIssuesCountAggregate>;
  groupBy?: Maybe<ActionIssuesAggregateGroupBy>;
  max?: Maybe<ActionIssuesMaxAggregate>;
  min?: Maybe<ActionIssuesMinAggregate>;
};

export type ActionIssuesCountAggregate = {
  __typename?: 'ActionIssuesCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  monitoring?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ActionIssuesMaxAggregate = {
  __typename?: 'ActionIssuesMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionIssuesMinAggregate = {
  __typename?: 'ActionIssuesMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionMaxAggregate = {
  __typename?: 'ActionMaxAggregate';
  actionStatus?: Maybe<ActionStatus>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionMinAggregate = {
  __typename?: 'ActionMinAggregate';
  actionStatus?: Maybe<ActionStatus>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionOfInterestToAggregateGroupBy = {
  __typename?: 'ActionOfInterestToAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  ssoEmailPatterns?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionOfInterestToAggregateResponse = {
  __typename?: 'ActionOfInterestToAggregateResponse';
  count?: Maybe<ActionOfInterestToCountAggregate>;
  groupBy?: Maybe<ActionOfInterestToAggregateGroupBy>;
  max?: Maybe<ActionOfInterestToMaxAggregate>;
  min?: Maybe<ActionOfInterestToMinAggregate>;
};

export type ActionOfInterestToCountAggregate = {
  __typename?: 'ActionOfInterestToCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  ssoEmailPatterns?: Maybe<Scalars['Int']>;
  team?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ActionOfInterestToMaxAggregate = {
  __typename?: 'ActionOfInterestToMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  ssoEmailPatterns?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionOfInterestToMinAggregate = {
  __typename?: 'ActionOfInterestToMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  ssoEmailPatterns?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionProminentIndividualsAggregateGroupBy = {
  __typename?: 'ActionProminentIndividualsAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionProminentIndividualsAggregateResponse = {
  __typename?: 'ActionProminentIndividualsAggregateResponse';
  count?: Maybe<ActionProminentIndividualsCountAggregate>;
  groupBy?: Maybe<ActionProminentIndividualsAggregateGroupBy>;
  max?: Maybe<ActionProminentIndividualsMaxAggregate>;
  min?: Maybe<ActionProminentIndividualsMinAggregate>;
};

export type ActionProminentIndividualsCountAggregate = {
  __typename?: 'ActionProminentIndividualsCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ActionProminentIndividualsMaxAggregate = {
  __typename?: 'ActionProminentIndividualsMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionProminentIndividualsMinAggregate = {
  __typename?: 'ActionProminentIndividualsMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionRiskAggregateArg = {
  audiences?: InputMaybe<Array<Scalars['String']>>;
  campaigns?: InputMaybe<Array<Scalars['String']>>;
  cities?: InputMaybe<Array<Scalars['String']>>;
  companies?: InputMaybe<Array<Scalars['String']>>;
  countries?: InputMaybe<Array<Scalars['String']>>;
  from: Scalars['DateTime'];
  groups?: InputMaybe<Array<Scalars['String']>>;
  issues?: InputMaybe<Array<Scalars['String']>>;
  provinces?: InputMaybe<Array<Scalars['String']>>;
  regions?: InputMaybe<Array<Scalars['String']>>;
  sectors?: InputMaybe<Array<Scalars['String']>>;
  tactics?: InputMaybe<Array<Scalars['String']>>;
  to: Scalars['DateTime'];
};

export type ActionRiskAggregateResults = {
  __typename?: 'ActionRiskAggregateResults';
  date: Scalars['String'];
  highRiskCount: Scalars['Float'];
  lowRiskCount: Scalars['Float'];
  mediumRiskCount: Scalars['Float'];
  noRiskCount: Scalars['Float'];
  veryHighRiskCount: Scalars['Float'];
};

export type ActionSectorsAggregateGroupBy = {
  __typename?: 'ActionSectorsAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ppd21?: Maybe<Scalars['Boolean']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionSectorsAggregateResponse = {
  __typename?: 'ActionSectorsAggregateResponse';
  count?: Maybe<ActionSectorsCountAggregate>;
  groupBy?: Maybe<ActionSectorsAggregateGroupBy>;
  max?: Maybe<ActionSectorsMaxAggregate>;
  min?: Maybe<ActionSectorsMinAggregate>;
};

export type ActionSectorsCountAggregate = {
  __typename?: 'ActionSectorsCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  ppd21?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ActionSectorsMaxAggregate = {
  __typename?: 'ActionSectorsMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionSectorsMinAggregate = {
  __typename?: 'ActionSectorsMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActionSort = {
  direction: SortDirection;
  field: ActionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ActionSortFields {
  ActionStatus = 'actionStatus',
  AlertNotification = 'alertNotification',
  AudienceRaw = 'audienceRaw',
  BringForward = 'bringForward',
  ContentApprovedBy = 'contentApprovedBy',
  Created = 'created',
  CreatedBy = 'createdBy',
  Date = 'date',
  DeletedBy = 'deletedBy',
  DraftedBy = 'draftedBy',
  EndDate = 'endDate',
  Going = 'going',
  HashtagsRaw = 'hashtagsRaw',
  HighlightImageUrl = 'highlightImageUrl',
  Id = 'id',
  Impact = 'impact',
  InActive = 'inActive',
  Interested = 'interested',
  InternalComment = 'internalComment',
  LastModifiedDate = 'lastModifiedDate',
  Latitude = 'latitude',
  LocationId = 'locationId',
  LockedBy = 'lockedBy',
  Longitude = 'longitude',
  MainUntilDate = 'mainUntilDate',
  Ongoing = 'ongoing',
  PublishedBy = 'publishedBy',
  PublishedDate = 'publishedDate',
  RemoteUpdated = 'remoteUpdated',
  Source = 'source',
  SourceRefId = 'sourceRefId',
  SourcesRaw = 'sourcesRaw',
  Status = 'status',
  StyleApprovedBy = 'styleApprovedBy',
  TacticId = 'tacticId',
  Title = 'title',
  Type = 'type',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export enum ActionStatus {
  Canceled = 'Canceled',
  ImpactIncreased = 'ImpactIncreased',
  LocationChanged = 'LocationChanged',
  Rescheduled = 'Rescheduled',
  Reviewed = 'Reviewed',
  Updated = 'Updated'
}

export type ActionStatusFilterComparison = {
  eq?: InputMaybe<ActionStatus>;
  gt?: InputMaybe<ActionStatus>;
  gte?: InputMaybe<ActionStatus>;
  iLike?: InputMaybe<ActionStatus>;
  in?: InputMaybe<Array<ActionStatus>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<ActionStatus>;
  lt?: InputMaybe<ActionStatus>;
  lte?: InputMaybe<ActionStatus>;
  neq?: InputMaybe<ActionStatus>;
  notILike?: InputMaybe<ActionStatus>;
  notIn?: InputMaybe<Array<ActionStatus>>;
  notLike?: InputMaybe<ActionStatus>;
};

export type ActionSubscriptionFilter = {
  actionStatus?: InputMaybe<ActionStatusFilterComparison>;
  alertNotification?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<ActionSubscriptionFilter>>;
  audienceRaw?: InputMaybe<StringFieldComparison>;
  bringForward?: InputMaybe<StringFieldComparison>;
  contentApprovedBy?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  draftedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  going?: InputMaybe<NumberFieldComparison>;
  hashtagsRaw?: InputMaybe<StringFieldComparison>;
  highlightImageUrl?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  impact?: InputMaybe<StringFieldComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  interested?: InputMaybe<NumberFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  latitude?: InputMaybe<FloatFieldComparison>;
  locationId?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  longitude?: InputMaybe<FloatFieldComparison>;
  mainUntilDate?: InputMaybe<DateFieldComparison>;
  ongoing?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<ActionSubscriptionFilter>>;
  publishedBy?: InputMaybe<StringFieldComparison>;
  publishedDate?: InputMaybe<DateFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  source?: InputMaybe<StringFieldComparison>;
  sourceRefId?: InputMaybe<StringFieldComparison>;
  sourcesRaw?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  styleApprovedBy?: InputMaybe<StringFieldComparison>;
  tacticId?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ActionSumAggregate = {
  __typename?: 'ActionSumAggregate';
  going?: Maybe<Scalars['Float']>;
  interested?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type ActionSummaryArg = {
  audiences?: InputMaybe<Array<Scalars['String']>>;
  campaigns?: InputMaybe<Array<Scalars['String']>>;
  companies?: InputMaybe<Array<Scalars['String']>>;
  countries?: InputMaybe<Array<Scalars['String']>>;
  events?: InputMaybe<Array<Scalars['String']>>;
  from: Scalars['DateTime'];
  groups?: InputMaybe<Array<Scalars['String']>>;
  impacts?: InputMaybe<Array<Scalars['Float']>>;
  issues?: InputMaybe<Array<Scalars['String']>>;
  maxLat: Scalars['Float'];
  maxLon: Scalars['Float'];
  minLat: Scalars['Float'];
  minLon: Scalars['Float'];
  protestOnly?: InputMaybe<Scalars['Boolean']>;
  regions?: InputMaybe<Array<Scalars['String']>>;
  sectors?: InputMaybe<Array<Scalars['String']>>;
  tactics?: InputMaybe<Array<Scalars['String']>>;
  to: Scalars['DateTime'];
};

export type ActionSummaryResults = {
  __typename?: 'ActionSummaryResults';
  count: Scalars['Float'];
  date: Scalars['String'];
};

export type ActionsBatchInput = {
  actions?: InputMaybe<Array<ActionBatchEntry>>;
};

export type ActionsBatchResult = {
  __typename?: 'ActionsBatchResult';
  results?: Maybe<Array<ActionBatchEntryResult>>;
};

export type ActivityLog = {
  __typename?: 'ActivityLog';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  referenceEntity?: Maybe<Scalars['String']>;
  referenceId?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  type: ActivityLogType;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActivityLogAggregateFilter = {
  and?: InputMaybe<Array<ActivityLogAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ActivityLogAggregateFilter>>;
  referenceEntity?: InputMaybe<StringFieldComparison>;
  referenceId?: InputMaybe<StringFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  type?: InputMaybe<ActivityLogTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ActivityLogAggregateGroupBy = {
  __typename?: 'ActivityLogAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  referenceEntity?: Maybe<Scalars['String']>;
  referenceId?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  type?: Maybe<ActivityLogType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type ActivityLogAggregateGroupByCreatedArgs = {
  by?: GroupBy;
};


export type ActivityLogAggregateGroupByRemoteUpdatedArgs = {
  by?: GroupBy;
};


export type ActivityLogAggregateGroupByUpdatedArgs = {
  by?: GroupBy;
};

export type ActivityLogAggregateResponse = {
  __typename?: 'ActivityLogAggregateResponse';
  count?: Maybe<ActivityLogCountAggregate>;
  groupBy?: Maybe<ActivityLogAggregateGroupBy>;
  max?: Maybe<ActivityLogMaxAggregate>;
  min?: Maybe<ActivityLogMinAggregate>;
};

export type ActivityLogConnection = {
  __typename?: 'ActivityLogConnection';
  /** Array of edges. */
  edges: Array<ActivityLogEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ActivityLogCountAggregate = {
  __typename?: 'ActivityLogCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  referenceEntity?: Maybe<Scalars['Int']>;
  referenceId?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ActivityLogDeleteFilter = {
  and?: InputMaybe<Array<ActivityLogDeleteFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ActivityLogDeleteFilter>>;
  referenceEntity?: InputMaybe<StringFieldComparison>;
  referenceId?: InputMaybe<StringFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  type?: InputMaybe<ActivityLogTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ActivityLogDeleteResponse = {
  __typename?: 'ActivityLogDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  referenceEntity?: Maybe<Scalars['String']>;
  referenceId?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  type?: Maybe<ActivityLogType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActivityLogEdge = {
  __typename?: 'ActivityLogEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ActivityLog */
  node: ActivityLog;
};

export type ActivityLogFilter = {
  and?: InputMaybe<Array<ActivityLogFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ActivityLogFilter>>;
  referenceEntity?: InputMaybe<StringFieldComparison>;
  referenceId?: InputMaybe<StringFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  type?: InputMaybe<ActivityLogTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ActivityLogMaxAggregate = {
  __typename?: 'ActivityLogMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  referenceEntity?: Maybe<Scalars['String']>;
  referenceId?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  type?: Maybe<ActivityLogType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActivityLogMinAggregate = {
  __typename?: 'ActivityLogMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  referenceEntity?: Maybe<Scalars['String']>;
  referenceId?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  type?: Maybe<ActivityLogType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ActivityLogSort = {
  direction: SortDirection;
  field: ActivityLogSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ActivityLogSortFields {
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LockedBy = 'lockedBy',
  ReferenceEntity = 'referenceEntity',
  ReferenceId = 'referenceId',
  RemoteUpdated = 'remoteUpdated',
  Type = 'type',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type ActivityLogSummaryArg = {
  from: Scalars['DateTime'];
  referenceEntities?: InputMaybe<Array<Scalars['String']>>;
  referenceIds: Array<Scalars['String']>;
  to: Scalars['DateTime'];
};

export type ActivityLogSummaryResults = {
  __typename?: 'ActivityLogSummaryResults';
  count: Scalars['Float'];
  referenceEntity: Scalars['String'];
  referenceId: Scalars['String'];
};

/** Activity Log Types */
export enum ActivityLogType {
  Analysis = 'ANALYSIS',
  Api = 'API',
  Authentication = 'AUTHENTICATION',
  EmailDaily = 'EMAIL_DAILY',
  EmailDps = 'EMAIL_DPS',
  EmailSubCheck = 'EMAIL_SUB_CHECK',
  Error = 'ERROR',
  Excel = 'EXCEL',
  Expire30 = 'EXPIRE30',
  Expire60 = 'EXPIRE60',
  Expire90 = 'EXPIRE90',
  Externalsharerequest = 'EXTERNALSHAREREQUEST',
  Forwarded = 'FORWARDED',
  Fysa = 'FYSA',
  Mutation = 'MUTATION',
  Query = 'QUERY',
  Search = 'SEARCH',
  SyncAgentPp = 'SYNC_AGENT_PP'
}

export type ActivityLogTypeFilterComparison = {
  eq?: InputMaybe<ActivityLogType>;
  gt?: InputMaybe<ActivityLogType>;
  gte?: InputMaybe<ActivityLogType>;
  iLike?: InputMaybe<ActivityLogType>;
  in?: InputMaybe<Array<ActivityLogType>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<ActivityLogType>;
  lt?: InputMaybe<ActivityLogType>;
  lte?: InputMaybe<ActivityLogType>;
  neq?: InputMaybe<ActivityLogType>;
  notILike?: InputMaybe<ActivityLogType>;
  notIn?: InputMaybe<Array<ActivityLogType>>;
  notLike?: InputMaybe<ActivityLogType>;
};

export type ActivityLogUpdateFilter = {
  and?: InputMaybe<Array<ActivityLogUpdateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ActivityLogUpdateFilter>>;
  referenceEntity?: InputMaybe<StringFieldComparison>;
  referenceId?: InputMaybe<StringFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  type?: InputMaybe<ActivityLogTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type AdUser = {
  __typename?: 'AdUser';
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  email: Scalars['ID'];
  givenName?: Maybe<Scalars['String']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portalPreferences?: Maybe<PortalPreference>;
  roles?: Maybe<Array<Scalars['String']>>;
  signature?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  systemEmails?: Maybe<Array<Scalars['String']>>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type AdUserAggregateFilter = {
  and?: InputMaybe<Array<AdUserAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  email?: InputMaybe<IdFilterComparison>;
  givenName?: InputMaybe<StringFieldComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AdUserAggregateFilter>>;
  surname?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type AdUserAggregateGroupBy = {
  __typename?: 'AdUserAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['ID']>;
  givenName?: Maybe<Scalars['String']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type AdUserAggregateGroupByCreatedArgs = {
  by?: GroupBy;
};


export type AdUserAggregateGroupByUpdatedArgs = {
  by?: GroupBy;
};

export type AdUserAggregateResponse = {
  __typename?: 'AdUserAggregateResponse';
  count?: Maybe<AdUserCountAggregate>;
  groupBy?: Maybe<AdUserAggregateGroupBy>;
  max?: Maybe<AdUserMaxAggregate>;
  min?: Maybe<AdUserMinAggregate>;
};

export type AdUserConnection = {
  __typename?: 'AdUserConnection';
  /** Array of edges. */
  edges: Array<AdUserEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type AdUserCountAggregate = {
  __typename?: 'AdUserCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  givenName?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  surname?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type AdUserDeleteFilter = {
  and?: InputMaybe<Array<AdUserDeleteFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  email?: InputMaybe<IdFilterComparison>;
  givenName?: InputMaybe<StringFieldComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AdUserDeleteFilter>>;
  surname?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type AdUserDeleteResponse = {
  __typename?: 'AdUserDeleteResponse';
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['ID']>;
  givenName?: Maybe<Scalars['String']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Scalars['String']>>;
  signature?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  systemEmails?: Maybe<Array<Scalars['String']>>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type AdUserEdge = {
  __typename?: 'AdUserEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the AdUser */
  node: AdUser;
};

export type AdUserFilter = {
  and?: InputMaybe<Array<AdUserFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  email?: InputMaybe<IdFilterComparison>;
  givenName?: InputMaybe<StringFieldComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AdUserFilter>>;
  surname?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type AdUserMaxAggregate = {
  __typename?: 'AdUserMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['ID']>;
  givenName?: Maybe<Scalars['String']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type AdUserMinAggregate = {
  __typename?: 'AdUserMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['ID']>;
  givenName?: Maybe<Scalars['String']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type AdUserSort = {
  direction: SortDirection;
  field: AdUserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AdUserSortFields {
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  Email = 'email',
  GivenName = 'givenName',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LockedBy = 'lockedBy',
  Surname = 'surname',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type AdUserUpdateFilter = {
  and?: InputMaybe<Array<AdUserUpdateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  email?: InputMaybe<IdFilterComparison>;
  givenName?: InputMaybe<StringFieldComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AdUserUpdateFilter>>;
  surname?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type AddAcksToClientNotificationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddActionsOfInterestToCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddActionsToCampaignInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddActionsToCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddActionsToEventInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddActionsToGroupInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddActionsToIssueInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddActionsToLocationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddActionsToProminentIndividualInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddActionsToSectorInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddActionsToTacticInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddAdvisoriesToTravelRiskCountryInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddArticlesOfInterestToCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddArticlesToCampaignInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddArticlesToCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddArticlesToEventInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddArticlesToGroupInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddArticlesToIssueInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddArticlesToLocationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddArticlesToProminentIndividualInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddArticlesToSectorInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddAttachmentsToAnnualSubscriptionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddBriefingsToCampaignInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddBriefingsToCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddBriefingsToEventInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddBriefingsToGroupInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddBriefingsToIssueInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddBriefingsToLocationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddBriefingsToSectorInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddCampaignsToActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddCampaignsToArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddCampaignsToBriefingInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddCampaignsToResourceInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddCompaniesToActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddCompaniesToArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddCompaniesToBriefingInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddCompaniesToClientNotificationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddCompaniesToResourceInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddCompaniesToSectorInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddContactsToCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddEventsToActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddEventsToArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddEventsToBriefingInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddEventsToLocationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddGroupsToActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddGroupsToArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddGroupsToBriefingInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddGroupsToResourceInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddIntegrationsToCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddIssuesToActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddIssuesToArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddIssuesToBriefingInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddIssuesToResourceInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddLocationsToCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddOfInterestToToActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddOfInterestToToArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddProminentIndividualsToActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddProminentIndividualsToArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddRelatedActionsToArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddRelatedArticlesToArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddSectorsToActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddSectorsToArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddSectorsToBriefingInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddSectorsToCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddSectorsToEventInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddSectorsToResourceInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddSubGroupsToGroupInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddSubscriptionsToCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddTacticsToResourceInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export enum AggregationType {
  ByDays = 'ByDays',
  ByInstance = 'ByInstance'
}

export type AlertCollectionEntry = {
  __typename?: 'AlertCollectionEntry';
  collection?: Maybe<Array<AlertEntry>>;
};

export type AlertCollectionEntryInput = {
  collection?: InputMaybe<Array<AlertEntryInput>>;
};

export enum AlertDelivery {
  Daily = 'Daily',
  Immediate = 'Immediate'
}

export enum AlertDeliveryMethod {
  Portal = 'Portal',
  PortalAndEmail = 'PortalAndEmail'
}

export type AlertEntry = {
  __typename?: 'AlertEntry';
  campaigns?: Maybe<Array<AlertFilterEntry>>;
  companies?: Maybe<Array<AlertFilterEntry>>;
  delivery?: Maybe<AlertDelivery>;
  deliveryMethod?: Maybe<AlertDeliveryMethod>;
  groups?: Maybe<Array<AlertFilterEntry>>;
  id?: Maybe<Scalars['String']>;
  issues?: Maybe<Array<AlertFilterEntry>>;
  locations?: Maybe<Array<AlertFilterLocationEntry>>;
  name?: Maybe<Scalars['String']>;
  sectors?: Maybe<Array<AlertFilterEntry>>;
  status?: Maybe<AlertStatus>;
  tactics?: Maybe<Array<AlertFilterEntry>>;
};

export type AlertEntryInput = {
  campaigns?: InputMaybe<Array<AlertFilterEntryInput>>;
  companies?: InputMaybe<Array<AlertFilterEntryInput>>;
  delivery?: InputMaybe<AlertDelivery>;
  deliveryMethod?: InputMaybe<AlertDeliveryMethod>;
  groups?: InputMaybe<Array<AlertFilterEntryInput>>;
  id?: InputMaybe<Scalars['String']>;
  issues?: InputMaybe<Array<AlertFilterEntryInput>>;
  locations?: InputMaybe<Array<AlertFilterLocationEntryInput>>;
  name?: InputMaybe<Scalars['String']>;
  sectors?: InputMaybe<Array<AlertFilterEntryInput>>;
  status?: InputMaybe<AlertStatus>;
  tactics?: InputMaybe<Array<AlertFilterEntryInput>>;
};

export type AlertFilterEntry = {
  __typename?: 'AlertFilterEntry';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type AlertFilterEntryInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type AlertFilterLocationEntry = {
  __typename?: 'AlertFilterLocationEntry';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
};

export type AlertFilterLocationEntryInput = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
};

export enum AlertStatus {
  Active = 'Active',
  InActive = 'InActive'
}

export type AnalystDetailArg = {
  analysts?: InputMaybe<Array<Scalars['String']>>;
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
  types?: InputMaybe<Array<Scalars['String']>>;
};

export type AnalystDetailResult = {
  __typename?: 'AnalystDetailResult';
  analyst?: Maybe<Scalars['String']>;
  campaigns?: Maybe<Scalars['String']>;
  companies?: Maybe<Scalars['String']>;
  date: Scalars['DateTime'];
  groups?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  issues?: Maybe<Scalars['String']>;
  reads?: Maybe<Scalars['Float']>;
  sectors?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AnnualSubscription = {
  __typename?: 'AnnualSubscription';
  access?: Maybe<Scalars['JSONObject']>;
  accountRep?: Maybe<Scalars['String']>;
  analyst?: Maybe<Scalars['String']>;
  attachments?: Maybe<Array<Attachment>>;
  attachmentsAggregate: Array<AnnualSubscriptionAttachmentsAggregateResponse>;
  audiences?: Maybe<Scalars['String']>;
  bespokeHours?: Maybe<Scalars['Float']>;
  client: Company;
  clientId?: Maybe<Scalars['String']>;
  contact?: Maybe<CompanyContact>;
  contactId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  endDate: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  lockedBy?: Maybe<Scalars['String']>;
  pirs?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  startDate: Scalars['DateTime'];
  type: Scalars['String'];
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type AnnualSubscriptionAttachmentsArgs = {
  filter?: AttachmentFilter;
  sorting?: Array<AttachmentSort>;
};


export type AnnualSubscriptionAttachmentsAggregateArgs = {
  filter?: InputMaybe<AttachmentAggregateFilter>;
};

export type AnnualSubscriptionAccess = {
  __typename?: 'AnnualSubscriptionAccess';
  constraints: AnnualSubscriptionAccessConstraints;
  emails: AnnualSubscriptionAccessEmails;
  portal: AnnualSubscriptionAccessPortal;
};

export type AnnualSubscriptionAccessConstraints = {
  __typename?: 'AnnualSubscriptionAccessConstraints';
  companyProfile: Scalars['Boolean'];
  dpsOnDaysOfWeek?: Maybe<Scalars['String']>;
  foi: Scalars['Boolean'];
  longFormEmails: Scalars['Boolean'];
  outlook48: Scalars['Boolean'];
};

export type AnnualSubscriptionAccessConstraintsInput = {
  companyProfile?: Scalars['Boolean'];
  dpsOnDaysOfWeek?: InputMaybe<Scalars['String']>;
  foi?: Scalars['Boolean'];
  longFormEmails?: Scalars['Boolean'];
  outlook48?: Scalars['Boolean'];
};

export type AnnualSubscriptionAccessEmails = {
  __typename?: 'AnnualSubscriptionAccessEmails';
  dailyUpdate: Scalars['Boolean'];
  dps: Scalars['Boolean'];
  fysa: Scalars['Boolean'];
  monthlySector: Scalars['Boolean'];
  proactiveAlerts: Scalars['Boolean'];
  weeklyOutlook: Scalars['Boolean'];
};

export type AnnualSubscriptionAccessEmailsInput = {
  dailyUpdate?: Scalars['Boolean'];
  dps?: Scalars['Boolean'];
  fysa?: Scalars['Boolean'];
  monthlySector?: Scalars['Boolean'];
  proactiveAlerts?: Scalars['Boolean'];
  weeklyOutlook?: Scalars['Boolean'];
};

export type AnnualSubscriptionAccessInput = {
  constraints?: AnnualSubscriptionAccessConstraintsInput;
  emails?: AnnualSubscriptionAccessEmailsInput;
  portal?: AnnualSubscriptionAccessPortalInput;
};

export type AnnualSubscriptionAccessPortal = {
  __typename?: 'AnnualSubscriptionAccessPortal';
  annualReports: Scalars['Boolean'];
  briefings: Scalars['Boolean'];
  enabled: Scalars['Boolean'];
  excelExport: Scalars['Boolean'];
  reports: Scalars['Boolean'];
  webinars: Scalars['Boolean'];
  weeklyOutlooks: Scalars['Boolean'];
};

export type AnnualSubscriptionAccessPortalInput = {
  annualReports?: Scalars['Boolean'];
  briefings?: Scalars['Boolean'];
  enabled?: Scalars['Boolean'];
  excelExport?: Scalars['Boolean'];
  reports?: Scalars['Boolean'];
  webinars?: Scalars['Boolean'];
  weeklyOutlooks?: Scalars['Boolean'];
};

export type AnnualSubscriptionAggregateFilter = {
  access?: InputMaybe<JsonObjectFilterComparison>;
  accountRep?: InputMaybe<StringFieldComparison>;
  analyst?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<AnnualSubscriptionAggregateFilter>>;
  client?: InputMaybe<AnnualSubscriptionAggregateFilterCompanyAggregateFilter>;
  clientId?: InputMaybe<StringFieldComparison>;
  contactId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AnnualSubscriptionAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type AnnualSubscriptionAggregateFilterCompanyAggregateFilter = {
  and?: InputMaybe<Array<AnnualSubscriptionAggregateFilterCompanyAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AnnualSubscriptionAggregateFilterCompanyAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  ssoEmailPatterns?: InputMaybe<StringFieldComparison>;
  team?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type AnnualSubscriptionAggregateGroupBy = {
  __typename?: 'AnnualSubscriptionAggregateGroupBy';
  access?: Maybe<Scalars['JSONObject']>;
  accountRep?: Maybe<Scalars['String']>;
  analyst?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  contactId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  lockedBy?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type AnnualSubscriptionAggregateGroupByCreatedArgs = {
  by?: GroupBy;
};


export type AnnualSubscriptionAggregateGroupByEndDateArgs = {
  by?: GroupBy;
};


export type AnnualSubscriptionAggregateGroupByRemoteUpdatedArgs = {
  by?: GroupBy;
};


export type AnnualSubscriptionAggregateGroupByStartDateArgs = {
  by?: GroupBy;
};


export type AnnualSubscriptionAggregateGroupByUpdatedArgs = {
  by?: GroupBy;
};

export type AnnualSubscriptionAggregateResponse = {
  __typename?: 'AnnualSubscriptionAggregateResponse';
  count?: Maybe<AnnualSubscriptionCountAggregate>;
  groupBy?: Maybe<AnnualSubscriptionAggregateGroupBy>;
  max?: Maybe<AnnualSubscriptionMaxAggregate>;
  min?: Maybe<AnnualSubscriptionMinAggregate>;
};

export type AnnualSubscriptionAttachmentsAggregateGroupBy = {
  __typename?: 'AnnualSubscriptionAttachmentsAggregateGroupBy';
  annualSubscriptionId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type AnnualSubscriptionAttachmentsAggregateResponse = {
  __typename?: 'AnnualSubscriptionAttachmentsAggregateResponse';
  count?: Maybe<AnnualSubscriptionAttachmentsCountAggregate>;
  groupBy?: Maybe<AnnualSubscriptionAttachmentsAggregateGroupBy>;
  max?: Maybe<AnnualSubscriptionAttachmentsMaxAggregate>;
  min?: Maybe<AnnualSubscriptionAttachmentsMinAggregate>;
};

export type AnnualSubscriptionAttachmentsCountAggregate = {
  __typename?: 'AnnualSubscriptionAttachmentsCountAggregate';
  annualSubscriptionId?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type AnnualSubscriptionAttachmentsMaxAggregate = {
  __typename?: 'AnnualSubscriptionAttachmentsMaxAggregate';
  annualSubscriptionId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type AnnualSubscriptionAttachmentsMinAggregate = {
  __typename?: 'AnnualSubscriptionAttachmentsMinAggregate';
  annualSubscriptionId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type AnnualSubscriptionConnection = {
  __typename?: 'AnnualSubscriptionConnection';
  /** Array of edges. */
  edges: Array<AnnualSubscriptionEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type AnnualSubscriptionCountAggregate = {
  __typename?: 'AnnualSubscriptionCountAggregate';
  access?: Maybe<Scalars['Int']>;
  accountRep?: Maybe<Scalars['Int']>;
  analyst?: Maybe<Scalars['Int']>;
  clientId?: Maybe<Scalars['Int']>;
  contactId?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type AnnualSubscriptionDto = {
  access?: InputMaybe<Scalars['JSONObject']>;
  accountRep?: InputMaybe<Scalars['String']>;
  analyst?: InputMaybe<Scalars['String']>;
  audiences?: InputMaybe<Scalars['String']>;
  bespokeHours?: InputMaybe<Scalars['Float']>;
  clientId?: InputMaybe<Scalars['String']>;
  contactId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  pirs?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type AnnualSubscriptionDeleteResponse = {
  __typename?: 'AnnualSubscriptionDeleteResponse';
  access?: Maybe<Scalars['JSONObject']>;
  accountRep?: Maybe<Scalars['String']>;
  analyst?: Maybe<Scalars['String']>;
  audiences?: Maybe<Scalars['String']>;
  bespokeHours?: Maybe<Scalars['Float']>;
  clientId?: Maybe<Scalars['String']>;
  contactId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  lockedBy?: Maybe<Scalars['String']>;
  pirs?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type AnnualSubscriptionEdge = {
  __typename?: 'AnnualSubscriptionEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the AnnualSubscription */
  node: AnnualSubscription;
};

export type AnnualSubscriptionFilter = {
  access?: InputMaybe<JsonObjectFilterComparison>;
  accountRep?: InputMaybe<StringFieldComparison>;
  analyst?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<AnnualSubscriptionFilter>>;
  client?: InputMaybe<AnnualSubscriptionFilterCompanyFilter>;
  clientId?: InputMaybe<StringFieldComparison>;
  contactId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AnnualSubscriptionFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type AnnualSubscriptionFilterCompanyFilter = {
  and?: InputMaybe<Array<AnnualSubscriptionFilterCompanyFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AnnualSubscriptionFilterCompanyFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  ssoEmailPatterns?: InputMaybe<StringFieldComparison>;
  team?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type AnnualSubscriptionMaxAggregate = {
  __typename?: 'AnnualSubscriptionMaxAggregate';
  access?: Maybe<Scalars['JSONObject']>;
  accountRep?: Maybe<Scalars['String']>;
  analyst?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  contactId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type AnnualSubscriptionMinAggregate = {
  __typename?: 'AnnualSubscriptionMinAggregate';
  access?: Maybe<Scalars['JSONObject']>;
  accountRep?: Maybe<Scalars['String']>;
  analyst?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  contactId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type AnnualSubscriptionSort = {
  direction: SortDirection;
  field: AnnualSubscriptionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AnnualSubscriptionSortFields {
  Access = 'access',
  AccountRep = 'accountRep',
  Analyst = 'analyst',
  ClientId = 'clientId',
  ContactId = 'contactId',
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  EndDate = 'endDate',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  IsActive = 'isActive',
  LockedBy = 'lockedBy',
  RemoteUpdated = 'remoteUpdated',
  StartDate = 'startDate',
  Type = 'type',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type Article = {
  __typename?: 'Article';
  alertNotification?: Maybe<Scalars['Boolean']>;
  audience?: Maybe<Array<Scalars['String']>>;
  bringForward?: Maybe<Scalars['String']>;
  campaigns?: Maybe<Array<Campaign>>;
  campaignsAggregate: Array<ArticleCampaignsAggregateResponse>;
  companies?: Maybe<Array<Company>>;
  companiesAggregate: Array<ArticleCompaniesAggregateResponse>;
  content?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  draftedBy?: Maybe<Scalars['String']>;
  events?: Maybe<Array<Event>>;
  eventsAggregate: Array<ArticleEventsAggregateResponse>;
  groups?: Maybe<Array<Group>>;
  groupsAggregate: Array<ArticleGroupsAggregateResponse>;
  hashtags?: Maybe<Array<Scalars['String']>>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  issues?: Maybe<Array<Issue>>;
  issuesAggregate: Array<ArticleIssuesAggregateResponse>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  location?: Maybe<Location>;
  locationDescription?: Maybe<Scalars['String']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  ofInterestTo?: Maybe<Array<Company>>;
  ofInterestToAggregate: Array<ArticleOfInterestToAggregateResponse>;
  originalContent?: Maybe<Scalars['String']>;
  prominentIndividuals?: Maybe<Array<ProminentIndividual>>;
  prominentIndividualsAggregate: Array<ArticleProminentIndividualsAggregateResponse>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  relatedActions?: Maybe<Array<Action>>;
  relatedActionsAggregate: Array<ArticleRelatedActionsAggregateResponse>;
  relatedArticles?: Maybe<Array<Article>>;
  relatedArticlesAggregate: Array<ArticleRelatedArticlesAggregateResponse>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  sectors?: Maybe<Array<Sector>>;
  sectorsAggregate: Array<ArticleSectorsAggregateResponse>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sources?: Maybe<Array<Scalars['String']>>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type ArticleCampaignsArgs = {
  filter?: CampaignFilter;
  sorting?: Array<CampaignSort>;
};


export type ArticleCampaignsAggregateArgs = {
  filter?: InputMaybe<CampaignAggregateFilter>;
};


export type ArticleCompaniesArgs = {
  filter?: CompanyFilter;
  sorting?: Array<CompanySort>;
};


export type ArticleCompaniesAggregateArgs = {
  filter?: InputMaybe<CompanyAggregateFilter>;
};


export type ArticleEventsArgs = {
  filter?: EventFilter;
  sorting?: Array<EventSort>;
};


export type ArticleEventsAggregateArgs = {
  filter?: InputMaybe<EventAggregateFilter>;
};


export type ArticleGroupsArgs = {
  filter?: GroupFilter;
  sorting?: Array<GroupSort>;
};


export type ArticleGroupsAggregateArgs = {
  filter?: InputMaybe<GroupAggregateFilter>;
};


export type ArticleIssuesArgs = {
  filter?: IssueFilter;
  sorting?: Array<IssueSort>;
};


export type ArticleIssuesAggregateArgs = {
  filter?: InputMaybe<IssueAggregateFilter>;
};


export type ArticleOfInterestToArgs = {
  filter?: CompanyFilter;
  sorting?: Array<CompanySort>;
};


export type ArticleOfInterestToAggregateArgs = {
  filter?: InputMaybe<CompanyAggregateFilter>;
};


export type ArticleProminentIndividualsArgs = {
  filter?: ProminentIndividualFilter;
  sorting?: Array<ProminentIndividualSort>;
};


export type ArticleProminentIndividualsAggregateArgs = {
  filter?: InputMaybe<ProminentIndividualAggregateFilter>;
};


export type ArticleRelatedActionsArgs = {
  filter?: ActionFilter;
  sorting?: Array<ActionSort>;
};


export type ArticleRelatedActionsAggregateArgs = {
  filter?: InputMaybe<ActionAggregateFilter>;
};


export type ArticleRelatedArticlesArgs = {
  filter?: ArticleFilter;
  sorting?: Array<ArticleSort>;
};


export type ArticleRelatedArticlesAggregateArgs = {
  filter?: InputMaybe<ArticleAggregateFilter>;
};


export type ArticleSectorsArgs = {
  filter?: SectorFilter;
  sorting?: Array<SectorSort>;
};


export type ArticleSectorsAggregateArgs = {
  filter?: InputMaybe<SectorAggregateFilter>;
};

export type ArticleAggregateFilter = {
  alertNotification?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<ArticleAggregateFilter>>;
  audienceRaw?: InputMaybe<StringFieldComparison>;
  bringForward?: InputMaybe<StringFieldComparison>;
  campaigns?: InputMaybe<ArticleAggregateFilterCampaignAggregateFilter>;
  companies?: InputMaybe<ArticleAggregateFilterCompanyAggregateFilter>;
  contentApprovedBy?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  draftedBy?: InputMaybe<StringFieldComparison>;
  events?: InputMaybe<ArticleAggregateFilterEventAggregateFilter>;
  groups?: InputMaybe<ArticleAggregateFilterGroupAggregateFilter>;
  hashtagsRaw?: InputMaybe<StringFieldComparison>;
  highlightImageUrl?: InputMaybe<StringFieldComparison>;
  highlightUntilDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  issues?: InputMaybe<ArticleAggregateFilterIssueAggregateFilter>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  location?: InputMaybe<ArticleAggregateFilterLocationAggregateFilter>;
  locationId?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  mainUntilDate?: InputMaybe<DateFieldComparison>;
  ofInterestTo?: InputMaybe<ArticleAggregateFilterCompanyAggregateFilter>;
  or?: InputMaybe<Array<ArticleAggregateFilter>>;
  prominentIndividuals?: InputMaybe<ArticleAggregateFilterProminentIndividualAggregateFilter>;
  publishedBy?: InputMaybe<StringFieldComparison>;
  publishedDate?: InputMaybe<DateFieldComparison>;
  relatedActions?: InputMaybe<ArticleAggregateFilterActionAggregateFilter>;
  relatedArticles?: InputMaybe<ArticleAggregateFilterArticleAggregateFilter>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  sectors?: InputMaybe<ArticleAggregateFilterSectorAggregateFilter>;
  source?: InputMaybe<StringFieldComparison>;
  sourceRefId?: InputMaybe<StringFieldComparison>;
  sourcesRaw?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  styleApprovedBy?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ArticleAggregateFilterActionAggregateFilter = {
  actionStatus?: InputMaybe<ActionStatusFilterComparison>;
  alertNotification?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<ArticleAggregateFilterActionAggregateFilter>>;
  audienceRaw?: InputMaybe<StringFieldComparison>;
  bringForward?: InputMaybe<StringFieldComparison>;
  contentApprovedBy?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  draftedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  going?: InputMaybe<NumberFieldComparison>;
  hashtagsRaw?: InputMaybe<StringFieldComparison>;
  highlightImageUrl?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  impact?: InputMaybe<StringFieldComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  interested?: InputMaybe<NumberFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  latitude?: InputMaybe<FloatFieldComparison>;
  locationId?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  longitude?: InputMaybe<FloatFieldComparison>;
  mainUntilDate?: InputMaybe<DateFieldComparison>;
  ongoing?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<ArticleAggregateFilterActionAggregateFilter>>;
  publishedBy?: InputMaybe<StringFieldComparison>;
  publishedDate?: InputMaybe<DateFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  source?: InputMaybe<StringFieldComparison>;
  sourceRefId?: InputMaybe<StringFieldComparison>;
  sourcesRaw?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  styleApprovedBy?: InputMaybe<StringFieldComparison>;
  tacticId?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ArticleAggregateFilterArticleAggregateFilter = {
  alertNotification?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<ArticleAggregateFilterArticleAggregateFilter>>;
  audienceRaw?: InputMaybe<StringFieldComparison>;
  bringForward?: InputMaybe<StringFieldComparison>;
  contentApprovedBy?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  draftedBy?: InputMaybe<StringFieldComparison>;
  hashtagsRaw?: InputMaybe<StringFieldComparison>;
  highlightImageUrl?: InputMaybe<StringFieldComparison>;
  highlightUntilDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  locationId?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  mainUntilDate?: InputMaybe<DateFieldComparison>;
  or?: InputMaybe<Array<ArticleAggregateFilterArticleAggregateFilter>>;
  publishedBy?: InputMaybe<StringFieldComparison>;
  publishedDate?: InputMaybe<DateFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  source?: InputMaybe<StringFieldComparison>;
  sourceRefId?: InputMaybe<StringFieldComparison>;
  sourcesRaw?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  styleApprovedBy?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ArticleAggregateFilterCampaignAggregateFilter = {
  and?: InputMaybe<Array<ArticleAggregateFilterCampaignAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ArticleAggregateFilterCampaignAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ArticleAggregateFilterCompanyAggregateFilter = {
  and?: InputMaybe<Array<ArticleAggregateFilterCompanyAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ArticleAggregateFilterCompanyAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  ssoEmailPatterns?: InputMaybe<StringFieldComparison>;
  team?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ArticleAggregateFilterEventAggregateFilter = {
  and?: InputMaybe<Array<ArticleAggregateFilterEventAggregateFilter>>;
  briefingRequired?: InputMaybe<BooleanFieldComparison>;
  companyId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  latitude?: InputMaybe<FloatFieldComparison>;
  locationId?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  longitude?: InputMaybe<FloatFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ArticleAggregateFilterEventAggregateFilter>>;
  private?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  risk?: InputMaybe<StringFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  type?: InputMaybe<EventTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ArticleAggregateFilterGroupAggregateFilter = {
  and?: InputMaybe<Array<ArticleAggregateFilterGroupAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ArticleAggregateFilterGroupAggregateFilter>>;
  parentGroupId?: InputMaybe<StringFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ArticleAggregateFilterIssueAggregateFilter = {
  and?: InputMaybe<Array<ArticleAggregateFilterIssueAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ArticleAggregateFilterIssueAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ArticleAggregateFilterLocationAggregateFilter = {
  and?: InputMaybe<Array<ArticleAggregateFilterLocationAggregateFilter>>;
  city?: InputMaybe<StringFieldComparison>;
  country?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  metropolitanArea?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ArticleAggregateFilterLocationAggregateFilter>>;
  province?: InputMaybe<StringFieldComparison>;
  region?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ArticleAggregateFilterProminentIndividualAggregateFilter = {
  and?: InputMaybe<Array<ArticleAggregateFilterProminentIndividualAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ArticleAggregateFilterProminentIndividualAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ArticleAggregateFilterSectorAggregateFilter = {
  and?: InputMaybe<Array<ArticleAggregateFilterSectorAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ArticleAggregateFilterSectorAggregateFilter>>;
  ppd21?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ArticleAggregateGroupBy = {
  __typename?: 'ArticleAggregateGroupBy';
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type ArticleAggregateGroupByCreatedArgs = {
  by?: GroupBy;
};


export type ArticleAggregateGroupByHighlightUntilDateArgs = {
  by?: GroupBy;
};


export type ArticleAggregateGroupByLastModifiedDateArgs = {
  by?: GroupBy;
};


export type ArticleAggregateGroupByMainUntilDateArgs = {
  by?: GroupBy;
};


export type ArticleAggregateGroupByPublishedDateArgs = {
  by?: GroupBy;
};


export type ArticleAggregateGroupByRemoteUpdatedArgs = {
  by?: GroupBy;
};


export type ArticleAggregateGroupByUpdatedArgs = {
  by?: GroupBy;
};

export type ArticleAggregateResponse = {
  __typename?: 'ArticleAggregateResponse';
  count?: Maybe<ArticleCountAggregate>;
  groupBy?: Maybe<ArticleAggregateGroupBy>;
  max?: Maybe<ArticleMaxAggregate>;
  min?: Maybe<ArticleMinAggregate>;
};

export type ArticleBatchEntry = {
  alertNotification?: InputMaybe<Scalars['Boolean']>;
  audience?: InputMaybe<Array<Scalars['String']>>;
  bringForward?: InputMaybe<Scalars['String']>;
  campaignsIds?: InputMaybe<Array<Scalars['String']>>;
  companiesIds?: InputMaybe<Array<Scalars['String']>>;
  content?: InputMaybe<Scalars['String']>;
  contentApprovedBy?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  draftedBy?: InputMaybe<Scalars['String']>;
  eventsIds?: InputMaybe<Array<Scalars['String']>>;
  groupsIds?: InputMaybe<Array<Scalars['String']>>;
  hashtags?: InputMaybe<Array<Scalars['String']>>;
  highlightImageUrl?: InputMaybe<Scalars['String']>;
  highlightUntilDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  issuesIds?: InputMaybe<Array<Scalars['String']>>;
  lastModifiedDate?: InputMaybe<Scalars['DateTime']>;
  locationDescription?: InputMaybe<Scalars['String']>;
  locationId?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  mainUntilDate?: InputMaybe<Scalars['DateTime']>;
  ofInterestToIds?: InputMaybe<Array<Scalars['String']>>;
  originalContent?: InputMaybe<Scalars['String']>;
  prominentIndividualsIds?: InputMaybe<Array<Scalars['String']>>;
  publishedBy?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['DateTime']>;
  relatedActionIds?: InputMaybe<Array<Scalars['String']>>;
  relatedArticleIds?: InputMaybe<Array<Scalars['String']>>;
  sectorIds?: InputMaybe<Array<Scalars['String']>>;
  source?: InputMaybe<Scalars['String']>;
  sourceRefId?: InputMaybe<Scalars['String']>;
  sources?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<PostStatus>;
  styleApprovedBy?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type ArticleBatchEntryResult = {
  __typename?: 'ArticleBatchEntryResult';
  article?: Maybe<Article>;
  error?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type ArticleCampaignsAggregateGroupBy = {
  __typename?: 'ArticleCampaignsAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  monitoring?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleCampaignsAggregateResponse = {
  __typename?: 'ArticleCampaignsAggregateResponse';
  count?: Maybe<ArticleCampaignsCountAggregate>;
  groupBy?: Maybe<ArticleCampaignsAggregateGroupBy>;
  max?: Maybe<ArticleCampaignsMaxAggregate>;
  min?: Maybe<ArticleCampaignsMinAggregate>;
};

export type ArticleCampaignsCountAggregate = {
  __typename?: 'ArticleCampaignsCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  monitoring?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ArticleCampaignsMaxAggregate = {
  __typename?: 'ArticleCampaignsMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleCampaignsMinAggregate = {
  __typename?: 'ArticleCampaignsMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleCompaniesAggregateGroupBy = {
  __typename?: 'ArticleCompaniesAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  ssoEmailPatterns?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleCompaniesAggregateResponse = {
  __typename?: 'ArticleCompaniesAggregateResponse';
  count?: Maybe<ArticleCompaniesCountAggregate>;
  groupBy?: Maybe<ArticleCompaniesAggregateGroupBy>;
  max?: Maybe<ArticleCompaniesMaxAggregate>;
  min?: Maybe<ArticleCompaniesMinAggregate>;
};

export type ArticleCompaniesCountAggregate = {
  __typename?: 'ArticleCompaniesCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  ssoEmailPatterns?: Maybe<Scalars['Int']>;
  team?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ArticleCompaniesMaxAggregate = {
  __typename?: 'ArticleCompaniesMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  ssoEmailPatterns?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleCompaniesMinAggregate = {
  __typename?: 'ArticleCompaniesMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  ssoEmailPatterns?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  /** Array of edges. */
  edges: Array<ArticleEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ArticleCountAggregate = {
  __typename?: 'ArticleCountAggregate';
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  highlightUntilDate?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ArticleDeleteResponse = {
  __typename?: 'ArticleDeleteResponse';
  alertNotification?: Maybe<Scalars['Boolean']>;
  audience?: Maybe<Array<Scalars['String']>>;
  bringForward?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtags?: Maybe<Array<Scalars['String']>>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationDescription?: Maybe<Scalars['String']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  originalContent?: Maybe<Scalars['String']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sources?: Maybe<Array<Scalars['String']>>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleEdge = {
  __typename?: 'ArticleEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Article */
  node: Article;
};

export type ArticleEventsAggregateGroupBy = {
  __typename?: 'ArticleEventsAggregateGroupBy';
  briefingRequired?: Maybe<Scalars['Boolean']>;
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  monitoring?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Boolean']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  risk?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  type?: Maybe<EventType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleEventsAggregateResponse = {
  __typename?: 'ArticleEventsAggregateResponse';
  avg?: Maybe<ArticleEventsAvgAggregate>;
  count?: Maybe<ArticleEventsCountAggregate>;
  groupBy?: Maybe<ArticleEventsAggregateGroupBy>;
  max?: Maybe<ArticleEventsMaxAggregate>;
  min?: Maybe<ArticleEventsMinAggregate>;
  sum?: Maybe<ArticleEventsSumAggregate>;
};

export type ArticleEventsAvgAggregate = {
  __typename?: 'ArticleEventsAvgAggregate';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type ArticleEventsCountAggregate = {
  __typename?: 'ArticleEventsCountAggregate';
  briefingRequired?: Maybe<Scalars['Int']>;
  companyId?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  monitoring?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  private?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  risk?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ArticleEventsMaxAggregate = {
  __typename?: 'ArticleEventsMaxAggregate';
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  risk?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  type?: Maybe<EventType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleEventsMinAggregate = {
  __typename?: 'ArticleEventsMinAggregate';
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  risk?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  type?: Maybe<EventType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleEventsSumAggregate = {
  __typename?: 'ArticleEventsSumAggregate';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type ArticleFilter = {
  alertNotification?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<ArticleFilter>>;
  audienceRaw?: InputMaybe<StringFieldComparison>;
  bringForward?: InputMaybe<StringFieldComparison>;
  campaigns?: InputMaybe<ArticleFilterCampaignFilter>;
  companies?: InputMaybe<ArticleFilterCompanyFilter>;
  contentApprovedBy?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  draftedBy?: InputMaybe<StringFieldComparison>;
  events?: InputMaybe<ArticleFilterEventFilter>;
  groups?: InputMaybe<ArticleFilterGroupFilter>;
  hashtagsRaw?: InputMaybe<StringFieldComparison>;
  highlightImageUrl?: InputMaybe<StringFieldComparison>;
  highlightUntilDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  issues?: InputMaybe<ArticleFilterIssueFilter>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  location?: InputMaybe<ArticleFilterLocationFilter>;
  locationId?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  mainUntilDate?: InputMaybe<DateFieldComparison>;
  ofInterestTo?: InputMaybe<ArticleFilterCompanyFilter>;
  or?: InputMaybe<Array<ArticleFilter>>;
  prominentIndividuals?: InputMaybe<ArticleFilterProminentIndividualFilter>;
  publishedBy?: InputMaybe<StringFieldComparison>;
  publishedDate?: InputMaybe<DateFieldComparison>;
  relatedActions?: InputMaybe<ArticleFilterActionFilter>;
  relatedArticles?: InputMaybe<ArticleFilterArticleFilter>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  sectors?: InputMaybe<ArticleFilterSectorFilter>;
  source?: InputMaybe<StringFieldComparison>;
  sourceRefId?: InputMaybe<StringFieldComparison>;
  sourcesRaw?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  styleApprovedBy?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ArticleFilterActionFilter = {
  actionStatus?: InputMaybe<ActionStatusFilterComparison>;
  alertNotification?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<ArticleFilterActionFilter>>;
  audienceRaw?: InputMaybe<StringFieldComparison>;
  bringForward?: InputMaybe<StringFieldComparison>;
  contentApprovedBy?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  draftedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  going?: InputMaybe<NumberFieldComparison>;
  hashtagsRaw?: InputMaybe<StringFieldComparison>;
  highlightImageUrl?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  impact?: InputMaybe<StringFieldComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  interested?: InputMaybe<NumberFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  latitude?: InputMaybe<FloatFieldComparison>;
  locationId?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  longitude?: InputMaybe<FloatFieldComparison>;
  mainUntilDate?: InputMaybe<DateFieldComparison>;
  ongoing?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<ArticleFilterActionFilter>>;
  publishedBy?: InputMaybe<StringFieldComparison>;
  publishedDate?: InputMaybe<DateFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  source?: InputMaybe<StringFieldComparison>;
  sourceRefId?: InputMaybe<StringFieldComparison>;
  sourcesRaw?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  styleApprovedBy?: InputMaybe<StringFieldComparison>;
  tacticId?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ArticleFilterArticleFilter = {
  alertNotification?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<ArticleFilterArticleFilter>>;
  audienceRaw?: InputMaybe<StringFieldComparison>;
  bringForward?: InputMaybe<StringFieldComparison>;
  contentApprovedBy?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  draftedBy?: InputMaybe<StringFieldComparison>;
  hashtagsRaw?: InputMaybe<StringFieldComparison>;
  highlightImageUrl?: InputMaybe<StringFieldComparison>;
  highlightUntilDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  locationId?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  mainUntilDate?: InputMaybe<DateFieldComparison>;
  or?: InputMaybe<Array<ArticleFilterArticleFilter>>;
  publishedBy?: InputMaybe<StringFieldComparison>;
  publishedDate?: InputMaybe<DateFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  source?: InputMaybe<StringFieldComparison>;
  sourceRefId?: InputMaybe<StringFieldComparison>;
  sourcesRaw?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  styleApprovedBy?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ArticleFilterCampaignFilter = {
  and?: InputMaybe<Array<ArticleFilterCampaignFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ArticleFilterCampaignFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ArticleFilterCompanyFilter = {
  and?: InputMaybe<Array<ArticleFilterCompanyFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ArticleFilterCompanyFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  ssoEmailPatterns?: InputMaybe<StringFieldComparison>;
  team?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ArticleFilterEventFilter = {
  and?: InputMaybe<Array<ArticleFilterEventFilter>>;
  briefingRequired?: InputMaybe<BooleanFieldComparison>;
  companyId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  latitude?: InputMaybe<FloatFieldComparison>;
  locationId?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  longitude?: InputMaybe<FloatFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ArticleFilterEventFilter>>;
  private?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  risk?: InputMaybe<StringFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  type?: InputMaybe<EventTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ArticleFilterGroupFilter = {
  and?: InputMaybe<Array<ArticleFilterGroupFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ArticleFilterGroupFilter>>;
  parentGroupId?: InputMaybe<StringFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ArticleFilterIssueFilter = {
  and?: InputMaybe<Array<ArticleFilterIssueFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ArticleFilterIssueFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ArticleFilterLocationFilter = {
  and?: InputMaybe<Array<ArticleFilterLocationFilter>>;
  city?: InputMaybe<StringFieldComparison>;
  country?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  metropolitanArea?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ArticleFilterLocationFilter>>;
  province?: InputMaybe<StringFieldComparison>;
  region?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ArticleFilterProminentIndividualFilter = {
  and?: InputMaybe<Array<ArticleFilterProminentIndividualFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ArticleFilterProminentIndividualFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ArticleFilterSectorFilter = {
  and?: InputMaybe<Array<ArticleFilterSectorFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ArticleFilterSectorFilter>>;
  ppd21?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ArticleGroupsAggregateGroupBy = {
  __typename?: 'ArticleGroupsAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  monitoring?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  parentGroupId?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleGroupsAggregateResponse = {
  __typename?: 'ArticleGroupsAggregateResponse';
  count?: Maybe<ArticleGroupsCountAggregate>;
  groupBy?: Maybe<ArticleGroupsAggregateGroupBy>;
  max?: Maybe<ArticleGroupsMaxAggregate>;
  min?: Maybe<ArticleGroupsMinAggregate>;
};

export type ArticleGroupsCountAggregate = {
  __typename?: 'ArticleGroupsCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  monitoring?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  parentGroupId?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ArticleGroupsMaxAggregate = {
  __typename?: 'ArticleGroupsMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parentGroupId?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleGroupsMinAggregate = {
  __typename?: 'ArticleGroupsMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parentGroupId?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleIssuesAggregateGroupBy = {
  __typename?: 'ArticleIssuesAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  monitoring?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleIssuesAggregateResponse = {
  __typename?: 'ArticleIssuesAggregateResponse';
  count?: Maybe<ArticleIssuesCountAggregate>;
  groupBy?: Maybe<ArticleIssuesAggregateGroupBy>;
  max?: Maybe<ArticleIssuesMaxAggregate>;
  min?: Maybe<ArticleIssuesMinAggregate>;
};

export type ArticleIssuesCountAggregate = {
  __typename?: 'ArticleIssuesCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  monitoring?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ArticleIssuesMaxAggregate = {
  __typename?: 'ArticleIssuesMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleIssuesMinAggregate = {
  __typename?: 'ArticleIssuesMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleMaxAggregate = {
  __typename?: 'ArticleMaxAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleMinAggregate = {
  __typename?: 'ArticleMinAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleOfInterestToAggregateGroupBy = {
  __typename?: 'ArticleOfInterestToAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  ssoEmailPatterns?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleOfInterestToAggregateResponse = {
  __typename?: 'ArticleOfInterestToAggregateResponse';
  count?: Maybe<ArticleOfInterestToCountAggregate>;
  groupBy?: Maybe<ArticleOfInterestToAggregateGroupBy>;
  max?: Maybe<ArticleOfInterestToMaxAggregate>;
  min?: Maybe<ArticleOfInterestToMinAggregate>;
};

export type ArticleOfInterestToCountAggregate = {
  __typename?: 'ArticleOfInterestToCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  ssoEmailPatterns?: Maybe<Scalars['Int']>;
  team?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ArticleOfInterestToMaxAggregate = {
  __typename?: 'ArticleOfInterestToMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  ssoEmailPatterns?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleOfInterestToMinAggregate = {
  __typename?: 'ArticleOfInterestToMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  ssoEmailPatterns?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleProminentIndividualsAggregateGroupBy = {
  __typename?: 'ArticleProminentIndividualsAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleProminentIndividualsAggregateResponse = {
  __typename?: 'ArticleProminentIndividualsAggregateResponse';
  count?: Maybe<ArticleProminentIndividualsCountAggregate>;
  groupBy?: Maybe<ArticleProminentIndividualsAggregateGroupBy>;
  max?: Maybe<ArticleProminentIndividualsMaxAggregate>;
  min?: Maybe<ArticleProminentIndividualsMinAggregate>;
};

export type ArticleProminentIndividualsCountAggregate = {
  __typename?: 'ArticleProminentIndividualsCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ArticleProminentIndividualsMaxAggregate = {
  __typename?: 'ArticleProminentIndividualsMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleProminentIndividualsMinAggregate = {
  __typename?: 'ArticleProminentIndividualsMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleRelatedActionsAggregateGroupBy = {
  __typename?: 'ArticleRelatedActionsAggregateGroupBy';
  actionStatus?: Maybe<ActionStatus>;
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  inActive?: Maybe<Scalars['Boolean']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  ongoing?: Maybe<Scalars['Boolean']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleRelatedActionsAggregateResponse = {
  __typename?: 'ArticleRelatedActionsAggregateResponse';
  avg?: Maybe<ArticleRelatedActionsAvgAggregate>;
  count?: Maybe<ArticleRelatedActionsCountAggregate>;
  groupBy?: Maybe<ArticleRelatedActionsAggregateGroupBy>;
  max?: Maybe<ArticleRelatedActionsMaxAggregate>;
  min?: Maybe<ArticleRelatedActionsMinAggregate>;
  sum?: Maybe<ArticleRelatedActionsSumAggregate>;
};

export type ArticleRelatedActionsAvgAggregate = {
  __typename?: 'ArticleRelatedActionsAvgAggregate';
  going?: Maybe<Scalars['Float']>;
  interested?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type ArticleRelatedActionsCountAggregate = {
  __typename?: 'ArticleRelatedActionsCountAggregate';
  actionStatus?: Maybe<Scalars['Int']>;
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Int']>;
  going?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  impact?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  interested?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  ongoing?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  tacticId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ArticleRelatedActionsMaxAggregate = {
  __typename?: 'ArticleRelatedActionsMaxAggregate';
  actionStatus?: Maybe<ActionStatus>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleRelatedActionsMinAggregate = {
  __typename?: 'ArticleRelatedActionsMinAggregate';
  actionStatus?: Maybe<ActionStatus>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleRelatedActionsSumAggregate = {
  __typename?: 'ArticleRelatedActionsSumAggregate';
  going?: Maybe<Scalars['Float']>;
  interested?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type ArticleRelatedArticlesAggregateGroupBy = {
  __typename?: 'ArticleRelatedArticlesAggregateGroupBy';
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleRelatedArticlesAggregateResponse = {
  __typename?: 'ArticleRelatedArticlesAggregateResponse';
  count?: Maybe<ArticleRelatedArticlesCountAggregate>;
  groupBy?: Maybe<ArticleRelatedArticlesAggregateGroupBy>;
  max?: Maybe<ArticleRelatedArticlesMaxAggregate>;
  min?: Maybe<ArticleRelatedArticlesMinAggregate>;
};

export type ArticleRelatedArticlesCountAggregate = {
  __typename?: 'ArticleRelatedArticlesCountAggregate';
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  highlightUntilDate?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ArticleRelatedArticlesMaxAggregate = {
  __typename?: 'ArticleRelatedArticlesMaxAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleRelatedArticlesMinAggregate = {
  __typename?: 'ArticleRelatedArticlesMinAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleSectorsAggregateGroupBy = {
  __typename?: 'ArticleSectorsAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ppd21?: Maybe<Scalars['Boolean']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleSectorsAggregateResponse = {
  __typename?: 'ArticleSectorsAggregateResponse';
  count?: Maybe<ArticleSectorsCountAggregate>;
  groupBy?: Maybe<ArticleSectorsAggregateGroupBy>;
  max?: Maybe<ArticleSectorsMaxAggregate>;
  min?: Maybe<ArticleSectorsMinAggregate>;
};

export type ArticleSectorsCountAggregate = {
  __typename?: 'ArticleSectorsCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  ppd21?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ArticleSectorsMaxAggregate = {
  __typename?: 'ArticleSectorsMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleSectorsMinAggregate = {
  __typename?: 'ArticleSectorsMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ArticleSort = {
  direction: SortDirection;
  field: ArticleSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ArticleSortFields {
  AlertNotification = 'alertNotification',
  AudienceRaw = 'audienceRaw',
  BringForward = 'bringForward',
  ContentApprovedBy = 'contentApprovedBy',
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  DraftedBy = 'draftedBy',
  HashtagsRaw = 'hashtagsRaw',
  HighlightImageUrl = 'highlightImageUrl',
  HighlightUntilDate = 'highlightUntilDate',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LastModifiedDate = 'lastModifiedDate',
  LocationId = 'locationId',
  LockedBy = 'lockedBy',
  MainUntilDate = 'mainUntilDate',
  PublishedBy = 'publishedBy',
  PublishedDate = 'publishedDate',
  RemoteUpdated = 'remoteUpdated',
  Source = 'source',
  SourceRefId = 'sourceRefId',
  SourcesRaw = 'sourcesRaw',
  Status = 'status',
  StyleApprovedBy = 'styleApprovedBy',
  Title = 'title',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type ArticlesBatchInput = {
  articles?: InputMaybe<Array<ArticleBatchEntry>>;
};

export type ArticlesBatchResult = {
  __typename?: 'ArticlesBatchResult';
  results?: Maybe<Array<ArticleBatchEntryResult>>;
};

export type Attachment = {
  __typename?: 'Attachment';
  annualSubscription?: Maybe<AnnualSubscription>;
  annualSubscriptionId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  type: Scalars['String'];
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
  uri: Scalars['String'];
};

export type AttachmentAggregateFilter = {
  and?: InputMaybe<Array<AttachmentAggregateFilter>>;
  annualSubscription?: InputMaybe<AttachmentAggregateFilterAnnualSubscriptionAggregateFilter>;
  annualSubscriptionId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AttachmentAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type AttachmentAggregateFilterAnnualSubscriptionAggregateFilter = {
  access?: InputMaybe<JsonObjectFilterComparison>;
  accountRep?: InputMaybe<StringFieldComparison>;
  analyst?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<AttachmentAggregateFilterAnnualSubscriptionAggregateFilter>>;
  clientId?: InputMaybe<StringFieldComparison>;
  contactId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AttachmentAggregateFilterAnnualSubscriptionAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type AttachmentConnection = {
  __typename?: 'AttachmentConnection';
  /** Array of edges. */
  edges: Array<AttachmentEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type AttachmentDeleteResponse = {
  __typename?: 'AttachmentDeleteResponse';
  annualSubscriptionId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

export type AttachmentEdge = {
  __typename?: 'AttachmentEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Attachment */
  node: Attachment;
};

export type AttachmentFilter = {
  and?: InputMaybe<Array<AttachmentFilter>>;
  annualSubscription?: InputMaybe<AttachmentFilterAnnualSubscriptionFilter>;
  annualSubscriptionId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AttachmentFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type AttachmentFilterAnnualSubscriptionFilter = {
  access?: InputMaybe<JsonObjectFilterComparison>;
  accountRep?: InputMaybe<StringFieldComparison>;
  analyst?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<AttachmentFilterAnnualSubscriptionFilter>>;
  clientId?: InputMaybe<StringFieldComparison>;
  contactId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AttachmentFilterAnnualSubscriptionFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type AttachmentSort = {
  direction: SortDirection;
  field: AttachmentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AttachmentSortFields {
  AnnualSubscriptionId = 'annualSubscriptionId',
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LockedBy = 'lockedBy',
  RemoteUpdated = 'remoteUpdated',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type Audience = {
  __typename?: 'Audience';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  script?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type AudienceConnection = {
  __typename?: 'AudienceConnection';
  /** Array of edges. */
  edges: Array<AudienceEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type AudienceDeleteFilter = {
  and?: InputMaybe<Array<AudienceDeleteFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AudienceDeleteFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type AudienceDeleteResponse = {
  __typename?: 'AudienceDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  script?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type AudienceEdge = {
  __typename?: 'AudienceEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Audience */
  node: Audience;
};

export type AudienceFilter = {
  and?: InputMaybe<Array<AudienceFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AudienceFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type AudienceSort = {
  direction: SortDirection;
  field: AudienceSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AudienceSortFields {
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LockedBy = 'lockedBy',
  Name = 'name',
  RemoteUpdated = 'remoteUpdated',
  Type = 'type',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type AudienceUpdateFilter = {
  and?: InputMaybe<Array<AudienceUpdateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AudienceUpdateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type BooleanFieldComparison = {
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
};

export type Briefing = {
  __typename?: 'Briefing';
  alertNotification?: Maybe<Scalars['Boolean']>;
  audience?: Maybe<Array<Scalars['String']>>;
  bringForward?: Maybe<Scalars['String']>;
  campaigns?: Maybe<Array<Campaign>>;
  campaignsAggregate: Array<BriefingCampaignsAggregateResponse>;
  companies?: Maybe<Array<Company>>;
  companiesAggregate: Array<BriefingCompaniesAggregateResponse>;
  content?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  draftedBy?: Maybe<Scalars['String']>;
  events?: Maybe<Array<Event>>;
  eventsAggregate: Array<BriefingEventsAggregateResponse>;
  groups?: Maybe<Array<Group>>;
  groupsAggregate: Array<BriefingGroupsAggregateResponse>;
  hashtags?: Maybe<Array<Scalars['String']>>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  issues?: Maybe<Array<Issue>>;
  issuesAggregate: Array<BriefingIssuesAggregateResponse>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  location?: Maybe<Location>;
  locationDescription?: Maybe<Scalars['String']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  originalContent?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  restricted?: Maybe<Scalars['Boolean']>;
  sectors?: Maybe<Array<Sector>>;
  sectorsAggregate: Array<BriefingSectorsAggregateResponse>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sources?: Maybe<Array<Scalars['String']>>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type BriefingCampaignsArgs = {
  filter?: CampaignFilter;
  sorting?: Array<CampaignSort>;
};


export type BriefingCampaignsAggregateArgs = {
  filter?: InputMaybe<CampaignAggregateFilter>;
};


export type BriefingCompaniesArgs = {
  filter?: CompanyFilter;
  sorting?: Array<CompanySort>;
};


export type BriefingCompaniesAggregateArgs = {
  filter?: InputMaybe<CompanyAggregateFilter>;
};


export type BriefingEventsArgs = {
  filter?: EventFilter;
  sorting?: Array<EventSort>;
};


export type BriefingEventsAggregateArgs = {
  filter?: InputMaybe<EventAggregateFilter>;
};


export type BriefingGroupsArgs = {
  filter?: GroupFilter;
  sorting?: Array<GroupSort>;
};


export type BriefingGroupsAggregateArgs = {
  filter?: InputMaybe<GroupAggregateFilter>;
};


export type BriefingIssuesArgs = {
  filter?: IssueFilter;
  sorting?: Array<IssueSort>;
};


export type BriefingIssuesAggregateArgs = {
  filter?: InputMaybe<IssueAggregateFilter>;
};


export type BriefingSectorsArgs = {
  filter?: SectorFilter;
  sorting?: Array<SectorSort>;
};


export type BriefingSectorsAggregateArgs = {
  filter?: InputMaybe<SectorAggregateFilter>;
};

export type BriefingAggregateFilter = {
  alertNotification?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<BriefingAggregateFilter>>;
  audienceRaw?: InputMaybe<StringFieldComparison>;
  bringForward?: InputMaybe<StringFieldComparison>;
  campaigns?: InputMaybe<BriefingAggregateFilterCampaignAggregateFilter>;
  companies?: InputMaybe<BriefingAggregateFilterCompanyAggregateFilter>;
  contentApprovedBy?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  draftedBy?: InputMaybe<StringFieldComparison>;
  events?: InputMaybe<BriefingAggregateFilterEventAggregateFilter>;
  groups?: InputMaybe<BriefingAggregateFilterGroupAggregateFilter>;
  hashtagsRaw?: InputMaybe<StringFieldComparison>;
  highlightImageUrl?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  issues?: InputMaybe<BriefingAggregateFilterIssueAggregateFilter>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  location?: InputMaybe<BriefingAggregateFilterLocationAggregateFilter>;
  locationId?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  mainUntilDate?: InputMaybe<DateFieldComparison>;
  or?: InputMaybe<Array<BriefingAggregateFilter>>;
  publishedBy?: InputMaybe<StringFieldComparison>;
  publishedDate?: InputMaybe<DateFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  restricted?: InputMaybe<BooleanFieldComparison>;
  sectors?: InputMaybe<BriefingAggregateFilterSectorAggregateFilter>;
  source?: InputMaybe<StringFieldComparison>;
  sourceRefId?: InputMaybe<StringFieldComparison>;
  sourcesRaw?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  styleApprovedBy?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<BriefingTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type BriefingAggregateFilterCampaignAggregateFilter = {
  and?: InputMaybe<Array<BriefingAggregateFilterCampaignAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BriefingAggregateFilterCampaignAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type BriefingAggregateFilterCompanyAggregateFilter = {
  and?: InputMaybe<Array<BriefingAggregateFilterCompanyAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BriefingAggregateFilterCompanyAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  ssoEmailPatterns?: InputMaybe<StringFieldComparison>;
  team?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type BriefingAggregateFilterEventAggregateFilter = {
  and?: InputMaybe<Array<BriefingAggregateFilterEventAggregateFilter>>;
  briefingRequired?: InputMaybe<BooleanFieldComparison>;
  companyId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  latitude?: InputMaybe<FloatFieldComparison>;
  locationId?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  longitude?: InputMaybe<FloatFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BriefingAggregateFilterEventAggregateFilter>>;
  private?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  risk?: InputMaybe<StringFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  type?: InputMaybe<EventTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type BriefingAggregateFilterGroupAggregateFilter = {
  and?: InputMaybe<Array<BriefingAggregateFilterGroupAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BriefingAggregateFilterGroupAggregateFilter>>;
  parentGroupId?: InputMaybe<StringFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type BriefingAggregateFilterIssueAggregateFilter = {
  and?: InputMaybe<Array<BriefingAggregateFilterIssueAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BriefingAggregateFilterIssueAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type BriefingAggregateFilterLocationAggregateFilter = {
  and?: InputMaybe<Array<BriefingAggregateFilterLocationAggregateFilter>>;
  city?: InputMaybe<StringFieldComparison>;
  country?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  metropolitanArea?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BriefingAggregateFilterLocationAggregateFilter>>;
  province?: InputMaybe<StringFieldComparison>;
  region?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type BriefingAggregateFilterSectorAggregateFilter = {
  and?: InputMaybe<Array<BriefingAggregateFilterSectorAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BriefingAggregateFilterSectorAggregateFilter>>;
  ppd21?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type BriefingAggregateGroupBy = {
  __typename?: 'BriefingAggregateGroupBy';
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  restricted?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type BriefingAggregateGroupByCreatedArgs = {
  by?: GroupBy;
};


export type BriefingAggregateGroupByLastModifiedDateArgs = {
  by?: GroupBy;
};


export type BriefingAggregateGroupByMainUntilDateArgs = {
  by?: GroupBy;
};


export type BriefingAggregateGroupByPublishedDateArgs = {
  by?: GroupBy;
};


export type BriefingAggregateGroupByRemoteUpdatedArgs = {
  by?: GroupBy;
};


export type BriefingAggregateGroupByUpdatedArgs = {
  by?: GroupBy;
};

export type BriefingAggregateResponse = {
  __typename?: 'BriefingAggregateResponse';
  count?: Maybe<BriefingCountAggregate>;
  groupBy?: Maybe<BriefingAggregateGroupBy>;
  max?: Maybe<BriefingMaxAggregate>;
  min?: Maybe<BriefingMinAggregate>;
};

export type BriefingBatchEntry = {
  alertNotification?: InputMaybe<Scalars['Boolean']>;
  audience?: InputMaybe<Array<Scalars['String']>>;
  bringForward?: InputMaybe<Scalars['String']>;
  campaignsIds?: InputMaybe<Array<Scalars['String']>>;
  companiesIds?: InputMaybe<Array<Scalars['String']>>;
  content?: InputMaybe<Scalars['String']>;
  contentApprovedBy?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  draftedBy?: InputMaybe<Scalars['String']>;
  eventsIds?: InputMaybe<Array<Scalars['String']>>;
  groupsIds?: InputMaybe<Array<Scalars['String']>>;
  hashtags?: InputMaybe<Array<Scalars['String']>>;
  highlightImageUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  issuesIds?: InputMaybe<Array<Scalars['String']>>;
  lastModifiedDate?: InputMaybe<Scalars['DateTime']>;
  locationDescription?: InputMaybe<Scalars['String']>;
  locationId?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  mainUntilDate?: InputMaybe<Scalars['DateTime']>;
  originalContent?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  publishedBy?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['DateTime']>;
  restricted?: InputMaybe<Scalars['Boolean']>;
  sectorIds?: InputMaybe<Array<Scalars['String']>>;
  source?: InputMaybe<Scalars['String']>;
  sourceRefId?: InputMaybe<Scalars['String']>;
  sources?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<PostStatus>;
  styleApprovedBy?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<BriefingType>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type BriefingBatchEntryResult = {
  __typename?: 'BriefingBatchEntryResult';
  briefing?: Maybe<Briefing>;
  error?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type BriefingCampaignsAggregateGroupBy = {
  __typename?: 'BriefingCampaignsAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  monitoring?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type BriefingCampaignsAggregateResponse = {
  __typename?: 'BriefingCampaignsAggregateResponse';
  count?: Maybe<BriefingCampaignsCountAggregate>;
  groupBy?: Maybe<BriefingCampaignsAggregateGroupBy>;
  max?: Maybe<BriefingCampaignsMaxAggregate>;
  min?: Maybe<BriefingCampaignsMinAggregate>;
};

export type BriefingCampaignsCountAggregate = {
  __typename?: 'BriefingCampaignsCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  monitoring?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type BriefingCampaignsMaxAggregate = {
  __typename?: 'BriefingCampaignsMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type BriefingCampaignsMinAggregate = {
  __typename?: 'BriefingCampaignsMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type BriefingCompaniesAggregateGroupBy = {
  __typename?: 'BriefingCompaniesAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  ssoEmailPatterns?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type BriefingCompaniesAggregateResponse = {
  __typename?: 'BriefingCompaniesAggregateResponse';
  count?: Maybe<BriefingCompaniesCountAggregate>;
  groupBy?: Maybe<BriefingCompaniesAggregateGroupBy>;
  max?: Maybe<BriefingCompaniesMaxAggregate>;
  min?: Maybe<BriefingCompaniesMinAggregate>;
};

export type BriefingCompaniesCountAggregate = {
  __typename?: 'BriefingCompaniesCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  ssoEmailPatterns?: Maybe<Scalars['Int']>;
  team?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type BriefingCompaniesMaxAggregate = {
  __typename?: 'BriefingCompaniesMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  ssoEmailPatterns?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type BriefingCompaniesMinAggregate = {
  __typename?: 'BriefingCompaniesMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  ssoEmailPatterns?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type BriefingConnection = {
  __typename?: 'BriefingConnection';
  /** Array of edges. */
  edges: Array<BriefingEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type BriefingCountAggregate = {
  __typename?: 'BriefingCountAggregate';
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  restricted?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type BriefingDeleteResponse = {
  __typename?: 'BriefingDeleteResponse';
  alertNotification?: Maybe<Scalars['Boolean']>;
  audience?: Maybe<Array<Scalars['String']>>;
  bringForward?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtags?: Maybe<Array<Scalars['String']>>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationDescription?: Maybe<Scalars['String']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  originalContent?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  restricted?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sources?: Maybe<Array<Scalars['String']>>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type BriefingEdge = {
  __typename?: 'BriefingEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Briefing */
  node: Briefing;
};

export type BriefingEventsAggregateGroupBy = {
  __typename?: 'BriefingEventsAggregateGroupBy';
  briefingRequired?: Maybe<Scalars['Boolean']>;
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  monitoring?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Boolean']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  risk?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  type?: Maybe<EventType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type BriefingEventsAggregateResponse = {
  __typename?: 'BriefingEventsAggregateResponse';
  avg?: Maybe<BriefingEventsAvgAggregate>;
  count?: Maybe<BriefingEventsCountAggregate>;
  groupBy?: Maybe<BriefingEventsAggregateGroupBy>;
  max?: Maybe<BriefingEventsMaxAggregate>;
  min?: Maybe<BriefingEventsMinAggregate>;
  sum?: Maybe<BriefingEventsSumAggregate>;
};

export type BriefingEventsAvgAggregate = {
  __typename?: 'BriefingEventsAvgAggregate';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type BriefingEventsCountAggregate = {
  __typename?: 'BriefingEventsCountAggregate';
  briefingRequired?: Maybe<Scalars['Int']>;
  companyId?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  monitoring?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  private?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  risk?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type BriefingEventsMaxAggregate = {
  __typename?: 'BriefingEventsMaxAggregate';
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  risk?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  type?: Maybe<EventType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type BriefingEventsMinAggregate = {
  __typename?: 'BriefingEventsMinAggregate';
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  risk?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  type?: Maybe<EventType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type BriefingEventsSumAggregate = {
  __typename?: 'BriefingEventsSumAggregate';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type BriefingFilter = {
  alertNotification?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<BriefingFilter>>;
  audienceRaw?: InputMaybe<StringFieldComparison>;
  bringForward?: InputMaybe<StringFieldComparison>;
  campaigns?: InputMaybe<BriefingFilterCampaignFilter>;
  companies?: InputMaybe<BriefingFilterCompanyFilter>;
  contentApprovedBy?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  draftedBy?: InputMaybe<StringFieldComparison>;
  events?: InputMaybe<BriefingFilterEventFilter>;
  groups?: InputMaybe<BriefingFilterGroupFilter>;
  hashtagsRaw?: InputMaybe<StringFieldComparison>;
  highlightImageUrl?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  issues?: InputMaybe<BriefingFilterIssueFilter>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  location?: InputMaybe<BriefingFilterLocationFilter>;
  locationId?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  mainUntilDate?: InputMaybe<DateFieldComparison>;
  or?: InputMaybe<Array<BriefingFilter>>;
  publishedBy?: InputMaybe<StringFieldComparison>;
  publishedDate?: InputMaybe<DateFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  restricted?: InputMaybe<BooleanFieldComparison>;
  sectors?: InputMaybe<BriefingFilterSectorFilter>;
  source?: InputMaybe<StringFieldComparison>;
  sourceRefId?: InputMaybe<StringFieldComparison>;
  sourcesRaw?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  styleApprovedBy?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<BriefingTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type BriefingFilterCampaignFilter = {
  and?: InputMaybe<Array<BriefingFilterCampaignFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BriefingFilterCampaignFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type BriefingFilterCompanyFilter = {
  and?: InputMaybe<Array<BriefingFilterCompanyFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BriefingFilterCompanyFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  ssoEmailPatterns?: InputMaybe<StringFieldComparison>;
  team?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type BriefingFilterEventFilter = {
  and?: InputMaybe<Array<BriefingFilterEventFilter>>;
  briefingRequired?: InputMaybe<BooleanFieldComparison>;
  companyId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  latitude?: InputMaybe<FloatFieldComparison>;
  locationId?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  longitude?: InputMaybe<FloatFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BriefingFilterEventFilter>>;
  private?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  risk?: InputMaybe<StringFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  type?: InputMaybe<EventTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type BriefingFilterGroupFilter = {
  and?: InputMaybe<Array<BriefingFilterGroupFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BriefingFilterGroupFilter>>;
  parentGroupId?: InputMaybe<StringFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type BriefingFilterIssueFilter = {
  and?: InputMaybe<Array<BriefingFilterIssueFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BriefingFilterIssueFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type BriefingFilterLocationFilter = {
  and?: InputMaybe<Array<BriefingFilterLocationFilter>>;
  city?: InputMaybe<StringFieldComparison>;
  country?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  metropolitanArea?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BriefingFilterLocationFilter>>;
  province?: InputMaybe<StringFieldComparison>;
  region?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type BriefingFilterSectorFilter = {
  and?: InputMaybe<Array<BriefingFilterSectorFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BriefingFilterSectorFilter>>;
  ppd21?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type BriefingGroupsAggregateGroupBy = {
  __typename?: 'BriefingGroupsAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  monitoring?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  parentGroupId?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type BriefingGroupsAggregateResponse = {
  __typename?: 'BriefingGroupsAggregateResponse';
  count?: Maybe<BriefingGroupsCountAggregate>;
  groupBy?: Maybe<BriefingGroupsAggregateGroupBy>;
  max?: Maybe<BriefingGroupsMaxAggregate>;
  min?: Maybe<BriefingGroupsMinAggregate>;
};

export type BriefingGroupsCountAggregate = {
  __typename?: 'BriefingGroupsCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  monitoring?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  parentGroupId?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type BriefingGroupsMaxAggregate = {
  __typename?: 'BriefingGroupsMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parentGroupId?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type BriefingGroupsMinAggregate = {
  __typename?: 'BriefingGroupsMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parentGroupId?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type BriefingIssuesAggregateGroupBy = {
  __typename?: 'BriefingIssuesAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  monitoring?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type BriefingIssuesAggregateResponse = {
  __typename?: 'BriefingIssuesAggregateResponse';
  count?: Maybe<BriefingIssuesCountAggregate>;
  groupBy?: Maybe<BriefingIssuesAggregateGroupBy>;
  max?: Maybe<BriefingIssuesMaxAggregate>;
  min?: Maybe<BriefingIssuesMinAggregate>;
};

export type BriefingIssuesCountAggregate = {
  __typename?: 'BriefingIssuesCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  monitoring?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type BriefingIssuesMaxAggregate = {
  __typename?: 'BriefingIssuesMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type BriefingIssuesMinAggregate = {
  __typename?: 'BriefingIssuesMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type BriefingMaxAggregate = {
  __typename?: 'BriefingMaxAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type BriefingMinAggregate = {
  __typename?: 'BriefingMinAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type BriefingSectorsAggregateGroupBy = {
  __typename?: 'BriefingSectorsAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ppd21?: Maybe<Scalars['Boolean']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type BriefingSectorsAggregateResponse = {
  __typename?: 'BriefingSectorsAggregateResponse';
  count?: Maybe<BriefingSectorsCountAggregate>;
  groupBy?: Maybe<BriefingSectorsAggregateGroupBy>;
  max?: Maybe<BriefingSectorsMaxAggregate>;
  min?: Maybe<BriefingSectorsMinAggregate>;
};

export type BriefingSectorsCountAggregate = {
  __typename?: 'BriefingSectorsCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  ppd21?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type BriefingSectorsMaxAggregate = {
  __typename?: 'BriefingSectorsMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type BriefingSectorsMinAggregate = {
  __typename?: 'BriefingSectorsMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type BriefingSort = {
  direction: SortDirection;
  field: BriefingSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum BriefingSortFields {
  AlertNotification = 'alertNotification',
  AudienceRaw = 'audienceRaw',
  BringForward = 'bringForward',
  ContentApprovedBy = 'contentApprovedBy',
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  DraftedBy = 'draftedBy',
  HashtagsRaw = 'hashtagsRaw',
  HighlightImageUrl = 'highlightImageUrl',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LastModifiedDate = 'lastModifiedDate',
  LocationId = 'locationId',
  LockedBy = 'lockedBy',
  MainUntilDate = 'mainUntilDate',
  PublishedBy = 'publishedBy',
  PublishedDate = 'publishedDate',
  RemoteUpdated = 'remoteUpdated',
  Restricted = 'restricted',
  Source = 'source',
  SourceRefId = 'sourceRefId',
  SourcesRaw = 'sourcesRaw',
  Status = 'status',
  StyleApprovedBy = 'styleApprovedBy',
  Title = 'title',
  Type = 'type',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export enum BriefingType {
  AnnualReport = 'AnnualReport',
  Briefing = 'Briefing',
  BusinessDevelopment = 'BusinessDevelopment',
  HelpGuides = 'HelpGuides',
  Restricted = 'Restricted',
  Webinar = 'Webinar',
  WeeklyOutlook = 'WeeklyOutlook'
}

export type BriefingTypeFilterComparison = {
  eq?: InputMaybe<BriefingType>;
  gt?: InputMaybe<BriefingType>;
  gte?: InputMaybe<BriefingType>;
  iLike?: InputMaybe<BriefingType>;
  in?: InputMaybe<Array<BriefingType>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<BriefingType>;
  lt?: InputMaybe<BriefingType>;
  lte?: InputMaybe<BriefingType>;
  neq?: InputMaybe<BriefingType>;
  notILike?: InputMaybe<BriefingType>;
  notIn?: InputMaybe<Array<BriefingType>>;
  notLike?: InputMaybe<BriefingType>;
};

export type BriefingsBatchInput = {
  briefings?: InputMaybe<Array<BriefingBatchEntry>>;
};

export type BriefingsBatchResult = {
  __typename?: 'BriefingsBatchResult';
  results?: Maybe<Array<BriefingBatchEntryResult>>;
};

export type Campaign = {
  __typename?: 'Campaign';
  actions?: Maybe<CampaignActionsConnection>;
  actionsAggregate: Array<CampaignActionsAggregateResponse>;
  articles?: Maybe<CampaignArticlesConnection>;
  articlesAggregate: Array<CampaignArticlesAggregateResponse>;
  briefings?: Maybe<CampaignBriefingsConnection>;
  briefingsAggregate: Array<CampaignBriefingsAggregateResponse>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  global: Scalars['Boolean'];
  hashtags?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  monitoring: Scalars['Boolean'];
  name: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  socialMedia?: Maybe<Array<Scalars['String']>>;
  stage?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
};


export type CampaignActionsArgs = {
  filter?: ActionFilter;
  paging?: CursorPaging;
  sorting?: Array<ActionSort>;
};


export type CampaignActionsAggregateArgs = {
  filter?: InputMaybe<ActionAggregateFilter>;
};


export type CampaignArticlesArgs = {
  filter?: ArticleFilter;
  paging?: CursorPaging;
  sorting?: Array<ArticleSort>;
};


export type CampaignArticlesAggregateArgs = {
  filter?: InputMaybe<ArticleAggregateFilter>;
};


export type CampaignBriefingsArgs = {
  filter?: BriefingFilter;
  paging?: CursorPaging;
  sorting?: Array<BriefingSort>;
};


export type CampaignBriefingsAggregateArgs = {
  filter?: InputMaybe<BriefingAggregateFilter>;
};

export type CampaignActionsAggregateGroupBy = {
  __typename?: 'CampaignActionsAggregateGroupBy';
  actionStatus?: Maybe<ActionStatus>;
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  inActive?: Maybe<Scalars['Boolean']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  ongoing?: Maybe<Scalars['Boolean']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CampaignActionsAggregateResponse = {
  __typename?: 'CampaignActionsAggregateResponse';
  avg?: Maybe<CampaignActionsAvgAggregate>;
  count?: Maybe<CampaignActionsCountAggregate>;
  groupBy?: Maybe<CampaignActionsAggregateGroupBy>;
  max?: Maybe<CampaignActionsMaxAggregate>;
  min?: Maybe<CampaignActionsMinAggregate>;
  sum?: Maybe<CampaignActionsSumAggregate>;
};

export type CampaignActionsAvgAggregate = {
  __typename?: 'CampaignActionsAvgAggregate';
  going?: Maybe<Scalars['Float']>;
  interested?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type CampaignActionsConnection = {
  __typename?: 'CampaignActionsConnection';
  /** Array of edges. */
  edges: Array<ActionEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type CampaignActionsCountAggregate = {
  __typename?: 'CampaignActionsCountAggregate';
  actionStatus?: Maybe<Scalars['Int']>;
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Int']>;
  going?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  impact?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  interested?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  ongoing?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  tacticId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type CampaignActionsMaxAggregate = {
  __typename?: 'CampaignActionsMaxAggregate';
  actionStatus?: Maybe<ActionStatus>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CampaignActionsMinAggregate = {
  __typename?: 'CampaignActionsMinAggregate';
  actionStatus?: Maybe<ActionStatus>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CampaignActionsSumAggregate = {
  __typename?: 'CampaignActionsSumAggregate';
  going?: Maybe<Scalars['Float']>;
  interested?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type CampaignAggregateFilter = {
  and?: InputMaybe<Array<CampaignAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CampaignAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type CampaignAggregateGroupBy = {
  __typename?: 'CampaignAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  monitoring?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type CampaignAggregateGroupByCreatedArgs = {
  by?: GroupBy;
};


export type CampaignAggregateGroupByLastModifiedDateArgs = {
  by?: GroupBy;
};


export type CampaignAggregateGroupByRemoteUpdatedArgs = {
  by?: GroupBy;
};


export type CampaignAggregateGroupByUpdatedArgs = {
  by?: GroupBy;
};

export type CampaignAggregateResponse = {
  __typename?: 'CampaignAggregateResponse';
  count?: Maybe<CampaignCountAggregate>;
  groupBy?: Maybe<CampaignAggregateGroupBy>;
  max?: Maybe<CampaignMaxAggregate>;
  min?: Maybe<CampaignMinAggregate>;
};

export type CampaignArticlesAggregateGroupBy = {
  __typename?: 'CampaignArticlesAggregateGroupBy';
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CampaignArticlesAggregateResponse = {
  __typename?: 'CampaignArticlesAggregateResponse';
  count?: Maybe<CampaignArticlesCountAggregate>;
  groupBy?: Maybe<CampaignArticlesAggregateGroupBy>;
  max?: Maybe<CampaignArticlesMaxAggregate>;
  min?: Maybe<CampaignArticlesMinAggregate>;
};

export type CampaignArticlesConnection = {
  __typename?: 'CampaignArticlesConnection';
  /** Array of edges. */
  edges: Array<ArticleEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type CampaignArticlesCountAggregate = {
  __typename?: 'CampaignArticlesCountAggregate';
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  highlightUntilDate?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type CampaignArticlesMaxAggregate = {
  __typename?: 'CampaignArticlesMaxAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CampaignArticlesMinAggregate = {
  __typename?: 'CampaignArticlesMinAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CampaignBriefingsAggregateGroupBy = {
  __typename?: 'CampaignBriefingsAggregateGroupBy';
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  restricted?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CampaignBriefingsAggregateResponse = {
  __typename?: 'CampaignBriefingsAggregateResponse';
  count?: Maybe<CampaignBriefingsCountAggregate>;
  groupBy?: Maybe<CampaignBriefingsAggregateGroupBy>;
  max?: Maybe<CampaignBriefingsMaxAggregate>;
  min?: Maybe<CampaignBriefingsMinAggregate>;
};

export type CampaignBriefingsConnection = {
  __typename?: 'CampaignBriefingsConnection';
  /** Array of edges. */
  edges: Array<BriefingEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type CampaignBriefingsCountAggregate = {
  __typename?: 'CampaignBriefingsCountAggregate';
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  restricted?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type CampaignBriefingsMaxAggregate = {
  __typename?: 'CampaignBriefingsMaxAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CampaignBriefingsMinAggregate = {
  __typename?: 'CampaignBriefingsMinAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CampaignConnection = {
  __typename?: 'CampaignConnection';
  /** Array of edges. */
  edges: Array<CampaignEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type CampaignCountAggregate = {
  __typename?: 'CampaignCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  monitoring?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type CampaignDeleteFilter = {
  and?: InputMaybe<Array<CampaignDeleteFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CampaignDeleteFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type CampaignDeleteResponse = {
  __typename?: 'CampaignDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  global?: Maybe<Scalars['Boolean']>;
  hashtags?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  monitoring?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  socialMedia?: Maybe<Array<Scalars['String']>>;
  stage?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
};

export type CampaignEdge = {
  __typename?: 'CampaignEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Campaign */
  node: Campaign;
};

export type CampaignFilter = {
  and?: InputMaybe<Array<CampaignFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CampaignFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type CampaignMaxAggregate = {
  __typename?: 'CampaignMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CampaignMinAggregate = {
  __typename?: 'CampaignMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CampaignSort = {
  direction: SortDirection;
  field: CampaignSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CampaignSortFields {
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LastModifiedDate = 'lastModifiedDate',
  LockedBy = 'lockedBy',
  Monitoring = 'monitoring',
  Name = 'name',
  RemoteUpdated = 'remoteUpdated',
  Status = 'status',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type CampaignUpdateFilter = {
  and?: InputMaybe<Array<CampaignUpdateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CampaignUpdateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export enum CleanUpRelationshipType {
  Campaigns = 'campaigns',
  Companies = 'companies',
  Groups = 'groups',
  Issues = 'issues',
  Location = 'location',
  ProminentIndividuals = 'prominentIndividuals'
}

export type Client12MoUsageResult = {
  __typename?: 'Client12MoUsageResult';
  average?: Maybe<Scalars['Float']>;
  company: Scalars['String'];
  companyId: Scalars['String'];
  totalCount: Scalars['Float'];
  usage: Array<ClientMonthlyUsage>;
};

export type ClientMonthlyUsage = {
  __typename?: 'ClientMonthlyUsage';
  comparedToAverage?: Maybe<Scalars['Float']>;
  momChange: Scalars['Float'];
  period: Scalars['String'];
  usage: Scalars['Float'];
};

export type ClientNotification = {
  __typename?: 'ClientNotification';
  acks?: Maybe<Array<ClientNotificationAck>>;
  companies?: Maybe<Array<Company>>;
  companyContactId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  endDate: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  lockedBy?: Maybe<Scalars['String']>;
  notice: Scalars['String'];
  referenceURL?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  startDate: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ClientNotificationType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type ClientNotificationAcksArgs = {
  filter?: ClientNotificationAckFilter;
  sorting?: Array<ClientNotificationAckSort>;
};


export type ClientNotificationCompaniesArgs = {
  filter?: CompanyFilter;
  sorting?: Array<CompanySort>;
};

export type ClientNotificationAck = {
  __typename?: 'ClientNotificationAck';
  clientNotification: ClientNotification;
  clientNotificationId?: Maybe<Scalars['String']>;
  companyContactId: Scalars['String'];
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ClientNotificationAckConnection = {
  __typename?: 'ClientNotificationAckConnection';
  /** Array of edges. */
  edges: Array<ClientNotificationAckEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ClientNotificationAckDto = {
  clientNotificationId: Scalars['String'];
  companyContactId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type ClientNotificationAckDeleteResponse = {
  __typename?: 'ClientNotificationAckDeleteResponse';
  clientNotificationId?: Maybe<Scalars['String']>;
  companyContactId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ClientNotificationAckEdge = {
  __typename?: 'ClientNotificationAckEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ClientNotificationAck */
  node: ClientNotificationAck;
};

export type ClientNotificationAckFilter = {
  and?: InputMaybe<Array<ClientNotificationAckFilter>>;
  clientNotification?: InputMaybe<ClientNotificationAckFilterClientNotificationFilter>;
  clientNotificationId?: InputMaybe<StringFieldComparison>;
  companyContactId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ClientNotificationAckFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ClientNotificationAckFilterClientNotificationFilter = {
  and?: InputMaybe<Array<ClientNotificationAckFilterClientNotificationFilter>>;
  companyContactId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ClientNotificationAckFilterClientNotificationFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  type?: InputMaybe<ClientNotificationTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ClientNotificationAckSort = {
  direction: SortDirection;
  field: ClientNotificationAckSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ClientNotificationAckSortFields {
  ClientNotificationId = 'clientNotificationId',
  CompanyContactId = 'companyContactId',
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LockedBy = 'lockedBy',
  RemoteUpdated = 'remoteUpdated',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type ClientNotificationAcksDto = {
  clientNotificationId?: InputMaybe<Scalars['String']>;
  clientNotificationIds: Array<Scalars['String']>;
  companyContactId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type ClientNotificationConnection = {
  __typename?: 'ClientNotificationConnection';
  /** Array of edges. */
  edges: Array<ClientNotificationEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ClientNotificationDto = {
  companyContactId?: InputMaybe<Scalars['String']>;
  companyIds?: InputMaybe<Array<Scalars['String']>>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  notice?: InputMaybe<Scalars['String']>;
  referenceURL?: InputMaybe<Scalars['String']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ClientNotificationType>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type ClientNotificationDeleteResponse = {
  __typename?: 'ClientNotificationDeleteResponse';
  companyContactId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  lockedBy?: Maybe<Scalars['String']>;
  notice?: Maybe<Scalars['String']>;
  referenceURL?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ClientNotificationType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ClientNotificationEdge = {
  __typename?: 'ClientNotificationEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ClientNotification */
  node: ClientNotification;
};

export type ClientNotificationFilter = {
  acks?: InputMaybe<ClientNotificationFilterClientNotificationAckFilter>;
  and?: InputMaybe<Array<ClientNotificationFilter>>;
  companies?: InputMaybe<ClientNotificationFilterCompanyFilter>;
  companyContactId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ClientNotificationFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  type?: InputMaybe<ClientNotificationTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ClientNotificationFilterClientNotificationAckFilter = {
  and?: InputMaybe<Array<ClientNotificationFilterClientNotificationAckFilter>>;
  clientNotificationId?: InputMaybe<StringFieldComparison>;
  companyContactId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ClientNotificationFilterClientNotificationAckFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ClientNotificationFilterCompanyFilter = {
  and?: InputMaybe<Array<ClientNotificationFilterCompanyFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ClientNotificationFilterCompanyFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  ssoEmailPatterns?: InputMaybe<StringFieldComparison>;
  team?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ClientNotificationResults = {
  __typename?: 'ClientNotificationResults';
  ack?: Maybe<Scalars['Boolean']>;
  companyContactId?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  lockedBy?: Maybe<Scalars['String']>;
  notice?: Maybe<Scalars['String']>;
  referenceURL?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ClientNotificationType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ClientNotificationSort = {
  direction: SortDirection;
  field: ClientNotificationSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ClientNotificationSortFields {
  CompanyContactId = 'companyContactId',
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  EndDate = 'endDate',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  IsActive = 'isActive',
  LockedBy = 'lockedBy',
  RemoteUpdated = 'remoteUpdated',
  StartDate = 'startDate',
  Type = 'type',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type ClientNotificationSubscriptionFilter = {
  and?: InputMaybe<Array<ClientNotificationSubscriptionFilter>>;
  companyContactId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ClientNotificationSubscriptionFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  type?: InputMaybe<ClientNotificationTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

/** Client Notification Types */
export enum ClientNotificationType {
  ImmediateAlert = 'ImmediateAlert',
  Platform = 'Platform',
  Service = 'Service',
  SummaryAlert = 'SummaryAlert'
}

export type ClientNotificationTypeFilterComparison = {
  eq?: InputMaybe<ClientNotificationType>;
  gt?: InputMaybe<ClientNotificationType>;
  gte?: InputMaybe<ClientNotificationType>;
  iLike?: InputMaybe<ClientNotificationType>;
  in?: InputMaybe<Array<ClientNotificationType>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<ClientNotificationType>;
  lt?: InputMaybe<ClientNotificationType>;
  lte?: InputMaybe<ClientNotificationType>;
  neq?: InputMaybe<ClientNotificationType>;
  notILike?: InputMaybe<ClientNotificationType>;
  notIn?: InputMaybe<Array<ClientNotificationType>>;
  notLike?: InputMaybe<ClientNotificationType>;
};

export type Company = {
  __typename?: 'Company';
  actions?: Maybe<CompanyActionsConnection>;
  actionsAggregate: Array<CompanyActionsAggregateResponse>;
  actionsOfInterest?: Maybe<CompanyActionsOfInterestConnection>;
  actionsOfInterestAggregate: Array<CompanyActionsOfInterestAggregateResponse>;
  articles?: Maybe<CompanyArticlesConnection>;
  articlesAggregate: Array<CompanyArticlesAggregateResponse>;
  articlesOfInterest?: Maybe<CompanyArticlesOfInterestConnection>;
  articlesOfInterestAggregate: Array<CompanyArticlesOfInterestAggregateResponse>;
  briefings?: Maybe<CompanyBriefingsConnection>;
  briefingsAggregate: Array<CompanyBriefingsAggregateResponse>;
  contacts?: Maybe<Array<CompanyContact>>;
  contactsAggregate: Array<CompanyContactsAggregateResponse>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  externalName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  integrations?: Maybe<Array<CompanyIntegration>>;
  integrationsAggregate: Array<CompanyIntegrationsAggregateResponse>;
  internalComment?: Maybe<Scalars['String']>;
  locations?: Maybe<Array<CompanyLocation>>;
  locationsAggregate: Array<CompanyLocationsAggregateResponse>;
  lockedBy?: Maybe<Scalars['String']>;
  marketingDistribution?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  preferences?: Maybe<Scalars['JSONObject']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  sectors?: Maybe<Array<Sector>>;
  sectorsAggregate: Array<CompanySectorsAggregateResponse>;
  ssoEmailPatterns?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subscriptions?: Maybe<Array<AnnualSubscription>>;
  subscriptionsAggregate: Array<CompanySubscriptionsAggregateResponse>;
  team?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type CompanyActionsArgs = {
  filter?: ActionFilter;
  paging?: CursorPaging;
  sorting?: Array<ActionSort>;
};


export type CompanyActionsAggregateArgs = {
  filter?: InputMaybe<ActionAggregateFilter>;
};


export type CompanyActionsOfInterestArgs = {
  filter?: ActionFilter;
  paging?: CursorPaging;
  sorting?: Array<ActionSort>;
};


export type CompanyActionsOfInterestAggregateArgs = {
  filter?: InputMaybe<ActionAggregateFilter>;
};


export type CompanyArticlesArgs = {
  filter?: ArticleFilter;
  paging?: CursorPaging;
  sorting?: Array<ArticleSort>;
};


export type CompanyArticlesAggregateArgs = {
  filter?: InputMaybe<ArticleAggregateFilter>;
};


export type CompanyArticlesOfInterestArgs = {
  filter?: ArticleFilter;
  paging?: CursorPaging;
  sorting?: Array<ArticleSort>;
};


export type CompanyArticlesOfInterestAggregateArgs = {
  filter?: InputMaybe<ArticleAggregateFilter>;
};


export type CompanyBriefingsArgs = {
  filter?: BriefingFilter;
  paging?: CursorPaging;
  sorting?: Array<BriefingSort>;
};


export type CompanyBriefingsAggregateArgs = {
  filter?: InputMaybe<BriefingAggregateFilter>;
};


export type CompanyContactsArgs = {
  filter?: CompanyContactFilter;
  sorting?: Array<CompanyContactSort>;
};


export type CompanyContactsAggregateArgs = {
  filter?: InputMaybe<CompanyContactAggregateFilter>;
};


export type CompanyIntegrationsArgs = {
  filter?: CompanyIntegrationFilter;
  sorting?: Array<CompanyIntegrationSort>;
};


export type CompanyIntegrationsAggregateArgs = {
  filter?: InputMaybe<CompanyIntegrationAggregateFilter>;
};


export type CompanyLocationsArgs = {
  filter?: CompanyLocationFilter;
  sorting?: Array<CompanyLocationSort>;
};


export type CompanyLocationsAggregateArgs = {
  filter?: InputMaybe<CompanyLocationAggregateFilter>;
};


export type CompanySectorsArgs = {
  filter?: SectorFilter;
  sorting?: Array<SectorSort>;
};


export type CompanySectorsAggregateArgs = {
  filter?: InputMaybe<SectorAggregateFilter>;
};


export type CompanySubscriptionsArgs = {
  filter?: AnnualSubscriptionFilter;
  sorting?: Array<AnnualSubscriptionSort>;
};


export type CompanySubscriptionsAggregateArgs = {
  filter?: InputMaybe<AnnualSubscriptionAggregateFilter>;
};

export type CompanyActionsAggregateGroupBy = {
  __typename?: 'CompanyActionsAggregateGroupBy';
  actionStatus?: Maybe<ActionStatus>;
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  inActive?: Maybe<Scalars['Boolean']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  ongoing?: Maybe<Scalars['Boolean']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyActionsAggregateResponse = {
  __typename?: 'CompanyActionsAggregateResponse';
  avg?: Maybe<CompanyActionsAvgAggregate>;
  count?: Maybe<CompanyActionsCountAggregate>;
  groupBy?: Maybe<CompanyActionsAggregateGroupBy>;
  max?: Maybe<CompanyActionsMaxAggregate>;
  min?: Maybe<CompanyActionsMinAggregate>;
  sum?: Maybe<CompanyActionsSumAggregate>;
};

export type CompanyActionsAvgAggregate = {
  __typename?: 'CompanyActionsAvgAggregate';
  going?: Maybe<Scalars['Float']>;
  interested?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type CompanyActionsConnection = {
  __typename?: 'CompanyActionsConnection';
  /** Array of edges. */
  edges: Array<ActionEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type CompanyActionsCountAggregate = {
  __typename?: 'CompanyActionsCountAggregate';
  actionStatus?: Maybe<Scalars['Int']>;
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Int']>;
  going?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  impact?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  interested?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  ongoing?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  tacticId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type CompanyActionsMaxAggregate = {
  __typename?: 'CompanyActionsMaxAggregate';
  actionStatus?: Maybe<ActionStatus>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyActionsMinAggregate = {
  __typename?: 'CompanyActionsMinAggregate';
  actionStatus?: Maybe<ActionStatus>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyActionsOfInterestAggregateGroupBy = {
  __typename?: 'CompanyActionsOfInterestAggregateGroupBy';
  actionStatus?: Maybe<ActionStatus>;
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  inActive?: Maybe<Scalars['Boolean']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  ongoing?: Maybe<Scalars['Boolean']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyActionsOfInterestAggregateResponse = {
  __typename?: 'CompanyActionsOfInterestAggregateResponse';
  avg?: Maybe<CompanyActionsOfInterestAvgAggregate>;
  count?: Maybe<CompanyActionsOfInterestCountAggregate>;
  groupBy?: Maybe<CompanyActionsOfInterestAggregateGroupBy>;
  max?: Maybe<CompanyActionsOfInterestMaxAggregate>;
  min?: Maybe<CompanyActionsOfInterestMinAggregate>;
  sum?: Maybe<CompanyActionsOfInterestSumAggregate>;
};

export type CompanyActionsOfInterestAvgAggregate = {
  __typename?: 'CompanyActionsOfInterestAvgAggregate';
  going?: Maybe<Scalars['Float']>;
  interested?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type CompanyActionsOfInterestConnection = {
  __typename?: 'CompanyActionsOfInterestConnection';
  /** Array of edges. */
  edges: Array<ActionEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type CompanyActionsOfInterestCountAggregate = {
  __typename?: 'CompanyActionsOfInterestCountAggregate';
  actionStatus?: Maybe<Scalars['Int']>;
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Int']>;
  going?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  impact?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  interested?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  ongoing?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  tacticId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type CompanyActionsOfInterestMaxAggregate = {
  __typename?: 'CompanyActionsOfInterestMaxAggregate';
  actionStatus?: Maybe<ActionStatus>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyActionsOfInterestMinAggregate = {
  __typename?: 'CompanyActionsOfInterestMinAggregate';
  actionStatus?: Maybe<ActionStatus>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyActionsOfInterestSumAggregate = {
  __typename?: 'CompanyActionsOfInterestSumAggregate';
  going?: Maybe<Scalars['Float']>;
  interested?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type CompanyActionsSumAggregate = {
  __typename?: 'CompanyActionsSumAggregate';
  going?: Maybe<Scalars['Float']>;
  interested?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type CompanyAggregateFilter = {
  and?: InputMaybe<Array<CompanyAggregateFilter>>;
  contacts?: InputMaybe<CompanyAggregateFilterCompanyContactAggregateFilter>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CompanyAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  sectors?: InputMaybe<CompanyAggregateFilterSectorAggregateFilter>;
  ssoEmailPatterns?: InputMaybe<StringFieldComparison>;
  subscriptions?: InputMaybe<CompanyAggregateFilterAnnualSubscriptionAggregateFilter>;
  team?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type CompanyAggregateFilterAnnualSubscriptionAggregateFilter = {
  access?: InputMaybe<JsonObjectFilterComparison>;
  accountRep?: InputMaybe<StringFieldComparison>;
  analyst?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<CompanyAggregateFilterAnnualSubscriptionAggregateFilter>>;
  clientId?: InputMaybe<StringFieldComparison>;
  contactId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CompanyAggregateFilterAnnualSubscriptionAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type CompanyAggregateFilterCompanyContactAggregateFilter = {
  and?: InputMaybe<Array<CompanyAggregateFilterCompanyContactAggregateFilter>>;
  companyId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  email?: InputMaybe<IdFilterComparison>;
  givenName?: InputMaybe<StringFieldComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CompanyAggregateFilterCompanyContactAggregateFilter>>;
  sub?: InputMaybe<StringFieldComparison>;
  surname?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type CompanyAggregateFilterSectorAggregateFilter = {
  and?: InputMaybe<Array<CompanyAggregateFilterSectorAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CompanyAggregateFilterSectorAggregateFilter>>;
  ppd21?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type CompanyAggregateGroupBy = {
  __typename?: 'CompanyAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  ssoEmailPatterns?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type CompanyAggregateGroupByCreatedArgs = {
  by?: GroupBy;
};


export type CompanyAggregateGroupByRemoteUpdatedArgs = {
  by?: GroupBy;
};


export type CompanyAggregateGroupByUpdatedArgs = {
  by?: GroupBy;
};

export type CompanyAggregateResponse = {
  __typename?: 'CompanyAggregateResponse';
  count?: Maybe<CompanyCountAggregate>;
  groupBy?: Maybe<CompanyAggregateGroupBy>;
  max?: Maybe<CompanyMaxAggregate>;
  min?: Maybe<CompanyMinAggregate>;
};

export type CompanyArticlesAggregateGroupBy = {
  __typename?: 'CompanyArticlesAggregateGroupBy';
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyArticlesAggregateResponse = {
  __typename?: 'CompanyArticlesAggregateResponse';
  count?: Maybe<CompanyArticlesCountAggregate>;
  groupBy?: Maybe<CompanyArticlesAggregateGroupBy>;
  max?: Maybe<CompanyArticlesMaxAggregate>;
  min?: Maybe<CompanyArticlesMinAggregate>;
};

export type CompanyArticlesConnection = {
  __typename?: 'CompanyArticlesConnection';
  /** Array of edges. */
  edges: Array<ArticleEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type CompanyArticlesCountAggregate = {
  __typename?: 'CompanyArticlesCountAggregate';
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  highlightUntilDate?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type CompanyArticlesMaxAggregate = {
  __typename?: 'CompanyArticlesMaxAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyArticlesMinAggregate = {
  __typename?: 'CompanyArticlesMinAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyArticlesOfInterestAggregateGroupBy = {
  __typename?: 'CompanyArticlesOfInterestAggregateGroupBy';
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyArticlesOfInterestAggregateResponse = {
  __typename?: 'CompanyArticlesOfInterestAggregateResponse';
  count?: Maybe<CompanyArticlesOfInterestCountAggregate>;
  groupBy?: Maybe<CompanyArticlesOfInterestAggregateGroupBy>;
  max?: Maybe<CompanyArticlesOfInterestMaxAggregate>;
  min?: Maybe<CompanyArticlesOfInterestMinAggregate>;
};

export type CompanyArticlesOfInterestConnection = {
  __typename?: 'CompanyArticlesOfInterestConnection';
  /** Array of edges. */
  edges: Array<ArticleEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type CompanyArticlesOfInterestCountAggregate = {
  __typename?: 'CompanyArticlesOfInterestCountAggregate';
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  highlightUntilDate?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type CompanyArticlesOfInterestMaxAggregate = {
  __typename?: 'CompanyArticlesOfInterestMaxAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyArticlesOfInterestMinAggregate = {
  __typename?: 'CompanyArticlesOfInterestMinAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyBriefingsAggregateGroupBy = {
  __typename?: 'CompanyBriefingsAggregateGroupBy';
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  restricted?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyBriefingsAggregateResponse = {
  __typename?: 'CompanyBriefingsAggregateResponse';
  count?: Maybe<CompanyBriefingsCountAggregate>;
  groupBy?: Maybe<CompanyBriefingsAggregateGroupBy>;
  max?: Maybe<CompanyBriefingsMaxAggregate>;
  min?: Maybe<CompanyBriefingsMinAggregate>;
};

export type CompanyBriefingsConnection = {
  __typename?: 'CompanyBriefingsConnection';
  /** Array of edges. */
  edges: Array<BriefingEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type CompanyBriefingsCountAggregate = {
  __typename?: 'CompanyBriefingsCountAggregate';
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  restricted?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type CompanyBriefingsMaxAggregate = {
  __typename?: 'CompanyBriefingsMaxAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyBriefingsMinAggregate = {
  __typename?: 'CompanyBriefingsMinAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyConnection = {
  __typename?: 'CompanyConnection';
  /** Array of edges. */
  edges: Array<CompanyEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type CompanyContact = {
  __typename?: 'CompanyContact';
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  email: Scalars['ID'];
  givenName?: Maybe<Scalars['String']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portalPreferences?: Maybe<PortalPreference>;
  sub?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyContactAggregateFilter = {
  and?: InputMaybe<Array<CompanyContactAggregateFilter>>;
  company?: InputMaybe<CompanyContactAggregateFilterCompanyAggregateFilter>;
  companyId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  email?: InputMaybe<IdFilterComparison>;
  givenName?: InputMaybe<StringFieldComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CompanyContactAggregateFilter>>;
  sub?: InputMaybe<StringFieldComparison>;
  surname?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type CompanyContactAggregateFilterCompanyAggregateFilter = {
  and?: InputMaybe<Array<CompanyContactAggregateFilterCompanyAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CompanyContactAggregateFilterCompanyAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  ssoEmailPatterns?: InputMaybe<StringFieldComparison>;
  team?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type CompanyContactAggregateGroupBy = {
  __typename?: 'CompanyContactAggregateGroupBy';
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['ID']>;
  givenName?: Maybe<Scalars['String']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  sub?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type CompanyContactAggregateGroupByCreatedArgs = {
  by?: GroupBy;
};


export type CompanyContactAggregateGroupByUpdatedArgs = {
  by?: GroupBy;
};

export type CompanyContactAggregateResponse = {
  __typename?: 'CompanyContactAggregateResponse';
  count?: Maybe<CompanyContactCountAggregate>;
  groupBy?: Maybe<CompanyContactAggregateGroupBy>;
  max?: Maybe<CompanyContactMaxAggregate>;
  min?: Maybe<CompanyContactMinAggregate>;
};

export type CompanyContactConnection = {
  __typename?: 'CompanyContactConnection';
  /** Array of edges. */
  edges: Array<CompanyContactEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type CompanyContactCountAggregate = {
  __typename?: 'CompanyContactCountAggregate';
  companyId?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  givenName?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  sub?: Maybe<Scalars['Int']>;
  surname?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type CompanyContactDto = {
  companyId: Scalars['String'];
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['ID']>;
  givenName?: InputMaybe<Scalars['String']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  sub?: InputMaybe<Scalars['String']>;
  surname?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CompanyContactDeleteResponse = {
  __typename?: 'CompanyContactDeleteResponse';
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['ID']>;
  givenName?: Maybe<Scalars['String']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  sub?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyContactEdge = {
  __typename?: 'CompanyContactEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the CompanyContact */
  node: CompanyContact;
};

export type CompanyContactFilter = {
  and?: InputMaybe<Array<CompanyContactFilter>>;
  company?: InputMaybe<CompanyContactFilterCompanyFilter>;
  companyId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  email?: InputMaybe<IdFilterComparison>;
  givenName?: InputMaybe<StringFieldComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CompanyContactFilter>>;
  sub?: InputMaybe<StringFieldComparison>;
  surname?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type CompanyContactFilterCompanyFilter = {
  and?: InputMaybe<Array<CompanyContactFilterCompanyFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CompanyContactFilterCompanyFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  ssoEmailPatterns?: InputMaybe<StringFieldComparison>;
  team?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type CompanyContactMaxAggregate = {
  __typename?: 'CompanyContactMaxAggregate';
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['ID']>;
  givenName?: Maybe<Scalars['String']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  sub?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyContactMinAggregate = {
  __typename?: 'CompanyContactMinAggregate';
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['ID']>;
  givenName?: Maybe<Scalars['String']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  sub?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyContactSort = {
  direction: SortDirection;
  field: CompanyContactSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CompanyContactSortFields {
  CompanyId = 'companyId',
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  Email = 'email',
  GivenName = 'givenName',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LockedBy = 'lockedBy',
  Sub = 'sub',
  Surname = 'surname',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type CompanyContactUpdateDto = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  givenName?: InputMaybe<Scalars['String']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  sub?: InputMaybe<Scalars['String']>;
  surname?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CompanyContactsAggregateGroupBy = {
  __typename?: 'CompanyContactsAggregateGroupBy';
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['ID']>;
  givenName?: Maybe<Scalars['String']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  sub?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyContactsAggregateResponse = {
  __typename?: 'CompanyContactsAggregateResponse';
  count?: Maybe<CompanyContactsCountAggregate>;
  groupBy?: Maybe<CompanyContactsAggregateGroupBy>;
  max?: Maybe<CompanyContactsMaxAggregate>;
  min?: Maybe<CompanyContactsMinAggregate>;
};

export type CompanyContactsCountAggregate = {
  __typename?: 'CompanyContactsCountAggregate';
  companyId?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  givenName?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  sub?: Maybe<Scalars['Int']>;
  surname?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type CompanyContactsMaxAggregate = {
  __typename?: 'CompanyContactsMaxAggregate';
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['ID']>;
  givenName?: Maybe<Scalars['String']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  sub?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyContactsMinAggregate = {
  __typename?: 'CompanyContactsMinAggregate';
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['ID']>;
  givenName?: Maybe<Scalars['String']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  sub?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyCountAggregate = {
  __typename?: 'CompanyCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  ssoEmailPatterns?: Maybe<Scalars['Int']>;
  team?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type CompanyDto = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  externalName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  marketingDistribution?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  preferences?: InputMaybe<Scalars['JSONObject']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  sectorIds?: InputMaybe<Array<Scalars['String']>>;
  ssoEmailPatterns?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  team?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CompanyDeleteResponse = {
  __typename?: 'CompanyDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  externalName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  marketingDistribution?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
  preferences?: Maybe<Scalars['JSONObject']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  ssoEmailPatterns?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyEdge = {
  __typename?: 'CompanyEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Company */
  node: Company;
};

export type CompanyFilter = {
  and?: InputMaybe<Array<CompanyFilter>>;
  contacts?: InputMaybe<CompanyFilterCompanyContactFilter>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CompanyFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  sectors?: InputMaybe<CompanyFilterSectorFilter>;
  ssoEmailPatterns?: InputMaybe<StringFieldComparison>;
  subscriptions?: InputMaybe<CompanyFilterAnnualSubscriptionFilter>;
  team?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type CompanyFilterAnnualSubscriptionFilter = {
  access?: InputMaybe<JsonObjectFilterComparison>;
  accountRep?: InputMaybe<StringFieldComparison>;
  analyst?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<CompanyFilterAnnualSubscriptionFilter>>;
  clientId?: InputMaybe<StringFieldComparison>;
  contactId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CompanyFilterAnnualSubscriptionFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type CompanyFilterCompanyContactFilter = {
  and?: InputMaybe<Array<CompanyFilterCompanyContactFilter>>;
  companyId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  email?: InputMaybe<IdFilterComparison>;
  givenName?: InputMaybe<StringFieldComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CompanyFilterCompanyContactFilter>>;
  sub?: InputMaybe<StringFieldComparison>;
  surname?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type CompanyFilterSectorFilter = {
  and?: InputMaybe<Array<CompanyFilterSectorFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CompanyFilterSectorFilter>>;
  ppd21?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type CompanyIntegration = {
  __typename?: 'CompanyIntegration';
  client: Company;
  clientId?: Maybe<Scalars['String']>;
  config?: Maybe<Scalars['JSONObject']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  preprocessor?: Maybe<Scalars['JSONObject']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  type: IntegrationType;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyIntegrationAggregateFilter = {
  and?: InputMaybe<Array<CompanyIntegrationAggregateFilter>>;
  client?: InputMaybe<CompanyIntegrationAggregateFilterCompanyAggregateFilter>;
  clientId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CompanyIntegrationAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  type?: InputMaybe<IntegrationTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type CompanyIntegrationAggregateFilterCompanyAggregateFilter = {
  and?: InputMaybe<Array<CompanyIntegrationAggregateFilterCompanyAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CompanyIntegrationAggregateFilterCompanyAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  ssoEmailPatterns?: InputMaybe<StringFieldComparison>;
  team?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type CompanyIntegrationConnection = {
  __typename?: 'CompanyIntegrationConnection';
  /** Array of edges. */
  edges: Array<CompanyIntegrationEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type CompanyIntegrationDto = {
  clientId?: InputMaybe<Scalars['String']>;
  config?: InputMaybe<Scalars['JSONObject']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  preprocessor?: InputMaybe<Scalars['JSONObject']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<IntegrationType>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CompanyIntegrationDeleteResponse = {
  __typename?: 'CompanyIntegrationDeleteResponse';
  clientId?: Maybe<Scalars['String']>;
  config?: Maybe<Scalars['JSONObject']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  preprocessor?: Maybe<Scalars['JSONObject']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  type?: Maybe<IntegrationType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyIntegrationEdge = {
  __typename?: 'CompanyIntegrationEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the CompanyIntegration */
  node: CompanyIntegration;
};

export type CompanyIntegrationFilter = {
  and?: InputMaybe<Array<CompanyIntegrationFilter>>;
  client?: InputMaybe<CompanyIntegrationFilterCompanyFilter>;
  clientId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CompanyIntegrationFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  type?: InputMaybe<IntegrationTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type CompanyIntegrationFilterCompanyFilter = {
  and?: InputMaybe<Array<CompanyIntegrationFilterCompanyFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CompanyIntegrationFilterCompanyFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  ssoEmailPatterns?: InputMaybe<StringFieldComparison>;
  team?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type CompanyIntegrationSort = {
  direction: SortDirection;
  field: CompanyIntegrationSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CompanyIntegrationSortFields {
  ClientId = 'clientId',
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LockedBy = 'lockedBy',
  RemoteUpdated = 'remoteUpdated',
  Type = 'type',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type CompanyIntegrationsAggregateGroupBy = {
  __typename?: 'CompanyIntegrationsAggregateGroupBy';
  clientId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  type?: Maybe<IntegrationType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyIntegrationsAggregateResponse = {
  __typename?: 'CompanyIntegrationsAggregateResponse';
  count?: Maybe<CompanyIntegrationsCountAggregate>;
  groupBy?: Maybe<CompanyIntegrationsAggregateGroupBy>;
  max?: Maybe<CompanyIntegrationsMaxAggregate>;
  min?: Maybe<CompanyIntegrationsMinAggregate>;
};

export type CompanyIntegrationsCountAggregate = {
  __typename?: 'CompanyIntegrationsCountAggregate';
  clientId?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type CompanyIntegrationsMaxAggregate = {
  __typename?: 'CompanyIntegrationsMaxAggregate';
  clientId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  type?: Maybe<IntegrationType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyIntegrationsMinAggregate = {
  __typename?: 'CompanyIntegrationsMinAggregate';
  clientId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  type?: Maybe<IntegrationType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyLocation = {
  __typename?: 'CompanyLocation';
  client: Company;
  clientId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  distance: Scalars['Float'];
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  latitude: Scalars['Float'];
  locationDescription?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude: Scalars['Float'];
  order: Scalars['Float'];
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyLocationAggregateFilter = {
  and?: InputMaybe<Array<CompanyLocationAggregateFilter>>;
  client?: InputMaybe<CompanyLocationAggregateFilterCompanyAggregateFilter>;
  clientId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  latitude?: InputMaybe<FloatFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  longitude?: InputMaybe<FloatFieldComparison>;
  or?: InputMaybe<Array<CompanyLocationAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type CompanyLocationAggregateFilterCompanyAggregateFilter = {
  and?: InputMaybe<Array<CompanyLocationAggregateFilterCompanyAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CompanyLocationAggregateFilterCompanyAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  ssoEmailPatterns?: InputMaybe<StringFieldComparison>;
  team?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type CompanyLocationConnection = {
  __typename?: 'CompanyLocationConnection';
  /** Array of edges. */
  edges: Array<CompanyLocationEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type CompanyLocationDto = {
  clientId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  distance?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  locationDescription?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Float']>;
  order?: InputMaybe<Scalars['Float']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CompanyLocationDeleteResponse = {
  __typename?: 'CompanyLocationDeleteResponse';
  clientId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  distance?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  locationDescription?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyLocationEdge = {
  __typename?: 'CompanyLocationEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the CompanyLocation */
  node: CompanyLocation;
};

export type CompanyLocationFilter = {
  and?: InputMaybe<Array<CompanyLocationFilter>>;
  client?: InputMaybe<CompanyLocationFilterCompanyFilter>;
  clientId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  latitude?: InputMaybe<FloatFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  longitude?: InputMaybe<FloatFieldComparison>;
  or?: InputMaybe<Array<CompanyLocationFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type CompanyLocationFilterCompanyFilter = {
  and?: InputMaybe<Array<CompanyLocationFilterCompanyFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CompanyLocationFilterCompanyFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  ssoEmailPatterns?: InputMaybe<StringFieldComparison>;
  team?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type CompanyLocationSort = {
  direction: SortDirection;
  field: CompanyLocationSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CompanyLocationSortFields {
  ClientId = 'clientId',
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  Latitude = 'latitude',
  LockedBy = 'lockedBy',
  Longitude = 'longitude',
  RemoteUpdated = 'remoteUpdated',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type CompanyLocationsAggregateGroupBy = {
  __typename?: 'CompanyLocationsAggregateGroupBy';
  clientId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyLocationsAggregateResponse = {
  __typename?: 'CompanyLocationsAggregateResponse';
  avg?: Maybe<CompanyLocationsAvgAggregate>;
  count?: Maybe<CompanyLocationsCountAggregate>;
  groupBy?: Maybe<CompanyLocationsAggregateGroupBy>;
  max?: Maybe<CompanyLocationsMaxAggregate>;
  min?: Maybe<CompanyLocationsMinAggregate>;
  sum?: Maybe<CompanyLocationsSumAggregate>;
};

export type CompanyLocationsAvgAggregate = {
  __typename?: 'CompanyLocationsAvgAggregate';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type CompanyLocationsBatchEntryResult = {
  __typename?: 'CompanyLocationsBatchEntryResult';
  companyLocation?: Maybe<CompanyLocation>;
  error?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type CompanyLocationsBatchInput = {
  companyLocations?: InputMaybe<Array<CompanyLocationDto>>;
};

export type CompanyLocationsBatchResult = {
  __typename?: 'CompanyLocationsBatchResult';
  results?: Maybe<Array<CompanyLocationsBatchEntryResult>>;
};

export type CompanyLocationsCountAggregate = {
  __typename?: 'CompanyLocationsCountAggregate';
  clientId?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type CompanyLocationsMaxAggregate = {
  __typename?: 'CompanyLocationsMaxAggregate';
  clientId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyLocationsMinAggregate = {
  __typename?: 'CompanyLocationsMinAggregate';
  clientId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyLocationsSumAggregate = {
  __typename?: 'CompanyLocationsSumAggregate';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type CompanyMaxAggregate = {
  __typename?: 'CompanyMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  ssoEmailPatterns?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanyMinAggregate = {
  __typename?: 'CompanyMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  ssoEmailPatterns?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanySectorsAggregateGroupBy = {
  __typename?: 'CompanySectorsAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ppd21?: Maybe<Scalars['Boolean']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanySectorsAggregateResponse = {
  __typename?: 'CompanySectorsAggregateResponse';
  count?: Maybe<CompanySectorsCountAggregate>;
  groupBy?: Maybe<CompanySectorsAggregateGroupBy>;
  max?: Maybe<CompanySectorsMaxAggregate>;
  min?: Maybe<CompanySectorsMinAggregate>;
};

export type CompanySectorsCountAggregate = {
  __typename?: 'CompanySectorsCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  ppd21?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type CompanySectorsMaxAggregate = {
  __typename?: 'CompanySectorsMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanySectorsMinAggregate = {
  __typename?: 'CompanySectorsMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanySort = {
  direction: SortDirection;
  field: CompanySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CompanySortFields {
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LockedBy = 'lockedBy',
  Name = 'name',
  RemoteUpdated = 'remoteUpdated',
  SsoEmailPatterns = 'ssoEmailPatterns',
  Team = 'team',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type CompanySubscriptionsAggregateGroupBy = {
  __typename?: 'CompanySubscriptionsAggregateGroupBy';
  access?: Maybe<Scalars['JSONObject']>;
  accountRep?: Maybe<Scalars['String']>;
  analyst?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  contactId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  lockedBy?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanySubscriptionsAggregateResponse = {
  __typename?: 'CompanySubscriptionsAggregateResponse';
  count?: Maybe<CompanySubscriptionsCountAggregate>;
  groupBy?: Maybe<CompanySubscriptionsAggregateGroupBy>;
  max?: Maybe<CompanySubscriptionsMaxAggregate>;
  min?: Maybe<CompanySubscriptionsMinAggregate>;
};

export type CompanySubscriptionsCountAggregate = {
  __typename?: 'CompanySubscriptionsCountAggregate';
  access?: Maybe<Scalars['Int']>;
  accountRep?: Maybe<Scalars['Int']>;
  analyst?: Maybe<Scalars['Int']>;
  clientId?: Maybe<Scalars['Int']>;
  contactId?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type CompanySubscriptionsMaxAggregate = {
  __typename?: 'CompanySubscriptionsMaxAggregate';
  access?: Maybe<Scalars['JSONObject']>;
  accountRep?: Maybe<Scalars['String']>;
  analyst?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  contactId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CompanySubscriptionsMinAggregate = {
  __typename?: 'CompanySubscriptionsMinAggregate';
  access?: Maybe<Scalars['JSONObject']>;
  accountRep?: Maybe<Scalars['String']>;
  analyst?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  contactId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ConsumptionStatsResult = {
  __typename?: 'ConsumptionStatsResult';
  campaigns?: Maybe<Scalars['String']>;
  groups?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  issues?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  maxReadDate?: Maybe<Scalars['DateTime']>;
  minReadDate?: Maybe<Scalars['DateTime']>;
  persistence?: Maybe<Scalars['Float']>;
  reads?: Maybe<Scalars['Float']>;
  sectors?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ContactDistributionArgs = {
  annualSubscriptionIds?: InputMaybe<Array<Scalars['String']>>;
  type: EmailDistributionType;
};

export type ContactDistributionResults = {
  __typename?: 'ContactDistributionResults';
  access?: Maybe<Scalars['JSONObject']>;
  annualSubscriptionId?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['String']>;
  emails?: Maybe<Array<Scalars['String']>>;
};

export type CreateAccountInput = {
  email: Scalars['String'];
  initialPassword: Scalars['String'];
  sendEmail?: Scalars['Boolean'];
};

export type CreateActionSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ActionSubscriptionFilter;
};

export type CreateActivityLog = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  referenceEntity?: InputMaybe<Scalars['String']>;
  referenceId?: InputMaybe<Scalars['String']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  type: ActivityLogType;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CreateAdUser = {
  companyId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['ID'];
  givenName?: InputMaybe<Scalars['String']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<Scalars['String']>>;
  signature?: InputMaybe<Scalars['String']>;
  surname?: InputMaybe<Scalars['String']>;
  systemEmails?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CreateAudience = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  script?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CreateCampaign = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  global?: Scalars['Boolean'];
  hashtags?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lastModifiedDate?: InputMaybe<Scalars['DateTime']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  monitoring?: Scalars['Boolean'];
  name: Scalars['String'];
  overview?: InputMaybe<Scalars['String']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  socialMedia?: InputMaybe<Array<Scalars['String']>>;
  stage?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PostStatus>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type CreateClientNotificationSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ClientNotificationSubscriptionFilter;
};

export type CreateIntegrationTxLog = {
  companyId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  eventDate?: InputMaybe<Scalars['DateTime']>;
  eventId?: InputMaybe<Scalars['String']>;
  eventUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  type: IntegrationType;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CreateIssue = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  hashtags?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lastModifiedDate?: InputMaybe<Scalars['DateTime']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  monitoring?: Scalars['Boolean'];
  name: Scalars['String'];
  overview?: InputMaybe<Scalars['String']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  stage?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PostStatus>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CreateManyActivityLogsInput = {
  /** Array of records to create */
  activityLogs: Array<CreateActivityLog>;
};

export type CreateManyAdUsersInput = {
  /** Array of records to create */
  adUsers: Array<CreateAdUser>;
};

export type CreateManyAudiencesInput = {
  /** Array of records to create */
  audiences: Array<CreateAudience>;
};

export type CreateManyCampaignsInput = {
  /** Array of records to create */
  campaigns: Array<CreateCampaign>;
};

export type CreateManyClientNotificationAckInput = {
  /** The record to create */
  clientNotificationsAck: ClientNotificationAcksDto;
};

export type CreateManyIntegrationTxLogsInput = {
  /** Array of records to create */
  integrationTxLogs: Array<CreateIntegrationTxLog>;
};

export type CreateManyIssuesInput = {
  /** Array of records to create */
  issues: Array<CreateIssue>;
};

export type CreateManyPortalExternalSharesInput = {
  /** Array of records to create */
  portalExternalShares: Array<CreatePortalExternalShare>;
};

export type CreateManyPortalsInput = {
  /** Array of records to create */
  portals: Array<CreatePortal>;
};

export type CreateManyProminentIndividualsInput = {
  /** Array of records to create */
  prominentIndividuals: Array<CreateProminentIndividual>;
};

export type CreateManyProtestBacklogsInput = {
  /** Array of records to create */
  protestBacklogs: Array<CreateProtestBacklog>;
};

export type CreateManySectorsInput = {
  /** Array of records to create */
  sectors: Array<CreateSector>;
};

export type CreateManyServiceRequestsInput = {
  /** Array of records to create */
  serviceRequests: Array<CreateServiceRequest>;
};

export type CreateManyTacticsInput = {
  /** Array of records to create */
  tactics: Array<CreateTactic>;
};

export type CreateManyTermsInput = {
  /** Array of records to create */
  terms: Array<CreateTerm>;
};

export type CreateManyTravelRiskAdvisoriesInput = {
  /** Array of records to create */
  travelRiskAdvisories: Array<CreateTravelRiskAdvisory>;
};

export type CreateManyTravelRiskCountriesInput = {
  /** Array of records to create */
  travelRiskCountries: Array<CreateTravelRiskCountry>;
};

export type CreateOneActivityLogInput = {
  /** The record to create */
  activityLog: CreateActivityLog;
};

export type CreateOneAdUserInput = {
  /** The record to create */
  adUser: CreateAdUser;
};

export type CreateOneAnnualSubscriptionInput = {
  /** The record to create */
  annualSubscription: AnnualSubscriptionDto;
};

export type CreateOneAudienceInput = {
  /** The record to create */
  audience: CreateAudience;
};

export type CreateOneCampaignInput = {
  /** The record to create */
  campaign: CreateCampaign;
};

export type CreateOneClientNotificationAckInput = {
  /** The record to create */
  clientNotificationAck: ClientNotificationAckDto;
};

export type CreateOneClientNotificationInput = {
  /** The record to create */
  clientNotification: ClientNotificationDto;
};

export type CreateOneCompanyContactInput = {
  /** The record to create */
  companyContact: CompanyContactDto;
};

export type CreateOneCompanyInput = {
  /** The record to create */
  company: CompanyDto;
};

export type CreateOneCompanyIntegrationInput = {
  /** The record to create */
  companyIntegration: CompanyIntegrationDto;
};

export type CreateOneCompanyLocationInput = {
  /** The record to create */
  companyLocation: CompanyLocationDto;
};

export type CreateOneEventInput = {
  /** The record to create */
  event: EventDto;
};

export type CreateOneGroupInput = {
  /** The record to create */
  group: GroupDto;
};

export type CreateOneIntegrationTxLogInput = {
  /** The record to create */
  integrationTxLog: CreateIntegrationTxLog;
};

export type CreateOneIssueInput = {
  /** The record to create */
  issue: CreateIssue;
};

export type CreateOneLocationInput = {
  /** The record to create */
  location: LocationDto;
};

export type CreateOnePortalExternalShareInput = {
  /** The record to create */
  portalExternalShare: CreatePortalExternalShare;
};

export type CreateOnePortalInput = {
  /** The record to create */
  portal: CreatePortal;
};

export type CreateOneProminentIndividualInput = {
  /** The record to create */
  prominentIndividual: CreateProminentIndividual;
};

export type CreateOneProtestBacklogInput = {
  /** The record to create */
  protestBacklog: CreateProtestBacklog;
};

export type CreateOneRoleInput = {
  /** The record to create */
  role: CreateRole;
};

export type CreateOneSectorInput = {
  /** The record to create */
  sector: CreateSector;
};

export type CreateOneServiceRequestInput = {
  /** The record to create */
  serviceRequest: CreateServiceRequest;
};

export type CreateOneTacticInput = {
  /** The record to create */
  tactic: CreateTactic;
};

export type CreateOneTermInput = {
  /** The record to create */
  term: CreateTerm;
};

export type CreateOneTravelRiskAdvisoryInput = {
  /** The record to create */
  travelRiskAdvisory: CreateTravelRiskAdvisory;
};

export type CreateOneTravelRiskCountryInput = {
  /** The record to create */
  travelRiskCountry: CreateTravelRiskCountry;
};

export type CreatePortal = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
  welcomeEmailTemplate: Scalars['String'];
};

export type CreatePortalExternalShare = {
  allowDownload?: Scalars['Boolean'];
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  postId: Scalars['String'];
  postType: PostType;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  shareTo?: InputMaybe<Array<Scalars['String']>>;
  shareUntil?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CreateProminentIndividual = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CreateProtestBacklog = {
  comments?: InputMaybe<Scalars['String']>;
  completedOn?: InputMaybe<Scalars['DateTime']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['String']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<ProtestBacklogStatus>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};

export type CreateProtestBacklogSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProtestBacklogSubscriptionFilter;
};

export type CreateRole = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  permissions?: InputMaybe<Array<Scalars['String']>>;
};

export type CreateSector = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  ppd21: Scalars['Boolean'];
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CreateServiceRequest = {
  assignedTo?: InputMaybe<Array<Scalars['String']>>;
  clientId?: InputMaybe<Scalars['String']>;
  companyContactId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  deliverableURL?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  hours?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  plannedEndDate?: InputMaybe<Scalars['DateTime']>;
  plannedHours?: InputMaybe<Scalars['Float']>;
  plannedStartDate?: InputMaybe<Scalars['DateTime']>;
  priority?: InputMaybe<Scalars['String']>;
  qualifiesBespoke: Scalars['Boolean'];
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<ServiceRequestStatus>;
  targetDate?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  type?: InputMaybe<ServiceRequestType>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
  updates?: InputMaybe<Array<ServiceRequestUpdateEntryInput>>;
};

export type CreateServiceRequestSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ServiceRequestSubscriptionFilter;
};

export type CreateTactic = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  protest: Scalars['Boolean'];
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
  virtual: Scalars['Boolean'];
};

export type CreateTerm = {
  acronym?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  term: Scalars['String'];
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CreateTravelRiskAdvisory = {
  asOfDate: Scalars['DateTime'];
  countryId?: InputMaybe<Scalars['String']>;
  countryName: Scalars['String'];
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  isoCode: Scalars['String'];
  lockedBy?: InputMaybe<Scalars['String']>;
  recommendation?: InputMaybe<Scalars['String']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  risk?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CreateTravelRiskCountry = {
  asOfDate: Scalars['DateTime'];
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  isoCode: Scalars['ID'];
  lockedBy?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  risk?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CursorPaging = {
  /** Paginate after opaque cursor */
  after?: InputMaybe<Scalars['ConnectionCursor']>;
  /** Paginate before opaque cursor */
  before?: InputMaybe<Scalars['ConnectionCursor']>;
  /** Paginate first */
  first?: InputMaybe<Scalars['Int']>;
  /** Paginate last */
  last?: InputMaybe<Scalars['Int']>;
};

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime'];
  upper: Scalars['DateTime'];
};

export type DeleteManyActivityLogsInput = {
  /** Filter to find records to delete */
  filter: ActivityLogDeleteFilter;
};

export type DeleteManyAdUsersInput = {
  /** Filter to find records to delete */
  filter: AdUserDeleteFilter;
};

export type DeleteManyAudiencesInput = {
  /** Filter to find records to delete */
  filter: AudienceDeleteFilter;
};

export type DeleteManyCampaignsInput = {
  /** Filter to find records to delete */
  filter: CampaignDeleteFilter;
};

export type DeleteManyIntegrationTxLogsInput = {
  /** Filter to find records to delete */
  filter: IntegrationTxLogDeleteFilter;
};

export type DeleteManyIssuesInput = {
  /** Filter to find records to delete */
  filter: IssueDeleteFilter;
};

export type DeleteManyPortalExternalSharesInput = {
  /** Filter to find records to delete */
  filter: PortalExternalShareDeleteFilter;
};

export type DeleteManyPortalsInput = {
  /** Filter to find records to delete */
  filter: PortalDeleteFilter;
};

export type DeleteManyProminentIndividualsInput = {
  /** Filter to find records to delete */
  filter: ProminentIndividualDeleteFilter;
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int'];
};

export type DeleteManySectorsInput = {
  /** Filter to find records to delete */
  filter: SectorDeleteFilter;
};

export type DeleteManyServiceRequestsInput = {
  /** Filter to find records to delete */
  filter: ServiceRequestDeleteFilter;
};

export type DeleteManyTacticsInput = {
  /** Filter to find records to delete */
  filter: TacticDeleteFilter;
};

export type DeleteManyTermsInput = {
  /** Filter to find records to delete */
  filter: TermDeleteFilter;
};

export type DeleteManyTravelRiskAdvisoriesInput = {
  /** Filter to find records to delete */
  filter: TravelRiskAdvisoryDeleteFilter;
};

export type DeleteManyTravelRiskCountriesInput = {
  /** Filter to find records to delete */
  filter: TravelRiskCountryDeleteFilter;
};

export type DeleteOneActionInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneActionSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ActionSubscriptionFilter;
};

export type DeleteOneActivityLogInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneAdUserInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneAnnualSubscriptionInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneArticleInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneAttachmentInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneAudienceInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneBriefingInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneCampaignInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneClientNotificationAckInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneClientNotificationInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneClientNotificationSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ClientNotificationSubscriptionFilter;
};

export type DeleteOneCompanyContactInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneCompanyInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneCompanyIntegrationInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneCompanyLocationInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneEventInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneGroupInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneIntegrationTxLogInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneIssueInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneLocationInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOnePortalExternalShareInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOnePortalInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneProminentIndividualInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneProtestBacklogInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneProtestBacklogSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProtestBacklogSubscriptionFilter;
};

export type DeleteOneResourceInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneRoleInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneSectorInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneServiceRequestInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneServiceRequestSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ServiceRequestSubscriptionFilter;
};

export type DeleteOneTacticInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneTermInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneTravelRiskAdvisoryInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneTravelRiskCountryInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DimensionStatsAggregateResult = {
  __typename?: 'DimensionStatsAggregateResult';
  dimensionId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  totalCount?: Maybe<Scalars['Float']>;
};

export type DimensionStatsArg = {
  aggregationType?: InputMaybe<AggregationType>;
  audiences?: InputMaybe<Array<Scalars['String']>>;
  campaigns?: InputMaybe<Array<Scalars['String']>>;
  cities?: InputMaybe<Array<Scalars['String']>>;
  companies?: InputMaybe<Array<Scalars['String']>>;
  countries?: InputMaybe<Array<Scalars['String']>>;
  dimension: DimensionType;
  from: Scalars['DateTime'];
  groups?: InputMaybe<Array<Scalars['String']>>;
  impacts?: InputMaybe<Array<Scalars['String']>>;
  issues?: InputMaybe<Array<Scalars['String']>>;
  locations?: InputMaybe<Array<Scalars['String']>>;
  provinces?: InputMaybe<Array<Scalars['String']>>;
  regions?: InputMaybe<Array<Scalars['String']>>;
  returnLimit?: InputMaybe<Array<Scalars['Float']>>;
  sectors?: InputMaybe<Array<Scalars['String']>>;
  tactics?: InputMaybe<Array<Scalars['String']>>;
  to: Scalars['DateTime'];
};

export type DimensionStatsResult = {
  __typename?: 'DimensionStatsResult';
  actionCount?: Maybe<Scalars['Float']>;
  articleCount?: Maybe<Scalars['Float']>;
  date: Scalars['DateTime'];
  dimensionId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  rawActionCount?: Maybe<Scalars['Float']>;
};

export enum DimensionType {
  Campaign = 'CAMPAIGN',
  Company = 'COMPANY',
  Group = 'GROUP',
  Issue = 'ISSUE',
  Location = 'LOCATION',
  Sector = 'SECTOR',
  Tactic = 'TACTIC'
}

export enum EmailDistributionType {
  All = 'all',
  DailyUpdate = 'dailyUpdate',
  Dps = 'dps',
  Fysa = 'fysa',
  KeyContact = 'keyContact',
  MonthlySector = 'monthlySector',
  Portal = 'portal',
  ProactiveAlerts = 'proactiveAlerts',
  WeeklyOutlook = 'weeklyOutlook'
}

export type Event = {
  __typename?: 'Event';
  actions?: Maybe<EventActionsConnection>;
  actionsAggregate: Array<EventActionsAggregateResponse>;
  articles?: Maybe<EventArticlesConnection>;
  articlesAggregate: Array<EventArticlesAggregateResponse>;
  briefingRequired: Scalars['Boolean'];
  briefings?: Maybe<EventBriefingsConnection>;
  briefingsAggregate: Array<EventBriefingsAggregateResponse>;
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  location?: Maybe<Location>;
  locationDescription?: Maybe<Scalars['String']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  monitoring: Scalars['Boolean'];
  name: Scalars['String'];
  private: Scalars['Boolean'];
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  reoccuringRuleSet?: Maybe<Scalars['JSONObject']>;
  risk?: Maybe<Scalars['String']>;
  sectors?: Maybe<Array<Sector>>;
  sectorsAggregate: Array<EventSectorsAggregateResponse>;
  sourceUrl?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  type?: Maybe<EventType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
  virtual?: Maybe<Scalars['Boolean']>;
};


export type EventActionsArgs = {
  filter?: ActionFilter;
  paging?: CursorPaging;
  sorting?: Array<ActionSort>;
};


export type EventActionsAggregateArgs = {
  filter?: InputMaybe<ActionAggregateFilter>;
};


export type EventArticlesArgs = {
  filter?: ArticleFilter;
  paging?: CursorPaging;
  sorting?: Array<ArticleSort>;
};


export type EventArticlesAggregateArgs = {
  filter?: InputMaybe<ArticleAggregateFilter>;
};


export type EventBriefingsArgs = {
  filter?: BriefingFilter;
  paging?: CursorPaging;
  sorting?: Array<BriefingSort>;
};


export type EventBriefingsAggregateArgs = {
  filter?: InputMaybe<BriefingAggregateFilter>;
};


export type EventSectorsArgs = {
  filter?: SectorFilter;
  sorting?: Array<SectorSort>;
};


export type EventSectorsAggregateArgs = {
  filter?: InputMaybe<SectorAggregateFilter>;
};

export type EventActionsAggregateGroupBy = {
  __typename?: 'EventActionsAggregateGroupBy';
  actionStatus?: Maybe<ActionStatus>;
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  inActive?: Maybe<Scalars['Boolean']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  ongoing?: Maybe<Scalars['Boolean']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type EventActionsAggregateResponse = {
  __typename?: 'EventActionsAggregateResponse';
  avg?: Maybe<EventActionsAvgAggregate>;
  count?: Maybe<EventActionsCountAggregate>;
  groupBy?: Maybe<EventActionsAggregateGroupBy>;
  max?: Maybe<EventActionsMaxAggregate>;
  min?: Maybe<EventActionsMinAggregate>;
  sum?: Maybe<EventActionsSumAggregate>;
};

export type EventActionsAvgAggregate = {
  __typename?: 'EventActionsAvgAggregate';
  going?: Maybe<Scalars['Float']>;
  interested?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type EventActionsConnection = {
  __typename?: 'EventActionsConnection';
  /** Array of edges. */
  edges: Array<ActionEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type EventActionsCountAggregate = {
  __typename?: 'EventActionsCountAggregate';
  actionStatus?: Maybe<Scalars['Int']>;
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Int']>;
  going?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  impact?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  interested?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  ongoing?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  tacticId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type EventActionsMaxAggregate = {
  __typename?: 'EventActionsMaxAggregate';
  actionStatus?: Maybe<ActionStatus>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type EventActionsMinAggregate = {
  __typename?: 'EventActionsMinAggregate';
  actionStatus?: Maybe<ActionStatus>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type EventActionsSumAggregate = {
  __typename?: 'EventActionsSumAggregate';
  going?: Maybe<Scalars['Float']>;
  interested?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type EventAggregateFilter = {
  and?: InputMaybe<Array<EventAggregateFilter>>;
  briefingRequired?: InputMaybe<BooleanFieldComparison>;
  company?: InputMaybe<EventAggregateFilterCompanyAggregateFilter>;
  companyId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  latitude?: InputMaybe<FloatFieldComparison>;
  location?: InputMaybe<EventAggregateFilterLocationAggregateFilter>;
  locationId?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  longitude?: InputMaybe<FloatFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EventAggregateFilter>>;
  private?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  risk?: InputMaybe<StringFieldComparison>;
  sectors?: InputMaybe<EventAggregateFilterSectorAggregateFilter>;
  startDate?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  type?: InputMaybe<EventTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type EventAggregateFilterCompanyAggregateFilter = {
  and?: InputMaybe<Array<EventAggregateFilterCompanyAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EventAggregateFilterCompanyAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  ssoEmailPatterns?: InputMaybe<StringFieldComparison>;
  team?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type EventAggregateFilterLocationAggregateFilter = {
  and?: InputMaybe<Array<EventAggregateFilterLocationAggregateFilter>>;
  city?: InputMaybe<StringFieldComparison>;
  country?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  metropolitanArea?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EventAggregateFilterLocationAggregateFilter>>;
  province?: InputMaybe<StringFieldComparison>;
  region?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type EventAggregateFilterSectorAggregateFilter = {
  and?: InputMaybe<Array<EventAggregateFilterSectorAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EventAggregateFilterSectorAggregateFilter>>;
  ppd21?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type EventAggregateGroupBy = {
  __typename?: 'EventAggregateGroupBy';
  briefingRequired?: Maybe<Scalars['Boolean']>;
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  monitoring?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Boolean']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  risk?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  type?: Maybe<EventType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type EventAggregateGroupByCreatedArgs = {
  by?: GroupBy;
};


export type EventAggregateGroupByEndDateArgs = {
  by?: GroupBy;
};


export type EventAggregateGroupByLastModifiedDateArgs = {
  by?: GroupBy;
};


export type EventAggregateGroupByRemoteUpdatedArgs = {
  by?: GroupBy;
};


export type EventAggregateGroupByStartDateArgs = {
  by?: GroupBy;
};


export type EventAggregateGroupByUpdatedArgs = {
  by?: GroupBy;
};

export type EventAggregateResponse = {
  __typename?: 'EventAggregateResponse';
  avg?: Maybe<EventAvgAggregate>;
  count?: Maybe<EventCountAggregate>;
  groupBy?: Maybe<EventAggregateGroupBy>;
  max?: Maybe<EventMaxAggregate>;
  min?: Maybe<EventMinAggregate>;
  sum?: Maybe<EventSumAggregate>;
};

export type EventArticlesAggregateGroupBy = {
  __typename?: 'EventArticlesAggregateGroupBy';
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type EventArticlesAggregateResponse = {
  __typename?: 'EventArticlesAggregateResponse';
  count?: Maybe<EventArticlesCountAggregate>;
  groupBy?: Maybe<EventArticlesAggregateGroupBy>;
  max?: Maybe<EventArticlesMaxAggregate>;
  min?: Maybe<EventArticlesMinAggregate>;
};

export type EventArticlesConnection = {
  __typename?: 'EventArticlesConnection';
  /** Array of edges. */
  edges: Array<ArticleEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type EventArticlesCountAggregate = {
  __typename?: 'EventArticlesCountAggregate';
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  highlightUntilDate?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type EventArticlesMaxAggregate = {
  __typename?: 'EventArticlesMaxAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type EventArticlesMinAggregate = {
  __typename?: 'EventArticlesMinAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type EventAvgAggregate = {
  __typename?: 'EventAvgAggregate';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type EventBriefingsAggregateGroupBy = {
  __typename?: 'EventBriefingsAggregateGroupBy';
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  restricted?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type EventBriefingsAggregateResponse = {
  __typename?: 'EventBriefingsAggregateResponse';
  count?: Maybe<EventBriefingsCountAggregate>;
  groupBy?: Maybe<EventBriefingsAggregateGroupBy>;
  max?: Maybe<EventBriefingsMaxAggregate>;
  min?: Maybe<EventBriefingsMinAggregate>;
};

export type EventBriefingsConnection = {
  __typename?: 'EventBriefingsConnection';
  /** Array of edges. */
  edges: Array<BriefingEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type EventBriefingsCountAggregate = {
  __typename?: 'EventBriefingsCountAggregate';
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  restricted?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type EventBriefingsMaxAggregate = {
  __typename?: 'EventBriefingsMaxAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type EventBriefingsMinAggregate = {
  __typename?: 'EventBriefingsMinAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  /** Array of edges. */
  edges: Array<EventEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type EventCountAggregate = {
  __typename?: 'EventCountAggregate';
  briefingRequired?: Maybe<Scalars['Int']>;
  companyId?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  monitoring?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  private?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  risk?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type EventDto = {
  briefingRequired?: InputMaybe<Scalars['Boolean']>;
  companyId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lastModifiedDate?: InputMaybe<Scalars['DateTime']>;
  latitude?: InputMaybe<Scalars['Float']>;
  locationDescription?: InputMaybe<Scalars['String']>;
  locationId?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Float']>;
  monitoring?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  private?: InputMaybe<Scalars['Boolean']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  reoccuringRuleSet?: InputMaybe<Scalars['JSONObject']>;
  risk?: InputMaybe<Scalars['String']>;
  sectorIds?: InputMaybe<Array<Scalars['String']>>;
  sourceUrl?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<PostStatus>;
  type?: InputMaybe<EventType>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
  virtual?: InputMaybe<Scalars['Boolean']>;
};

export type EventDeleteResponse = {
  __typename?: 'EventDeleteResponse';
  briefingRequired?: Maybe<Scalars['Boolean']>;
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationDescription?: Maybe<Scalars['String']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  monitoring?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Boolean']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  reoccuringRuleSet?: Maybe<Scalars['JSONObject']>;
  risk?: Maybe<Scalars['String']>;
  sourceUrl?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  type?: Maybe<EventType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
  virtual?: Maybe<Scalars['Boolean']>;
};

export type EventEdge = {
  __typename?: 'EventEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Event */
  node: Event;
};

export type EventFilter = {
  and?: InputMaybe<Array<EventFilter>>;
  briefingRequired?: InputMaybe<BooleanFieldComparison>;
  company?: InputMaybe<EventFilterCompanyFilter>;
  companyId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  latitude?: InputMaybe<FloatFieldComparison>;
  location?: InputMaybe<EventFilterLocationFilter>;
  locationId?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  longitude?: InputMaybe<FloatFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EventFilter>>;
  private?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  risk?: InputMaybe<StringFieldComparison>;
  sectors?: InputMaybe<EventFilterSectorFilter>;
  startDate?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  type?: InputMaybe<EventTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type EventFilterCompanyFilter = {
  and?: InputMaybe<Array<EventFilterCompanyFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EventFilterCompanyFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  ssoEmailPatterns?: InputMaybe<StringFieldComparison>;
  team?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type EventFilterLocationFilter = {
  and?: InputMaybe<Array<EventFilterLocationFilter>>;
  city?: InputMaybe<StringFieldComparison>;
  country?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  metropolitanArea?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EventFilterLocationFilter>>;
  province?: InputMaybe<StringFieldComparison>;
  region?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type EventFilterSectorFilter = {
  and?: InputMaybe<Array<EventFilterSectorFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EventFilterSectorFilter>>;
  ppd21?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type EventMaxAggregate = {
  __typename?: 'EventMaxAggregate';
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  risk?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  type?: Maybe<EventType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type EventMinAggregate = {
  __typename?: 'EventMinAggregate';
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  risk?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  type?: Maybe<EventType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type EventSectorsAggregateGroupBy = {
  __typename?: 'EventSectorsAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ppd21?: Maybe<Scalars['Boolean']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type EventSectorsAggregateResponse = {
  __typename?: 'EventSectorsAggregateResponse';
  count?: Maybe<EventSectorsCountAggregate>;
  groupBy?: Maybe<EventSectorsAggregateGroupBy>;
  max?: Maybe<EventSectorsMaxAggregate>;
  min?: Maybe<EventSectorsMinAggregate>;
};

export type EventSectorsCountAggregate = {
  __typename?: 'EventSectorsCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  ppd21?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type EventSectorsMaxAggregate = {
  __typename?: 'EventSectorsMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type EventSectorsMinAggregate = {
  __typename?: 'EventSectorsMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type EventSort = {
  direction: SortDirection;
  field: EventSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum EventSortFields {
  BriefingRequired = 'briefingRequired',
  CompanyId = 'companyId',
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  EndDate = 'endDate',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LastModifiedDate = 'lastModifiedDate',
  Latitude = 'latitude',
  LocationId = 'locationId',
  LockedBy = 'lockedBy',
  Longitude = 'longitude',
  Monitoring = 'monitoring',
  Name = 'name',
  Private = 'private',
  RemoteUpdated = 'remoteUpdated',
  Risk = 'risk',
  StartDate = 'startDate',
  Status = 'status',
  Type = 'type',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type EventSumAggregate = {
  __typename?: 'EventSumAggregate';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export enum EventType {
  Agm = 'AGM',
  Activism = 'Activism',
  DomesticPolitical = 'DomesticPolitical',
  Industry = 'Industry',
  International = 'International'
}

export type EventTypeFilterComparison = {
  eq?: InputMaybe<EventType>;
  gt?: InputMaybe<EventType>;
  gte?: InputMaybe<EventType>;
  iLike?: InputMaybe<EventType>;
  in?: InputMaybe<Array<EventType>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<EventType>;
  lt?: InputMaybe<EventType>;
  lte?: InputMaybe<EventType>;
  neq?: InputMaybe<EventType>;
  notILike?: InputMaybe<EventType>;
  notIn?: InputMaybe<Array<EventType>>;
  notLike?: InputMaybe<EventType>;
};

export type FloatFieldComparison = {
  between?: InputMaybe<FloatFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
  notBetween?: InputMaybe<FloatFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatFieldComparisonBetween = {
  lower: Scalars['Float'];
  upper: Scalars['Float'];
};

export type Group = {
  __typename?: 'Group';
  actions?: Maybe<GroupActionsConnection>;
  actionsAggregate: Array<GroupActionsAggregateResponse>;
  articles?: Maybe<GroupArticlesConnection>;
  articlesAggregate: Array<GroupArticlesAggregateResponse>;
  briefings?: Maybe<GroupBriefingsConnection>;
  briefingsAggregate: Array<GroupBriefingsAggregateResponse>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  hashtags?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  monitoring: Scalars['Boolean'];
  name: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  parentGroup?: Maybe<Group>;
  parentGroupId?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  socialMedia?: Maybe<Array<Scalars['String']>>;
  stage?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  subGroups?: Maybe<Array<Group>>;
  subGroupsAggregate: Array<GroupSubGroupsAggregateResponse>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
};


export type GroupActionsArgs = {
  filter?: ActionFilter;
  paging?: CursorPaging;
  sorting?: Array<ActionSort>;
};


export type GroupActionsAggregateArgs = {
  filter?: InputMaybe<ActionAggregateFilter>;
};


export type GroupArticlesArgs = {
  filter?: ArticleFilter;
  paging?: CursorPaging;
  sorting?: Array<ArticleSort>;
};


export type GroupArticlesAggregateArgs = {
  filter?: InputMaybe<ArticleAggregateFilter>;
};


export type GroupBriefingsArgs = {
  filter?: BriefingFilter;
  paging?: CursorPaging;
  sorting?: Array<BriefingSort>;
};


export type GroupBriefingsAggregateArgs = {
  filter?: InputMaybe<BriefingAggregateFilter>;
};


export type GroupSubGroupsArgs = {
  filter?: GroupFilter;
  sorting?: Array<GroupSort>;
};


export type GroupSubGroupsAggregateArgs = {
  filter?: InputMaybe<GroupAggregateFilter>;
};

export type GroupActionsAggregateGroupBy = {
  __typename?: 'GroupActionsAggregateGroupBy';
  actionStatus?: Maybe<ActionStatus>;
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  inActive?: Maybe<Scalars['Boolean']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  ongoing?: Maybe<Scalars['Boolean']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type GroupActionsAggregateResponse = {
  __typename?: 'GroupActionsAggregateResponse';
  avg?: Maybe<GroupActionsAvgAggregate>;
  count?: Maybe<GroupActionsCountAggregate>;
  groupBy?: Maybe<GroupActionsAggregateGroupBy>;
  max?: Maybe<GroupActionsMaxAggregate>;
  min?: Maybe<GroupActionsMinAggregate>;
  sum?: Maybe<GroupActionsSumAggregate>;
};

export type GroupActionsAvgAggregate = {
  __typename?: 'GroupActionsAvgAggregate';
  going?: Maybe<Scalars['Float']>;
  interested?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type GroupActionsConnection = {
  __typename?: 'GroupActionsConnection';
  /** Array of edges. */
  edges: Array<ActionEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type GroupActionsCountAggregate = {
  __typename?: 'GroupActionsCountAggregate';
  actionStatus?: Maybe<Scalars['Int']>;
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Int']>;
  going?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  impact?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  interested?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  ongoing?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  tacticId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type GroupActionsMaxAggregate = {
  __typename?: 'GroupActionsMaxAggregate';
  actionStatus?: Maybe<ActionStatus>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type GroupActionsMinAggregate = {
  __typename?: 'GroupActionsMinAggregate';
  actionStatus?: Maybe<ActionStatus>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type GroupActionsSumAggregate = {
  __typename?: 'GroupActionsSumAggregate';
  going?: Maybe<Scalars['Float']>;
  interested?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type GroupAggregateFilter = {
  and?: InputMaybe<Array<GroupAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<GroupAggregateFilter>>;
  parentGroup?: InputMaybe<GroupAggregateFilterGroupAggregateFilter>;
  parentGroupId?: InputMaybe<StringFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type GroupAggregateFilterGroupAggregateFilter = {
  and?: InputMaybe<Array<GroupAggregateFilterGroupAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<GroupAggregateFilterGroupAggregateFilter>>;
  parentGroupId?: InputMaybe<StringFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type GroupAggregateGroupBy = {
  __typename?: 'GroupAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  monitoring?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  parentGroupId?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type GroupAggregateGroupByCreatedArgs = {
  by?: GroupBy;
};


export type GroupAggregateGroupByLastModifiedDateArgs = {
  by?: GroupBy;
};


export type GroupAggregateGroupByRemoteUpdatedArgs = {
  by?: GroupBy;
};


export type GroupAggregateGroupByUpdatedArgs = {
  by?: GroupBy;
};

export type GroupAggregateResponse = {
  __typename?: 'GroupAggregateResponse';
  count?: Maybe<GroupCountAggregate>;
  groupBy?: Maybe<GroupAggregateGroupBy>;
  max?: Maybe<GroupMaxAggregate>;
  min?: Maybe<GroupMinAggregate>;
};

export type GroupArticlesAggregateGroupBy = {
  __typename?: 'GroupArticlesAggregateGroupBy';
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type GroupArticlesAggregateResponse = {
  __typename?: 'GroupArticlesAggregateResponse';
  count?: Maybe<GroupArticlesCountAggregate>;
  groupBy?: Maybe<GroupArticlesAggregateGroupBy>;
  max?: Maybe<GroupArticlesMaxAggregate>;
  min?: Maybe<GroupArticlesMinAggregate>;
};

export type GroupArticlesConnection = {
  __typename?: 'GroupArticlesConnection';
  /** Array of edges. */
  edges: Array<ArticleEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type GroupArticlesCountAggregate = {
  __typename?: 'GroupArticlesCountAggregate';
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  highlightUntilDate?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type GroupArticlesMaxAggregate = {
  __typename?: 'GroupArticlesMaxAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type GroupArticlesMinAggregate = {
  __typename?: 'GroupArticlesMinAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type GroupBriefingsAggregateGroupBy = {
  __typename?: 'GroupBriefingsAggregateGroupBy';
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  restricted?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type GroupBriefingsAggregateResponse = {
  __typename?: 'GroupBriefingsAggregateResponse';
  count?: Maybe<GroupBriefingsCountAggregate>;
  groupBy?: Maybe<GroupBriefingsAggregateGroupBy>;
  max?: Maybe<GroupBriefingsMaxAggregate>;
  min?: Maybe<GroupBriefingsMinAggregate>;
};

export type GroupBriefingsConnection = {
  __typename?: 'GroupBriefingsConnection';
  /** Array of edges. */
  edges: Array<BriefingEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type GroupBriefingsCountAggregate = {
  __typename?: 'GroupBriefingsCountAggregate';
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  restricted?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type GroupBriefingsMaxAggregate = {
  __typename?: 'GroupBriefingsMaxAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type GroupBriefingsMinAggregate = {
  __typename?: 'GroupBriefingsMinAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

/** Group by */
export enum GroupBy {
  Day = 'DAY',
  Month = 'MONTH',
  Week = 'WEEK',
  Year = 'YEAR'
}

export type GroupConnection = {
  __typename?: 'GroupConnection';
  /** Array of edges. */
  edges: Array<GroupEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type GroupCountAggregate = {
  __typename?: 'GroupCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  monitoring?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  parentGroupId?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type GroupDto = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  hashtags?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lastModifiedDate?: InputMaybe<Scalars['DateTime']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  monitoring?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  overview?: InputMaybe<Scalars['String']>;
  parentGroupId?: InputMaybe<Scalars['String']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  socialMedia?: InputMaybe<Array<Scalars['String']>>;
  stage?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PostStatus>;
  subGroupsIds?: InputMaybe<Array<Scalars['String']>>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type GroupDeleteResponse = {
  __typename?: 'GroupDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  hashtags?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  monitoring?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  parentGroupId?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  socialMedia?: Maybe<Array<Scalars['String']>>;
  stage?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
};

export type GroupEdge = {
  __typename?: 'GroupEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Group */
  node: Group;
};

export type GroupFilter = {
  and?: InputMaybe<Array<GroupFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<GroupFilter>>;
  parentGroup?: InputMaybe<GroupFilterGroupFilter>;
  parentGroupId?: InputMaybe<StringFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type GroupFilterGroupFilter = {
  and?: InputMaybe<Array<GroupFilterGroupFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<GroupFilterGroupFilter>>;
  parentGroupId?: InputMaybe<StringFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type GroupMaxAggregate = {
  __typename?: 'GroupMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parentGroupId?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type GroupMinAggregate = {
  __typename?: 'GroupMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parentGroupId?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type GroupReferenceResults = {
  __typename?: 'GroupReferenceResults';
  actionCount: Scalars['Float'];
  articleCount: Scalars['Float'];
  id: Scalars['String'];
  name: Scalars['String'];
  rawActionCount: Scalars['Float'];
  total: Scalars['Float'];
};

export type GroupSort = {
  direction: SortDirection;
  field: GroupSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum GroupSortFields {
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LastModifiedDate = 'lastModifiedDate',
  LockedBy = 'lockedBy',
  Monitoring = 'monitoring',
  Name = 'name',
  ParentGroupId = 'parentGroupId',
  RemoteUpdated = 'remoteUpdated',
  Status = 'status',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type GroupSubGroupsAggregateGroupBy = {
  __typename?: 'GroupSubGroupsAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  monitoring?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  parentGroupId?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type GroupSubGroupsAggregateResponse = {
  __typename?: 'GroupSubGroupsAggregateResponse';
  count?: Maybe<GroupSubGroupsCountAggregate>;
  groupBy?: Maybe<GroupSubGroupsAggregateGroupBy>;
  max?: Maybe<GroupSubGroupsMaxAggregate>;
  min?: Maybe<GroupSubGroupsMinAggregate>;
};

export type GroupSubGroupsCountAggregate = {
  __typename?: 'GroupSubGroupsCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  monitoring?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  parentGroupId?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type GroupSubGroupsMaxAggregate = {
  __typename?: 'GroupSubGroupsMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parentGroupId?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type GroupSubGroupsMinAggregate = {
  __typename?: 'GroupSubGroupsMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parentGroupId?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type IdFilterComparison = {
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  iLike?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  neq?: InputMaybe<Scalars['ID']>;
  notILike?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  notLike?: InputMaybe<Scalars['ID']>;
};

export type IntegrationTxLog = {
  __typename?: 'IntegrationTxLog';
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  eventDate?: Maybe<Scalars['DateTime']>;
  eventId?: Maybe<Scalars['String']>;
  eventUpdated?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  type: IntegrationType;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type IntegrationTxLogConnection = {
  __typename?: 'IntegrationTxLogConnection';
  /** Array of edges. */
  edges: Array<IntegrationTxLogEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type IntegrationTxLogDeleteFilter = {
  and?: InputMaybe<Array<IntegrationTxLogDeleteFilter>>;
  companyId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  eventDate?: InputMaybe<DateFieldComparison>;
  eventId?: InputMaybe<StringFieldComparison>;
  eventUpdated?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<IntegrationTxLogDeleteFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  type?: InputMaybe<IntegrationTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type IntegrationTxLogDeleteResponse = {
  __typename?: 'IntegrationTxLogDeleteResponse';
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  eventDate?: Maybe<Scalars['DateTime']>;
  eventId?: Maybe<Scalars['String']>;
  eventUpdated?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  type?: Maybe<IntegrationType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type IntegrationTxLogEdge = {
  __typename?: 'IntegrationTxLogEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the IntegrationTxLog */
  node: IntegrationTxLog;
};

export type IntegrationTxLogFilter = {
  and?: InputMaybe<Array<IntegrationTxLogFilter>>;
  companyId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  eventDate?: InputMaybe<DateFieldComparison>;
  eventId?: InputMaybe<StringFieldComparison>;
  eventUpdated?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<IntegrationTxLogFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  type?: InputMaybe<IntegrationTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type IntegrationTxLogSort = {
  direction: SortDirection;
  field: IntegrationTxLogSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum IntegrationTxLogSortFields {
  CompanyId = 'companyId',
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  EventDate = 'eventDate',
  EventId = 'eventId',
  EventUpdated = 'eventUpdated',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LockedBy = 'lockedBy',
  RemoteUpdated = 'remoteUpdated',
  Type = 'type',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type IntegrationTxLogUpdateFilter = {
  and?: InputMaybe<Array<IntegrationTxLogUpdateFilter>>;
  companyId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  eventDate?: InputMaybe<DateFieldComparison>;
  eventId?: InputMaybe<StringFieldComparison>;
  eventUpdated?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<IntegrationTxLogUpdateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  type?: InputMaybe<IntegrationTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

/** Integration Types */
export enum IntegrationType {
  Airtable = 'AIRTABLE',
  Api = 'API',
  Everbridge = 'EVERBRIDGE',
  Gsheet = 'GSHEET'
}

export type IntegrationTypeFilterComparison = {
  eq?: InputMaybe<IntegrationType>;
  gt?: InputMaybe<IntegrationType>;
  gte?: InputMaybe<IntegrationType>;
  iLike?: InputMaybe<IntegrationType>;
  in?: InputMaybe<Array<IntegrationType>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<IntegrationType>;
  lt?: InputMaybe<IntegrationType>;
  lte?: InputMaybe<IntegrationType>;
  neq?: InputMaybe<IntegrationType>;
  notILike?: InputMaybe<IntegrationType>;
  notIn?: InputMaybe<Array<IntegrationType>>;
  notLike?: InputMaybe<IntegrationType>;
};

export type Issue = {
  __typename?: 'Issue';
  actions?: Maybe<IssueActionsConnection>;
  actionsAggregate: Array<IssueActionsAggregateResponse>;
  articles?: Maybe<IssueArticlesConnection>;
  articlesAggregate: Array<IssueArticlesAggregateResponse>;
  briefings?: Maybe<IssueBriefingsConnection>;
  briefingsAggregate: Array<IssueBriefingsAggregateResponse>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  hashtags?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  monitoring: Scalars['Boolean'];
  name: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  stage?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type IssueActionsArgs = {
  filter?: ActionFilter;
  paging?: CursorPaging;
  sorting?: Array<ActionSort>;
};


export type IssueActionsAggregateArgs = {
  filter?: InputMaybe<ActionAggregateFilter>;
};


export type IssueArticlesArgs = {
  filter?: ArticleFilter;
  paging?: CursorPaging;
  sorting?: Array<ArticleSort>;
};


export type IssueArticlesAggregateArgs = {
  filter?: InputMaybe<ArticleAggregateFilter>;
};


export type IssueBriefingsArgs = {
  filter?: BriefingFilter;
  paging?: CursorPaging;
  sorting?: Array<BriefingSort>;
};


export type IssueBriefingsAggregateArgs = {
  filter?: InputMaybe<BriefingAggregateFilter>;
};

export type IssueActionsAggregateGroupBy = {
  __typename?: 'IssueActionsAggregateGroupBy';
  actionStatus?: Maybe<ActionStatus>;
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  inActive?: Maybe<Scalars['Boolean']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  ongoing?: Maybe<Scalars['Boolean']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type IssueActionsAggregateResponse = {
  __typename?: 'IssueActionsAggregateResponse';
  avg?: Maybe<IssueActionsAvgAggregate>;
  count?: Maybe<IssueActionsCountAggregate>;
  groupBy?: Maybe<IssueActionsAggregateGroupBy>;
  max?: Maybe<IssueActionsMaxAggregate>;
  min?: Maybe<IssueActionsMinAggregate>;
  sum?: Maybe<IssueActionsSumAggregate>;
};

export type IssueActionsAvgAggregate = {
  __typename?: 'IssueActionsAvgAggregate';
  going?: Maybe<Scalars['Float']>;
  interested?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type IssueActionsConnection = {
  __typename?: 'IssueActionsConnection';
  /** Array of edges. */
  edges: Array<ActionEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type IssueActionsCountAggregate = {
  __typename?: 'IssueActionsCountAggregate';
  actionStatus?: Maybe<Scalars['Int']>;
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Int']>;
  going?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  impact?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  interested?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  ongoing?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  tacticId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type IssueActionsMaxAggregate = {
  __typename?: 'IssueActionsMaxAggregate';
  actionStatus?: Maybe<ActionStatus>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type IssueActionsMinAggregate = {
  __typename?: 'IssueActionsMinAggregate';
  actionStatus?: Maybe<ActionStatus>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type IssueActionsSumAggregate = {
  __typename?: 'IssueActionsSumAggregate';
  going?: Maybe<Scalars['Float']>;
  interested?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type IssueAggregateFilter = {
  and?: InputMaybe<Array<IssueAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<IssueAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type IssueAggregateGroupBy = {
  __typename?: 'IssueAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  monitoring?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type IssueAggregateGroupByCreatedArgs = {
  by?: GroupBy;
};


export type IssueAggregateGroupByLastModifiedDateArgs = {
  by?: GroupBy;
};


export type IssueAggregateGroupByRemoteUpdatedArgs = {
  by?: GroupBy;
};


export type IssueAggregateGroupByUpdatedArgs = {
  by?: GroupBy;
};

export type IssueAggregateResponse = {
  __typename?: 'IssueAggregateResponse';
  count?: Maybe<IssueCountAggregate>;
  groupBy?: Maybe<IssueAggregateGroupBy>;
  max?: Maybe<IssueMaxAggregate>;
  min?: Maybe<IssueMinAggregate>;
};

export type IssueArticlesAggregateGroupBy = {
  __typename?: 'IssueArticlesAggregateGroupBy';
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type IssueArticlesAggregateResponse = {
  __typename?: 'IssueArticlesAggregateResponse';
  count?: Maybe<IssueArticlesCountAggregate>;
  groupBy?: Maybe<IssueArticlesAggregateGroupBy>;
  max?: Maybe<IssueArticlesMaxAggregate>;
  min?: Maybe<IssueArticlesMinAggregate>;
};

export type IssueArticlesConnection = {
  __typename?: 'IssueArticlesConnection';
  /** Array of edges. */
  edges: Array<ArticleEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type IssueArticlesCountAggregate = {
  __typename?: 'IssueArticlesCountAggregate';
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  highlightUntilDate?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type IssueArticlesMaxAggregate = {
  __typename?: 'IssueArticlesMaxAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type IssueArticlesMinAggregate = {
  __typename?: 'IssueArticlesMinAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type IssueBriefingsAggregateGroupBy = {
  __typename?: 'IssueBriefingsAggregateGroupBy';
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  restricted?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type IssueBriefingsAggregateResponse = {
  __typename?: 'IssueBriefingsAggregateResponse';
  count?: Maybe<IssueBriefingsCountAggregate>;
  groupBy?: Maybe<IssueBriefingsAggregateGroupBy>;
  max?: Maybe<IssueBriefingsMaxAggregate>;
  min?: Maybe<IssueBriefingsMinAggregate>;
};

export type IssueBriefingsConnection = {
  __typename?: 'IssueBriefingsConnection';
  /** Array of edges. */
  edges: Array<BriefingEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type IssueBriefingsCountAggregate = {
  __typename?: 'IssueBriefingsCountAggregate';
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  restricted?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type IssueBriefingsMaxAggregate = {
  __typename?: 'IssueBriefingsMaxAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type IssueBriefingsMinAggregate = {
  __typename?: 'IssueBriefingsMinAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type IssueConnection = {
  __typename?: 'IssueConnection';
  /** Array of edges. */
  edges: Array<IssueEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type IssueCountAggregate = {
  __typename?: 'IssueCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  monitoring?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type IssueDeleteFilter = {
  and?: InputMaybe<Array<IssueDeleteFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<IssueDeleteFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type IssueDeleteResponse = {
  __typename?: 'IssueDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  hashtags?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  monitoring?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  stage?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type IssueEdge = {
  __typename?: 'IssueEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Issue */
  node: Issue;
};

export type IssueFilter = {
  and?: InputMaybe<Array<IssueFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<IssueFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type IssueMaxAggregate = {
  __typename?: 'IssueMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type IssueMinAggregate = {
  __typename?: 'IssueMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type IssueSort = {
  direction: SortDirection;
  field: IssueSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum IssueSortFields {
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LastModifiedDate = 'lastModifiedDate',
  LockedBy = 'lockedBy',
  Monitoring = 'monitoring',
  Name = 'name',
  RemoteUpdated = 'remoteUpdated',
  Status = 'status',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type IssueUpdateFilter = {
  and?: InputMaybe<Array<IssueUpdateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<IssueUpdateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type JsonObjectFilterComparison = {
  eq?: InputMaybe<Scalars['JSONObject']>;
  gt?: InputMaybe<Scalars['JSONObject']>;
  gte?: InputMaybe<Scalars['JSONObject']>;
  iLike?: InputMaybe<Scalars['JSONObject']>;
  in?: InputMaybe<Array<Scalars['JSONObject']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSONObject']>;
  lt?: InputMaybe<Scalars['JSONObject']>;
  lte?: InputMaybe<Scalars['JSONObject']>;
  neq?: InputMaybe<Scalars['JSONObject']>;
  notILike?: InputMaybe<Scalars['JSONObject']>;
  notIn?: InputMaybe<Array<Scalars['JSONObject']>>;
  notLike?: InputMaybe<Scalars['JSONObject']>;
};

export type Location = {
  __typename?: 'Location';
  actions?: Maybe<LocationActionsConnection>;
  actionsAggregate: Array<LocationActionsAggregateResponse>;
  articles?: Maybe<LocationArticlesConnection>;
  articlesAggregate: Array<LocationArticlesAggregateResponse>;
  briefings?: Maybe<LocationBriefingsConnection>;
  briefingsAggregate: Array<LocationBriefingsAggregateResponse>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  events?: Maybe<LocationEventsConnection>;
  eventsAggregate: Array<LocationEventsAggregateResponse>;
  id: Scalars['ID'];
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  metropolitanArea?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type LocationActionsArgs = {
  filter?: ActionFilter;
  paging?: CursorPaging;
  sorting?: Array<ActionSort>;
};


export type LocationActionsAggregateArgs = {
  filter?: InputMaybe<ActionAggregateFilter>;
};


export type LocationArticlesArgs = {
  filter?: ArticleFilter;
  paging?: CursorPaging;
  sorting?: Array<ArticleSort>;
};


export type LocationArticlesAggregateArgs = {
  filter?: InputMaybe<ArticleAggregateFilter>;
};


export type LocationBriefingsArgs = {
  filter?: BriefingFilter;
  paging?: CursorPaging;
  sorting?: Array<BriefingSort>;
};


export type LocationBriefingsAggregateArgs = {
  filter?: InputMaybe<BriefingAggregateFilter>;
};


export type LocationEventsArgs = {
  filter?: EventFilter;
  paging?: CursorPaging;
  sorting?: Array<EventSort>;
};


export type LocationEventsAggregateArgs = {
  filter?: InputMaybe<EventAggregateFilter>;
};

export type LocationActionsAggregateGroupBy = {
  __typename?: 'LocationActionsAggregateGroupBy';
  actionStatus?: Maybe<ActionStatus>;
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  inActive?: Maybe<Scalars['Boolean']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  ongoing?: Maybe<Scalars['Boolean']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type LocationActionsAggregateResponse = {
  __typename?: 'LocationActionsAggregateResponse';
  avg?: Maybe<LocationActionsAvgAggregate>;
  count?: Maybe<LocationActionsCountAggregate>;
  groupBy?: Maybe<LocationActionsAggregateGroupBy>;
  max?: Maybe<LocationActionsMaxAggregate>;
  min?: Maybe<LocationActionsMinAggregate>;
  sum?: Maybe<LocationActionsSumAggregate>;
};

export type LocationActionsAvgAggregate = {
  __typename?: 'LocationActionsAvgAggregate';
  going?: Maybe<Scalars['Float']>;
  interested?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type LocationActionsConnection = {
  __typename?: 'LocationActionsConnection';
  /** Array of edges. */
  edges: Array<ActionEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type LocationActionsCountAggregate = {
  __typename?: 'LocationActionsCountAggregate';
  actionStatus?: Maybe<Scalars['Int']>;
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Int']>;
  going?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  impact?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  interested?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  ongoing?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  tacticId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type LocationActionsMaxAggregate = {
  __typename?: 'LocationActionsMaxAggregate';
  actionStatus?: Maybe<ActionStatus>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type LocationActionsMinAggregate = {
  __typename?: 'LocationActionsMinAggregate';
  actionStatus?: Maybe<ActionStatus>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type LocationActionsSumAggregate = {
  __typename?: 'LocationActionsSumAggregate';
  going?: Maybe<Scalars['Float']>;
  interested?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type LocationAggregateFilter = {
  and?: InputMaybe<Array<LocationAggregateFilter>>;
  city?: InputMaybe<StringFieldComparison>;
  country?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  metropolitanArea?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<LocationAggregateFilter>>;
  province?: InputMaybe<StringFieldComparison>;
  region?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type LocationAggregateGroupBy = {
  __typename?: 'LocationAggregateGroupBy';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  metropolitanArea?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type LocationAggregateGroupByCreatedArgs = {
  by?: GroupBy;
};


export type LocationAggregateGroupByUpdatedArgs = {
  by?: GroupBy;
};

export type LocationAggregateResponse = {
  __typename?: 'LocationAggregateResponse';
  count?: Maybe<LocationCountAggregate>;
  groupBy?: Maybe<LocationAggregateGroupBy>;
  max?: Maybe<LocationMaxAggregate>;
  min?: Maybe<LocationMinAggregate>;
};

export type LocationArticlesAggregateGroupBy = {
  __typename?: 'LocationArticlesAggregateGroupBy';
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type LocationArticlesAggregateResponse = {
  __typename?: 'LocationArticlesAggregateResponse';
  count?: Maybe<LocationArticlesCountAggregate>;
  groupBy?: Maybe<LocationArticlesAggregateGroupBy>;
  max?: Maybe<LocationArticlesMaxAggregate>;
  min?: Maybe<LocationArticlesMinAggregate>;
};

export type LocationArticlesConnection = {
  __typename?: 'LocationArticlesConnection';
  /** Array of edges. */
  edges: Array<ArticleEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type LocationArticlesCountAggregate = {
  __typename?: 'LocationArticlesCountAggregate';
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  highlightUntilDate?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type LocationArticlesMaxAggregate = {
  __typename?: 'LocationArticlesMaxAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type LocationArticlesMinAggregate = {
  __typename?: 'LocationArticlesMinAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type LocationBriefingsAggregateGroupBy = {
  __typename?: 'LocationBriefingsAggregateGroupBy';
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  restricted?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type LocationBriefingsAggregateResponse = {
  __typename?: 'LocationBriefingsAggregateResponse';
  count?: Maybe<LocationBriefingsCountAggregate>;
  groupBy?: Maybe<LocationBriefingsAggregateGroupBy>;
  max?: Maybe<LocationBriefingsMaxAggregate>;
  min?: Maybe<LocationBriefingsMinAggregate>;
};

export type LocationBriefingsConnection = {
  __typename?: 'LocationBriefingsConnection';
  /** Array of edges. */
  edges: Array<BriefingEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type LocationBriefingsCountAggregate = {
  __typename?: 'LocationBriefingsCountAggregate';
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  restricted?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type LocationBriefingsMaxAggregate = {
  __typename?: 'LocationBriefingsMaxAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type LocationBriefingsMinAggregate = {
  __typename?: 'LocationBriefingsMinAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type LocationConnection = {
  __typename?: 'LocationConnection';
  /** Array of edges. */
  edges: Array<LocationEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type LocationCountAggregate = {
  __typename?: 'LocationCountAggregate';
  city?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  metropolitanArea?: Maybe<Scalars['Int']>;
  province?: Maybe<Scalars['Int']>;
  region?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type LocationDto = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  metropolitanArea?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type LocationDeleteResponse = {
  __typename?: 'LocationDeleteResponse';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  metropolitanArea?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type LocationEdge = {
  __typename?: 'LocationEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Location */
  node: Location;
};

export type LocationEventsAggregateGroupBy = {
  __typename?: 'LocationEventsAggregateGroupBy';
  briefingRequired?: Maybe<Scalars['Boolean']>;
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  monitoring?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Boolean']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  risk?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  type?: Maybe<EventType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type LocationEventsAggregateResponse = {
  __typename?: 'LocationEventsAggregateResponse';
  avg?: Maybe<LocationEventsAvgAggregate>;
  count?: Maybe<LocationEventsCountAggregate>;
  groupBy?: Maybe<LocationEventsAggregateGroupBy>;
  max?: Maybe<LocationEventsMaxAggregate>;
  min?: Maybe<LocationEventsMinAggregate>;
  sum?: Maybe<LocationEventsSumAggregate>;
};

export type LocationEventsAvgAggregate = {
  __typename?: 'LocationEventsAvgAggregate';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type LocationEventsConnection = {
  __typename?: 'LocationEventsConnection';
  /** Array of edges. */
  edges: Array<EventEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type LocationEventsCountAggregate = {
  __typename?: 'LocationEventsCountAggregate';
  briefingRequired?: Maybe<Scalars['Int']>;
  companyId?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  monitoring?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  private?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  risk?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type LocationEventsMaxAggregate = {
  __typename?: 'LocationEventsMaxAggregate';
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  risk?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  type?: Maybe<EventType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type LocationEventsMinAggregate = {
  __typename?: 'LocationEventsMinAggregate';
  companyId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  risk?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PostStatus>;
  type?: Maybe<EventType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type LocationEventsSumAggregate = {
  __typename?: 'LocationEventsSumAggregate';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type LocationFilter = {
  and?: InputMaybe<Array<LocationFilter>>;
  city?: InputMaybe<StringFieldComparison>;
  country?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  metropolitanArea?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<LocationFilter>>;
  province?: InputMaybe<StringFieldComparison>;
  region?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type LocationMaxAggregate = {
  __typename?: 'LocationMaxAggregate';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  metropolitanArea?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type LocationMinAggregate = {
  __typename?: 'LocationMinAggregate';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  metropolitanArea?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type LocationSort = {
  direction: SortDirection;
  field: LocationSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum LocationSortFields {
  City = 'city',
  Country = 'country',
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LockedBy = 'lockedBy',
  MetropolitanArea = 'metropolitanArea',
  Province = 'province',
  Region = 'region',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type MergeIdsInput = {
  idsToRemove: Array<Scalars['String']>;
  reassignedTo: Scalars['String'];
  relationshipName: CleanUpRelationshipType;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAcksToClientNotification: ClientNotification;
  addActionsOfInterestToCompany: Company;
  addActionsToCampaign: Campaign;
  addActionsToCompany: Company;
  addActionsToEvent: Event;
  addActionsToGroup: Group;
  addActionsToIssue: Issue;
  addActionsToLocation: Location;
  addActionsToProminentIndividual: ProminentIndividual;
  addActionsToSector: Sector;
  addActionsToTactic: Tactic;
  addAdvisoriesToTravelRiskCountry: TravelRiskCountry;
  addArticlesOfInterestToCompany: Company;
  addArticlesToCampaign: Campaign;
  addArticlesToCompany: Company;
  addArticlesToEvent: Event;
  addArticlesToGroup: Group;
  addArticlesToIssue: Issue;
  addArticlesToLocation: Location;
  addArticlesToProminentIndividual: ProminentIndividual;
  addArticlesToSector: Sector;
  addAttachmentsToAnnualSubscription: AnnualSubscription;
  addBriefingsToCampaign: Campaign;
  addBriefingsToCompany: Company;
  addBriefingsToEvent: Event;
  addBriefingsToGroup: Group;
  addBriefingsToIssue: Issue;
  addBriefingsToLocation: Location;
  addBriefingsToSector: Sector;
  addCampaignsToAction: Action;
  addCampaignsToArticle: Article;
  addCampaignsToBriefing: Briefing;
  addCampaignsToResource: Resource;
  addCompaniesToAction: Action;
  addCompaniesToArticle: Article;
  addCompaniesToBriefing: Briefing;
  addCompaniesToClientNotification: ClientNotification;
  addCompaniesToResource: Resource;
  addCompaniesToSector: Sector;
  addContactsToCompany: Company;
  addEventsToAction: Action;
  addEventsToArticle: Article;
  addEventsToBriefing: Briefing;
  addEventsToLocation: Location;
  addGroupsToAction: Action;
  addGroupsToArticle: Article;
  addGroupsToBriefing: Briefing;
  addGroupsToResource: Resource;
  addIntegrationsToCompany: Company;
  addIssuesToAction: Action;
  addIssuesToArticle: Article;
  addIssuesToBriefing: Briefing;
  addIssuesToResource: Resource;
  addLocationsToCompany: Company;
  addOfInterestToToAction: Action;
  addOfInterestToToArticle: Article;
  addProminentIndividualsToAction: Action;
  addProminentIndividualsToArticle: Article;
  addRelatedActionsToArticle: Article;
  addRelatedArticlesToArticle: Article;
  addSectorsToAction: Action;
  addSectorsToArticle: Article;
  addSectorsToBriefing: Briefing;
  addSectorsToCompany: Company;
  addSectorsToEvent: Event;
  addSectorsToResource: Resource;
  addSubGroupsToGroup: Group;
  addSubscriptionsToCompany: Company;
  addTacticsToResource: Resource;
  createAccount: Scalars['Boolean'];
  createManyActivityLogs: Array<ActivityLog>;
  createManyAdUsers: Array<AdUser>;
  createManyAudiences: Array<Audience>;
  createManyCampaigns: Array<Campaign>;
  createManyClientNotificationAck: Array<ClientNotificationAck>;
  createManyIntegrationTxLogs: Array<IntegrationTxLog>;
  createManyIssues: Array<Issue>;
  createManyPortalExternalShares: Array<PortalExternalShare>;
  createManyPortals: Array<Portal>;
  createManyProminentIndividuals: Array<ProminentIndividual>;
  createManyProtestBacklogs: Array<ProtestBacklog>;
  createManySectors: Array<Sector>;
  createManyServiceRequests: Array<ServiceRequest>;
  createManyTactics: Array<Tactic>;
  createManyTerms: Array<Term>;
  createManyTravelRiskAdvisories: Array<TravelRiskAdvisory>;
  createManyTravelRiskCountries: Array<TravelRiskCountry>;
  createOneActivityLog: ActivityLog;
  createOneAdUser: AdUser;
  createOneAnnualSubscription: AnnualSubscription;
  createOneAudience: Audience;
  createOneCampaign: Campaign;
  createOneClientNotification: ClientNotification;
  createOneClientNotificationAck: ClientNotificationAck;
  createOneCompany: Company;
  createOneCompanyContact: CompanyContact;
  createOneCompanyIntegration: CompanyIntegration;
  createOneCompanyLocation: CompanyLocation;
  createOneEvent: Event;
  createOneGroup: Group;
  createOneIntegrationTxLog: IntegrationTxLog;
  createOneIssue: Issue;
  createOneLocation: Location;
  createOnePortal: Portal;
  createOnePortalExternalShare: PortalExternalShare;
  createOneProminentIndividual: ProminentIndividual;
  createOneProtestBacklog: ProtestBacklog;
  createOneRole: Role;
  createOneSector: Sector;
  createOneServiceRequest: ServiceRequest;
  createOneTactic: Tactic;
  createOneTerm: Term;
  createOneTravelRiskAdvisory: TravelRiskAdvisory;
  createOneTravelRiskCountry: TravelRiskCountry;
  deleteAccount: Scalars['Boolean'];
  deleteManyActivityLogs: DeleteManyResponse;
  deleteManyAdUsers: DeleteManyResponse;
  deleteManyAudiences: DeleteManyResponse;
  deleteManyCampaigns: DeleteManyResponse;
  deleteManyIntegrationTxLogs: DeleteManyResponse;
  deleteManyIssues: DeleteManyResponse;
  deleteManyPortalExternalShares: DeleteManyResponse;
  deleteManyPortals: DeleteManyResponse;
  deleteManyProminentIndividuals: DeleteManyResponse;
  deleteManySectors: DeleteManyResponse;
  deleteManyServiceRequests: DeleteManyResponse;
  deleteManyTactics: DeleteManyResponse;
  deleteManyTerms: DeleteManyResponse;
  deleteManyTravelRiskAdvisories: DeleteManyResponse;
  deleteManyTravelRiskCountries: DeleteManyResponse;
  deleteOneAction: ActionDeleteResponse;
  deleteOneActivityLog: ActivityLogDeleteResponse;
  deleteOneAdUser: AdUserDeleteResponse;
  deleteOneAnnualSubscription: AnnualSubscriptionDeleteResponse;
  deleteOneArticle: ArticleDeleteResponse;
  deleteOneAttachment: AttachmentDeleteResponse;
  deleteOneAudience: AudienceDeleteResponse;
  deleteOneBriefing: BriefingDeleteResponse;
  deleteOneCampaign: CampaignDeleteResponse;
  deleteOneClientNotification: ClientNotificationDeleteResponse;
  deleteOneClientNotificationAck: ClientNotificationAckDeleteResponse;
  deleteOneCompany: CompanyDeleteResponse;
  deleteOneCompanyContact: CompanyContactDeleteResponse;
  deleteOneCompanyIntegration: CompanyIntegrationDeleteResponse;
  deleteOneCompanyLocation: CompanyLocationDeleteResponse;
  deleteOneEvent: EventDeleteResponse;
  deleteOneGroup: GroupDeleteResponse;
  deleteOneIntegrationTxLog: IntegrationTxLogDeleteResponse;
  deleteOneIssue: IssueDeleteResponse;
  deleteOneLocation: LocationDeleteResponse;
  deleteOnePortal: PortalDeleteResponse;
  deleteOnePortalExternalShare: PortalExternalShareDeleteResponse;
  deleteOneProminentIndividual: ProminentIndividualDeleteResponse;
  deleteOneProtestBacklog: ProtestBacklogDeleteResponse;
  deleteOneResource: ResourceDeleteResponse;
  deleteOneRole: RoleDeleteResponse;
  deleteOneSector: SectorDeleteResponse;
  deleteOneServiceRequest: ServiceRequestDeleteResponse;
  deleteOneTactic: TacticDeleteResponse;
  deleteOneTerm: TermDeleteResponse;
  deleteOneTravelRiskAdvisory: TravelRiskAdvisoryDeleteResponse;
  deleteOneTravelRiskCountry: TravelRiskCountryDeleteResponse;
  lockAction: Action;
  lockArticle: Article;
  lockBriefing: Briefing;
  mergeReferences: Scalars['String'];
  mergeReferencesById: Scalars['String'];
  removeAcksFromClientNotification: ClientNotification;
  removeActionsFromCampaign: Campaign;
  removeActionsFromCompany: Company;
  removeActionsFromEvent: Event;
  removeActionsFromGroup: Group;
  removeActionsFromIssue: Issue;
  removeActionsFromLocation: Location;
  removeActionsFromProminentIndividual: ProminentIndividual;
  removeActionsFromSector: Sector;
  removeActionsFromTactic: Tactic;
  removeActionsOfInterestsFromCompany: Company;
  removeAdvisoriesFromTravelRiskCountry: TravelRiskCountry;
  removeArticlesFromCampaign: Campaign;
  removeArticlesFromCompany: Company;
  removeArticlesFromEvent: Event;
  removeArticlesFromGroup: Group;
  removeArticlesFromIssue: Issue;
  removeArticlesFromLocation: Location;
  removeArticlesFromProminentIndividual: ProminentIndividual;
  removeArticlesFromSector: Sector;
  removeArticlesOfInterestsFromCompany: Company;
  removeAttachmentsFromAnnualSubscription: AnnualSubscription;
  removeBriefingsFromCampaign: Campaign;
  removeBriefingsFromCompany: Company;
  removeBriefingsFromEvent: Event;
  removeBriefingsFromGroup: Group;
  removeBriefingsFromIssue: Issue;
  removeBriefingsFromLocation: Location;
  removeBriefingsFromSector: Sector;
  removeCampaignsFromAction: Action;
  removeCampaignsFromArticle: Article;
  removeCampaignsFromBriefing: Briefing;
  removeCampaignsFromResource: Resource;
  removeClientFromAnnualSubscription: AnnualSubscription;
  removeClientFromCompanyIntegration: CompanyIntegration;
  removeClientFromCompanyLocation: CompanyLocation;
  removeClientFromServiceRequest: ServiceRequest;
  removeCompaniesFromAction: Action;
  removeCompaniesFromArticle: Article;
  removeCompaniesFromBriefing: Briefing;
  removeCompaniesFromClientNotification: ClientNotification;
  removeCompaniesFromResource: Resource;
  removeCompaniesFromSector: Sector;
  removeCompanyFromCompanyContact: CompanyContact;
  removeCompanyFromEvent: Event;
  removeContactFromAnnualSubscription: AnnualSubscription;
  removeContactsFromCompany: Company;
  removeEventsFromAction: Action;
  removeEventsFromArticle: Article;
  removeEventsFromBriefing: Briefing;
  removeEventsFromLocation: Location;
  removeGroupsFromAction: Action;
  removeGroupsFromArticle: Article;
  removeGroupsFromBriefing: Briefing;
  removeGroupsFromResource: Resource;
  removeIntegrationsFromCompany: Company;
  removeIssuesFromAction: Action;
  removeIssuesFromArticle: Article;
  removeIssuesFromBriefing: Briefing;
  removeIssuesFromResource: Resource;
  removeLocationFromAction: Action;
  removeLocationFromArticle: Article;
  removeLocationFromBriefing: Briefing;
  removeLocationFromEvent: Event;
  removeLocationsFromCompany: Company;
  removeOfInterestTosFromAction: Action;
  removeOfInterestTosFromArticle: Article;
  removeParentGroupFromGroup: Group;
  removeProminentIndividualsFromAction: Action;
  removeProminentIndividualsFromArticle: Article;
  removeRelatedActionsFromArticle: Article;
  removeRelatedArticlesFromArticle: Article;
  removeSectorsFromAction: Action;
  removeSectorsFromArticle: Article;
  removeSectorsFromBriefing: Briefing;
  removeSectorsFromCompany: Company;
  removeSectorsFromEvent: Event;
  removeSectorsFromResource: Resource;
  removeSubGroupsFromGroup: Group;
  removeSubscriptionsFromCompany: Company;
  removeTacticFromAction: Action;
  removeTacticsFromResource: Resource;
  removeTravelRiskCountryFromTravelRiskAdvisory: TravelRiskAdvisory;
  requestAccessCode: RequestAccessCodeResposeEnum;
  setAcksOnClientNotification: ClientNotification;
  setActionsOfInterestOnCompany: Company;
  setActionsOnCampaign: Campaign;
  setActionsOnCompany: Company;
  setActionsOnEvent: Event;
  setActionsOnGroup: Group;
  setActionsOnIssue: Issue;
  setActionsOnLocation: Location;
  setActionsOnProminentIndividual: ProminentIndividual;
  setActionsOnSector: Sector;
  setActionsOnTactic: Tactic;
  setAdvisoriesOnTravelRiskCountry: TravelRiskCountry;
  setAnnualSubscriptionOnAttachment: Attachment;
  setArticlesOfInterestOnCompany: Company;
  setArticlesOnCampaign: Campaign;
  setArticlesOnCompany: Company;
  setArticlesOnEvent: Event;
  setArticlesOnGroup: Group;
  setArticlesOnIssue: Issue;
  setArticlesOnLocation: Location;
  setArticlesOnProminentIndividual: ProminentIndividual;
  setArticlesOnSector: Sector;
  setAttachmentsOnAnnualSubscription: AnnualSubscription;
  setBriefingsOnCampaign: Campaign;
  setBriefingsOnCompany: Company;
  setBriefingsOnEvent: Event;
  setBriefingsOnGroup: Group;
  setBriefingsOnIssue: Issue;
  setBriefingsOnLocation: Location;
  setBriefingsOnSector: Sector;
  setCampaignsOnAction: Action;
  setCampaignsOnArticle: Article;
  setCampaignsOnBriefing: Briefing;
  setCampaignsOnResource: Resource;
  setClientNotificationOnClientNotificationAck: ClientNotificationAck;
  setClientOnAnnualSubscription: AnnualSubscription;
  setClientOnCompanyIntegration: CompanyIntegration;
  setClientOnCompanyLocation: CompanyLocation;
  setClientOnServiceRequest: ServiceRequest;
  setCompaniesOnAction: Action;
  setCompaniesOnArticle: Article;
  setCompaniesOnBriefing: Briefing;
  setCompaniesOnClientNotification: ClientNotification;
  setCompaniesOnResource: Resource;
  setCompaniesOnSector: Sector;
  setCompanyOnCompanyContact: CompanyContact;
  setCompanyOnEvent: Event;
  setContactOnAnnualSubscription: AnnualSubscription;
  setContactsOnCompany: Company;
  setEventsOnAction: Action;
  setEventsOnArticle: Article;
  setEventsOnBriefing: Briefing;
  setEventsOnLocation: Location;
  setGroupsOnAction: Action;
  setGroupsOnArticle: Article;
  setGroupsOnBriefing: Briefing;
  setGroupsOnResource: Resource;
  setIntegrationsOnCompany: Company;
  setIssuesOnAction: Action;
  setIssuesOnArticle: Article;
  setIssuesOnBriefing: Briefing;
  setIssuesOnResource: Resource;
  setLocationOnAction: Action;
  setLocationOnArticle: Article;
  setLocationOnBriefing: Briefing;
  setLocationOnEvent: Event;
  setLocationsOnCompany: Company;
  setOfInterestToOnAction: Action;
  setOfInterestToOnArticle: Article;
  setParentGroupOnGroup: Group;
  setPortalPreferencesOnAdUser: AdUser;
  setPortalPreferencesOnCompanyContact: CompanyContact;
  setProminentIndividualsOnAction: Action;
  setProminentIndividualsOnArticle: Article;
  setRelatedActionsOnArticle: Article;
  setRelatedArticlesOnArticle: Article;
  setSectorsOnAction: Action;
  setSectorsOnArticle: Article;
  setSectorsOnBriefing: Briefing;
  setSectorsOnCompany: Company;
  setSectorsOnEvent: Event;
  setSectorsOnResource: Resource;
  setSubGroupsOnGroup: Group;
  setSubscriptionsOnCompany: Company;
  setTacticOnAction: Action;
  setTacticsOnResource: Resource;
  setTravelRiskCountryOnTravelRiskAdvisory: TravelRiskAdvisory;
  unlockAction: Action;
  unlockArticle: Article;
  unlockBriefing: Briefing;
  updateManyActivityLogs: UpdateManyResponse;
  updateManyAdUsers: UpdateManyResponse;
  updateManyAudiences: UpdateManyResponse;
  updateManyCampaigns: UpdateManyResponse;
  updateManyIntegrationTxLogs: UpdateManyResponse;
  updateManyIssues: UpdateManyResponse;
  updateManyPortalExternalShares: UpdateManyResponse;
  updateManyPortals: UpdateManyResponse;
  updateManyProminentIndividuals: UpdateManyResponse;
  updateManyProtestBacklogs: UpdateManyResponse;
  updateManySectors: UpdateManyResponse;
  updateManyServiceRequests: UpdateManyResponse;
  updateManyTactics: UpdateManyResponse;
  updateManyTerms: UpdateManyResponse;
  updateManyTravelRiskAdvisories: UpdateManyResponse;
  updateManyTravelRiskCountries: UpdateManyResponse;
  updateOneActivityLog: ActivityLog;
  updateOneAdUser: AdUser;
  updateOneAnnualSubscription: AnnualSubscription;
  updateOneAttachment: Attachment;
  updateOneAudience: Audience;
  updateOneCampaign: Campaign;
  updateOneClientNotification: ClientNotification;
  updateOneCompany: Company;
  updateOneCompanyContact: CompanyContact;
  updateOneCompanyIntegration: CompanyIntegration;
  updateOneCompanyLocation: CompanyLocation;
  updateOneEvent: Event;
  updateOneGroup: Group;
  updateOneIntegrationTxLog: IntegrationTxLog;
  updateOneIssue: Issue;
  updateOneLocation: Location;
  updateOnePortal: Portal;
  updateOnePortalExternalShare: PortalExternalShare;
  updateOneProminentIndividual: ProminentIndividual;
  updateOneProtestBacklog: ProtestBacklog;
  updateOneResource: Resource;
  updateOneRole: Role;
  updateOneSector: Sector;
  updateOneServiceRequest: ServiceRequest;
  updateOneTactic: Tactic;
  updateOneTerm: Term;
  updateOneTravelRiskAdvisory: TravelRiskAdvisory;
  updateOneTravelRiskCountry: TravelRiskCountry;
  upsertActions: ActionsBatchResult;
  upsertArticles: ArticlesBatchResult;
  upsertBriefings: BriefingsBatchResult;
  upsertCompanyLocations: CompanyLocationsBatchResult;
  upsertPortalPreferences: PortalPreference;
};


export type MutationAddAcksToClientNotificationArgs = {
  input: AddAcksToClientNotificationInput;
};


export type MutationAddActionsOfInterestToCompanyArgs = {
  input: AddActionsOfInterestToCompanyInput;
};


export type MutationAddActionsToCampaignArgs = {
  input: AddActionsToCampaignInput;
};


export type MutationAddActionsToCompanyArgs = {
  input: AddActionsToCompanyInput;
};


export type MutationAddActionsToEventArgs = {
  input: AddActionsToEventInput;
};


export type MutationAddActionsToGroupArgs = {
  input: AddActionsToGroupInput;
};


export type MutationAddActionsToIssueArgs = {
  input: AddActionsToIssueInput;
};


export type MutationAddActionsToLocationArgs = {
  input: AddActionsToLocationInput;
};


export type MutationAddActionsToProminentIndividualArgs = {
  input: AddActionsToProminentIndividualInput;
};


export type MutationAddActionsToSectorArgs = {
  input: AddActionsToSectorInput;
};


export type MutationAddActionsToTacticArgs = {
  input: AddActionsToTacticInput;
};


export type MutationAddAdvisoriesToTravelRiskCountryArgs = {
  input: AddAdvisoriesToTravelRiskCountryInput;
};


export type MutationAddArticlesOfInterestToCompanyArgs = {
  input: AddArticlesOfInterestToCompanyInput;
};


export type MutationAddArticlesToCampaignArgs = {
  input: AddArticlesToCampaignInput;
};


export type MutationAddArticlesToCompanyArgs = {
  input: AddArticlesToCompanyInput;
};


export type MutationAddArticlesToEventArgs = {
  input: AddArticlesToEventInput;
};


export type MutationAddArticlesToGroupArgs = {
  input: AddArticlesToGroupInput;
};


export type MutationAddArticlesToIssueArgs = {
  input: AddArticlesToIssueInput;
};


export type MutationAddArticlesToLocationArgs = {
  input: AddArticlesToLocationInput;
};


export type MutationAddArticlesToProminentIndividualArgs = {
  input: AddArticlesToProminentIndividualInput;
};


export type MutationAddArticlesToSectorArgs = {
  input: AddArticlesToSectorInput;
};


export type MutationAddAttachmentsToAnnualSubscriptionArgs = {
  input: AddAttachmentsToAnnualSubscriptionInput;
};


export type MutationAddBriefingsToCampaignArgs = {
  input: AddBriefingsToCampaignInput;
};


export type MutationAddBriefingsToCompanyArgs = {
  input: AddBriefingsToCompanyInput;
};


export type MutationAddBriefingsToEventArgs = {
  input: AddBriefingsToEventInput;
};


export type MutationAddBriefingsToGroupArgs = {
  input: AddBriefingsToGroupInput;
};


export type MutationAddBriefingsToIssueArgs = {
  input: AddBriefingsToIssueInput;
};


export type MutationAddBriefingsToLocationArgs = {
  input: AddBriefingsToLocationInput;
};


export type MutationAddBriefingsToSectorArgs = {
  input: AddBriefingsToSectorInput;
};


export type MutationAddCampaignsToActionArgs = {
  input: AddCampaignsToActionInput;
};


export type MutationAddCampaignsToArticleArgs = {
  input: AddCampaignsToArticleInput;
};


export type MutationAddCampaignsToBriefingArgs = {
  input: AddCampaignsToBriefingInput;
};


export type MutationAddCampaignsToResourceArgs = {
  input: AddCampaignsToResourceInput;
};


export type MutationAddCompaniesToActionArgs = {
  input: AddCompaniesToActionInput;
};


export type MutationAddCompaniesToArticleArgs = {
  input: AddCompaniesToArticleInput;
};


export type MutationAddCompaniesToBriefingArgs = {
  input: AddCompaniesToBriefingInput;
};


export type MutationAddCompaniesToClientNotificationArgs = {
  input: AddCompaniesToClientNotificationInput;
};


export type MutationAddCompaniesToResourceArgs = {
  input: AddCompaniesToResourceInput;
};


export type MutationAddCompaniesToSectorArgs = {
  input: AddCompaniesToSectorInput;
};


export type MutationAddContactsToCompanyArgs = {
  input: AddContactsToCompanyInput;
};


export type MutationAddEventsToActionArgs = {
  input: AddEventsToActionInput;
};


export type MutationAddEventsToArticleArgs = {
  input: AddEventsToArticleInput;
};


export type MutationAddEventsToBriefingArgs = {
  input: AddEventsToBriefingInput;
};


export type MutationAddEventsToLocationArgs = {
  input: AddEventsToLocationInput;
};


export type MutationAddGroupsToActionArgs = {
  input: AddGroupsToActionInput;
};


export type MutationAddGroupsToArticleArgs = {
  input: AddGroupsToArticleInput;
};


export type MutationAddGroupsToBriefingArgs = {
  input: AddGroupsToBriefingInput;
};


export type MutationAddGroupsToResourceArgs = {
  input: AddGroupsToResourceInput;
};


export type MutationAddIntegrationsToCompanyArgs = {
  input: AddIntegrationsToCompanyInput;
};


export type MutationAddIssuesToActionArgs = {
  input: AddIssuesToActionInput;
};


export type MutationAddIssuesToArticleArgs = {
  input: AddIssuesToArticleInput;
};


export type MutationAddIssuesToBriefingArgs = {
  input: AddIssuesToBriefingInput;
};


export type MutationAddIssuesToResourceArgs = {
  input: AddIssuesToResourceInput;
};


export type MutationAddLocationsToCompanyArgs = {
  input: AddLocationsToCompanyInput;
};


export type MutationAddOfInterestToToActionArgs = {
  input: AddOfInterestToToActionInput;
};


export type MutationAddOfInterestToToArticleArgs = {
  input: AddOfInterestToToArticleInput;
};


export type MutationAddProminentIndividualsToActionArgs = {
  input: AddProminentIndividualsToActionInput;
};


export type MutationAddProminentIndividualsToArticleArgs = {
  input: AddProminentIndividualsToArticleInput;
};


export type MutationAddRelatedActionsToArticleArgs = {
  input: AddRelatedActionsToArticleInput;
};


export type MutationAddRelatedArticlesToArticleArgs = {
  input: AddRelatedArticlesToArticleInput;
};


export type MutationAddSectorsToActionArgs = {
  input: AddSectorsToActionInput;
};


export type MutationAddSectorsToArticleArgs = {
  input: AddSectorsToArticleInput;
};


export type MutationAddSectorsToBriefingArgs = {
  input: AddSectorsToBriefingInput;
};


export type MutationAddSectorsToCompanyArgs = {
  input: AddSectorsToCompanyInput;
};


export type MutationAddSectorsToEventArgs = {
  input: AddSectorsToEventInput;
};


export type MutationAddSectorsToResourceArgs = {
  input: AddSectorsToResourceInput;
};


export type MutationAddSubGroupsToGroupArgs = {
  input: AddSubGroupsToGroupInput;
};


export type MutationAddSubscriptionsToCompanyArgs = {
  input: AddSubscriptionsToCompanyInput;
};


export type MutationAddTacticsToResourceArgs = {
  input: AddTacticsToResourceInput;
};


export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};


export type MutationCreateManyActivityLogsArgs = {
  input: CreateManyActivityLogsInput;
};


export type MutationCreateManyAdUsersArgs = {
  input: CreateManyAdUsersInput;
};


export type MutationCreateManyAudiencesArgs = {
  input: CreateManyAudiencesInput;
};


export type MutationCreateManyCampaignsArgs = {
  input: CreateManyCampaignsInput;
};


export type MutationCreateManyClientNotificationAckArgs = {
  input: CreateManyClientNotificationAckInput;
};


export type MutationCreateManyIntegrationTxLogsArgs = {
  input: CreateManyIntegrationTxLogsInput;
};


export type MutationCreateManyIssuesArgs = {
  input: CreateManyIssuesInput;
};


export type MutationCreateManyPortalExternalSharesArgs = {
  input: CreateManyPortalExternalSharesInput;
};


export type MutationCreateManyPortalsArgs = {
  input: CreateManyPortalsInput;
};


export type MutationCreateManyProminentIndividualsArgs = {
  input: CreateManyProminentIndividualsInput;
};


export type MutationCreateManyProtestBacklogsArgs = {
  input: CreateManyProtestBacklogsInput;
};


export type MutationCreateManySectorsArgs = {
  input: CreateManySectorsInput;
};


export type MutationCreateManyServiceRequestsArgs = {
  input: CreateManyServiceRequestsInput;
};


export type MutationCreateManyTacticsArgs = {
  input: CreateManyTacticsInput;
};


export type MutationCreateManyTermsArgs = {
  input: CreateManyTermsInput;
};


export type MutationCreateManyTravelRiskAdvisoriesArgs = {
  input: CreateManyTravelRiskAdvisoriesInput;
};


export type MutationCreateManyTravelRiskCountriesArgs = {
  input: CreateManyTravelRiskCountriesInput;
};


export type MutationCreateOneActivityLogArgs = {
  input: CreateOneActivityLogInput;
};


export type MutationCreateOneAdUserArgs = {
  input: CreateOneAdUserInput;
};


export type MutationCreateOneAnnualSubscriptionArgs = {
  input: CreateOneAnnualSubscriptionInput;
};


export type MutationCreateOneAudienceArgs = {
  input: CreateOneAudienceInput;
};


export type MutationCreateOneCampaignArgs = {
  input: CreateOneCampaignInput;
};


export type MutationCreateOneClientNotificationArgs = {
  input: CreateOneClientNotificationInput;
};


export type MutationCreateOneClientNotificationAckArgs = {
  input: CreateOneClientNotificationAckInput;
};


export type MutationCreateOneCompanyArgs = {
  input: CreateOneCompanyInput;
};


export type MutationCreateOneCompanyContactArgs = {
  input: CreateOneCompanyContactInput;
};


export type MutationCreateOneCompanyIntegrationArgs = {
  input: CreateOneCompanyIntegrationInput;
};


export type MutationCreateOneCompanyLocationArgs = {
  input: CreateOneCompanyLocationInput;
};


export type MutationCreateOneEventArgs = {
  input: CreateOneEventInput;
};


export type MutationCreateOneGroupArgs = {
  input: CreateOneGroupInput;
};


export type MutationCreateOneIntegrationTxLogArgs = {
  input: CreateOneIntegrationTxLogInput;
};


export type MutationCreateOneIssueArgs = {
  input: CreateOneIssueInput;
};


export type MutationCreateOneLocationArgs = {
  input: CreateOneLocationInput;
};


export type MutationCreateOnePortalArgs = {
  input: CreateOnePortalInput;
};


export type MutationCreateOnePortalExternalShareArgs = {
  input: CreateOnePortalExternalShareInput;
};


export type MutationCreateOneProminentIndividualArgs = {
  input: CreateOneProminentIndividualInput;
};


export type MutationCreateOneProtestBacklogArgs = {
  input: CreateOneProtestBacklogInput;
};


export type MutationCreateOneRoleArgs = {
  input: CreateOneRoleInput;
};


export type MutationCreateOneSectorArgs = {
  input: CreateOneSectorInput;
};


export type MutationCreateOneServiceRequestArgs = {
  input: CreateOneServiceRequestInput;
};


export type MutationCreateOneTacticArgs = {
  input: CreateOneTacticInput;
};


export type MutationCreateOneTermArgs = {
  input: CreateOneTermInput;
};


export type MutationCreateOneTravelRiskAdvisoryArgs = {
  input: CreateOneTravelRiskAdvisoryInput;
};


export type MutationCreateOneTravelRiskCountryArgs = {
  input: CreateOneTravelRiskCountryInput;
};


export type MutationDeleteAccountArgs = {
  email: Scalars['String'];
};


export type MutationDeleteManyActivityLogsArgs = {
  input: DeleteManyActivityLogsInput;
};


export type MutationDeleteManyAdUsersArgs = {
  input: DeleteManyAdUsersInput;
};


export type MutationDeleteManyAudiencesArgs = {
  input: DeleteManyAudiencesInput;
};


export type MutationDeleteManyCampaignsArgs = {
  input: DeleteManyCampaignsInput;
};


export type MutationDeleteManyIntegrationTxLogsArgs = {
  input: DeleteManyIntegrationTxLogsInput;
};


export type MutationDeleteManyIssuesArgs = {
  input: DeleteManyIssuesInput;
};


export type MutationDeleteManyPortalExternalSharesArgs = {
  input: DeleteManyPortalExternalSharesInput;
};


export type MutationDeleteManyPortalsArgs = {
  input: DeleteManyPortalsInput;
};


export type MutationDeleteManyProminentIndividualsArgs = {
  input: DeleteManyProminentIndividualsInput;
};


export type MutationDeleteManySectorsArgs = {
  input: DeleteManySectorsInput;
};


export type MutationDeleteManyServiceRequestsArgs = {
  input: DeleteManyServiceRequestsInput;
};


export type MutationDeleteManyTacticsArgs = {
  input: DeleteManyTacticsInput;
};


export type MutationDeleteManyTermsArgs = {
  input: DeleteManyTermsInput;
};


export type MutationDeleteManyTravelRiskAdvisoriesArgs = {
  input: DeleteManyTravelRiskAdvisoriesInput;
};


export type MutationDeleteManyTravelRiskCountriesArgs = {
  input: DeleteManyTravelRiskCountriesInput;
};


export type MutationDeleteOneActionArgs = {
  input: DeleteOneActionInput;
};


export type MutationDeleteOneActivityLogArgs = {
  input: DeleteOneActivityLogInput;
};


export type MutationDeleteOneAdUserArgs = {
  input: DeleteOneAdUserInput;
};


export type MutationDeleteOneAnnualSubscriptionArgs = {
  input: DeleteOneAnnualSubscriptionInput;
};


export type MutationDeleteOneArticleArgs = {
  input: DeleteOneArticleInput;
};


export type MutationDeleteOneAttachmentArgs = {
  input: DeleteOneAttachmentInput;
};


export type MutationDeleteOneAudienceArgs = {
  input: DeleteOneAudienceInput;
};


export type MutationDeleteOneBriefingArgs = {
  input: DeleteOneBriefingInput;
};


export type MutationDeleteOneCampaignArgs = {
  input: DeleteOneCampaignInput;
};


export type MutationDeleteOneClientNotificationArgs = {
  input: DeleteOneClientNotificationInput;
};


export type MutationDeleteOneClientNotificationAckArgs = {
  input: DeleteOneClientNotificationAckInput;
};


export type MutationDeleteOneCompanyArgs = {
  input: DeleteOneCompanyInput;
};


export type MutationDeleteOneCompanyContactArgs = {
  input: DeleteOneCompanyContactInput;
};


export type MutationDeleteOneCompanyIntegrationArgs = {
  input: DeleteOneCompanyIntegrationInput;
};


export type MutationDeleteOneCompanyLocationArgs = {
  input: DeleteOneCompanyLocationInput;
};


export type MutationDeleteOneEventArgs = {
  input: DeleteOneEventInput;
};


export type MutationDeleteOneGroupArgs = {
  input: DeleteOneGroupInput;
};


export type MutationDeleteOneIntegrationTxLogArgs = {
  input: DeleteOneIntegrationTxLogInput;
};


export type MutationDeleteOneIssueArgs = {
  input: DeleteOneIssueInput;
};


export type MutationDeleteOneLocationArgs = {
  input: DeleteOneLocationInput;
};


export type MutationDeleteOnePortalArgs = {
  input: DeleteOnePortalInput;
};


export type MutationDeleteOnePortalExternalShareArgs = {
  input: DeleteOnePortalExternalShareInput;
};


export type MutationDeleteOneProminentIndividualArgs = {
  input: DeleteOneProminentIndividualInput;
};


export type MutationDeleteOneProtestBacklogArgs = {
  input: DeleteOneProtestBacklogInput;
};


export type MutationDeleteOneResourceArgs = {
  input: DeleteOneResourceInput;
};


export type MutationDeleteOneRoleArgs = {
  input: DeleteOneRoleInput;
};


export type MutationDeleteOneSectorArgs = {
  input: DeleteOneSectorInput;
};


export type MutationDeleteOneServiceRequestArgs = {
  input: DeleteOneServiceRequestInput;
};


export type MutationDeleteOneTacticArgs = {
  input: DeleteOneTacticInput;
};


export type MutationDeleteOneTermArgs = {
  input: DeleteOneTermInput;
};


export type MutationDeleteOneTravelRiskAdvisoryArgs = {
  input: DeleteOneTravelRiskAdvisoryInput;
};


export type MutationDeleteOneTravelRiskCountryArgs = {
  input: DeleteOneTravelRiskCountryInput;
};


export type MutationLockActionArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationLockArticleArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationLockBriefingArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationMergeReferencesArgs = {
  input: MergeIdsInput;
};


export type MutationMergeReferencesByIdArgs = {
  idToKeep: Scalars['String'];
  relationshipName: CleanUpRelationshipType;
};


export type MutationRemoveAcksFromClientNotificationArgs = {
  input: RemoveAcksFromClientNotificationInput;
};


export type MutationRemoveActionsFromCampaignArgs = {
  input: RemoveActionsFromCampaignInput;
};


export type MutationRemoveActionsFromCompanyArgs = {
  input: RemoveActionsFromCompanyInput;
};


export type MutationRemoveActionsFromEventArgs = {
  input: RemoveActionsFromEventInput;
};


export type MutationRemoveActionsFromGroupArgs = {
  input: RemoveActionsFromGroupInput;
};


export type MutationRemoveActionsFromIssueArgs = {
  input: RemoveActionsFromIssueInput;
};


export type MutationRemoveActionsFromLocationArgs = {
  input: RemoveActionsFromLocationInput;
};


export type MutationRemoveActionsFromProminentIndividualArgs = {
  input: RemoveActionsFromProminentIndividualInput;
};


export type MutationRemoveActionsFromSectorArgs = {
  input: RemoveActionsFromSectorInput;
};


export type MutationRemoveActionsFromTacticArgs = {
  input: RemoveActionsFromTacticInput;
};


export type MutationRemoveActionsOfInterestsFromCompanyArgs = {
  input: RemoveActionsOfInterestsFromCompanyInput;
};


export type MutationRemoveAdvisoriesFromTravelRiskCountryArgs = {
  input: RemoveAdvisoriesFromTravelRiskCountryInput;
};


export type MutationRemoveArticlesFromCampaignArgs = {
  input: RemoveArticlesFromCampaignInput;
};


export type MutationRemoveArticlesFromCompanyArgs = {
  input: RemoveArticlesFromCompanyInput;
};


export type MutationRemoveArticlesFromEventArgs = {
  input: RemoveArticlesFromEventInput;
};


export type MutationRemoveArticlesFromGroupArgs = {
  input: RemoveArticlesFromGroupInput;
};


export type MutationRemoveArticlesFromIssueArgs = {
  input: RemoveArticlesFromIssueInput;
};


export type MutationRemoveArticlesFromLocationArgs = {
  input: RemoveArticlesFromLocationInput;
};


export type MutationRemoveArticlesFromProminentIndividualArgs = {
  input: RemoveArticlesFromProminentIndividualInput;
};


export type MutationRemoveArticlesFromSectorArgs = {
  input: RemoveArticlesFromSectorInput;
};


export type MutationRemoveArticlesOfInterestsFromCompanyArgs = {
  input: RemoveArticlesOfInterestsFromCompanyInput;
};


export type MutationRemoveAttachmentsFromAnnualSubscriptionArgs = {
  input: RemoveAttachmentsFromAnnualSubscriptionInput;
};


export type MutationRemoveBriefingsFromCampaignArgs = {
  input: RemoveBriefingsFromCampaignInput;
};


export type MutationRemoveBriefingsFromCompanyArgs = {
  input: RemoveBriefingsFromCompanyInput;
};


export type MutationRemoveBriefingsFromEventArgs = {
  input: RemoveBriefingsFromEventInput;
};


export type MutationRemoveBriefingsFromGroupArgs = {
  input: RemoveBriefingsFromGroupInput;
};


export type MutationRemoveBriefingsFromIssueArgs = {
  input: RemoveBriefingsFromIssueInput;
};


export type MutationRemoveBriefingsFromLocationArgs = {
  input: RemoveBriefingsFromLocationInput;
};


export type MutationRemoveBriefingsFromSectorArgs = {
  input: RemoveBriefingsFromSectorInput;
};


export type MutationRemoveCampaignsFromActionArgs = {
  input: RemoveCampaignsFromActionInput;
};


export type MutationRemoveCampaignsFromArticleArgs = {
  input: RemoveCampaignsFromArticleInput;
};


export type MutationRemoveCampaignsFromBriefingArgs = {
  input: RemoveCampaignsFromBriefingInput;
};


export type MutationRemoveCampaignsFromResourceArgs = {
  input: RemoveCampaignsFromResourceInput;
};


export type MutationRemoveClientFromAnnualSubscriptionArgs = {
  input: RemoveClientFromAnnualSubscriptionInput;
};


export type MutationRemoveClientFromCompanyIntegrationArgs = {
  input: RemoveClientFromCompanyIntegrationInput;
};


export type MutationRemoveClientFromCompanyLocationArgs = {
  input: RemoveClientFromCompanyLocationInput;
};


export type MutationRemoveClientFromServiceRequestArgs = {
  input: RemoveClientFromServiceRequestInput;
};


export type MutationRemoveCompaniesFromActionArgs = {
  input: RemoveCompaniesFromActionInput;
};


export type MutationRemoveCompaniesFromArticleArgs = {
  input: RemoveCompaniesFromArticleInput;
};


export type MutationRemoveCompaniesFromBriefingArgs = {
  input: RemoveCompaniesFromBriefingInput;
};


export type MutationRemoveCompaniesFromClientNotificationArgs = {
  input: RemoveCompaniesFromClientNotificationInput;
};


export type MutationRemoveCompaniesFromResourceArgs = {
  input: RemoveCompaniesFromResourceInput;
};


export type MutationRemoveCompaniesFromSectorArgs = {
  input: RemoveCompaniesFromSectorInput;
};


export type MutationRemoveCompanyFromCompanyContactArgs = {
  input: RemoveCompanyFromCompanyContactInput;
};


export type MutationRemoveCompanyFromEventArgs = {
  input: RemoveCompanyFromEventInput;
};


export type MutationRemoveContactFromAnnualSubscriptionArgs = {
  input: RemoveContactFromAnnualSubscriptionInput;
};


export type MutationRemoveContactsFromCompanyArgs = {
  input: RemoveContactsFromCompanyInput;
};


export type MutationRemoveEventsFromActionArgs = {
  input: RemoveEventsFromActionInput;
};


export type MutationRemoveEventsFromArticleArgs = {
  input: RemoveEventsFromArticleInput;
};


export type MutationRemoveEventsFromBriefingArgs = {
  input: RemoveEventsFromBriefingInput;
};


export type MutationRemoveEventsFromLocationArgs = {
  input: RemoveEventsFromLocationInput;
};


export type MutationRemoveGroupsFromActionArgs = {
  input: RemoveGroupsFromActionInput;
};


export type MutationRemoveGroupsFromArticleArgs = {
  input: RemoveGroupsFromArticleInput;
};


export type MutationRemoveGroupsFromBriefingArgs = {
  input: RemoveGroupsFromBriefingInput;
};


export type MutationRemoveGroupsFromResourceArgs = {
  input: RemoveGroupsFromResourceInput;
};


export type MutationRemoveIntegrationsFromCompanyArgs = {
  input: RemoveIntegrationsFromCompanyInput;
};


export type MutationRemoveIssuesFromActionArgs = {
  input: RemoveIssuesFromActionInput;
};


export type MutationRemoveIssuesFromArticleArgs = {
  input: RemoveIssuesFromArticleInput;
};


export type MutationRemoveIssuesFromBriefingArgs = {
  input: RemoveIssuesFromBriefingInput;
};


export type MutationRemoveIssuesFromResourceArgs = {
  input: RemoveIssuesFromResourceInput;
};


export type MutationRemoveLocationFromActionArgs = {
  input: RemoveLocationFromActionInput;
};


export type MutationRemoveLocationFromArticleArgs = {
  input: RemoveLocationFromArticleInput;
};


export type MutationRemoveLocationFromBriefingArgs = {
  input: RemoveLocationFromBriefingInput;
};


export type MutationRemoveLocationFromEventArgs = {
  input: RemoveLocationFromEventInput;
};


export type MutationRemoveLocationsFromCompanyArgs = {
  input: RemoveLocationsFromCompanyInput;
};


export type MutationRemoveOfInterestTosFromActionArgs = {
  input: RemoveOfInterestTosFromActionInput;
};


export type MutationRemoveOfInterestTosFromArticleArgs = {
  input: RemoveOfInterestTosFromArticleInput;
};


export type MutationRemoveParentGroupFromGroupArgs = {
  input: RemoveParentGroupFromGroupInput;
};


export type MutationRemoveProminentIndividualsFromActionArgs = {
  input: RemoveProminentIndividualsFromActionInput;
};


export type MutationRemoveProminentIndividualsFromArticleArgs = {
  input: RemoveProminentIndividualsFromArticleInput;
};


export type MutationRemoveRelatedActionsFromArticleArgs = {
  input: RemoveRelatedActionsFromArticleInput;
};


export type MutationRemoveRelatedArticlesFromArticleArgs = {
  input: RemoveRelatedArticlesFromArticleInput;
};


export type MutationRemoveSectorsFromActionArgs = {
  input: RemoveSectorsFromActionInput;
};


export type MutationRemoveSectorsFromArticleArgs = {
  input: RemoveSectorsFromArticleInput;
};


export type MutationRemoveSectorsFromBriefingArgs = {
  input: RemoveSectorsFromBriefingInput;
};


export type MutationRemoveSectorsFromCompanyArgs = {
  input: RemoveSectorsFromCompanyInput;
};


export type MutationRemoveSectorsFromEventArgs = {
  input: RemoveSectorsFromEventInput;
};


export type MutationRemoveSectorsFromResourceArgs = {
  input: RemoveSectorsFromResourceInput;
};


export type MutationRemoveSubGroupsFromGroupArgs = {
  input: RemoveSubGroupsFromGroupInput;
};


export type MutationRemoveSubscriptionsFromCompanyArgs = {
  input: RemoveSubscriptionsFromCompanyInput;
};


export type MutationRemoveTacticFromActionArgs = {
  input: RemoveTacticFromActionInput;
};


export type MutationRemoveTacticsFromResourceArgs = {
  input: RemoveTacticsFromResourceInput;
};


export type MutationRemoveTravelRiskCountryFromTravelRiskAdvisoryArgs = {
  input: RemoveTravelRiskCountryFromTravelRiskAdvisoryInput;
};


export type MutationRequestAccessCodeArgs = {
  input: RequestAccessCodeInput;
};


export type MutationSetAcksOnClientNotificationArgs = {
  input: SetAcksOnClientNotificationInput;
};


export type MutationSetActionsOfInterestOnCompanyArgs = {
  input: SetActionsOfInterestOnCompanyInput;
};


export type MutationSetActionsOnCampaignArgs = {
  input: SetActionsOnCampaignInput;
};


export type MutationSetActionsOnCompanyArgs = {
  input: SetActionsOnCompanyInput;
};


export type MutationSetActionsOnEventArgs = {
  input: SetActionsOnEventInput;
};


export type MutationSetActionsOnGroupArgs = {
  input: SetActionsOnGroupInput;
};


export type MutationSetActionsOnIssueArgs = {
  input: SetActionsOnIssueInput;
};


export type MutationSetActionsOnLocationArgs = {
  input: SetActionsOnLocationInput;
};


export type MutationSetActionsOnProminentIndividualArgs = {
  input: SetActionsOnProminentIndividualInput;
};


export type MutationSetActionsOnSectorArgs = {
  input: SetActionsOnSectorInput;
};


export type MutationSetActionsOnTacticArgs = {
  input: SetActionsOnTacticInput;
};


export type MutationSetAdvisoriesOnTravelRiskCountryArgs = {
  input: SetAdvisoriesOnTravelRiskCountryInput;
};


export type MutationSetAnnualSubscriptionOnAttachmentArgs = {
  input: SetAnnualSubscriptionOnAttachmentInput;
};


export type MutationSetArticlesOfInterestOnCompanyArgs = {
  input: SetArticlesOfInterestOnCompanyInput;
};


export type MutationSetArticlesOnCampaignArgs = {
  input: SetArticlesOnCampaignInput;
};


export type MutationSetArticlesOnCompanyArgs = {
  input: SetArticlesOnCompanyInput;
};


export type MutationSetArticlesOnEventArgs = {
  input: SetArticlesOnEventInput;
};


export type MutationSetArticlesOnGroupArgs = {
  input: SetArticlesOnGroupInput;
};


export type MutationSetArticlesOnIssueArgs = {
  input: SetArticlesOnIssueInput;
};


export type MutationSetArticlesOnLocationArgs = {
  input: SetArticlesOnLocationInput;
};


export type MutationSetArticlesOnProminentIndividualArgs = {
  input: SetArticlesOnProminentIndividualInput;
};


export type MutationSetArticlesOnSectorArgs = {
  input: SetArticlesOnSectorInput;
};


export type MutationSetAttachmentsOnAnnualSubscriptionArgs = {
  input: SetAttachmentsOnAnnualSubscriptionInput;
};


export type MutationSetBriefingsOnCampaignArgs = {
  input: SetBriefingsOnCampaignInput;
};


export type MutationSetBriefingsOnCompanyArgs = {
  input: SetBriefingsOnCompanyInput;
};


export type MutationSetBriefingsOnEventArgs = {
  input: SetBriefingsOnEventInput;
};


export type MutationSetBriefingsOnGroupArgs = {
  input: SetBriefingsOnGroupInput;
};


export type MutationSetBriefingsOnIssueArgs = {
  input: SetBriefingsOnIssueInput;
};


export type MutationSetBriefingsOnLocationArgs = {
  input: SetBriefingsOnLocationInput;
};


export type MutationSetBriefingsOnSectorArgs = {
  input: SetBriefingsOnSectorInput;
};


export type MutationSetCampaignsOnActionArgs = {
  input: SetCampaignsOnActionInput;
};


export type MutationSetCampaignsOnArticleArgs = {
  input: SetCampaignsOnArticleInput;
};


export type MutationSetCampaignsOnBriefingArgs = {
  input: SetCampaignsOnBriefingInput;
};


export type MutationSetCampaignsOnResourceArgs = {
  input: SetCampaignsOnResourceInput;
};


export type MutationSetClientNotificationOnClientNotificationAckArgs = {
  input: SetClientNotificationOnClientNotificationAckInput;
};


export type MutationSetClientOnAnnualSubscriptionArgs = {
  input: SetClientOnAnnualSubscriptionInput;
};


export type MutationSetClientOnCompanyIntegrationArgs = {
  input: SetClientOnCompanyIntegrationInput;
};


export type MutationSetClientOnCompanyLocationArgs = {
  input: SetClientOnCompanyLocationInput;
};


export type MutationSetClientOnServiceRequestArgs = {
  input: SetClientOnServiceRequestInput;
};


export type MutationSetCompaniesOnActionArgs = {
  input: SetCompaniesOnActionInput;
};


export type MutationSetCompaniesOnArticleArgs = {
  input: SetCompaniesOnArticleInput;
};


export type MutationSetCompaniesOnBriefingArgs = {
  input: SetCompaniesOnBriefingInput;
};


export type MutationSetCompaniesOnClientNotificationArgs = {
  input: SetCompaniesOnClientNotificationInput;
};


export type MutationSetCompaniesOnResourceArgs = {
  input: SetCompaniesOnResourceInput;
};


export type MutationSetCompaniesOnSectorArgs = {
  input: SetCompaniesOnSectorInput;
};


export type MutationSetCompanyOnCompanyContactArgs = {
  input: SetCompanyOnCompanyContactInput;
};


export type MutationSetCompanyOnEventArgs = {
  input: SetCompanyOnEventInput;
};


export type MutationSetContactOnAnnualSubscriptionArgs = {
  input: SetContactOnAnnualSubscriptionInput;
};


export type MutationSetContactsOnCompanyArgs = {
  input: SetContactsOnCompanyInput;
};


export type MutationSetEventsOnActionArgs = {
  input: SetEventsOnActionInput;
};


export type MutationSetEventsOnArticleArgs = {
  input: SetEventsOnArticleInput;
};


export type MutationSetEventsOnBriefingArgs = {
  input: SetEventsOnBriefingInput;
};


export type MutationSetEventsOnLocationArgs = {
  input: SetEventsOnLocationInput;
};


export type MutationSetGroupsOnActionArgs = {
  input: SetGroupsOnActionInput;
};


export type MutationSetGroupsOnArticleArgs = {
  input: SetGroupsOnArticleInput;
};


export type MutationSetGroupsOnBriefingArgs = {
  input: SetGroupsOnBriefingInput;
};


export type MutationSetGroupsOnResourceArgs = {
  input: SetGroupsOnResourceInput;
};


export type MutationSetIntegrationsOnCompanyArgs = {
  input: SetIntegrationsOnCompanyInput;
};


export type MutationSetIssuesOnActionArgs = {
  input: SetIssuesOnActionInput;
};


export type MutationSetIssuesOnArticleArgs = {
  input: SetIssuesOnArticleInput;
};


export type MutationSetIssuesOnBriefingArgs = {
  input: SetIssuesOnBriefingInput;
};


export type MutationSetIssuesOnResourceArgs = {
  input: SetIssuesOnResourceInput;
};


export type MutationSetLocationOnActionArgs = {
  input: SetLocationOnActionInput;
};


export type MutationSetLocationOnArticleArgs = {
  input: SetLocationOnArticleInput;
};


export type MutationSetLocationOnBriefingArgs = {
  input: SetLocationOnBriefingInput;
};


export type MutationSetLocationOnEventArgs = {
  input: SetLocationOnEventInput;
};


export type MutationSetLocationsOnCompanyArgs = {
  input: SetLocationsOnCompanyInput;
};


export type MutationSetOfInterestToOnActionArgs = {
  input: SetOfInterestToOnActionInput;
};


export type MutationSetOfInterestToOnArticleArgs = {
  input: SetOfInterestToOnArticleInput;
};


export type MutationSetParentGroupOnGroupArgs = {
  input: SetParentGroupOnGroupInput;
};


export type MutationSetPortalPreferencesOnAdUserArgs = {
  input: SetPortalPreferencesOnAdUserInput;
};


export type MutationSetPortalPreferencesOnCompanyContactArgs = {
  input: SetPortalPreferencesOnCompanyContactInput;
};


export type MutationSetProminentIndividualsOnActionArgs = {
  input: SetProminentIndividualsOnActionInput;
};


export type MutationSetProminentIndividualsOnArticleArgs = {
  input: SetProminentIndividualsOnArticleInput;
};


export type MutationSetRelatedActionsOnArticleArgs = {
  input: SetRelatedActionsOnArticleInput;
};


export type MutationSetRelatedArticlesOnArticleArgs = {
  input: SetRelatedArticlesOnArticleInput;
};


export type MutationSetSectorsOnActionArgs = {
  input: SetSectorsOnActionInput;
};


export type MutationSetSectorsOnArticleArgs = {
  input: SetSectorsOnArticleInput;
};


export type MutationSetSectorsOnBriefingArgs = {
  input: SetSectorsOnBriefingInput;
};


export type MutationSetSectorsOnCompanyArgs = {
  input: SetSectorsOnCompanyInput;
};


export type MutationSetSectorsOnEventArgs = {
  input: SetSectorsOnEventInput;
};


export type MutationSetSectorsOnResourceArgs = {
  input: SetSectorsOnResourceInput;
};


export type MutationSetSubGroupsOnGroupArgs = {
  input: SetSubGroupsOnGroupInput;
};


export type MutationSetSubscriptionsOnCompanyArgs = {
  input: SetSubscriptionsOnCompanyInput;
};


export type MutationSetTacticOnActionArgs = {
  input: SetTacticOnActionInput;
};


export type MutationSetTacticsOnResourceArgs = {
  input: SetTacticsOnResourceInput;
};


export type MutationSetTravelRiskCountryOnTravelRiskAdvisoryArgs = {
  input: SetTravelRiskCountryOnTravelRiskAdvisoryInput;
};


export type MutationUnlockActionArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUnlockArticleArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUnlockBriefingArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateManyActivityLogsArgs = {
  input: UpdateManyActivityLogsInput;
};


export type MutationUpdateManyAdUsersArgs = {
  input: UpdateManyAdUsersInput;
};


export type MutationUpdateManyAudiencesArgs = {
  input: UpdateManyAudiencesInput;
};


export type MutationUpdateManyCampaignsArgs = {
  input: UpdateManyCampaignsInput;
};


export type MutationUpdateManyIntegrationTxLogsArgs = {
  input: UpdateManyIntegrationTxLogsInput;
};


export type MutationUpdateManyIssuesArgs = {
  input: UpdateManyIssuesInput;
};


export type MutationUpdateManyPortalExternalSharesArgs = {
  input: UpdateManyPortalExternalSharesInput;
};


export type MutationUpdateManyPortalsArgs = {
  input: UpdateManyPortalsInput;
};


export type MutationUpdateManyProminentIndividualsArgs = {
  input: UpdateManyProminentIndividualsInput;
};


export type MutationUpdateManyProtestBacklogsArgs = {
  input: UpdateManyProtestBacklogsInput;
};


export type MutationUpdateManySectorsArgs = {
  input: UpdateManySectorsInput;
};


export type MutationUpdateManyServiceRequestsArgs = {
  input: UpdateManyServiceRequestsInput;
};


export type MutationUpdateManyTacticsArgs = {
  input: UpdateManyTacticsInput;
};


export type MutationUpdateManyTermsArgs = {
  input: UpdateManyTermsInput;
};


export type MutationUpdateManyTravelRiskAdvisoriesArgs = {
  input: UpdateManyTravelRiskAdvisoriesInput;
};


export type MutationUpdateManyTravelRiskCountriesArgs = {
  input: UpdateManyTravelRiskCountriesInput;
};


export type MutationUpdateOneActivityLogArgs = {
  input: UpdateOneActivityLogInput;
};


export type MutationUpdateOneAdUserArgs = {
  input: UpdateOneAdUserInput;
};


export type MutationUpdateOneAnnualSubscriptionArgs = {
  input: UpdateOneAnnualSubscriptionInput;
};


export type MutationUpdateOneAttachmentArgs = {
  input: UpdateOneAttachmentInput;
};


export type MutationUpdateOneAudienceArgs = {
  input: UpdateOneAudienceInput;
};


export type MutationUpdateOneCampaignArgs = {
  input: UpdateOneCampaignInput;
};


export type MutationUpdateOneClientNotificationArgs = {
  input: UpdateOneClientNotificationInput;
};


export type MutationUpdateOneCompanyArgs = {
  input: UpdateOneCompanyInput;
};


export type MutationUpdateOneCompanyContactArgs = {
  input: UpdateOneCompanyContactInput;
};


export type MutationUpdateOneCompanyIntegrationArgs = {
  input: UpdateOneCompanyIntegrationInput;
};


export type MutationUpdateOneCompanyLocationArgs = {
  input: UpdateOneCompanyLocationInput;
};


export type MutationUpdateOneEventArgs = {
  input: UpdateOneEventInput;
};


export type MutationUpdateOneGroupArgs = {
  input: UpdateOneGroupInput;
};


export type MutationUpdateOneIntegrationTxLogArgs = {
  input: UpdateOneIntegrationTxLogInput;
};


export type MutationUpdateOneIssueArgs = {
  input: UpdateOneIssueInput;
};


export type MutationUpdateOneLocationArgs = {
  input: UpdateOneLocationInput;
};


export type MutationUpdateOnePortalArgs = {
  input: UpdateOnePortalInput;
};


export type MutationUpdateOnePortalExternalShareArgs = {
  input: UpdateOnePortalExternalShareInput;
};


export type MutationUpdateOneProminentIndividualArgs = {
  input: UpdateOneProminentIndividualInput;
};


export type MutationUpdateOneProtestBacklogArgs = {
  input: UpdateOneProtestBacklogInput;
};


export type MutationUpdateOneResourceArgs = {
  input: UpdateOneResourceInput;
};


export type MutationUpdateOneRoleArgs = {
  input: UpdateOneRoleInput;
};


export type MutationUpdateOneSectorArgs = {
  input: UpdateOneSectorInput;
};


export type MutationUpdateOneServiceRequestArgs = {
  input: UpdateOneServiceRequestInput;
};


export type MutationUpdateOneTacticArgs = {
  input: UpdateOneTacticInput;
};


export type MutationUpdateOneTermArgs = {
  input: UpdateOneTermInput;
};


export type MutationUpdateOneTravelRiskAdvisoryArgs = {
  input: UpdateOneTravelRiskAdvisoryInput;
};


export type MutationUpdateOneTravelRiskCountryArgs = {
  input: UpdateOneTravelRiskCountryInput;
};


export type MutationUpsertActionsArgs = {
  input: ActionsBatchInput;
};


export type MutationUpsertArticlesArgs = {
  input: ArticlesBatchInput;
};


export type MutationUpsertBriefingsArgs = {
  input: BriefingsBatchInput;
};


export type MutationUpsertCompanyLocationsArgs = {
  input: CompanyLocationsBatchInput;
};


export type MutationUpsertPortalPreferencesArgs = {
  input: PortalPreferenceInput;
};

export type NewDimensionCreatedStatsResult = {
  __typename?: 'NewDimensionCreatedStatsResult';
  created: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type NumberFieldComparison = {
  between?: InputMaybe<NumberFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
  notBetween?: InputMaybe<NumberFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars['Float'];
  upper: Scalars['Float'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars['ConnectionCursor']>;
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars['ConnectionCursor']>;
};

export type Portal = {
  __typename?: 'Portal';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
  welcomeEmailTemplate: Scalars['String'];
};

export type PortalConnection = {
  __typename?: 'PortalConnection';
  /** Array of edges. */
  edges: Array<PortalEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type PortalDeleteFilter = {
  and?: InputMaybe<Array<PortalDeleteFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PortalDeleteFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
  welcomeEmailTemplate?: InputMaybe<StringFieldComparison>;
};

export type PortalDeleteResponse = {
  __typename?: 'PortalDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
  welcomeEmailTemplate?: Maybe<Scalars['String']>;
};

export type PortalEdge = {
  __typename?: 'PortalEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Portal */
  node: Portal;
};

export type PortalExternalShare = {
  __typename?: 'PortalExternalShare';
  allowDownload: Scalars['Boolean'];
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  postId: Scalars['String'];
  postType: PostType;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  shareTo?: Maybe<Array<Scalars['String']>>;
  shareUntil?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type PortalExternalShareConnection = {
  __typename?: 'PortalExternalShareConnection';
  /** Array of edges. */
  edges: Array<PortalExternalShareEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type PortalExternalShareDeleteFilter = {
  and?: InputMaybe<Array<PortalExternalShareDeleteFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PortalExternalShareDeleteFilter>>;
  postId?: InputMaybe<StringFieldComparison>;
  postType?: InputMaybe<PostTypeFilterComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  shareToRaw?: InputMaybe<StringFieldComparison>;
  shareUntil?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type PortalExternalShareDeleteResponse = {
  __typename?: 'PortalExternalShareDeleteResponse';
  allowDownload?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['String']>;
  postType?: Maybe<PostType>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  shareTo?: Maybe<Array<Scalars['String']>>;
  shareUntil?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type PortalExternalShareEdge = {
  __typename?: 'PortalExternalShareEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the PortalExternalShare */
  node: PortalExternalShare;
};

export type PortalExternalShareFilter = {
  and?: InputMaybe<Array<PortalExternalShareFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PortalExternalShareFilter>>;
  postId?: InputMaybe<StringFieldComparison>;
  postType?: InputMaybe<PostTypeFilterComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  shareToRaw?: InputMaybe<StringFieldComparison>;
  shareUntil?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type PortalExternalShareSort = {
  direction: SortDirection;
  field: PortalExternalShareSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PortalExternalShareSortFields {
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LockedBy = 'lockedBy',
  PostId = 'postId',
  PostType = 'postType',
  RemoteUpdated = 'remoteUpdated',
  ShareToRaw = 'shareToRaw',
  ShareUntil = 'shareUntil',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type PortalExternalShareUpdateFilter = {
  and?: InputMaybe<Array<PortalExternalShareUpdateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PortalExternalShareUpdateFilter>>;
  postId?: InputMaybe<StringFieldComparison>;
  postType?: InputMaybe<PostTypeFilterComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  shareToRaw?: InputMaybe<StringFieldComparison>;
  shareUntil?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type PortalExternalShareWithSummary = {
  __typename?: 'PortalExternalShareWithSummary';
  allowDownload?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  postId: Scalars['String'];
  postType: PostType;
  shareUntil?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PortalFilter = {
  and?: InputMaybe<Array<PortalFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PortalFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
  welcomeEmailTemplate?: InputMaybe<StringFieldComparison>;
};

export type PortalPreference = {
  __typename?: 'PortalPreference';
  alerts?: Maybe<Scalars['JSONObject']>;
  bookmarks?: Maybe<Scalars['JSONObject']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  email: Scalars['ID'];
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  preferences?: Maybe<Scalars['JSONObject']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type PortalPreferenceConnection = {
  __typename?: 'PortalPreferenceConnection';
  /** Array of edges. */
  edges: Array<PortalPreferenceEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type PortalPreferenceEdge = {
  __typename?: 'PortalPreferenceEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the PortalPreference */
  node: PortalPreference;
};

export type PortalPreferenceFilter = {
  alerts?: InputMaybe<JsonObjectFilterComparison>;
  and?: InputMaybe<Array<PortalPreferenceFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  email?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PortalPreferenceFilter>>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type PortalPreferenceInput = {
  alerts?: InputMaybe<Scalars['JSONObject']>;
  bookmarks?: InputMaybe<Scalars['JSONObject']>;
  email: Scalars['String'];
  preferences?: InputMaybe<Scalars['JSONObject']>;
};

export type PortalPreferenceSort = {
  direction: SortDirection;
  field: PortalPreferenceSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PortalPreferenceSortFields {
  Alerts = 'alerts',
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  Email = 'email',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LockedBy = 'lockedBy',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type PortalSort = {
  direction: SortDirection;
  field: PortalSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PortalSortFields {
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LockedBy = 'lockedBy',
  Name = 'name',
  RemoteUpdated = 'remoteUpdated',
  Updated = 'updated',
  UpdatedBy = 'updatedBy',
  WelcomeEmailTemplate = 'welcomeEmailTemplate'
}

export type PortalUpdateFilter = {
  and?: InputMaybe<Array<PortalUpdateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PortalUpdateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
  welcomeEmailTemplate?: InputMaybe<StringFieldComparison>;
};

export type PostEntityViewsArgs = {
  id: Scalars['String'];
  notUser?: InputMaybe<Scalars['String']>;
  postType: PostType;
};

export enum PostStatus {
  ContentReview = 'ContentReview',
  Draft = 'Draft',
  Published = 'Published',
  StyleReview = 'StyleReview',
  Unpublished = 'Unpublished'
}

export type PostStatusFilterComparison = {
  eq?: InputMaybe<PostStatus>;
  gt?: InputMaybe<PostStatus>;
  gte?: InputMaybe<PostStatus>;
  iLike?: InputMaybe<PostStatus>;
  in?: InputMaybe<Array<PostStatus>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<PostStatus>;
  lt?: InputMaybe<PostStatus>;
  lte?: InputMaybe<PostStatus>;
  neq?: InputMaybe<PostStatus>;
  notILike?: InputMaybe<PostStatus>;
  notIn?: InputMaybe<Array<PostStatus>>;
  notLike?: InputMaybe<PostStatus>;
};

export enum PostType {
  Action = 'Action',
  Article = 'Article',
  Briefing = 'Briefing',
  RawAction = 'RawAction'
}

export type PostTypeFilterComparison = {
  eq?: InputMaybe<PostType>;
  gt?: InputMaybe<PostType>;
  gte?: InputMaybe<PostType>;
  iLike?: InputMaybe<PostType>;
  in?: InputMaybe<Array<PostType>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<PostType>;
  lt?: InputMaybe<PostType>;
  lte?: InputMaybe<PostType>;
  neq?: InputMaybe<PostType>;
  notILike?: InputMaybe<PostType>;
  notIn?: InputMaybe<Array<PostType>>;
  notLike?: InputMaybe<PostType>;
};

export type PostViews = {
  __typename?: 'PostViews';
  company?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  views: Scalars['Float'];
};

export type PostViewsArgs = {
  postIds: Array<Scalars['String']>;
};

export type PostViewsResult = {
  __typename?: 'PostViewsResult';
  postId: Scalars['String'];
  totalViews: Scalars['Float'];
  views: Array<PostViews>;
};

export type PostsDeletedResult = {
  __typename?: 'PostsDeletedResult';
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ProminentIndividual = {
  __typename?: 'ProminentIndividual';
  actions?: Maybe<ProminentIndividualActionsConnection>;
  actionsAggregate: Array<ProminentIndividualActionsAggregateResponse>;
  articles?: Maybe<ProminentIndividualArticlesConnection>;
  articlesAggregate: Array<ProminentIndividualArticlesAggregateResponse>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type ProminentIndividualActionsArgs = {
  filter?: ActionFilter;
  paging?: CursorPaging;
  sorting?: Array<ActionSort>;
};


export type ProminentIndividualActionsAggregateArgs = {
  filter?: InputMaybe<ActionAggregateFilter>;
};


export type ProminentIndividualArticlesArgs = {
  filter?: ArticleFilter;
  paging?: CursorPaging;
  sorting?: Array<ArticleSort>;
};


export type ProminentIndividualArticlesAggregateArgs = {
  filter?: InputMaybe<ArticleAggregateFilter>;
};

export type ProminentIndividualActionsAggregateGroupBy = {
  __typename?: 'ProminentIndividualActionsAggregateGroupBy';
  actionStatus?: Maybe<ActionStatus>;
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  inActive?: Maybe<Scalars['Boolean']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  ongoing?: Maybe<Scalars['Boolean']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ProminentIndividualActionsAggregateResponse = {
  __typename?: 'ProminentIndividualActionsAggregateResponse';
  avg?: Maybe<ProminentIndividualActionsAvgAggregate>;
  count?: Maybe<ProminentIndividualActionsCountAggregate>;
  groupBy?: Maybe<ProminentIndividualActionsAggregateGroupBy>;
  max?: Maybe<ProminentIndividualActionsMaxAggregate>;
  min?: Maybe<ProminentIndividualActionsMinAggregate>;
  sum?: Maybe<ProminentIndividualActionsSumAggregate>;
};

export type ProminentIndividualActionsAvgAggregate = {
  __typename?: 'ProminentIndividualActionsAvgAggregate';
  going?: Maybe<Scalars['Float']>;
  interested?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type ProminentIndividualActionsConnection = {
  __typename?: 'ProminentIndividualActionsConnection';
  /** Array of edges. */
  edges: Array<ActionEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ProminentIndividualActionsCountAggregate = {
  __typename?: 'ProminentIndividualActionsCountAggregate';
  actionStatus?: Maybe<Scalars['Int']>;
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Int']>;
  going?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  impact?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  interested?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  ongoing?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  tacticId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ProminentIndividualActionsMaxAggregate = {
  __typename?: 'ProminentIndividualActionsMaxAggregate';
  actionStatus?: Maybe<ActionStatus>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ProminentIndividualActionsMinAggregate = {
  __typename?: 'ProminentIndividualActionsMinAggregate';
  actionStatus?: Maybe<ActionStatus>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ProminentIndividualActionsSumAggregate = {
  __typename?: 'ProminentIndividualActionsSumAggregate';
  going?: Maybe<Scalars['Float']>;
  interested?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type ProminentIndividualAggregateFilter = {
  and?: InputMaybe<Array<ProminentIndividualAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProminentIndividualAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ProminentIndividualAggregateGroupBy = {
  __typename?: 'ProminentIndividualAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type ProminentIndividualAggregateGroupByCreatedArgs = {
  by?: GroupBy;
};


export type ProminentIndividualAggregateGroupByRemoteUpdatedArgs = {
  by?: GroupBy;
};


export type ProminentIndividualAggregateGroupByUpdatedArgs = {
  by?: GroupBy;
};

export type ProminentIndividualAggregateResponse = {
  __typename?: 'ProminentIndividualAggregateResponse';
  count?: Maybe<ProminentIndividualCountAggregate>;
  groupBy?: Maybe<ProminentIndividualAggregateGroupBy>;
  max?: Maybe<ProminentIndividualMaxAggregate>;
  min?: Maybe<ProminentIndividualMinAggregate>;
};

export type ProminentIndividualArticlesAggregateGroupBy = {
  __typename?: 'ProminentIndividualArticlesAggregateGroupBy';
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ProminentIndividualArticlesAggregateResponse = {
  __typename?: 'ProminentIndividualArticlesAggregateResponse';
  count?: Maybe<ProminentIndividualArticlesCountAggregate>;
  groupBy?: Maybe<ProminentIndividualArticlesAggregateGroupBy>;
  max?: Maybe<ProminentIndividualArticlesMaxAggregate>;
  min?: Maybe<ProminentIndividualArticlesMinAggregate>;
};

export type ProminentIndividualArticlesConnection = {
  __typename?: 'ProminentIndividualArticlesConnection';
  /** Array of edges. */
  edges: Array<ArticleEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ProminentIndividualArticlesCountAggregate = {
  __typename?: 'ProminentIndividualArticlesCountAggregate';
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  highlightUntilDate?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ProminentIndividualArticlesMaxAggregate = {
  __typename?: 'ProminentIndividualArticlesMaxAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ProminentIndividualArticlesMinAggregate = {
  __typename?: 'ProminentIndividualArticlesMinAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ProminentIndividualConnection = {
  __typename?: 'ProminentIndividualConnection';
  /** Array of edges. */
  edges: Array<ProminentIndividualEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ProminentIndividualCountAggregate = {
  __typename?: 'ProminentIndividualCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ProminentIndividualDeleteFilter = {
  and?: InputMaybe<Array<ProminentIndividualDeleteFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProminentIndividualDeleteFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ProminentIndividualDeleteResponse = {
  __typename?: 'ProminentIndividualDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ProminentIndividualEdge = {
  __typename?: 'ProminentIndividualEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ProminentIndividual */
  node: ProminentIndividual;
};

export type ProminentIndividualFilter = {
  and?: InputMaybe<Array<ProminentIndividualFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProminentIndividualFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ProminentIndividualMaxAggregate = {
  __typename?: 'ProminentIndividualMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ProminentIndividualMinAggregate = {
  __typename?: 'ProminentIndividualMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ProminentIndividualSort = {
  direction: SortDirection;
  field: ProminentIndividualSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProminentIndividualSortFields {
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LockedBy = 'lockedBy',
  Name = 'name',
  RemoteUpdated = 'remoteUpdated',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type ProminentIndividualUpdateFilter = {
  and?: InputMaybe<Array<ProminentIndividualUpdateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProminentIndividualUpdateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ProtestBacklog = {
  __typename?: 'ProtestBacklog';
  comments?: Maybe<Scalars['String']>;
  completedOn?: Maybe<Scalars['DateTime']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<ProtestBacklogStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type ProtestBacklogConnection = {
  __typename?: 'ProtestBacklogConnection';
  /** Array of edges. */
  edges: Array<ProtestBacklogEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ProtestBacklogDeleteResponse = {
  __typename?: 'ProtestBacklogDeleteResponse';
  comments?: Maybe<Scalars['String']>;
  completedOn?: Maybe<Scalars['DateTime']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  status?: Maybe<ProtestBacklogStatus>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ProtestBacklogEdge = {
  __typename?: 'ProtestBacklogEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ProtestBacklog */
  node: ProtestBacklog;
};

export type ProtestBacklogFilter = {
  and?: InputMaybe<Array<ProtestBacklogFilter>>;
  completedOn?: InputMaybe<DateFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProtestBacklogFilter>>;
  priority?: InputMaybe<StringFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<ProtestBacklogStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
};

export type ProtestBacklogSort = {
  direction: SortDirection;
  field: ProtestBacklogSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProtestBacklogSortFields {
  CompletedOn = 'completedOn',
  Created = 'created',
  CreatedBy = 'createdBy',
  Date = 'date',
  DeletedBy = 'deletedBy',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LockedBy = 'lockedBy',
  Priority = 'priority',
  RemoteUpdated = 'remoteUpdated',
  Status = 'status',
  Updated = 'updated',
  UpdatedBy = 'updatedBy',
  Url = 'url'
}

export enum ProtestBacklogStatus {
  Completed = 'Completed',
  Created = 'Created',
  Duplicate = 'Duplicate',
  MarkedForProcessing = 'MarkedForProcessing'
}

export type ProtestBacklogStatusFilterComparison = {
  eq?: InputMaybe<ProtestBacklogStatus>;
  gt?: InputMaybe<ProtestBacklogStatus>;
  gte?: InputMaybe<ProtestBacklogStatus>;
  iLike?: InputMaybe<ProtestBacklogStatus>;
  in?: InputMaybe<Array<ProtestBacklogStatus>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<ProtestBacklogStatus>;
  lt?: InputMaybe<ProtestBacklogStatus>;
  lte?: InputMaybe<ProtestBacklogStatus>;
  neq?: InputMaybe<ProtestBacklogStatus>;
  notILike?: InputMaybe<ProtestBacklogStatus>;
  notIn?: InputMaybe<Array<ProtestBacklogStatus>>;
  notLike?: InputMaybe<ProtestBacklogStatus>;
};

export type ProtestBacklogSubscriptionFilter = {
  and?: InputMaybe<Array<ProtestBacklogSubscriptionFilter>>;
  completedOn?: InputMaybe<DateFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProtestBacklogSubscriptionFilter>>;
  priority?: InputMaybe<StringFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<ProtestBacklogStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
};

export type ProtestBacklogUpdateFilter = {
  and?: InputMaybe<Array<ProtestBacklogUpdateFilter>>;
  completedOn?: InputMaybe<DateFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProtestBacklogUpdateFilter>>;
  priority?: InputMaybe<StringFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<ProtestBacklogStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
};

export type Query = {
  __typename?: 'Query';
  action: Action;
  actionAggregate: Array<ActionAggregateResponse>;
  actions: ActionConnection;
  activityLog: ActivityLog;
  activityLogAggregate: Array<ActivityLogAggregateResponse>;
  activityLogs: ActivityLogConnection;
  adUser: AdUser;
  adUserAggregate: Array<AdUserAggregateResponse>;
  adUsers: AdUserConnection;
  annualSubscription: AnnualSubscription;
  annualSubscriptionAggregate: Array<AnnualSubscriptionAggregateResponse>;
  annualSubscriptions: AnnualSubscriptionConnection;
  article: Article;
  articleAggregate: Array<ArticleAggregateResponse>;
  articles: ArticleConnection;
  attachment: Attachment;
  attachments: AttachmentConnection;
  audience: Audience;
  audiences: AudienceConnection;
  briefing: Briefing;
  briefingAggregate: Array<BriefingAggregateResponse>;
  briefings: BriefingConnection;
  bringForwardOptions: Array<Scalars['String']>;
  campaign: Campaign;
  campaignAggregate: Array<CampaignAggregateResponse>;
  campaigns: CampaignConnection;
  clientNotification: ClientNotification;
  clientNotificationAck: ClientNotificationAck;
  clientNotificationAcks: ClientNotificationAckConnection;
  clientNotifications: ClientNotificationConnection;
  companies: CompanyConnection;
  company: Company;
  companyAggregate: Array<CompanyAggregateResponse>;
  companyContact: CompanyContact;
  companyContactAggregate: Array<CompanyContactAggregateResponse>;
  companyContacts: CompanyContactConnection;
  companyIntegration: CompanyIntegration;
  companyIntegrations: CompanyIntegrationConnection;
  companyLocation: CompanyLocation;
  companyLocations: CompanyLocationConnection;
  contactDistribution: Array<ContactDistributionResults>;
  countriesAndProvinces: Array<Location>;
  countriesByRegion: Array<Scalars['String']>;
  event: Event;
  eventAggregate: Array<EventAggregateResponse>;
  events: EventConnection;
  getAlertCollectionType: AlertCollectionEntry;
  getAnnualSubscriptionAccessType: AnnualSubscriptionAccess;
  getClientNotifications: Array<ClientNotificationResults>;
  getPortalExternalShare: PortalExternalShareWithSummary;
  getUnreadClientNotificationCount: Scalars['Float'];
  getUserContext?: Maybe<UserContext>;
  getUserPermissions: Scalars['String'];
  group: Group;
  groupAggregate: Array<GroupAggregateResponse>;
  groupingTagsOptions: Array<Scalars['String']>;
  groups: GroupConnection;
  integrationTxLog: IntegrationTxLog;
  integrationTxLogs: IntegrationTxLogConnection;
  issue: Issue;
  issueAggregate: Array<IssueAggregateResponse>;
  issues: IssueConnection;
  location: Location;
  locationAggregate: Array<LocationAggregateResponse>;
  locations: LocationConnection;
  portal: Portal;
  portalExternalShare: PortalExternalShare;
  portalExternalShares: PortalExternalShareConnection;
  portalPreference: PortalPreference;
  portalPreferences: PortalPreferenceConnection;
  portals: PortalConnection;
  postEntityViews: Scalars['Int'];
  prominentIndividual: ProminentIndividual;
  prominentIndividualAggregate: Array<ProminentIndividualAggregateResponse>;
  prominentIndividuals: ProminentIndividualConnection;
  protestBacklog: ProtestBacklog;
  protestBacklogs: ProtestBacklogConnection;
  resource: Resource;
  resources: ResourceConnection;
  role: Role;
  roles: RoleConnection;
  sector: Sector;
  sectorAggregate: Array<SectorAggregateResponse>;
  sectors: SectorConnection;
  serviceRequest: ServiceRequest;
  serviceRequestAggregate: Array<ServiceRequestAggregateResponse>;
  serviceRequests: ServiceRequestConnection;
  statsActionGeographicCleanupList: Array<ActionGeographicCleanupResults>;
  statsActionRiskAggregateSummary: Array<ActionRiskAggregateResults>;
  statsActionSummary: Array<ActionSummaryResults>;
  statsActivityLogSummary: Array<ActivityLogSummaryResults>;
  statsAnalystDetail: Array<AnalystDetailResult>;
  statsClient12moUsage: Array<Client12MoUsageResult>;
  statsContentConsumption: Array<ConsumptionStatsResult>;
  statsDimensionAggregateSummary: Array<DimensionStatsAggregateResult>;
  statsDimensionSummary: Array<DimensionStatsResult>;
  statsGroupReferences: Array<GroupReferenceResults>;
  statsNewDimensionCreated: Array<NewDimensionCreatedStatsResult>;
  statsPostViews: Array<PostViewsResult>;
  statsPostsDeletedSince: Array<PostsDeletedResult>;
  statsSourcesDimensionDetail: Array<SourcesDimensionDetailResults>;
  statsSourcesSummary: Array<SourcesSummaryResults>;
  statsUnreadDetail: Array<UnreadDetailResult>;
  statsUserDetail: Array<UserDetailResult>;
  statsUserSummary: Array<UserSummaryResult>;
  subscriptionTeamOptions: Array<Scalars['String']>;
  tactic: Tactic;
  tacticAggregate: Array<TacticAggregateResponse>;
  tactics: TacticConnection;
  term: Term;
  terms: TermConnection;
  travelRiskAdvisories: TravelRiskAdvisoryConnection;
  travelRiskAdvisory: TravelRiskAdvisory;
  travelRiskAdvisoryAggregate: Array<TravelRiskAdvisoryAggregateResponse>;
  travelRiskCountries: TravelRiskCountryConnection;
  travelRiskCountry: TravelRiskCountry;
  travelRiskCountryAggregate: Array<TravelRiskCountryAggregateResponse>;
  userContext?: Maybe<UserContext>;
  validateAccessCode: ValidateAccessCodeResults;
};


export type QueryActionArgs = {
  id: Scalars['ID'];
};


export type QueryActionAggregateArgs = {
  filter?: InputMaybe<ActionAggregateFilter>;
};


export type QueryActionsArgs = {
  filter?: ActionFilter;
  paging?: CursorPaging;
  sorting?: Array<ActionSort>;
};


export type QueryActivityLogArgs = {
  id: Scalars['ID'];
};


export type QueryActivityLogAggregateArgs = {
  filter?: InputMaybe<ActivityLogAggregateFilter>;
};


export type QueryActivityLogsArgs = {
  filter?: ActivityLogFilter;
  paging?: CursorPaging;
  sorting?: Array<ActivityLogSort>;
};


export type QueryAdUserArgs = {
  id: Scalars['ID'];
};


export type QueryAdUserAggregateArgs = {
  filter?: InputMaybe<AdUserAggregateFilter>;
};


export type QueryAdUsersArgs = {
  filter?: AdUserFilter;
  paging?: CursorPaging;
  sorting?: Array<AdUserSort>;
};


export type QueryAnnualSubscriptionArgs = {
  id: Scalars['ID'];
};


export type QueryAnnualSubscriptionAggregateArgs = {
  filter?: InputMaybe<AnnualSubscriptionAggregateFilter>;
};


export type QueryAnnualSubscriptionsArgs = {
  filter?: AnnualSubscriptionFilter;
  paging?: CursorPaging;
  sorting?: Array<AnnualSubscriptionSort>;
};


export type QueryArticleArgs = {
  id: Scalars['ID'];
};


export type QueryArticleAggregateArgs = {
  filter?: InputMaybe<ArticleAggregateFilter>;
};


export type QueryArticlesArgs = {
  filter?: ArticleFilter;
  paging?: CursorPaging;
  sorting?: Array<ArticleSort>;
};


export type QueryAttachmentArgs = {
  id: Scalars['ID'];
};


export type QueryAttachmentsArgs = {
  filter?: AttachmentFilter;
  paging?: CursorPaging;
  sorting?: Array<AttachmentSort>;
};


export type QueryAudienceArgs = {
  id: Scalars['ID'];
};


export type QueryAudiencesArgs = {
  filter?: AudienceFilter;
  paging?: CursorPaging;
  sorting?: Array<AudienceSort>;
};


export type QueryBriefingArgs = {
  id: Scalars['ID'];
};


export type QueryBriefingAggregateArgs = {
  filter?: InputMaybe<BriefingAggregateFilter>;
};


export type QueryBriefingsArgs = {
  filter?: BriefingFilter;
  paging?: CursorPaging;
  sorting?: Array<BriefingSort>;
};


export type QueryCampaignArgs = {
  id: Scalars['ID'];
};


export type QueryCampaignAggregateArgs = {
  filter?: InputMaybe<CampaignAggregateFilter>;
};


export type QueryCampaignsArgs = {
  filter?: CampaignFilter;
  paging?: CursorPaging;
  sorting?: Array<CampaignSort>;
};


export type QueryClientNotificationArgs = {
  id: Scalars['ID'];
};


export type QueryClientNotificationAckArgs = {
  id: Scalars['ID'];
};


export type QueryClientNotificationAcksArgs = {
  filter?: ClientNotificationAckFilter;
  paging?: CursorPaging;
  sorting?: Array<ClientNotificationAckSort>;
};


export type QueryClientNotificationsArgs = {
  filter?: ClientNotificationFilter;
  paging?: CursorPaging;
  sorting?: Array<ClientNotificationSort>;
};


export type QueryCompaniesArgs = {
  filter?: CompanyFilter;
  paging?: CursorPaging;
  sorting?: Array<CompanySort>;
};


export type QueryCompanyArgs = {
  id: Scalars['ID'];
};


export type QueryCompanyAggregateArgs = {
  filter?: InputMaybe<CompanyAggregateFilter>;
};


export type QueryCompanyContactArgs = {
  id: Scalars['ID'];
};


export type QueryCompanyContactAggregateArgs = {
  filter?: InputMaybe<CompanyContactAggregateFilter>;
};


export type QueryCompanyContactsArgs = {
  filter?: CompanyContactFilter;
  paging?: CursorPaging;
  sorting?: Array<CompanyContactSort>;
};


export type QueryCompanyIntegrationArgs = {
  id: Scalars['ID'];
};


export type QueryCompanyIntegrationsArgs = {
  filter?: CompanyIntegrationFilter;
  paging?: CursorPaging;
  sorting?: Array<CompanyIntegrationSort>;
};


export type QueryCompanyLocationArgs = {
  id: Scalars['ID'];
};


export type QueryCompanyLocationsArgs = {
  filter?: CompanyLocationFilter;
  paging?: CursorPaging;
  sorting?: Array<CompanyLocationSort>;
};


export type QueryContactDistributionArgs = {
  input: ContactDistributionArgs;
};


export type QueryCountriesAndProvincesArgs = {
  idsFilter?: InputMaybe<Array<Scalars['String']>>;
  regions?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryCountriesByRegionArgs = {
  regions?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryEventArgs = {
  id: Scalars['ID'];
};


export type QueryEventAggregateArgs = {
  filter?: InputMaybe<EventAggregateFilter>;
};


export type QueryEventsArgs = {
  filter?: EventFilter;
  paging?: CursorPaging;
  sorting?: Array<EventSort>;
};


export type QueryGetClientNotificationsArgs = {
  companyId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
};


export type QueryGetPortalExternalShareArgs = {
  id: Scalars['String'];
};


export type QueryGetUnreadClientNotificationCountArgs = {
  companyId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
};


export type QueryGetUserContextArgs = {
  email: Scalars['String'];
};


export type QueryGetUserPermissionsArgs = {
  email: Scalars['String'];
};


export type QueryGroupArgs = {
  id: Scalars['ID'];
};


export type QueryGroupAggregateArgs = {
  filter?: InputMaybe<GroupAggregateFilter>;
};


export type QueryGroupingTagsOptionsArgs = {
  country?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
};


export type QueryGroupsArgs = {
  filter?: GroupFilter;
  paging?: CursorPaging;
  sorting?: Array<GroupSort>;
};


export type QueryIntegrationTxLogArgs = {
  id: Scalars['ID'];
};


export type QueryIntegrationTxLogsArgs = {
  filter?: IntegrationTxLogFilter;
  paging?: CursorPaging;
  sorting?: Array<IntegrationTxLogSort>;
};


export type QueryIssueArgs = {
  id: Scalars['ID'];
};


export type QueryIssueAggregateArgs = {
  filter?: InputMaybe<IssueAggregateFilter>;
};


export type QueryIssuesArgs = {
  filter?: IssueFilter;
  paging?: CursorPaging;
  sorting?: Array<IssueSort>;
};


export type QueryLocationArgs = {
  id: Scalars['ID'];
};


export type QueryLocationAggregateArgs = {
  filter?: InputMaybe<LocationAggregateFilter>;
};


export type QueryLocationsArgs = {
  filter?: LocationFilter;
  paging?: CursorPaging;
  sorting?: Array<LocationSort>;
};


export type QueryPortalArgs = {
  id: Scalars['ID'];
};


export type QueryPortalExternalShareArgs = {
  id: Scalars['ID'];
};


export type QueryPortalExternalSharesArgs = {
  filter?: PortalExternalShareFilter;
  paging?: CursorPaging;
  sorting?: Array<PortalExternalShareSort>;
};


export type QueryPortalPreferenceArgs = {
  id: Scalars['ID'];
};


export type QueryPortalPreferencesArgs = {
  filter?: PortalPreferenceFilter;
  paging?: CursorPaging;
  sorting?: Array<PortalPreferenceSort>;
};


export type QueryPortalsArgs = {
  filter?: PortalFilter;
  paging?: CursorPaging;
  sorting?: Array<PortalSort>;
};


export type QueryPostEntityViewsArgs = {
  input: PostEntityViewsArgs;
};


export type QueryProminentIndividualArgs = {
  id: Scalars['ID'];
};


export type QueryProminentIndividualAggregateArgs = {
  filter?: InputMaybe<ProminentIndividualAggregateFilter>;
};


export type QueryProminentIndividualsArgs = {
  filter?: ProminentIndividualFilter;
  paging?: CursorPaging;
  sorting?: Array<ProminentIndividualSort>;
};


export type QueryProtestBacklogArgs = {
  id: Scalars['ID'];
};


export type QueryProtestBacklogsArgs = {
  filter?: ProtestBacklogFilter;
  paging?: CursorPaging;
  sorting?: Array<ProtestBacklogSort>;
};


export type QueryResourceArgs = {
  id: Scalars['ID'];
};


export type QueryResourcesArgs = {
  filter?: ResourceFilter;
  paging?: CursorPaging;
  sorting?: Array<ResourceSort>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QueryRolesArgs = {
  filter?: RoleFilter;
  paging?: CursorPaging;
  sorting?: Array<RoleSort>;
};


export type QuerySectorArgs = {
  id: Scalars['ID'];
};


export type QuerySectorAggregateArgs = {
  filter?: InputMaybe<SectorAggregateFilter>;
};


export type QuerySectorsArgs = {
  filter?: SectorFilter;
  paging?: CursorPaging;
  sorting?: Array<SectorSort>;
};


export type QueryServiceRequestArgs = {
  id: Scalars['ID'];
};


export type QueryServiceRequestAggregateArgs = {
  filter?: InputMaybe<ServiceRequestAggregateFilter>;
};


export type QueryServiceRequestsArgs = {
  filter?: ServiceRequestFilter;
  paging?: CursorPaging;
  sorting?: Array<ServiceRequestSort>;
};


export type QueryStatsActionRiskAggregateSummaryArgs = {
  statsArg: ActionRiskAggregateArg;
};


export type QueryStatsActionSummaryArgs = {
  statsArg: ActionSummaryArg;
};


export type QueryStatsActivityLogSummaryArgs = {
  statsArg: ActivityLogSummaryArg;
};


export type QueryStatsAnalystDetailArgs = {
  statsArg: AnalystDetailArg;
};


export type QueryStatsClient12moUsageArgs = {
  asOf: Scalars['DateTime'];
};


export type QueryStatsContentConsumptionArgs = {
  statsArg: UserSummaryArg;
};


export type QueryStatsDimensionAggregateSummaryArgs = {
  statsArg: DimensionStatsArg;
};


export type QueryStatsDimensionSummaryArgs = {
  statsArg: DimensionStatsArg;
};


export type QueryStatsGroupReferencesArgs = {
  excludePostIds: Array<Scalars['String']>;
  limit?: Scalars['Float'];
  postTypes: Array<Scalars['String']>;
};


export type QueryStatsNewDimensionCreatedArgs = {
  statsArg: DimensionStatsArg;
};


export type QueryStatsPostViewsArgs = {
  statsArg: PostViewsArgs;
};


export type QueryStatsPostsDeletedSinceArgs = {
  since: Scalars['DateTime'];
};


export type QueryStatsSourcesDimensionDetailArgs = {
  statsArg: SourcesDimensionDetailArg;
};


export type QueryStatsSourcesSummaryArgs = {
  statsArg: SourcesSummaryArg;
};


export type QueryStatsUnreadDetailArgs = {
  statsArg: UnreadDetailArg;
};


export type QueryStatsUserDetailArgs = {
  statsArg: UserDetailArg;
};


export type QueryStatsUserSummaryArgs = {
  statsArg: UserSummaryArg;
};


export type QueryTacticArgs = {
  id: Scalars['ID'];
};


export type QueryTacticAggregateArgs = {
  filter?: InputMaybe<TacticAggregateFilter>;
};


export type QueryTacticsArgs = {
  filter?: TacticFilter;
  paging?: CursorPaging;
  sorting?: Array<TacticSort>;
};


export type QueryTermArgs = {
  id: Scalars['ID'];
};


export type QueryTermsArgs = {
  filter?: TermFilter;
  paging?: CursorPaging;
  sorting?: Array<TermSort>;
};


export type QueryTravelRiskAdvisoriesArgs = {
  filter?: TravelRiskAdvisoryFilter;
  paging?: CursorPaging;
  sorting?: Array<TravelRiskAdvisorySort>;
};


export type QueryTravelRiskAdvisoryArgs = {
  id: Scalars['ID'];
};


export type QueryTravelRiskAdvisoryAggregateArgs = {
  filter?: InputMaybe<TravelRiskAdvisoryAggregateFilter>;
};


export type QueryTravelRiskCountriesArgs = {
  filter?: TravelRiskCountryFilter;
  paging?: CursorPaging;
  sorting?: Array<TravelRiskCountrySort>;
};


export type QueryTravelRiskCountryArgs = {
  id: Scalars['ID'];
};


export type QueryTravelRiskCountryAggregateArgs = {
  filter?: InputMaybe<TravelRiskCountryAggregateFilter>;
};


export type QueryValidateAccessCodeArgs = {
  input: ValidateAccessCodeInput;
};

export type RemoveAcksFromClientNotificationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveActionsFromCampaignInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveActionsFromCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveActionsFromEventInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveActionsFromGroupInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveActionsFromIssueInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveActionsFromLocationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveActionsFromProminentIndividualInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveActionsFromSectorInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveActionsFromTacticInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveActionsOfInterestsFromCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveAdvisoriesFromTravelRiskCountryInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveArticlesFromCampaignInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveArticlesFromCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveArticlesFromEventInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveArticlesFromGroupInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveArticlesFromIssueInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveArticlesFromLocationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveArticlesFromProminentIndividualInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveArticlesFromSectorInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveArticlesOfInterestsFromCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveAttachmentsFromAnnualSubscriptionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveBriefingsFromCampaignInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveBriefingsFromCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveBriefingsFromEventInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveBriefingsFromGroupInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveBriefingsFromIssueInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveBriefingsFromLocationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveBriefingsFromSectorInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveCampaignsFromActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveCampaignsFromArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveCampaignsFromBriefingInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveCampaignsFromResourceInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveClientFromAnnualSubscriptionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveClientFromCompanyIntegrationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveClientFromCompanyLocationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveClientFromServiceRequestInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveCompaniesFromActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveCompaniesFromArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveCompaniesFromBriefingInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveCompaniesFromClientNotificationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveCompaniesFromResourceInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveCompaniesFromSectorInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveCompanyFromCompanyContactInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveCompanyFromEventInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveContactFromAnnualSubscriptionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveContactsFromCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveEventsFromActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveEventsFromArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveEventsFromBriefingInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveEventsFromLocationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveGroupsFromActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveGroupsFromArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveGroupsFromBriefingInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveGroupsFromResourceInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveIntegrationsFromCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveIssuesFromActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveIssuesFromArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveIssuesFromBriefingInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveIssuesFromResourceInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveLocationFromActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveLocationFromArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveLocationFromBriefingInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveLocationFromEventInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveLocationsFromCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveOfInterestTosFromActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveOfInterestTosFromArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveParentGroupFromGroupInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveProminentIndividualsFromActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveProminentIndividualsFromArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveRelatedActionsFromArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveRelatedArticlesFromArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveSectorsFromActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveSectorsFromArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveSectorsFromBriefingInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveSectorsFromCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveSectorsFromEventInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveSectorsFromResourceInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveSubGroupsFromGroupInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveSubscriptionsFromCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveTacticFromActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveTacticsFromResourceInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveTravelRiskCountryFromTravelRiskAdvisoryInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RequestAccessCodeInput = {
  email: Scalars['String'];
  portalExternalShareId: Scalars['String'];
};

/** Request Access Code Response Enum */
export enum RequestAccessCodeResposeEnum {
  EmailSent = 'EMAIL_SENT',
  Expired = 'EXPIRED',
  NotShared = 'NOT_SHARED',
  NoAccess = 'NO_ACCESS'
}

export type Resource = {
  __typename?: 'Resource';
  campaigns?: Maybe<Array<Campaign>>;
  companies?: Maybe<Array<Company>>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  groups?: Maybe<Array<Group>>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  issues?: Maybe<Array<Issue>>;
  lockedBy?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  previewUri?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  sectors?: Maybe<Array<Sector>>;
  tactics?: Maybe<Array<Tactic>>;
  thumbnailUri?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
  uri: Scalars['String'];
};


export type ResourceCampaignsArgs = {
  filter?: CampaignFilter;
  sorting?: Array<CampaignSort>;
};


export type ResourceCompaniesArgs = {
  filter?: CompanyFilter;
  sorting?: Array<CompanySort>;
};


export type ResourceGroupsArgs = {
  filter?: GroupFilter;
  sorting?: Array<GroupSort>;
};


export type ResourceIssuesArgs = {
  filter?: IssueFilter;
  sorting?: Array<IssueSort>;
};


export type ResourceSectorsArgs = {
  filter?: SectorFilter;
  sorting?: Array<SectorSort>;
};


export type ResourceTacticsArgs = {
  filter?: TacticFilter;
  sorting?: Array<TacticSort>;
};

export type ResourceConnection = {
  __typename?: 'ResourceConnection';
  /** Array of edges. */
  edges: Array<ResourceEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ResourceDeleteResponse = {
  __typename?: 'ResourceDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  previewUri?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  thumbnailUri?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

export type ResourceEdge = {
  __typename?: 'ResourceEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Resource */
  node: Resource;
};

export type ResourceFilter = {
  and?: InputMaybe<Array<ResourceFilter>>;
  campaigns?: InputMaybe<ResourceFilterCampaignFilter>;
  companies?: InputMaybe<ResourceFilterCompanyFilter>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  groups?: InputMaybe<ResourceFilterGroupFilter>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  issues?: InputMaybe<ResourceFilterIssueFilter>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ResourceFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  sectors?: InputMaybe<ResourceFilterSectorFilter>;
  tactics?: InputMaybe<ResourceFilterTacticFilter>;
  type?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ResourceFilterCampaignFilter = {
  and?: InputMaybe<Array<ResourceFilterCampaignFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ResourceFilterCampaignFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ResourceFilterCompanyFilter = {
  and?: InputMaybe<Array<ResourceFilterCompanyFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ResourceFilterCompanyFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  ssoEmailPatterns?: InputMaybe<StringFieldComparison>;
  team?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ResourceFilterGroupFilter = {
  and?: InputMaybe<Array<ResourceFilterGroupFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ResourceFilterGroupFilter>>;
  parentGroupId?: InputMaybe<StringFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ResourceFilterIssueFilter = {
  and?: InputMaybe<Array<ResourceFilterIssueFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lastModifiedDate?: InputMaybe<DateFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  monitoring?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ResourceFilterIssueFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<PostStatusFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ResourceFilterSectorFilter = {
  and?: InputMaybe<Array<ResourceFilterSectorFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ResourceFilterSectorFilter>>;
  ppd21?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ResourceFilterTacticFilter = {
  and?: InputMaybe<Array<ResourceFilterTacticFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ResourceFilterTacticFilter>>;
  protest?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
  virtual?: InputMaybe<BooleanFieldComparison>;
};

export type ResourceSort = {
  direction: SortDirection;
  field: ResourceSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ResourceSortFields {
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LockedBy = 'lockedBy',
  Name = 'name',
  RemoteUpdated = 'remoteUpdated',
  Type = 'type',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type Role = {
  __typename?: 'Role';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  permissions?: Maybe<Array<Scalars['String']>>;
};

export type RoleConnection = {
  __typename?: 'RoleConnection';
  /** Array of edges. */
  edges: Array<RoleEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type RoleDeleteResponse = {
  __typename?: 'RoleDeleteResponse';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Scalars['String']>>;
};

export type RoleEdge = {
  __typename?: 'RoleEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Role */
  node: Role;
};

export type RoleFilter = {
  and?: InputMaybe<Array<RoleFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<RoleFilter>>;
};

export type RoleSort = {
  direction: SortDirection;
  field: RoleSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum RoleSortFields {
  Id = 'id'
}

export type Sector = {
  __typename?: 'Sector';
  actions?: Maybe<SectorActionsConnection>;
  actionsAggregate: Array<SectorActionsAggregateResponse>;
  articles?: Maybe<SectorArticlesConnection>;
  articlesAggregate: Array<SectorArticlesAggregateResponse>;
  briefings?: Maybe<SectorBriefingsConnection>;
  briefingsAggregate: Array<SectorBriefingsAggregateResponse>;
  companies?: Maybe<Array<Company>>;
  companiesAggregate: Array<SectorCompaniesAggregateResponse>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  ppd21: Scalars['Boolean'];
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type SectorActionsArgs = {
  filter?: ActionFilter;
  paging?: CursorPaging;
  sorting?: Array<ActionSort>;
};


export type SectorActionsAggregateArgs = {
  filter?: InputMaybe<ActionAggregateFilter>;
};


export type SectorArticlesArgs = {
  filter?: ArticleFilter;
  paging?: CursorPaging;
  sorting?: Array<ArticleSort>;
};


export type SectorArticlesAggregateArgs = {
  filter?: InputMaybe<ArticleAggregateFilter>;
};


export type SectorBriefingsArgs = {
  filter?: BriefingFilter;
  paging?: CursorPaging;
  sorting?: Array<BriefingSort>;
};


export type SectorBriefingsAggregateArgs = {
  filter?: InputMaybe<BriefingAggregateFilter>;
};


export type SectorCompaniesArgs = {
  filter?: CompanyFilter;
  sorting?: Array<CompanySort>;
};


export type SectorCompaniesAggregateArgs = {
  filter?: InputMaybe<CompanyAggregateFilter>;
};

export type SectorActionsAggregateGroupBy = {
  __typename?: 'SectorActionsAggregateGroupBy';
  actionStatus?: Maybe<ActionStatus>;
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  inActive?: Maybe<Scalars['Boolean']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  ongoing?: Maybe<Scalars['Boolean']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type SectorActionsAggregateResponse = {
  __typename?: 'SectorActionsAggregateResponse';
  avg?: Maybe<SectorActionsAvgAggregate>;
  count?: Maybe<SectorActionsCountAggregate>;
  groupBy?: Maybe<SectorActionsAggregateGroupBy>;
  max?: Maybe<SectorActionsMaxAggregate>;
  min?: Maybe<SectorActionsMinAggregate>;
  sum?: Maybe<SectorActionsSumAggregate>;
};

export type SectorActionsAvgAggregate = {
  __typename?: 'SectorActionsAvgAggregate';
  going?: Maybe<Scalars['Float']>;
  interested?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type SectorActionsConnection = {
  __typename?: 'SectorActionsConnection';
  /** Array of edges. */
  edges: Array<ActionEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type SectorActionsCountAggregate = {
  __typename?: 'SectorActionsCountAggregate';
  actionStatus?: Maybe<Scalars['Int']>;
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Int']>;
  going?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  impact?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  interested?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  ongoing?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  tacticId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type SectorActionsMaxAggregate = {
  __typename?: 'SectorActionsMaxAggregate';
  actionStatus?: Maybe<ActionStatus>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type SectorActionsMinAggregate = {
  __typename?: 'SectorActionsMinAggregate';
  actionStatus?: Maybe<ActionStatus>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type SectorActionsSumAggregate = {
  __typename?: 'SectorActionsSumAggregate';
  going?: Maybe<Scalars['Float']>;
  interested?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type SectorAggregateFilter = {
  and?: InputMaybe<Array<SectorAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SectorAggregateFilter>>;
  ppd21?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type SectorAggregateGroupBy = {
  __typename?: 'SectorAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ppd21?: Maybe<Scalars['Boolean']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type SectorAggregateGroupByCreatedArgs = {
  by?: GroupBy;
};


export type SectorAggregateGroupByRemoteUpdatedArgs = {
  by?: GroupBy;
};


export type SectorAggregateGroupByUpdatedArgs = {
  by?: GroupBy;
};

export type SectorAggregateResponse = {
  __typename?: 'SectorAggregateResponse';
  count?: Maybe<SectorCountAggregate>;
  groupBy?: Maybe<SectorAggregateGroupBy>;
  max?: Maybe<SectorMaxAggregate>;
  min?: Maybe<SectorMinAggregate>;
};

export type SectorArticlesAggregateGroupBy = {
  __typename?: 'SectorArticlesAggregateGroupBy';
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type SectorArticlesAggregateResponse = {
  __typename?: 'SectorArticlesAggregateResponse';
  count?: Maybe<SectorArticlesCountAggregate>;
  groupBy?: Maybe<SectorArticlesAggregateGroupBy>;
  max?: Maybe<SectorArticlesMaxAggregate>;
  min?: Maybe<SectorArticlesMinAggregate>;
};

export type SectorArticlesConnection = {
  __typename?: 'SectorArticlesConnection';
  /** Array of edges. */
  edges: Array<ArticleEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type SectorArticlesCountAggregate = {
  __typename?: 'SectorArticlesCountAggregate';
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  highlightUntilDate?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type SectorArticlesMaxAggregate = {
  __typename?: 'SectorArticlesMaxAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type SectorArticlesMinAggregate = {
  __typename?: 'SectorArticlesMinAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  highlightUntilDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type SectorBriefingsAggregateGroupBy = {
  __typename?: 'SectorBriefingsAggregateGroupBy';
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  restricted?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type SectorBriefingsAggregateResponse = {
  __typename?: 'SectorBriefingsAggregateResponse';
  count?: Maybe<SectorBriefingsCountAggregate>;
  groupBy?: Maybe<SectorBriefingsAggregateGroupBy>;
  max?: Maybe<SectorBriefingsMaxAggregate>;
  min?: Maybe<SectorBriefingsMinAggregate>;
};

export type SectorBriefingsConnection = {
  __typename?: 'SectorBriefingsConnection';
  /** Array of edges. */
  edges: Array<BriefingEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type SectorBriefingsCountAggregate = {
  __typename?: 'SectorBriefingsCountAggregate';
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  restricted?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type SectorBriefingsMaxAggregate = {
  __typename?: 'SectorBriefingsMaxAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type SectorBriefingsMinAggregate = {
  __typename?: 'SectorBriefingsMinAggregate';
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<BriefingType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type SectorCompaniesAggregateGroupBy = {
  __typename?: 'SectorCompaniesAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  ssoEmailPatterns?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type SectorCompaniesAggregateResponse = {
  __typename?: 'SectorCompaniesAggregateResponse';
  count?: Maybe<SectorCompaniesCountAggregate>;
  groupBy?: Maybe<SectorCompaniesAggregateGroupBy>;
  max?: Maybe<SectorCompaniesMaxAggregate>;
  min?: Maybe<SectorCompaniesMinAggregate>;
};

export type SectorCompaniesCountAggregate = {
  __typename?: 'SectorCompaniesCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  ssoEmailPatterns?: Maybe<Scalars['Int']>;
  team?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type SectorCompaniesMaxAggregate = {
  __typename?: 'SectorCompaniesMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  ssoEmailPatterns?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type SectorCompaniesMinAggregate = {
  __typename?: 'SectorCompaniesMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  ssoEmailPatterns?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type SectorConnection = {
  __typename?: 'SectorConnection';
  /** Array of edges. */
  edges: Array<SectorEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type SectorCountAggregate = {
  __typename?: 'SectorCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  ppd21?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type SectorDeleteFilter = {
  and?: InputMaybe<Array<SectorDeleteFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SectorDeleteFilter>>;
  ppd21?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type SectorDeleteResponse = {
  __typename?: 'SectorDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ppd21?: Maybe<Scalars['Boolean']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type SectorEdge = {
  __typename?: 'SectorEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Sector */
  node: Sector;
};

export type SectorFilter = {
  and?: InputMaybe<Array<SectorFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SectorFilter>>;
  ppd21?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type SectorMaxAggregate = {
  __typename?: 'SectorMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type SectorMinAggregate = {
  __typename?: 'SectorMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type SectorSort = {
  direction: SortDirection;
  field: SectorSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SectorSortFields {
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LockedBy = 'lockedBy',
  Name = 'name',
  Ppd21 = 'ppd21',
  RemoteUpdated = 'remoteUpdated',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type SectorUpdateFilter = {
  and?: InputMaybe<Array<SectorUpdateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SectorUpdateFilter>>;
  ppd21?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ServiceRequest = {
  __typename?: 'ServiceRequest';
  assignedTo?: Maybe<Array<Scalars['String']>>;
  client?: Maybe<Company>;
  clientId?: Maybe<Scalars['String']>;
  companyContactId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  deliverableURL?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  hours?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  plannedEndDate?: Maybe<Scalars['DateTime']>;
  plannedHours?: Maybe<Scalars['Float']>;
  plannedStartDate?: Maybe<Scalars['DateTime']>;
  priority?: Maybe<Scalars['String']>;
  qualifiesBespoke: Scalars['Boolean'];
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<ServiceRequestStatus>;
  targetDate?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  type?: Maybe<ServiceRequestType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
  updates?: Maybe<Array<ServiceRequestUpdateEntry>>;
};

export type ServiceRequestAggregateFilter = {
  and?: InputMaybe<Array<ServiceRequestAggregateFilter>>;
  assignedToRaw?: InputMaybe<StringFieldComparison>;
  client?: InputMaybe<ServiceRequestAggregateFilterCompanyAggregateFilter>;
  clientId?: InputMaybe<StringFieldComparison>;
  companyContactId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  hours?: InputMaybe<FloatFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ServiceRequestAggregateFilter>>;
  plannedEndDate?: InputMaybe<DateFieldComparison>;
  plannedHours?: InputMaybe<FloatFieldComparison>;
  plannedStartDate?: InputMaybe<DateFieldComparison>;
  priority?: InputMaybe<StringFieldComparison>;
  qualifiesBespoke?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<ServiceRequestStatusFilterComparison>;
  targetDate?: InputMaybe<DateFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<ServiceRequestTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ServiceRequestAggregateFilterCompanyAggregateFilter = {
  and?: InputMaybe<Array<ServiceRequestAggregateFilterCompanyAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ServiceRequestAggregateFilterCompanyAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  ssoEmailPatterns?: InputMaybe<StringFieldComparison>;
  team?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ServiceRequestAggregateGroupBy = {
  __typename?: 'ServiceRequestAggregateGroupBy';
  assignedToRaw?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  companyContactId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  hours?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  plannedEndDate?: Maybe<Scalars['DateTime']>;
  plannedHours?: Maybe<Scalars['Float']>;
  plannedStartDate?: Maybe<Scalars['DateTime']>;
  priority?: Maybe<Scalars['String']>;
  qualifiesBespoke?: Maybe<Scalars['Boolean']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<ServiceRequestStatus>;
  targetDate?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ServiceRequestType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type ServiceRequestAggregateGroupByCreatedArgs = {
  by?: GroupBy;
};


export type ServiceRequestAggregateGroupByEndDateArgs = {
  by?: GroupBy;
};


export type ServiceRequestAggregateGroupByPlannedEndDateArgs = {
  by?: GroupBy;
};


export type ServiceRequestAggregateGroupByPlannedStartDateArgs = {
  by?: GroupBy;
};


export type ServiceRequestAggregateGroupByRemoteUpdatedArgs = {
  by?: GroupBy;
};


export type ServiceRequestAggregateGroupByStartDateArgs = {
  by?: GroupBy;
};


export type ServiceRequestAggregateGroupByTargetDateArgs = {
  by?: GroupBy;
};


export type ServiceRequestAggregateGroupByUpdatedArgs = {
  by?: GroupBy;
};

export type ServiceRequestAggregateResponse = {
  __typename?: 'ServiceRequestAggregateResponse';
  avg?: Maybe<ServiceRequestAvgAggregate>;
  count?: Maybe<ServiceRequestCountAggregate>;
  groupBy?: Maybe<ServiceRequestAggregateGroupBy>;
  max?: Maybe<ServiceRequestMaxAggregate>;
  min?: Maybe<ServiceRequestMinAggregate>;
  sum?: Maybe<ServiceRequestSumAggregate>;
};

export type ServiceRequestAvgAggregate = {
  __typename?: 'ServiceRequestAvgAggregate';
  hours?: Maybe<Scalars['Float']>;
  plannedHours?: Maybe<Scalars['Float']>;
};

export type ServiceRequestConnection = {
  __typename?: 'ServiceRequestConnection';
  /** Array of edges. */
  edges: Array<ServiceRequestEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ServiceRequestCountAggregate = {
  __typename?: 'ServiceRequestCountAggregate';
  assignedToRaw?: Maybe<Scalars['Int']>;
  clientId?: Maybe<Scalars['Int']>;
  companyContactId?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Int']>;
  hours?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  plannedEndDate?: Maybe<Scalars['Int']>;
  plannedHours?: Maybe<Scalars['Int']>;
  plannedStartDate?: Maybe<Scalars['Int']>;
  priority?: Maybe<Scalars['Int']>;
  qualifiesBespoke?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  targetDate?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type ServiceRequestDeleteFilter = {
  and?: InputMaybe<Array<ServiceRequestDeleteFilter>>;
  assignedToRaw?: InputMaybe<StringFieldComparison>;
  clientId?: InputMaybe<StringFieldComparison>;
  companyContactId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  hours?: InputMaybe<FloatFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ServiceRequestDeleteFilter>>;
  plannedEndDate?: InputMaybe<DateFieldComparison>;
  plannedHours?: InputMaybe<FloatFieldComparison>;
  plannedStartDate?: InputMaybe<DateFieldComparison>;
  priority?: InputMaybe<StringFieldComparison>;
  qualifiesBespoke?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<ServiceRequestStatusFilterComparison>;
  targetDate?: InputMaybe<DateFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<ServiceRequestTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ServiceRequestDeleteResponse = {
  __typename?: 'ServiceRequestDeleteResponse';
  assignedTo?: Maybe<Array<Scalars['String']>>;
  clientId?: Maybe<Scalars['String']>;
  companyContactId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  deliverableURL?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  hours?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  plannedEndDate?: Maybe<Scalars['DateTime']>;
  plannedHours?: Maybe<Scalars['Float']>;
  plannedStartDate?: Maybe<Scalars['DateTime']>;
  priority?: Maybe<Scalars['String']>;
  qualifiesBespoke?: Maybe<Scalars['Boolean']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<ServiceRequestStatus>;
  targetDate?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ServiceRequestType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
  updates?: Maybe<Array<ServiceRequestUpdateEntry>>;
};

export type ServiceRequestEdge = {
  __typename?: 'ServiceRequestEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ServiceRequest */
  node: ServiceRequest;
};

export type ServiceRequestFilter = {
  and?: InputMaybe<Array<ServiceRequestFilter>>;
  assignedToRaw?: InputMaybe<StringFieldComparison>;
  client?: InputMaybe<ServiceRequestFilterCompanyFilter>;
  clientId?: InputMaybe<StringFieldComparison>;
  companyContactId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  hours?: InputMaybe<FloatFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ServiceRequestFilter>>;
  plannedEndDate?: InputMaybe<DateFieldComparison>;
  plannedHours?: InputMaybe<FloatFieldComparison>;
  plannedStartDate?: InputMaybe<DateFieldComparison>;
  priority?: InputMaybe<StringFieldComparison>;
  qualifiesBespoke?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<ServiceRequestStatusFilterComparison>;
  targetDate?: InputMaybe<DateFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<ServiceRequestTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ServiceRequestFilterCompanyFilter = {
  and?: InputMaybe<Array<ServiceRequestFilterCompanyFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ServiceRequestFilterCompanyFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  ssoEmailPatterns?: InputMaybe<StringFieldComparison>;
  team?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ServiceRequestMaxAggregate = {
  __typename?: 'ServiceRequestMaxAggregate';
  assignedToRaw?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  companyContactId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  hours?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  plannedEndDate?: Maybe<Scalars['DateTime']>;
  plannedHours?: Maybe<Scalars['Float']>;
  plannedStartDate?: Maybe<Scalars['DateTime']>;
  priority?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<ServiceRequestStatus>;
  targetDate?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ServiceRequestType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ServiceRequestMinAggregate = {
  __typename?: 'ServiceRequestMinAggregate';
  assignedToRaw?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  companyContactId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  hours?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  plannedEndDate?: Maybe<Scalars['DateTime']>;
  plannedHours?: Maybe<Scalars['Float']>;
  plannedStartDate?: Maybe<Scalars['DateTime']>;
  priority?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<ServiceRequestStatus>;
  targetDate?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ServiceRequestType>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ServiceRequestSort = {
  direction: SortDirection;
  field: ServiceRequestSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ServiceRequestSortFields {
  AssignedToRaw = 'assignedToRaw',
  ClientId = 'clientId',
  CompanyContactId = 'companyContactId',
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  EndDate = 'endDate',
  Hours = 'hours',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LockedBy = 'lockedBy',
  PlannedEndDate = 'plannedEndDate',
  PlannedHours = 'plannedHours',
  PlannedStartDate = 'plannedStartDate',
  Priority = 'priority',
  QualifiesBespoke = 'qualifiesBespoke',
  RemoteUpdated = 'remoteUpdated',
  StartDate = 'startDate',
  Status = 'status',
  TargetDate = 'targetDate',
  Title = 'title',
  Type = 'type',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export enum ServiceRequestStatus {
  Approved = 'Approved',
  Assessment = 'Assessment',
  Cancelled = 'Cancelled',
  Completed = 'Completed',
  Forecasted = 'Forecasted',
  InProgress = 'InProgress',
  Paused = 'Paused',
  Planned = 'Planned',
  Rejected = 'Rejected',
  Requested = 'Requested'
}

export type ServiceRequestStatusFilterComparison = {
  eq?: InputMaybe<ServiceRequestStatus>;
  gt?: InputMaybe<ServiceRequestStatus>;
  gte?: InputMaybe<ServiceRequestStatus>;
  iLike?: InputMaybe<ServiceRequestStatus>;
  in?: InputMaybe<Array<ServiceRequestStatus>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<ServiceRequestStatus>;
  lt?: InputMaybe<ServiceRequestStatus>;
  lte?: InputMaybe<ServiceRequestStatus>;
  neq?: InputMaybe<ServiceRequestStatus>;
  notILike?: InputMaybe<ServiceRequestStatus>;
  notIn?: InputMaybe<Array<ServiceRequestStatus>>;
  notLike?: InputMaybe<ServiceRequestStatus>;
};

export type ServiceRequestSubscriptionFilter = {
  and?: InputMaybe<Array<ServiceRequestSubscriptionFilter>>;
  assignedToRaw?: InputMaybe<StringFieldComparison>;
  clientId?: InputMaybe<StringFieldComparison>;
  companyContactId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  hours?: InputMaybe<FloatFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ServiceRequestSubscriptionFilter>>;
  plannedEndDate?: InputMaybe<DateFieldComparison>;
  plannedHours?: InputMaybe<FloatFieldComparison>;
  plannedStartDate?: InputMaybe<DateFieldComparison>;
  priority?: InputMaybe<StringFieldComparison>;
  qualifiesBespoke?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<ServiceRequestStatusFilterComparison>;
  targetDate?: InputMaybe<DateFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<ServiceRequestTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type ServiceRequestSumAggregate = {
  __typename?: 'ServiceRequestSumAggregate';
  hours?: Maybe<Scalars['Float']>;
  plannedHours?: Maybe<Scalars['Float']>;
};

export enum ServiceRequestType {
  Briefing = 'Briefing',
  CustomerSatisfaction = 'CustomerSatisfaction',
  DataRequest = 'DataRequest',
  Holiday = 'Holiday',
  Integration = 'Integration',
  Internal = 'Internal',
  Monitoring = 'Monitoring',
  Ooo = 'OOO',
  Other = 'Other',
  Presentation = 'Presentation',
  Profile = 'Profile',
  Query = 'Query',
  Report = 'Report',
  SourceCheck = 'SourceCheck',
  System = 'System',
  Training = 'Training',
  Vacation = 'Vacation',
  Webinar = 'Webinar'
}

export type ServiceRequestTypeFilterComparison = {
  eq?: InputMaybe<ServiceRequestType>;
  gt?: InputMaybe<ServiceRequestType>;
  gte?: InputMaybe<ServiceRequestType>;
  iLike?: InputMaybe<ServiceRequestType>;
  in?: InputMaybe<Array<ServiceRequestType>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<ServiceRequestType>;
  lt?: InputMaybe<ServiceRequestType>;
  lte?: InputMaybe<ServiceRequestType>;
  neq?: InputMaybe<ServiceRequestType>;
  notILike?: InputMaybe<ServiceRequestType>;
  notIn?: InputMaybe<Array<ServiceRequestType>>;
  notLike?: InputMaybe<ServiceRequestType>;
};

export type ServiceRequestUpdateEntry = {
  __typename?: 'ServiceRequestUpdateEntry';
  analyst?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  hours?: Maybe<Scalars['Float']>;
};

export type ServiceRequestUpdateEntryInput = {
  analyst?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  hours?: InputMaybe<Scalars['Float']>;
};

export type ServiceRequestUpdateFilter = {
  and?: InputMaybe<Array<ServiceRequestUpdateFilter>>;
  assignedToRaw?: InputMaybe<StringFieldComparison>;
  clientId?: InputMaybe<StringFieldComparison>;
  companyContactId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  endDate?: InputMaybe<DateFieldComparison>;
  hours?: InputMaybe<FloatFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ServiceRequestUpdateFilter>>;
  plannedEndDate?: InputMaybe<DateFieldComparison>;
  plannedHours?: InputMaybe<FloatFieldComparison>;
  plannedStartDate?: InputMaybe<DateFieldComparison>;
  priority?: InputMaybe<StringFieldComparison>;
  qualifiesBespoke?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<ServiceRequestStatusFilterComparison>;
  targetDate?: InputMaybe<DateFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<ServiceRequestTypeFilterComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type SetAcksOnClientNotificationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetActionsOfInterestOnCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetActionsOnCampaignInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetActionsOnCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetActionsOnEventInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetActionsOnGroupInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetActionsOnIssueInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetActionsOnLocationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetActionsOnProminentIndividualInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetActionsOnSectorInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetActionsOnTacticInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetAdvisoriesOnTravelRiskCountryInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetAnnualSubscriptionOnAttachmentInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetArticlesOfInterestOnCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetArticlesOnCampaignInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetArticlesOnCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetArticlesOnEventInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetArticlesOnGroupInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetArticlesOnIssueInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetArticlesOnLocationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetArticlesOnProminentIndividualInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetArticlesOnSectorInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetAttachmentsOnAnnualSubscriptionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetBriefingsOnCampaignInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetBriefingsOnCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetBriefingsOnEventInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetBriefingsOnGroupInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetBriefingsOnIssueInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetBriefingsOnLocationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetBriefingsOnSectorInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetCampaignsOnActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetCampaignsOnArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetCampaignsOnBriefingInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetCampaignsOnResourceInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetClientNotificationOnClientNotificationAckInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetClientOnAnnualSubscriptionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetClientOnCompanyIntegrationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetClientOnCompanyLocationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetClientOnServiceRequestInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetCompaniesOnActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetCompaniesOnArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetCompaniesOnBriefingInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetCompaniesOnClientNotificationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetCompaniesOnResourceInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetCompaniesOnSectorInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetCompanyOnCompanyContactInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetCompanyOnEventInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetContactOnAnnualSubscriptionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetContactsOnCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetEventsOnActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetEventsOnArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetEventsOnBriefingInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetEventsOnLocationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetGroupsOnActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetGroupsOnArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetGroupsOnBriefingInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetGroupsOnResourceInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetIntegrationsOnCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetIssuesOnActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetIssuesOnArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetIssuesOnBriefingInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetIssuesOnResourceInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetLocationOnActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetLocationOnArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetLocationOnBriefingInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetLocationOnEventInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetLocationsOnCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetOfInterestToOnActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetOfInterestToOnArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetParentGroupOnGroupInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetPortalPreferencesOnAdUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetPortalPreferencesOnCompanyContactInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetProminentIndividualsOnActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetProminentIndividualsOnArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetRelatedActionsOnArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetRelatedArticlesOnArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetSectorsOnActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetSectorsOnArticleInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetSectorsOnBriefingInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetSectorsOnCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetSectorsOnEventInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetSectorsOnResourceInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetSubGroupsOnGroupInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetSubscriptionsOnCompanyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetTacticOnActionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetTacticsOnResourceInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetTravelRiskCountryOnTravelRiskAdvisoryInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type SourcesDimensionDetailArg = {
  dimension: DimensionType;
  source: Scalars['String'];
};

export type SourcesDimensionDetailResults = {
  __typename?: 'SourcesDimensionDetailResults';
  count: Scalars['Float'];
  name: Scalars['String'];
};

export type SourcesSummaryArg = {
  analyst?: InputMaybe<Scalars['String']>;
  campaigns?: InputMaybe<Array<Scalars['String']>>;
  cities?: InputMaybe<Array<Scalars['String']>>;
  companies?: InputMaybe<Array<Scalars['String']>>;
  countries?: InputMaybe<Array<Scalars['String']>>;
  filter?: InputMaybe<Scalars['String']>;
  from: Scalars['DateTime'];
  groups?: InputMaybe<Array<Scalars['String']>>;
  impacts?: InputMaybe<Array<Scalars['String']>>;
  issues?: InputMaybe<Array<Scalars['String']>>;
  provinces?: InputMaybe<Array<Scalars['String']>>;
  regions?: InputMaybe<Array<Scalars['String']>>;
  sectors?: InputMaybe<Array<Scalars['String']>>;
  tactics?: InputMaybe<Array<Scalars['String']>>;
  to: Scalars['DateTime'];
};

export type SourcesSummaryResults = {
  __typename?: 'SourcesSummaryResults';
  count?: Maybe<Scalars['Float']>;
  createdBy?: Maybe<Scalars['String']>;
  source: Scalars['String'];
};

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  iLike?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  notILike?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  notLike?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  createdAction: Action;
  createdClientNotification: ClientNotification;
  createdProtestBacklog: ProtestBacklog;
  createdServiceRequest: ServiceRequest;
  deletedManyActions: DeleteManyResponse;
  deletedManyClientNotifications: DeleteManyResponse;
  deletedManyProtestBacklogs: DeleteManyResponse;
  deletedManyServiceRequests: DeleteManyResponse;
  deletedOneAction: ActionDeleteResponse;
  deletedOneClientNotification: ClientNotificationDeleteResponse;
  deletedOneProtestBacklog: ProtestBacklogDeleteResponse;
  deletedOneServiceRequest: ServiceRequestDeleteResponse;
  updatedManyActions: UpdateManyResponse;
  updatedManyClientNotifications: UpdateManyResponse;
  updatedManyProtestBacklogs: UpdateManyResponse;
  updatedManyServiceRequests: UpdateManyResponse;
  updatedOneAction: Action;
  updatedOneClientNotification: ClientNotification;
  updatedOneProtestBacklog: ProtestBacklog;
  updatedOneServiceRequest: ServiceRequest;
};


export type SubscriptionCreatedActionArgs = {
  input?: InputMaybe<CreateActionSubscriptionFilterInput>;
};


export type SubscriptionCreatedClientNotificationArgs = {
  input?: InputMaybe<CreateClientNotificationSubscriptionFilterInput>;
};


export type SubscriptionCreatedProtestBacklogArgs = {
  input?: InputMaybe<CreateProtestBacklogSubscriptionFilterInput>;
};


export type SubscriptionCreatedServiceRequestArgs = {
  input?: InputMaybe<CreateServiceRequestSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneActionArgs = {
  input?: InputMaybe<DeleteOneActionSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneClientNotificationArgs = {
  input?: InputMaybe<DeleteOneClientNotificationSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneProtestBacklogArgs = {
  input?: InputMaybe<DeleteOneProtestBacklogSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneServiceRequestArgs = {
  input?: InputMaybe<DeleteOneServiceRequestSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneActionArgs = {
  input?: InputMaybe<UpdateOneActionSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneClientNotificationArgs = {
  input?: InputMaybe<UpdateOneClientNotificationSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneProtestBacklogArgs = {
  input?: InputMaybe<UpdateOneProtestBacklogSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneServiceRequestArgs = {
  input?: InputMaybe<UpdateOneServiceRequestSubscriptionFilterInput>;
};

export type Tactic = {
  __typename?: 'Tactic';
  actions?: Maybe<TacticActionsConnection>;
  actionsAggregate: Array<TacticActionsAggregateResponse>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  protest: Scalars['Boolean'];
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
  virtual: Scalars['Boolean'];
};


export type TacticActionsArgs = {
  filter?: ActionFilter;
  paging?: CursorPaging;
  sorting?: Array<ActionSort>;
};


export type TacticActionsAggregateArgs = {
  filter?: InputMaybe<ActionAggregateFilter>;
};

export type TacticActionsAggregateGroupBy = {
  __typename?: 'TacticActionsAggregateGroupBy';
  actionStatus?: Maybe<ActionStatus>;
  alertNotification?: Maybe<Scalars['Boolean']>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  inActive?: Maybe<Scalars['Boolean']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  ongoing?: Maybe<Scalars['Boolean']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type TacticActionsAggregateResponse = {
  __typename?: 'TacticActionsAggregateResponse';
  avg?: Maybe<TacticActionsAvgAggregate>;
  count?: Maybe<TacticActionsCountAggregate>;
  groupBy?: Maybe<TacticActionsAggregateGroupBy>;
  max?: Maybe<TacticActionsMaxAggregate>;
  min?: Maybe<TacticActionsMinAggregate>;
  sum?: Maybe<TacticActionsSumAggregate>;
};

export type TacticActionsAvgAggregate = {
  __typename?: 'TacticActionsAvgAggregate';
  going?: Maybe<Scalars['Float']>;
  interested?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type TacticActionsConnection = {
  __typename?: 'TacticActionsConnection';
  /** Array of edges. */
  edges: Array<ActionEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type TacticActionsCountAggregate = {
  __typename?: 'TacticActionsCountAggregate';
  actionStatus?: Maybe<Scalars['Int']>;
  alertNotification?: Maybe<Scalars['Int']>;
  audienceRaw?: Maybe<Scalars['Int']>;
  bringForward?: Maybe<Scalars['Int']>;
  contentApprovedBy?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  draftedBy?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['Int']>;
  going?: Maybe<Scalars['Int']>;
  hashtagsRaw?: Maybe<Scalars['Int']>;
  highlightImageUrl?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  impact?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  interested?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lastModifiedDate?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Int']>;
  mainUntilDate?: Maybe<Scalars['Int']>;
  ongoing?: Maybe<Scalars['Int']>;
  publishedBy?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  sourceRefId?: Maybe<Scalars['Int']>;
  sourcesRaw?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  styleApprovedBy?: Maybe<Scalars['Int']>;
  tacticId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type TacticActionsMaxAggregate = {
  __typename?: 'TacticActionsMaxAggregate';
  actionStatus?: Maybe<ActionStatus>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type TacticActionsMinAggregate = {
  __typename?: 'TacticActionsMinAggregate';
  actionStatus?: Maybe<ActionStatus>;
  audienceRaw?: Maybe<Scalars['String']>;
  bringForward?: Maybe<Scalars['String']>;
  contentApprovedBy?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  deletedBy?: Maybe<Scalars['String']>;
  draftedBy?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  going?: Maybe<Scalars['Float']>;
  hashtagsRaw?: Maybe<Scalars['String']>;
  highlightImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  impact?: Maybe<Scalars['String']>;
  interested?: Maybe<Scalars['Float']>;
  internalComment?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  latitude?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  mainUntilDate?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  sourceRefId?: Maybe<Scalars['String']>;
  sourcesRaw?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  styleApprovedBy?: Maybe<Scalars['String']>;
  tacticId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type TacticActionsSumAggregate = {
  __typename?: 'TacticActionsSumAggregate';
  going?: Maybe<Scalars['Float']>;
  interested?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type TacticAggregateFilter = {
  and?: InputMaybe<Array<TacticAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TacticAggregateFilter>>;
  protest?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
  virtual?: InputMaybe<BooleanFieldComparison>;
};

export type TacticAggregateGroupBy = {
  __typename?: 'TacticAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  protest?: Maybe<Scalars['Boolean']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
  virtual?: Maybe<Scalars['Boolean']>;
};


export type TacticAggregateGroupByCreatedArgs = {
  by?: GroupBy;
};


export type TacticAggregateGroupByRemoteUpdatedArgs = {
  by?: GroupBy;
};


export type TacticAggregateGroupByUpdatedArgs = {
  by?: GroupBy;
};

export type TacticAggregateResponse = {
  __typename?: 'TacticAggregateResponse';
  count?: Maybe<TacticCountAggregate>;
  groupBy?: Maybe<TacticAggregateGroupBy>;
  max?: Maybe<TacticMaxAggregate>;
  min?: Maybe<TacticMinAggregate>;
};

export type TacticConnection = {
  __typename?: 'TacticConnection';
  /** Array of edges. */
  edges: Array<TacticEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type TacticCountAggregate = {
  __typename?: 'TacticCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  protest?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
  virtual?: Maybe<Scalars['Int']>;
};

export type TacticDeleteFilter = {
  and?: InputMaybe<Array<TacticDeleteFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TacticDeleteFilter>>;
  protest?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
  virtual?: InputMaybe<BooleanFieldComparison>;
};

export type TacticDeleteResponse = {
  __typename?: 'TacticDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  protest?: Maybe<Scalars['Boolean']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
  virtual?: Maybe<Scalars['Boolean']>;
};

export type TacticEdge = {
  __typename?: 'TacticEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Tactic */
  node: Tactic;
};

export type TacticFilter = {
  and?: InputMaybe<Array<TacticFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TacticFilter>>;
  protest?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
  virtual?: InputMaybe<BooleanFieldComparison>;
};

export type TacticMaxAggregate = {
  __typename?: 'TacticMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type TacticMinAggregate = {
  __typename?: 'TacticMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type TacticSort = {
  direction: SortDirection;
  field: TacticSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum TacticSortFields {
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LockedBy = 'lockedBy',
  Name = 'name',
  Protest = 'protest',
  RemoteUpdated = 'remoteUpdated',
  Updated = 'updated',
  UpdatedBy = 'updatedBy',
  Virtual = 'virtual'
}

export type TacticUpdateFilter = {
  and?: InputMaybe<Array<TacticUpdateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TacticUpdateFilter>>;
  protest?: InputMaybe<BooleanFieldComparison>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
  virtual?: InputMaybe<BooleanFieldComparison>;
};

export type Term = {
  __typename?: 'Term';
  acronym?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  term: Scalars['String'];
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type TermConnection = {
  __typename?: 'TermConnection';
  /** Array of edges. */
  edges: Array<TermEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type TermDeleteFilter = {
  acronym?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<TermDeleteFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TermDeleteFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  term?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type TermDeleteResponse = {
  __typename?: 'TermDeleteResponse';
  acronym?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  term?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type TermEdge = {
  __typename?: 'TermEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Term */
  node: Term;
};

export type TermFilter = {
  acronym?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<TermFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TermFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  term?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type TermSort = {
  direction: SortDirection;
  field: TermSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum TermSortFields {
  Acronym = 'acronym',
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  Description = 'description',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LockedBy = 'lockedBy',
  RemoteUpdated = 'remoteUpdated',
  Term = 'term',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type TermUpdateFilter = {
  acronym?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<TermUpdateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TermUpdateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  term?: InputMaybe<StringFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type TravelRiskAdvisory = {
  __typename?: 'TravelRiskAdvisory';
  asOfDate: Scalars['DateTime'];
  countryId?: Maybe<Scalars['String']>;
  countryName: Scalars['String'];
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  isoCode: Scalars['String'];
  lockedBy?: Maybe<Scalars['String']>;
  recommendation?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  risk?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  travelRiskCountry?: Maybe<TravelRiskCountry>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type TravelRiskAdvisoryAggregateFilter = {
  and?: InputMaybe<Array<TravelRiskAdvisoryAggregateFilter>>;
  countryId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TravelRiskAdvisoryAggregateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  travelRiskCountry?: InputMaybe<TravelRiskAdvisoryAggregateFilterTravelRiskCountryAggregateFilter>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type TravelRiskAdvisoryAggregateFilterTravelRiskCountryAggregateFilter = {
  and?: InputMaybe<Array<TravelRiskAdvisoryAggregateFilterTravelRiskCountryAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  isoCode?: InputMaybe<IdFilterComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TravelRiskAdvisoryAggregateFilterTravelRiskCountryAggregateFilter>>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type TravelRiskAdvisoryAggregateGroupBy = {
  __typename?: 'TravelRiskAdvisoryAggregateGroupBy';
  countryId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type TravelRiskAdvisoryAggregateGroupByCreatedArgs = {
  by?: GroupBy;
};


export type TravelRiskAdvisoryAggregateGroupByRemoteUpdatedArgs = {
  by?: GroupBy;
};


export type TravelRiskAdvisoryAggregateGroupByUpdatedArgs = {
  by?: GroupBy;
};

export type TravelRiskAdvisoryAggregateResponse = {
  __typename?: 'TravelRiskAdvisoryAggregateResponse';
  count?: Maybe<TravelRiskAdvisoryCountAggregate>;
  groupBy?: Maybe<TravelRiskAdvisoryAggregateGroupBy>;
  max?: Maybe<TravelRiskAdvisoryMaxAggregate>;
  min?: Maybe<TravelRiskAdvisoryMinAggregate>;
};

export type TravelRiskAdvisoryConnection = {
  __typename?: 'TravelRiskAdvisoryConnection';
  /** Array of edges. */
  edges: Array<TravelRiskAdvisoryEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type TravelRiskAdvisoryCountAggregate = {
  __typename?: 'TravelRiskAdvisoryCountAggregate';
  countryId?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type TravelRiskAdvisoryDeleteFilter = {
  and?: InputMaybe<Array<TravelRiskAdvisoryDeleteFilter>>;
  countryId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TravelRiskAdvisoryDeleteFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type TravelRiskAdvisoryDeleteResponse = {
  __typename?: 'TravelRiskAdvisoryDeleteResponse';
  asOfDate?: Maybe<Scalars['DateTime']>;
  countryId?: Maybe<Scalars['String']>;
  countryName?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  isoCode?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  recommendation?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  risk?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type TravelRiskAdvisoryEdge = {
  __typename?: 'TravelRiskAdvisoryEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the TravelRiskAdvisory */
  node: TravelRiskAdvisory;
};

export type TravelRiskAdvisoryFilter = {
  and?: InputMaybe<Array<TravelRiskAdvisoryFilter>>;
  countryId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TravelRiskAdvisoryFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  travelRiskCountry?: InputMaybe<TravelRiskAdvisoryFilterTravelRiskCountryFilter>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type TravelRiskAdvisoryFilterTravelRiskCountryFilter = {
  and?: InputMaybe<Array<TravelRiskAdvisoryFilterTravelRiskCountryFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  isoCode?: InputMaybe<IdFilterComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TravelRiskAdvisoryFilterTravelRiskCountryFilter>>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type TravelRiskAdvisoryMaxAggregate = {
  __typename?: 'TravelRiskAdvisoryMaxAggregate';
  countryId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type TravelRiskAdvisoryMinAggregate = {
  __typename?: 'TravelRiskAdvisoryMinAggregate';
  countryId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type TravelRiskAdvisorySort = {
  direction: SortDirection;
  field: TravelRiskAdvisorySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum TravelRiskAdvisorySortFields {
  CountryId = 'countryId',
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  Id = 'id',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  LockedBy = 'lockedBy',
  RemoteUpdated = 'remoteUpdated',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type TravelRiskAdvisoryUpdateFilter = {
  and?: InputMaybe<Array<TravelRiskAdvisoryUpdateFilter>>;
  countryId?: InputMaybe<StringFieldComparison>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TravelRiskAdvisoryUpdateFilter>>;
  remoteUpdated?: InputMaybe<DateFieldComparison>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type TravelRiskCountry = {
  __typename?: 'TravelRiskCountry';
  advisories?: Maybe<TravelRiskCountryAdvisoriesConnection>;
  advisoriesAggregate: Array<TravelRiskCountryAdvisoriesAggregateResponse>;
  asOfDate: Scalars['DateTime'];
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  isoCode: Scalars['ID'];
  lockedBy?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  risk?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type TravelRiskCountryAdvisoriesArgs = {
  filter?: TravelRiskAdvisoryFilter;
  paging?: CursorPaging;
  sorting?: Array<TravelRiskAdvisorySort>;
};


export type TravelRiskCountryAdvisoriesAggregateArgs = {
  filter?: InputMaybe<TravelRiskAdvisoryAggregateFilter>;
};

export type TravelRiskCountryAdvisoriesAggregateGroupBy = {
  __typename?: 'TravelRiskCountryAdvisoriesAggregateGroupBy';
  countryId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type TravelRiskCountryAdvisoriesAggregateResponse = {
  __typename?: 'TravelRiskCountryAdvisoriesAggregateResponse';
  count?: Maybe<TravelRiskCountryAdvisoriesCountAggregate>;
  groupBy?: Maybe<TravelRiskCountryAdvisoriesAggregateGroupBy>;
  max?: Maybe<TravelRiskCountryAdvisoriesMaxAggregate>;
  min?: Maybe<TravelRiskCountryAdvisoriesMinAggregate>;
};

export type TravelRiskCountryAdvisoriesConnection = {
  __typename?: 'TravelRiskCountryAdvisoriesConnection';
  /** Array of edges. */
  edges: Array<TravelRiskAdvisoryEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type TravelRiskCountryAdvisoriesCountAggregate = {
  __typename?: 'TravelRiskCountryAdvisoriesCountAggregate';
  countryId?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  remoteUpdated?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type TravelRiskCountryAdvisoriesMaxAggregate = {
  __typename?: 'TravelRiskCountryAdvisoriesMaxAggregate';
  countryId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type TravelRiskCountryAdvisoriesMinAggregate = {
  __typename?: 'TravelRiskCountryAdvisoriesMinAggregate';
  countryId?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalComment?: Maybe<Scalars['String']>;
  lockedBy?: Maybe<Scalars['String']>;
  remoteUpdated?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type TravelRiskCountryAggregateFilter = {
  and?: InputMaybe<Array<TravelRiskCountryAggregateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  isoCode?: InputMaybe<IdFilterComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TravelRiskCountryAggregateFilter>>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type TravelRiskCountryAggregateGroupBy = {
  __typename?: 'TravelRiskCountryAggregateGroupBy';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  isoCode?: Maybe<Scalars['ID']>;
  lockedBy?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};


export type TravelRiskCountryAggregateGroupByCreatedArgs = {
  by?: GroupBy;
};


export type TravelRiskCountryAggregateGroupByUpdatedArgs = {
  by?: GroupBy;
};

export type TravelRiskCountryAggregateResponse = {
  __typename?: 'TravelRiskCountryAggregateResponse';
  count?: Maybe<TravelRiskCountryCountAggregate>;
  groupBy?: Maybe<TravelRiskCountryAggregateGroupBy>;
  max?: Maybe<TravelRiskCountryMaxAggregate>;
  min?: Maybe<TravelRiskCountryMinAggregate>;
};

export type TravelRiskCountryConnection = {
  __typename?: 'TravelRiskCountryConnection';
  /** Array of edges. */
  edges: Array<TravelRiskCountryEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type TravelRiskCountryCountAggregate = {
  __typename?: 'TravelRiskCountryCountAggregate';
  created?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<Scalars['Int']>;
  deletedBy?: Maybe<Scalars['Int']>;
  inActive?: Maybe<Scalars['Int']>;
  internalComment?: Maybe<Scalars['Int']>;
  isoCode?: Maybe<Scalars['Int']>;
  lockedBy?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['Int']>;
  updatedBy?: Maybe<Scalars['Int']>;
};

export type TravelRiskCountryDeleteFilter = {
  and?: InputMaybe<Array<TravelRiskCountryDeleteFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  isoCode?: InputMaybe<IdFilterComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TravelRiskCountryDeleteFilter>>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type TravelRiskCountryDeleteResponse = {
  __typename?: 'TravelRiskCountryDeleteResponse';
  asOfDate?: Maybe<Scalars['DateTime']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  inActive?: Maybe<Scalars['Boolean']>;
  internalComment?: Maybe<Scalars['String']>;
  isoCode?: Maybe<Scalars['ID']>;
  lockedBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  risk?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type TravelRiskCountryEdge = {
  __typename?: 'TravelRiskCountryEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the TravelRiskCountry */
  node: TravelRiskCountry;
};

export type TravelRiskCountryFilter = {
  and?: InputMaybe<Array<TravelRiskCountryFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  isoCode?: InputMaybe<IdFilterComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TravelRiskCountryFilter>>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type TravelRiskCountryMaxAggregate = {
  __typename?: 'TravelRiskCountryMaxAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  internalComment?: Maybe<Scalars['String']>;
  isoCode?: Maybe<Scalars['ID']>;
  lockedBy?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type TravelRiskCountryMinAggregate = {
  __typename?: 'TravelRiskCountryMinAggregate';
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['String']>;
  internalComment?: Maybe<Scalars['String']>;
  isoCode?: Maybe<Scalars['ID']>;
  lockedBy?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type TravelRiskCountrySort = {
  direction: SortDirection;
  field: TravelRiskCountrySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum TravelRiskCountrySortFields {
  Created = 'created',
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  InActive = 'inActive',
  InternalComment = 'internalComment',
  IsoCode = 'isoCode',
  LockedBy = 'lockedBy',
  Updated = 'updated',
  UpdatedBy = 'updatedBy'
}

export type TravelRiskCountryUpdateFilter = {
  and?: InputMaybe<Array<TravelRiskCountryUpdateFilter>>;
  created?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<StringFieldComparison>;
  deletedBy?: InputMaybe<StringFieldComparison>;
  inActive?: InputMaybe<BooleanFieldComparison>;
  internalComment?: InputMaybe<StringFieldComparison>;
  isoCode?: InputMaybe<IdFilterComparison>;
  lockedBy?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TravelRiskCountryUpdateFilter>>;
  updated?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<StringFieldComparison>;
};

export type UnreadDetailArg = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
};

export type UnreadDetailResult = {
  __typename?: 'UnreadDetailResult';
  id?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UpdateActivityLog = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  referenceEntity?: InputMaybe<Scalars['String']>;
  referenceId?: InputMaybe<Scalars['String']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<ActivityLogType>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type UpdateAdUser = {
  companyId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['ID']>;
  givenName?: InputMaybe<Scalars['String']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<Scalars['String']>>;
  signature?: InputMaybe<Scalars['String']>;
  surname?: InputMaybe<Scalars['String']>;
  systemEmails?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type UpdateAttachment = {
  annualSubscriptionId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};

export type UpdateAudience = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  script?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type UpdateCampaign = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  global?: InputMaybe<Scalars['Boolean']>;
  hashtags?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lastModifiedDate?: InputMaybe<Scalars['DateTime']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  monitoring?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  overview?: InputMaybe<Scalars['String']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  socialMedia?: InputMaybe<Array<Scalars['String']>>;
  stage?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PostStatus>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type UpdateIntegrationTxLog = {
  companyId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  eventDate?: InputMaybe<Scalars['DateTime']>;
  eventId?: InputMaybe<Scalars['String']>;
  eventUpdated?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<IntegrationType>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type UpdateIssue = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  hashtags?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lastModifiedDate?: InputMaybe<Scalars['DateTime']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  monitoring?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  overview?: InputMaybe<Scalars['String']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  stage?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PostStatus>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type UpdateManyActivityLogsInput = {
  /** Filter used to find fields to update */
  filter: ActivityLogUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateActivityLog;
};

export type UpdateManyAdUsersInput = {
  /** Filter used to find fields to update */
  filter: AdUserUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateAdUser;
};

export type UpdateManyAudiencesInput = {
  /** Filter used to find fields to update */
  filter: AudienceUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateAudience;
};

export type UpdateManyCampaignsInput = {
  /** Filter used to find fields to update */
  filter: CampaignUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateCampaign;
};

export type UpdateManyIntegrationTxLogsInput = {
  /** Filter used to find fields to update */
  filter: IntegrationTxLogUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateIntegrationTxLog;
};

export type UpdateManyIssuesInput = {
  /** Filter used to find fields to update */
  filter: IssueUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateIssue;
};

export type UpdateManyPortalExternalSharesInput = {
  /** Filter used to find fields to update */
  filter: PortalExternalShareUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdatePortalExternalShare;
};

export type UpdateManyPortalsInput = {
  /** Filter used to find fields to update */
  filter: PortalUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdatePortal;
};

export type UpdateManyProminentIndividualsInput = {
  /** Filter used to find fields to update */
  filter: ProminentIndividualUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProminentIndividual;
};

export type UpdateManyProtestBacklogsInput = {
  /** Filter used to find fields to update */
  filter: ProtestBacklogUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProtestBacklog;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int'];
};

export type UpdateManySectorsInput = {
  /** Filter used to find fields to update */
  filter: SectorUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateSector;
};

export type UpdateManyServiceRequestsInput = {
  /** Filter used to find fields to update */
  filter: ServiceRequestUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateServiceRequest;
};

export type UpdateManyTacticsInput = {
  /** Filter used to find fields to update */
  filter: TacticUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateTactic;
};

export type UpdateManyTermsInput = {
  /** Filter used to find fields to update */
  filter: TermUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateTerm;
};

export type UpdateManyTravelRiskAdvisoriesInput = {
  /** Filter used to find fields to update */
  filter: TravelRiskAdvisoryUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateTravelRiskAdvisory;
};

export type UpdateManyTravelRiskCountriesInput = {
  /** Filter used to find fields to update */
  filter: TravelRiskCountryUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateTravelRiskCountry;
};

export type UpdateOneActionSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ActionSubscriptionFilter;
};

export type UpdateOneActivityLogInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateActivityLog;
};

export type UpdateOneAdUserInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateAdUser;
};

export type UpdateOneAnnualSubscriptionInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: AnnualSubscriptionDto;
};

export type UpdateOneAttachmentInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateAttachment;
};

export type UpdateOneAudienceInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateAudience;
};

export type UpdateOneCampaignInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateCampaign;
};

export type UpdateOneClientNotificationInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: ClientNotificationDto;
};

export type UpdateOneClientNotificationSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ClientNotificationSubscriptionFilter;
};

export type UpdateOneCompanyContactInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: CompanyContactUpdateDto;
};

export type UpdateOneCompanyInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: CompanyDto;
};

export type UpdateOneCompanyIntegrationInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: CompanyIntegrationDto;
};

export type UpdateOneCompanyLocationInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: CompanyLocationDto;
};

export type UpdateOneEventInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: EventDto;
};

export type UpdateOneGroupInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: GroupDto;
};

export type UpdateOneIntegrationTxLogInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateIntegrationTxLog;
};

export type UpdateOneIssueInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateIssue;
};

export type UpdateOneLocationInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: LocationDto;
};

export type UpdateOnePortalExternalShareInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdatePortalExternalShare;
};

export type UpdateOnePortalInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdatePortal;
};

export type UpdateOneProminentIndividualInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateProminentIndividual;
};

export type UpdateOneProtestBacklogInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateProtestBacklog;
};

export type UpdateOneProtestBacklogSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProtestBacklogSubscriptionFilter;
};

export type UpdateOneResourceInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateResource;
};

export type UpdateOneRoleInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateRole;
};

export type UpdateOneSectorInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateSector;
};

export type UpdateOneServiceRequestInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateServiceRequest;
};

export type UpdateOneServiceRequestSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ServiceRequestSubscriptionFilter;
};

export type UpdateOneTacticInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateTactic;
};

export type UpdateOneTermInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateTerm;
};

export type UpdateOneTravelRiskAdvisoryInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateTravelRiskAdvisory;
};

export type UpdateOneTravelRiskCountryInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateTravelRiskCountry;
};

export type UpdatePortal = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
  welcomeEmailTemplate?: InputMaybe<Scalars['String']>;
};

export type UpdatePortalExternalShare = {
  allowDownload?: InputMaybe<Scalars['Boolean']>;
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  postId?: InputMaybe<Scalars['String']>;
  postType?: InputMaybe<PostType>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  shareTo?: InputMaybe<Array<Scalars['String']>>;
  shareUntil?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type UpdateProminentIndividual = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type UpdateProtestBacklog = {
  comments?: InputMaybe<Scalars['String']>;
  completedOn?: InputMaybe<Scalars['DateTime']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['String']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<ProtestBacklogStatus>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type UpdateResource = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUri?: InputMaybe<Scalars['String']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  thumbnailUri?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};

export type UpdateRole = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<Scalars['String']>>;
};

export type UpdateSector = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  ppd21?: InputMaybe<Scalars['Boolean']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type UpdateServiceRequest = {
  assignedTo?: InputMaybe<Array<Scalars['String']>>;
  clientId?: InputMaybe<Scalars['String']>;
  companyContactId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  deliverableURL?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  hours?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  plannedEndDate?: InputMaybe<Scalars['DateTime']>;
  plannedHours?: InputMaybe<Scalars['Float']>;
  plannedStartDate?: InputMaybe<Scalars['DateTime']>;
  priority?: InputMaybe<Scalars['String']>;
  qualifiesBespoke?: InputMaybe<Scalars['Boolean']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<ServiceRequestStatus>;
  targetDate?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ServiceRequestType>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
  updates?: InputMaybe<Array<ServiceRequestUpdateEntryInput>>;
};

export type UpdateTactic = {
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  protest?: InputMaybe<Scalars['Boolean']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
  virtual?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateTerm = {
  acronym?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  term?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type UpdateTravelRiskAdvisory = {
  asOfDate?: InputMaybe<Scalars['DateTime']>;
  countryId?: InputMaybe<Scalars['String']>;
  countryName?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  isoCode?: InputMaybe<Scalars['String']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  recommendation?: InputMaybe<Scalars['String']>;
  remoteUpdated?: InputMaybe<Scalars['DateTime']>;
  risk?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type UpdateTravelRiskCountry = {
  asOfDate?: InputMaybe<Scalars['DateTime']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  deletedBy?: InputMaybe<Scalars['String']>;
  deletedOn?: InputMaybe<Scalars['DateTime']>;
  inActive?: InputMaybe<Scalars['Boolean']>;
  internalComment?: InputMaybe<Scalars['String']>;
  isoCode?: InputMaybe<Scalars['ID']>;
  lockedBy?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  risk?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type UserContext = {
  __typename?: 'UserContext';
  access?: Maybe<Scalars['JSONObject']>;
  audiences?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['DateTime']>;
  fullName?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  roles?: Maybe<Scalars['String']>;
  sectorIds?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UserDetailArg = {
  company?: InputMaybe<Scalars['String']>;
  from: Scalars['DateTime'];
  notUser?: InputMaybe<Scalars['String']>;
  to: Scalars['DateTime'];
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
};

export type UserDetailResult = {
  __typename?: 'UserDetailResult';
  campaigns?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  date: Scalars['DateTime'];
  details?: Maybe<Scalars['String']>;
  groups?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  issues?: Maybe<Scalars['String']>;
  referenceEntity?: Maybe<Scalars['String']>;
  referenceId?: Maybe<Scalars['String']>;
  sectors?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
};

export type UserSummaryArg = {
  from: Scalars['DateTime'];
  notUser?: InputMaybe<Scalars['String']>;
  to: Scalars['DateTime'];
  user?: InputMaybe<Scalars['String']>;
};

export type UserSummaryResult = {
  __typename?: 'UserSummaryResult';
  company?: Maybe<Scalars['String']>;
  date: Scalars['DateTime'];
  interactions?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['String']>;
};

export type ValidateAccessCodeInput = {
  code: Scalars['String'];
  email: Scalars['String'];
  portalExternalShareId: Scalars['String'];
};

export type ValidateAccessCodeResults = {
  __typename?: 'ValidateAccessCodeResults';
  allowDownload?: Maybe<Scalars['Boolean']>;
  status: Scalars['String'];
  type?: Maybe<BriefingType>;
  url?: Maybe<Scalars['String']>;
};

export type ActionsQueryVariables = Exact<{
  paging?: InputMaybe<CursorPaging>;
  filter?: InputMaybe<ActionFilter>;
  sorting?: InputMaybe<Array<ActionSort> | ActionSort>;
}>;


export type ActionsQuery = { __typename?: 'Query', actions: { __typename?: 'ActionConnection', totalCount: number, edges: Array<{ __typename?: 'ActionEdge', node: { __typename?: 'Action', id?: string | null, audience?: Array<string> | null, lastModifiedDate?: any | null, actionStatus?: ActionStatus | null, content?: string | null, date?: any | null, endDate?: any | null, ongoing?: boolean | null, title?: string | null, status?: PostStatus | null, impact?: string | null, hashtags?: Array<string> | null, type?: string | null, going?: number | null, interested?: number | null, locationDescription?: string | null, sources?: Array<string> | null, latitude?: number | null, longitude?: number | null, created?: any | null, updated?: any | null, createdBy?: string | null, location?: { __typename?: 'Location', country?: string | null, city?: string | null, province?: string | null, id: string, region?: string | null } | null, companies?: Array<{ __typename?: 'Company', id?: string | null, name: string }> | null, ofInterestTo?: Array<{ __typename?: 'Company', id?: string | null, name: string }> | null, issues?: Array<{ __typename?: 'Issue', id?: string | null, name: string }> | null, sectors?: Array<{ __typename?: 'Sector', id?: string | null, name: string }> | null, events?: Array<{ __typename?: 'Event', id?: string | null, name: string }> | null, tactic?: { __typename?: 'Tactic', id?: string | null, name: string, protest: boolean } | null, groups?: Array<{ __typename?: 'Group', id?: string | null, name: string }> | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage?: boolean | null } } };

export type ActionsForSearchQueryVariables = Exact<{
  paging?: InputMaybe<CursorPaging>;
  filter?: InputMaybe<ActionFilter>;
  sorting?: InputMaybe<Array<ActionSort> | ActionSort>;
}>;


export type ActionsForSearchQuery = { __typename?: 'Query', actions: { __typename?: 'ActionConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage?: boolean | null }, edges: Array<{ __typename?: 'ActionEdge', node: { __typename?: 'Action', id?: string | null, lastModifiedDate?: any | null, title?: string | null, date?: any | null, created?: any | null, updated?: any | null, content?: string | null, locationDescription?: string | null, latitude?: number | null, longitude?: number | null, impact?: string | null, audience?: Array<string> | null, location?: { __typename?: 'Location', city?: string | null, province?: string | null, country?: string | null, region?: string | null } | null, issues?: Array<{ __typename?: 'Issue', id?: string | null, name: string }> | null, sectors?: Array<{ __typename?: 'Sector', name: string }> | null, events?: Array<{ __typename?: 'Event', name: string }> | null, tactic?: { __typename?: 'Tactic', name: string, protest: boolean } | null, companies?: Array<{ __typename?: 'Company', name: string }> | null, ofInterestTo?: Array<{ __typename?: 'Company', name: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null, campaigns?: Array<{ __typename?: 'Campaign', name: string }> | null } }> } };

export type ActionQueryVariables = Exact<{
  actionId: Scalars['ID'];
}>;


export type ActionQuery = { __typename?: 'Query', action: { __typename?: 'Action', id?: string | null, audience?: Array<string> | null, title?: string | null, content?: string | null, status?: PostStatus | null, actionStatus?: ActionStatus | null, date?: any | null, endDate?: any | null, ongoing?: boolean | null, impact?: string | null, interested?: number | null, going?: number | null, sources?: Array<string> | null, hashtags?: Array<string> | null, type?: string | null, alertNotification?: boolean | null, lastModifiedDate?: any | null, created?: any | null, updated?: any | null, latitude?: number | null, longitude?: number | null, locationDescription?: string | null, location?: { __typename?: 'Location', id: string, city?: string | null, province?: string | null, country?: string | null, region?: string | null } | null, sectors?: Array<{ __typename?: 'Sector', id?: string | null, name: string }> | null, issues?: Array<{ __typename?: 'Issue', id?: string | null, name: string }> | null, campaigns?: Array<{ __typename?: 'Campaign', id?: string | null, name: string }> | null, groups?: Array<{ __typename?: 'Group', id?: string | null, name: string }> | null, events?: Array<{ __typename?: 'Event', id?: string | null, name: string }> | null, companies?: Array<{ __typename?: 'Company', id?: string | null, name: string }> | null, ofInterestTo?: Array<{ __typename?: 'Company', id?: string | null, name: string }> | null, tactic?: { __typename?: 'Tactic', id?: string | null, name: string, protest: boolean } | null } };

export type ActivityLogAggregateQueryVariables = Exact<{
  filter?: InputMaybe<ActivityLogAggregateFilter>;
}>;


export type ActivityLogAggregateQuery = { __typename?: 'Query', activityLogAggregate: Array<{ __typename?: 'ActivityLogAggregateResponse', max?: { __typename?: 'ActivityLogMaxAggregate', updated?: any | null } | null, groupBy?: { __typename?: 'ActivityLogAggregateGroupBy', type?: ActivityLogType | null } | null }> };

export type CreateOneActivityLogMutationVariables = Exact<{
  input: CreateOneActivityLogInput;
}>;


export type CreateOneActivityLogMutation = { __typename?: 'Mutation', createOneActivityLog: { __typename?: 'ActivityLog', id?: string | null, created?: any | null } };

export type AdUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AdUsersQuery = { __typename?: 'Query', adUsers: { __typename?: 'AdUserConnection', edges: Array<{ __typename?: 'AdUserEdge', node: { __typename?: 'AdUser', givenName?: string | null, surname?: string | null, roles?: Array<string> | null, email: string, systemEmails?: Array<string> | null } }> } };

export type AnnualSubscriptionsQueryVariables = Exact<{
  filter?: InputMaybe<AnnualSubscriptionFilter>;
}>;


export type AnnualSubscriptionsQuery = { __typename?: 'Query', annualSubscriptions: { __typename?: 'AnnualSubscriptionConnection', totalCount: number, edges: Array<{ __typename?: 'AnnualSubscriptionEdge', cursor: any, node: { __typename?: 'AnnualSubscription', id?: string | null, access?: any | null, audiences?: string | null, isActive: boolean, type: string, client: { __typename?: 'Company', id?: string | null, name: string, contacts?: Array<{ __typename?: 'CompanyContact', inActive?: boolean | null, email: string, portalPreferences?: { __typename?: 'PortalPreference', preferences?: any | null } | null }> | null, integrations?: Array<{ __typename?: 'CompanyIntegration', type: IntegrationType, config?: any | null }> | null } } }> } };

export type AnnualSubscriptionsSummaryQueryVariables = Exact<{
  filter?: InputMaybe<AnnualSubscriptionFilter>;
}>;


export type AnnualSubscriptionsSummaryQuery = { __typename?: 'Query', annualSubscriptions: { __typename?: 'AnnualSubscriptionConnection', edges: Array<{ __typename?: 'AnnualSubscriptionEdge', node: { __typename?: 'AnnualSubscription', startDate: any, endDate: any, type: string, isActive: boolean, audiences?: string | null, access?: any | null, client: { __typename?: 'Company', id?: string | null, name: string } } }> } };

export type AnnualSubscriptionQueryVariables = Exact<{
  annualSubscriptionId: Scalars['ID'];
}>;


export type AnnualSubscriptionQuery = { __typename?: 'Query', annualSubscription: { __typename?: 'AnnualSubscription', isActive: boolean, access?: any | null, audiences?: string | null, type: string, startDate: any, endDate: any, client: { __typename?: 'Company', id?: string | null, name: string, contacts?: Array<{ __typename?: 'CompanyContact', email: string, portalPreferences?: { __typename?: 'PortalPreference', preferences?: any | null } | null }> | null, sectors?: Array<{ __typename?: 'Sector', id?: string | null, name: string }> | null } } };

export type EmailsQueryVariables = Exact<{ [key: string]: never; }>;


export type EmailsQuery = { __typename?: 'Query', getAnnualSubscriptionAccessType: { __typename?: 'AnnualSubscriptionAccess', emails: { __typename?: 'AnnualSubscriptionAccessEmails', dailyUpdate: boolean, dps: boolean, fysa: boolean, monthlySector: boolean, proactiveAlerts: boolean, weeklyOutlook: boolean }, constraints: { __typename?: 'AnnualSubscriptionAccessConstraints', companyProfile: boolean, dpsOnDaysOfWeek?: string | null, foi: boolean, longFormEmails: boolean, outlook48: boolean }, portal: { __typename?: 'AnnualSubscriptionAccessPortal', annualReports: boolean, briefings: boolean, enabled: boolean, excelExport: boolean, reports: boolean, webinars: boolean, weeklyOutlooks: boolean } } };

export type ArticlesQueryVariables = Exact<{
  paging?: InputMaybe<CursorPaging>;
  filter?: InputMaybe<ArticleFilter>;
  sorting?: InputMaybe<Array<ArticleSort> | ArticleSort>;
}>;


export type ArticlesQuery = { __typename?: 'Query', articles: { __typename?: 'ArticleConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage?: boolean | null }, edges: Array<{ __typename?: 'ArticleEdge', node: { __typename?: 'Article', id?: string | null, audience?: Array<string> | null, title?: string | null, created?: any | null, updated?: any | null, lastModifiedDate?: any | null, content?: string | null, status?: PostStatus | null, sources?: Array<string> | null, hashtags?: Array<string> | null, locationDescription?: string | null, location?: { __typename?: 'Location', country?: string | null, city?: string | null, province?: string | null, id: string, region?: string | null } | null, companies?: Array<{ __typename?: 'Company', id?: string | null, name: string }> | null, ofInterestTo?: Array<{ __typename?: 'Company', id?: string | null, name: string }> | null, issues?: Array<{ __typename?: 'Issue', id?: string | null, name: string }> | null, sectors?: Array<{ __typename?: 'Sector', id?: string | null, name: string }> | null, events?: Array<{ __typename?: 'Event', id?: string | null, name: string }> | null, groups?: Array<{ __typename?: 'Group', id?: string | null, name: string }> | null, campaigns?: Array<{ __typename?: 'Campaign', id?: string | null, name: string }> | null } }> } };

export type ArticlesForSearchQueryVariables = Exact<{
  paging?: InputMaybe<CursorPaging>;
  filter?: InputMaybe<ArticleFilter>;
  sorting?: InputMaybe<Array<ArticleSort> | ArticleSort>;
}>;


export type ArticlesForSearchQuery = { __typename?: 'Query', articles: { __typename?: 'ArticleConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage?: boolean | null }, edges: Array<{ __typename?: 'ArticleEdge', node: { __typename?: 'Article', id?: string | null, audience?: Array<string> | null, title?: string | null, created?: any | null, updated?: any | null, lastModifiedDate?: any | null, content?: string | null, status?: PostStatus | null, sources?: Array<string> | null, hashtags?: Array<string> | null, locationDescription?: string | null, location?: { __typename?: 'Location', country?: string | null, city?: string | null, province?: string | null, id: string, region?: string | null } | null, companies?: Array<{ __typename?: 'Company', id?: string | null, name: string }> | null, ofInterestTo?: Array<{ __typename?: 'Company', id?: string | null, name: string }> | null, issues?: Array<{ __typename?: 'Issue', id?: string | null, name: string }> | null, sectors?: Array<{ __typename?: 'Sector', id?: string | null, name: string }> | null, events?: Array<{ __typename?: 'Event', id?: string | null, name: string }> | null, groups?: Array<{ __typename?: 'Group', id?: string | null, name: string }> | null, campaigns?: Array<{ __typename?: 'Campaign', id?: string | null, name: string }> | null } }> } };

export type ArticleQueryVariables = Exact<{
  articleId: Scalars['ID'];
}>;


export type ArticleQuery = { __typename?: 'Query', article: { __typename?: 'Article', id?: string | null, audience?: Array<string> | null, title?: string | null, created?: any | null, updated?: any | null, lastModifiedDate?: any | null, content?: string | null, status?: PostStatus | null, sources?: Array<string> | null, hashtags?: Array<string> | null, locationDescription?: string | null, alertNotification?: boolean | null, location?: { __typename?: 'Location', country?: string | null, city?: string | null, province?: string | null, id: string, region?: string | null } | null, companies?: Array<{ __typename?: 'Company', id?: string | null, name: string }> | null, ofInterestTo?: Array<{ __typename?: 'Company', id?: string | null, name: string }> | null, issues?: Array<{ __typename?: 'Issue', id?: string | null, name: string }> | null, sectors?: Array<{ __typename?: 'Sector', id?: string | null, name: string }> | null, events?: Array<{ __typename?: 'Event', id?: string | null, name: string }> | null, groups?: Array<{ __typename?: 'Group', id?: string | null, name: string }> | null, campaigns?: Array<{ __typename?: 'Campaign', id?: string | null, name: string }> | null } };

export type ClientNotificationsQueryVariables = Exact<{
  filter?: InputMaybe<ClientNotificationFilter>;
}>;


export type ClientNotificationsQuery = { __typename?: 'Query', clientNotifications: { __typename?: 'ClientNotificationConnection', edges: Array<{ __typename?: 'ClientNotificationEdge', node: { __typename?: 'ClientNotification', startDate: any, endDate: any, notice: string, isActive: boolean } }> } };

export type CompanyContactsQueryVariables = Exact<{
  filter: CompanyContactFilter;
}>;


export type CompanyContactsQuery = { __typename?: 'Query', companyContacts: { __typename?: 'CompanyContactConnection', edges: Array<{ __typename?: 'CompanyContactEdge', node: { __typename?: 'CompanyContact', email: string, portalPreferences?: { __typename?: 'PortalPreference', preferences?: any | null } | null } }> } };

export type CompanyIntegrationsLightQueryVariables = Exact<{
  filter: CompanyIntegrationFilter;
}>;


export type CompanyIntegrationsLightQuery = { __typename?: 'Query', companyIntegrations: { __typename?: 'CompanyIntegrationConnection', edges: Array<{ __typename?: 'CompanyIntegrationEdge', node: { __typename?: 'CompanyIntegration', type: IntegrationType, config?: any | null, client: { __typename?: 'Company', id?: string | null, name: string } } }> } };

export type CompanyIntegrationsQueryVariables = Exact<{
  filter: CompanyIntegrationFilter;
}>;


export type CompanyIntegrationsQuery = { __typename?: 'Query', companyIntegrations: { __typename?: 'CompanyIntegrationConnection', edges: Array<{ __typename?: 'CompanyIntegrationEdge', node: { __typename?: 'CompanyIntegration', id?: string | null, type: IntegrationType, config?: any | null, preprocessor?: any | null, client: { __typename?: 'Company', id?: string | null, name: string, subscriptions?: Array<{ __typename?: 'AnnualSubscription', id?: string | null, isActive: boolean, startDate: any, endDate: any, audiences?: string | null }> | null, sectors?: Array<{ __typename?: 'Sector', name: string }> | null } } }> } };

export type CreateManyIntegrationTxLogsMutationVariables = Exact<{
  input: CreateManyIntegrationTxLogsInput;
}>;


export type CreateManyIntegrationTxLogsMutation = { __typename?: 'Mutation', createManyIntegrationTxLogs: Array<{ __typename?: 'IntegrationTxLog', id?: string | null }> };

export type IntegrationTxLogsQueryVariables = Exact<{
  filter: IntegrationTxLogFilter;
  paging: CursorPaging;
}>;


export type IntegrationTxLogsQuery = { __typename?: 'Query', integrationTxLogs: { __typename?: 'IntegrationTxLogConnection', edges: Array<{ __typename?: 'IntegrationTxLogEdge', node: { __typename?: 'IntegrationTxLog', eventUpdated?: any | null, eventDate?: any | null, eventId?: string | null, companyId?: string | null, id?: string | null, type: IntegrationType } }> } };

export type CreateOneClientNotificationMutationVariables = Exact<{
  input: CreateOneClientNotificationInput;
}>;


export type CreateOneClientNotificationMutation = { __typename?: 'Mutation', createOneClientNotification: { __typename?: 'ClientNotification', id?: string | null, endDate: any, notice: string, startDate: any } };

export type PortalPreferencesQueryVariables = Exact<{
  filter: PortalPreferenceFilter;
}>;


export type PortalPreferencesQuery = { __typename?: 'Query', portalPreferences: { __typename?: 'PortalPreferenceConnection', edges: Array<{ __typename?: 'PortalPreferenceEdge', node: { __typename?: 'PortalPreference', email: string, preferences?: any | null } }> } };

export type PortalPreferencesAlertsQueryVariables = Exact<{
  filter: PortalPreferenceFilter;
  paging?: InputMaybe<CursorPaging>;
}>;


export type PortalPreferencesAlertsQuery = { __typename?: 'Query', portalPreferences: { __typename?: 'PortalPreferenceConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: any | null, hasNextPage?: boolean | null }, edges: Array<{ __typename?: 'PortalPreferenceEdge', node: { __typename?: 'PortalPreference', alerts?: any | null, email: string } }> } };

export type PostsDeletedSinceQueryVariables = Exact<{
  since: Scalars['DateTime'];
}>;


export type PostsDeletedSinceQuery = { __typename?: 'Query', statsPostsDeletedSince: Array<{ __typename?: 'PostsDeletedResult', id?: string | null, type?: string | null }> };

export type UserContextQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type UserContextQuery = { __typename?: 'Query', getUserContext?: { __typename?: 'UserContext', access?: any | null, audiences?: string | null, roles?: string | null, company?: string | null, companyId?: string | null, email?: string | null, type?: string | null } | null };

export type CheckUserContextQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type CheckUserContextQuery = { __typename?: 'Query', getUserContext?: { __typename?: 'UserContext', email?: string | null, type?: string | null, audiences?: string | null, access?: any | null } | null };


export const ActionsDocument = gql`
    query Actions($paging: CursorPaging, $filter: ActionFilter, $sorting: [ActionSort!]) {
  actions(paging: $paging, filter: $filter, sorting: $sorting) {
    edges {
      node {
        id
        audience
        lastModifiedDate
        actionStatus
        content
        date
        endDate
        ongoing
        title
        status
        impact
        hashtags
        type
        going
        interested
        locationDescription
        sources
        latitude
        longitude
        created
        updated
        createdBy
        location {
          country
          city
          province
          id
          region
        }
        companies {
          id
          name
        }
        ofInterestTo {
          id
          name
        }
        issues {
          id
          name
        }
        sectors {
          id
          name
        }
        events {
          id
          name
        }
        tactic {
          id
          name
          protest
        }
        groups {
          id
          name
        }
      }
    }
    totalCount
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    `;
export const ActionsForSearchDocument = gql`
    query ActionsForSearch($paging: CursorPaging, $filter: ActionFilter, $sorting: [ActionSort!]) {
  actions(paging: $paging, filter: $filter, sorting: $sorting) {
    pageInfo {
      endCursor
      hasNextPage
    }
    totalCount
    edges {
      node {
        id
        lastModifiedDate
        title
        date
        created
        updated
        content
        locationDescription
        latitude
        longitude
        impact
        location {
          city
          province
          country
          region
        }
        audience
        issues {
          id
          name
        }
        sectors {
          name
        }
        events {
          name
        }
        tactic {
          name
          protest
        }
        companies {
          name
        }
        ofInterestTo {
          name
        }
        groups {
          name
        }
        campaigns {
          name
        }
      }
    }
  }
}
    `;
export const ActionDocument = gql`
    query Action($actionId: ID!) {
  action(id: $actionId) {
    id
    audience
    title
    content
    status
    actionStatus
    date
    endDate
    ongoing
    impact
    interested
    going
    sources
    hashtags
    status
    type
    alertNotification
    lastModifiedDate
    created
    updated
    latitude
    longitude
    locationDescription
    location {
      id
      city
      province
      country
      region
    }
    sectors {
      id
      name
    }
    issues {
      id
      name
    }
    campaigns {
      id
      name
    }
    groups {
      id
      name
    }
    events {
      id
      name
    }
    companies {
      id
      name
    }
    ofInterestTo {
      id
      name
    }
    tactic {
      id
      name
      protest
    }
  }
}
    `;
export const ActivityLogAggregateDocument = gql`
    query ActivityLogAggregate($filter: ActivityLogAggregateFilter) {
  activityLogAggregate(filter: $filter) {
    max {
      updated
    }
    groupBy {
      type
    }
  }
}
    `;
export const CreateOneActivityLogDocument = gql`
    mutation CreateOneActivityLog($input: CreateOneActivityLogInput!) {
  createOneActivityLog(input: $input) {
    id
    created
  }
}
    `;
export const AdUsersDocument = gql`
    query AdUsers {
  adUsers {
    edges {
      node {
        givenName
        surname
        roles
        email
        systemEmails
      }
    }
  }
}
    `;
export const AnnualSubscriptionsDocument = gql`
    query AnnualSubscriptions($filter: AnnualSubscriptionFilter) {
  annualSubscriptions(filter: $filter) {
    edges {
      node {
        id
        client {
          id
          name
          contacts(filter: {inActive: {is: false}}) {
            inActive
            email
            portalPreferences {
              preferences
            }
          }
          integrations {
            type
            config
          }
        }
        access
        audiences
        isActive
        type
      }
      cursor
    }
    totalCount
  }
}
    `;
export const AnnualSubscriptionsSummaryDocument = gql`
    query AnnualSubscriptionsSummary($filter: AnnualSubscriptionFilter) {
  annualSubscriptions(filter: $filter) {
    edges {
      node {
        client {
          id
          name
        }
        startDate
        endDate
        type
        isActive
        audiences
        access
      }
    }
  }
}
    `;
export const AnnualSubscriptionDocument = gql`
    query AnnualSubscription($annualSubscriptionId: ID!) {
  annualSubscription(id: $annualSubscriptionId) {
    isActive
    access
    audiences
    type
    startDate
    endDate
    client {
      id
      name
      contacts(filter: {inActive: {is: false}}) {
        email
        portalPreferences {
          preferences
        }
      }
      sectors {
        id
        name
      }
    }
  }
}
    `;
export const EmailsDocument = gql`
    query Emails {
  getAnnualSubscriptionAccessType {
    emails {
      dailyUpdate
      dps
      fysa
      monthlySector
      proactiveAlerts
      weeklyOutlook
    }
    constraints {
      companyProfile
      dpsOnDaysOfWeek
      foi
      longFormEmails
      outlook48
    }
    portal {
      annualReports
      briefings
      enabled
      excelExport
      reports
      webinars
      weeklyOutlooks
    }
  }
}
    `;
export const ArticlesDocument = gql`
    query Articles($paging: CursorPaging, $filter: ArticleFilter, $sorting: [ArticleSort!]) {
  articles(paging: $paging, filter: $filter, sorting: $sorting) {
    pageInfo {
      endCursor
      hasNextPage
    }
    totalCount
    edges {
      node {
        id
        audience
        title
        created
        updated
        lastModifiedDate
        content
        status
        sources
        hashtags
        locationDescription
        location {
          country
          city
          province
          id
          region
        }
        companies {
          id
          name
        }
        ofInterestTo {
          id
          name
        }
        issues {
          id
          name
        }
        sectors {
          id
          name
        }
        events {
          id
          name
        }
        groups {
          id
          name
        }
        campaigns {
          id
          name
        }
      }
    }
  }
}
    `;
export const ArticlesForSearchDocument = gql`
    query ArticlesForSearch($paging: CursorPaging, $filter: ArticleFilter, $sorting: [ArticleSort!]) {
  articles(paging: $paging, filter: $filter, sorting: $sorting) {
    pageInfo {
      endCursor
      hasNextPage
    }
    totalCount
    edges {
      node {
        id
        audience
        title
        created
        updated
        lastModifiedDate
        content
        status
        sources
        hashtags
        locationDescription
        location {
          country
          city
          province
          id
          region
        }
        companies {
          id
          name
        }
        ofInterestTo {
          id
          name
        }
        issues {
          id
          name
        }
        sectors {
          id
          name
        }
        events {
          id
          name
        }
        groups {
          id
          name
        }
        campaigns {
          id
          name
        }
      }
    }
  }
}
    `;
export const ArticleDocument = gql`
    query Article($articleId: ID!) {
  article(id: $articleId) {
    id
    audience
    title
    created
    updated
    lastModifiedDate
    content
    status
    sources
    hashtags
    locationDescription
    alertNotification
    location {
      country
      city
      province
      id
      region
    }
    companies {
      id
      name
    }
    ofInterestTo {
      id
      name
    }
    issues {
      id
      name
    }
    sectors {
      id
      name
    }
    events {
      id
      name
    }
    groups {
      id
      name
    }
    campaigns {
      id
      name
    }
  }
}
    `;
export const ClientNotificationsDocument = gql`
    query ClientNotifications($filter: ClientNotificationFilter) {
  clientNotifications(filter: $filter) {
    edges {
      node {
        startDate
        endDate
        notice
        isActive
      }
    }
  }
}
    `;
export const CompanyContactsDocument = gql`
    query CompanyContacts($filter: CompanyContactFilter!) {
  companyContacts(filter: $filter) {
    edges {
      node {
        email
        portalPreferences {
          preferences
        }
      }
    }
  }
}
    `;
export const CompanyIntegrationsLightDocument = gql`
    query CompanyIntegrationsLight($filter: CompanyIntegrationFilter!) {
  companyIntegrations(filter: $filter) {
    edges {
      node {
        client {
          id
          name
        }
        type
        config
      }
    }
  }
}
    `;
export const CompanyIntegrationsDocument = gql`
    query CompanyIntegrations($filter: CompanyIntegrationFilter!) {
  companyIntegrations(filter: $filter) {
    edges {
      node {
        client {
          id
          name
          subscriptions(filter: {isActive: {is: true}}) {
            id
            isActive
            startDate
            endDate
            audiences
          }
          sectors {
            name
          }
        }
        id
        type
        config
        preprocessor
      }
    }
  }
}
    `;
export const CreateManyIntegrationTxLogsDocument = gql`
    mutation createManyIntegrationTxLogs($input: CreateManyIntegrationTxLogsInput!) {
  createManyIntegrationTxLogs(input: $input) {
    id
  }
}
    `;
export const IntegrationTxLogsDocument = gql`
    query IntegrationTxLogs($filter: IntegrationTxLogFilter!, $paging: CursorPaging!) {
  integrationTxLogs(filter: $filter, paging: $paging) {
    edges {
      node {
        eventUpdated
        eventDate
        eventId
        companyId
        id
        type
      }
    }
  }
}
    `;
export const CreateOneClientNotificationDocument = gql`
    mutation createOneClientNotification($input: CreateOneClientNotificationInput!) {
  createOneClientNotification(input: $input) {
    id
    endDate
    notice
    startDate
  }
}
    `;
export const PortalPreferencesDocument = gql`
    query PortalPreferences($filter: PortalPreferenceFilter!) {
  portalPreferences(filter: $filter) {
    edges {
      node {
        email
        preferences
      }
    }
  }
}
    `;
export const PortalPreferencesAlertsDocument = gql`
    query PortalPreferencesAlerts($filter: PortalPreferenceFilter!, $paging: CursorPaging) {
  portalPreferences(filter: $filter, paging: $paging) {
    pageInfo {
      endCursor
      hasNextPage
    }
    totalCount
    edges {
      node {
        alerts
        email
      }
    }
  }
}
    `;
export const PostsDeletedSinceDocument = gql`
    query PostsDeletedSince($since: DateTime!) {
  statsPostsDeletedSince(since: $since) {
    id
    type
  }
}
    `;
export const UserContextDocument = gql`
    query UserContext($email: String!) {
  getUserContext(email: $email) {
    access
    audiences
    roles
    company
    companyId
    email
    type
  }
}
    `;
export const CheckUserContextDocument = gql`
    query CheckUserContext($email: String!) {
  getUserContext(email: $email) {
    email
    type
    audiences
    access
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Actions(variables?: ActionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ActionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ActionsQuery>(ActionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Actions', 'query', variables);
    },
    ActionsForSearch(variables?: ActionsForSearchQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ActionsForSearchQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ActionsForSearchQuery>(ActionsForSearchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ActionsForSearch', 'query', variables);
    },
    Action(variables: ActionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ActionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ActionQuery>(ActionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Action', 'query', variables);
    },
    ActivityLogAggregate(variables?: ActivityLogAggregateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ActivityLogAggregateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ActivityLogAggregateQuery>(ActivityLogAggregateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ActivityLogAggregate', 'query', variables);
    },
    CreateOneActivityLog(variables: CreateOneActivityLogMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateOneActivityLogMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOneActivityLogMutation>(CreateOneActivityLogDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateOneActivityLog', 'mutation', variables);
    },
    AdUsers(variables?: AdUsersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdUsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdUsersQuery>(AdUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AdUsers', 'query', variables);
    },
    AnnualSubscriptions(variables?: AnnualSubscriptionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AnnualSubscriptionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AnnualSubscriptionsQuery>(AnnualSubscriptionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AnnualSubscriptions', 'query', variables);
    },
    AnnualSubscriptionsSummary(variables?: AnnualSubscriptionsSummaryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AnnualSubscriptionsSummaryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AnnualSubscriptionsSummaryQuery>(AnnualSubscriptionsSummaryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AnnualSubscriptionsSummary', 'query', variables);
    },
    AnnualSubscription(variables: AnnualSubscriptionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AnnualSubscriptionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AnnualSubscriptionQuery>(AnnualSubscriptionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AnnualSubscription', 'query', variables);
    },
    Emails(variables?: EmailsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<EmailsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EmailsQuery>(EmailsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Emails', 'query', variables);
    },
    Articles(variables?: ArticlesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ArticlesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArticlesQuery>(ArticlesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Articles', 'query', variables);
    },
    ArticlesForSearch(variables?: ArticlesForSearchQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ArticlesForSearchQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArticlesForSearchQuery>(ArticlesForSearchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ArticlesForSearch', 'query', variables);
    },
    Article(variables: ArticleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ArticleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArticleQuery>(ArticleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Article', 'query', variables);
    },
    ClientNotifications(variables?: ClientNotificationsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ClientNotificationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ClientNotificationsQuery>(ClientNotificationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ClientNotifications', 'query', variables);
    },
    CompanyContacts(variables: CompanyContactsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CompanyContactsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CompanyContactsQuery>(CompanyContactsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CompanyContacts', 'query', variables);
    },
    CompanyIntegrationsLight(variables: CompanyIntegrationsLightQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CompanyIntegrationsLightQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CompanyIntegrationsLightQuery>(CompanyIntegrationsLightDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CompanyIntegrationsLight', 'query', variables);
    },
    CompanyIntegrations(variables: CompanyIntegrationsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CompanyIntegrationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CompanyIntegrationsQuery>(CompanyIntegrationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CompanyIntegrations', 'query', variables);
    },
    createManyIntegrationTxLogs(variables: CreateManyIntegrationTxLogsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateManyIntegrationTxLogsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateManyIntegrationTxLogsMutation>(CreateManyIntegrationTxLogsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createManyIntegrationTxLogs', 'mutation', variables);
    },
    IntegrationTxLogs(variables: IntegrationTxLogsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IntegrationTxLogsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IntegrationTxLogsQuery>(IntegrationTxLogsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'IntegrationTxLogs', 'query', variables);
    },
    createOneClientNotification(variables: CreateOneClientNotificationMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateOneClientNotificationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOneClientNotificationMutation>(CreateOneClientNotificationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createOneClientNotification', 'mutation', variables);
    },
    PortalPreferences(variables: PortalPreferencesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PortalPreferencesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PortalPreferencesQuery>(PortalPreferencesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PortalPreferences', 'query', variables);
    },
    PortalPreferencesAlerts(variables: PortalPreferencesAlertsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PortalPreferencesAlertsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PortalPreferencesAlertsQuery>(PortalPreferencesAlertsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PortalPreferencesAlerts', 'query', variables);
    },
    PostsDeletedSince(variables: PostsDeletedSinceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PostsDeletedSinceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PostsDeletedSinceQuery>(PostsDeletedSinceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PostsDeletedSince', 'query', variables);
    },
    UserContext(variables: UserContextQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UserContextQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserContextQuery>(UserContextDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UserContext', 'query', variables);
    },
    CheckUserContext(variables: CheckUserContextQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CheckUserContextQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CheckUserContextQuery>(CheckUserContextDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CheckUserContext', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;