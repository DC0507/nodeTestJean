"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortDirection = exports.ServiceRequestType = exports.ServiceRequestStatus = exports.ServiceRequestSortFields = exports.SectorSortFields = exports.RoleSortFields = exports.ResourceSortFields = exports.RequestAccessCodeResposeEnum = exports.ProtestBacklogStatus = exports.ProtestBacklogSortFields = exports.ProminentIndividualSortFields = exports.PostType = exports.PostStatus = exports.PortalSortFields = exports.PortalPreferenceSortFields = exports.PortalExternalShareSortFields = exports.LocationSortFields = exports.IssueSortFields = exports.IntegrationType = exports.IntegrationTxLogSortFields = exports.GroupSortFields = exports.GroupBy = exports.EventType = exports.EventSortFields = exports.EmailDistributionType = exports.DimensionType = exports.CompanySortFields = exports.CompanyLocationSortFields = exports.CompanyIntegrationSortFields = exports.CompanyContactSortFields = exports.ClientNotificationType = exports.ClientNotificationSortFields = exports.ClientNotificationAckSortFields = exports.CleanUpRelationshipType = exports.CampaignSortFields = exports.BriefingType = exports.BriefingSortFields = exports.AudienceSortFields = exports.AttachmentSortFields = exports.ArticleSortFields = exports.AnnualSubscriptionSortFields = exports.AlertStatus = exports.AlertDeliveryMethod = exports.AlertDelivery = exports.AggregationType = exports.AdUserSortFields = exports.ActivityLogType = exports.ActivityLogSortFields = exports.ActionStatus = exports.ActionSortFields = void 0;
exports.CheckUserContextDocument = exports.UserContextDocument = exports.PostsDeletedSinceDocument = exports.PortalPreferencesAlertsDocument = exports.PortalPreferencesDocument = exports.CreateOneClientNotificationDocument = exports.IntegrationTxLogsDocument = exports.CreateManyIntegrationTxLogsDocument = exports.CompanyIntegrationsDocument = exports.CompanyIntegrationsLightDocument = exports.CompanyContactsDocument = exports.ClientNotificationsDocument = exports.ArticleDocument = exports.ArticlesForSearchDocument = exports.ArticlesDocument = exports.EmailsDocument = exports.AnnualSubscriptionDocument = exports.AnnualSubscriptionsSummaryDocument = exports.AnnualSubscriptionsDocument = exports.AdUsersDocument = exports.CreateOneActivityLogDocument = exports.ActivityLogAggregateDocument = exports.ActionDocument = exports.ActionsForSearchDocument = exports.ActionsDocument = exports.TravelRiskCountrySortFields = exports.TravelRiskAdvisorySortFields = exports.TermSortFields = exports.TacticSortFields = exports.SortNulls = void 0;
exports.getSdk = getSdk;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
var ActionSortFields;
(function (ActionSortFields) {
    ActionSortFields["ActionStatus"] = "actionStatus";
    ActionSortFields["AlertNotification"] = "alertNotification";
    ActionSortFields["AudienceRaw"] = "audienceRaw";
    ActionSortFields["BringForward"] = "bringForward";
    ActionSortFields["ContentApprovedBy"] = "contentApprovedBy";
    ActionSortFields["Created"] = "created";
    ActionSortFields["CreatedBy"] = "createdBy";
    ActionSortFields["Date"] = "date";
    ActionSortFields["DeletedBy"] = "deletedBy";
    ActionSortFields["DraftedBy"] = "draftedBy";
    ActionSortFields["EndDate"] = "endDate";
    ActionSortFields["Going"] = "going";
    ActionSortFields["HashtagsRaw"] = "hashtagsRaw";
    ActionSortFields["HighlightImageUrl"] = "highlightImageUrl";
    ActionSortFields["Id"] = "id";
    ActionSortFields["Impact"] = "impact";
    ActionSortFields["InActive"] = "inActive";
    ActionSortFields["Interested"] = "interested";
    ActionSortFields["InternalComment"] = "internalComment";
    ActionSortFields["LastModifiedDate"] = "lastModifiedDate";
    ActionSortFields["Latitude"] = "latitude";
    ActionSortFields["LocationId"] = "locationId";
    ActionSortFields["LockedBy"] = "lockedBy";
    ActionSortFields["Longitude"] = "longitude";
    ActionSortFields["MainUntilDate"] = "mainUntilDate";
    ActionSortFields["Ongoing"] = "ongoing";
    ActionSortFields["PublishedBy"] = "publishedBy";
    ActionSortFields["PublishedDate"] = "publishedDate";
    ActionSortFields["RemoteUpdated"] = "remoteUpdated";
    ActionSortFields["Source"] = "source";
    ActionSortFields["SourceRefId"] = "sourceRefId";
    ActionSortFields["SourcesRaw"] = "sourcesRaw";
    ActionSortFields["Status"] = "status";
    ActionSortFields["StyleApprovedBy"] = "styleApprovedBy";
    ActionSortFields["TacticId"] = "tacticId";
    ActionSortFields["Title"] = "title";
    ActionSortFields["Type"] = "type";
    ActionSortFields["Updated"] = "updated";
    ActionSortFields["UpdatedBy"] = "updatedBy";
})(ActionSortFields || (exports.ActionSortFields = ActionSortFields = {}));
var ActionStatus;
(function (ActionStatus) {
    ActionStatus["Canceled"] = "Canceled";
    ActionStatus["ImpactIncreased"] = "ImpactIncreased";
    ActionStatus["LocationChanged"] = "LocationChanged";
    ActionStatus["Rescheduled"] = "Rescheduled";
    ActionStatus["Reviewed"] = "Reviewed";
    ActionStatus["Updated"] = "Updated";
})(ActionStatus || (exports.ActionStatus = ActionStatus = {}));
var ActivityLogSortFields;
(function (ActivityLogSortFields) {
    ActivityLogSortFields["Created"] = "created";
    ActivityLogSortFields["CreatedBy"] = "createdBy";
    ActivityLogSortFields["DeletedBy"] = "deletedBy";
    ActivityLogSortFields["Id"] = "id";
    ActivityLogSortFields["InActive"] = "inActive";
    ActivityLogSortFields["InternalComment"] = "internalComment";
    ActivityLogSortFields["LockedBy"] = "lockedBy";
    ActivityLogSortFields["ReferenceEntity"] = "referenceEntity";
    ActivityLogSortFields["ReferenceId"] = "referenceId";
    ActivityLogSortFields["RemoteUpdated"] = "remoteUpdated";
    ActivityLogSortFields["Type"] = "type";
    ActivityLogSortFields["Updated"] = "updated";
    ActivityLogSortFields["UpdatedBy"] = "updatedBy";
})(ActivityLogSortFields || (exports.ActivityLogSortFields = ActivityLogSortFields = {}));
/** Activity Log Types */
var ActivityLogType;
(function (ActivityLogType) {
    ActivityLogType["Analysis"] = "ANALYSIS";
    ActivityLogType["Api"] = "API";
    ActivityLogType["Authentication"] = "AUTHENTICATION";
    ActivityLogType["EmailDaily"] = "EMAIL_DAILY";
    ActivityLogType["EmailDps"] = "EMAIL_DPS";
    ActivityLogType["EmailSubCheck"] = "EMAIL_SUB_CHECK";
    ActivityLogType["Error"] = "ERROR";
    ActivityLogType["Excel"] = "EXCEL";
    ActivityLogType["Expire30"] = "EXPIRE30";
    ActivityLogType["Expire60"] = "EXPIRE60";
    ActivityLogType["Expire90"] = "EXPIRE90";
    ActivityLogType["Externalsharerequest"] = "EXTERNALSHAREREQUEST";
    ActivityLogType["Forwarded"] = "FORWARDED";
    ActivityLogType["Fysa"] = "FYSA";
    ActivityLogType["Mutation"] = "MUTATION";
    ActivityLogType["Query"] = "QUERY";
    ActivityLogType["Search"] = "SEARCH";
    ActivityLogType["SyncAgentPp"] = "SYNC_AGENT_PP";
})(ActivityLogType || (exports.ActivityLogType = ActivityLogType = {}));
var AdUserSortFields;
(function (AdUserSortFields) {
    AdUserSortFields["Created"] = "created";
    AdUserSortFields["CreatedBy"] = "createdBy";
    AdUserSortFields["DeletedBy"] = "deletedBy";
    AdUserSortFields["Email"] = "email";
    AdUserSortFields["GivenName"] = "givenName";
    AdUserSortFields["InActive"] = "inActive";
    AdUserSortFields["InternalComment"] = "internalComment";
    AdUserSortFields["LockedBy"] = "lockedBy";
    AdUserSortFields["Surname"] = "surname";
    AdUserSortFields["Updated"] = "updated";
    AdUserSortFields["UpdatedBy"] = "updatedBy";
})(AdUserSortFields || (exports.AdUserSortFields = AdUserSortFields = {}));
var AggregationType;
(function (AggregationType) {
    AggregationType["ByDays"] = "ByDays";
    AggregationType["ByInstance"] = "ByInstance";
})(AggregationType || (exports.AggregationType = AggregationType = {}));
var AlertDelivery;
(function (AlertDelivery) {
    AlertDelivery["Daily"] = "Daily";
    AlertDelivery["Immediate"] = "Immediate";
})(AlertDelivery || (exports.AlertDelivery = AlertDelivery = {}));
var AlertDeliveryMethod;
(function (AlertDeliveryMethod) {
    AlertDeliveryMethod["Portal"] = "Portal";
    AlertDeliveryMethod["PortalAndEmail"] = "PortalAndEmail";
})(AlertDeliveryMethod || (exports.AlertDeliveryMethod = AlertDeliveryMethod = {}));
var AlertStatus;
(function (AlertStatus) {
    AlertStatus["Active"] = "Active";
    AlertStatus["InActive"] = "InActive";
})(AlertStatus || (exports.AlertStatus = AlertStatus = {}));
var AnnualSubscriptionSortFields;
(function (AnnualSubscriptionSortFields) {
    AnnualSubscriptionSortFields["Access"] = "access";
    AnnualSubscriptionSortFields["AccountRep"] = "accountRep";
    AnnualSubscriptionSortFields["Analyst"] = "analyst";
    AnnualSubscriptionSortFields["ClientId"] = "clientId";
    AnnualSubscriptionSortFields["ContactId"] = "contactId";
    AnnualSubscriptionSortFields["Created"] = "created";
    AnnualSubscriptionSortFields["CreatedBy"] = "createdBy";
    AnnualSubscriptionSortFields["DeletedBy"] = "deletedBy";
    AnnualSubscriptionSortFields["EndDate"] = "endDate";
    AnnualSubscriptionSortFields["Id"] = "id";
    AnnualSubscriptionSortFields["InActive"] = "inActive";
    AnnualSubscriptionSortFields["InternalComment"] = "internalComment";
    AnnualSubscriptionSortFields["IsActive"] = "isActive";
    AnnualSubscriptionSortFields["LockedBy"] = "lockedBy";
    AnnualSubscriptionSortFields["RemoteUpdated"] = "remoteUpdated";
    AnnualSubscriptionSortFields["StartDate"] = "startDate";
    AnnualSubscriptionSortFields["Type"] = "type";
    AnnualSubscriptionSortFields["Updated"] = "updated";
    AnnualSubscriptionSortFields["UpdatedBy"] = "updatedBy";
})(AnnualSubscriptionSortFields || (exports.AnnualSubscriptionSortFields = AnnualSubscriptionSortFields = {}));
var ArticleSortFields;
(function (ArticleSortFields) {
    ArticleSortFields["AlertNotification"] = "alertNotification";
    ArticleSortFields["AudienceRaw"] = "audienceRaw";
    ArticleSortFields["BringForward"] = "bringForward";
    ArticleSortFields["ContentApprovedBy"] = "contentApprovedBy";
    ArticleSortFields["Created"] = "created";
    ArticleSortFields["CreatedBy"] = "createdBy";
    ArticleSortFields["DeletedBy"] = "deletedBy";
    ArticleSortFields["DraftedBy"] = "draftedBy";
    ArticleSortFields["HashtagsRaw"] = "hashtagsRaw";
    ArticleSortFields["HighlightImageUrl"] = "highlightImageUrl";
    ArticleSortFields["HighlightUntilDate"] = "highlightUntilDate";
    ArticleSortFields["Id"] = "id";
    ArticleSortFields["InActive"] = "inActive";
    ArticleSortFields["InternalComment"] = "internalComment";
    ArticleSortFields["LastModifiedDate"] = "lastModifiedDate";
    ArticleSortFields["LocationId"] = "locationId";
    ArticleSortFields["LockedBy"] = "lockedBy";
    ArticleSortFields["MainUntilDate"] = "mainUntilDate";
    ArticleSortFields["PublishedBy"] = "publishedBy";
    ArticleSortFields["PublishedDate"] = "publishedDate";
    ArticleSortFields["RemoteUpdated"] = "remoteUpdated";
    ArticleSortFields["Source"] = "source";
    ArticleSortFields["SourceRefId"] = "sourceRefId";
    ArticleSortFields["SourcesRaw"] = "sourcesRaw";
    ArticleSortFields["Status"] = "status";
    ArticleSortFields["StyleApprovedBy"] = "styleApprovedBy";
    ArticleSortFields["Title"] = "title";
    ArticleSortFields["Updated"] = "updated";
    ArticleSortFields["UpdatedBy"] = "updatedBy";
})(ArticleSortFields || (exports.ArticleSortFields = ArticleSortFields = {}));
var AttachmentSortFields;
(function (AttachmentSortFields) {
    AttachmentSortFields["AnnualSubscriptionId"] = "annualSubscriptionId";
    AttachmentSortFields["Created"] = "created";
    AttachmentSortFields["CreatedBy"] = "createdBy";
    AttachmentSortFields["DeletedBy"] = "deletedBy";
    AttachmentSortFields["Id"] = "id";
    AttachmentSortFields["InActive"] = "inActive";
    AttachmentSortFields["InternalComment"] = "internalComment";
    AttachmentSortFields["LockedBy"] = "lockedBy";
    AttachmentSortFields["RemoteUpdated"] = "remoteUpdated";
    AttachmentSortFields["Updated"] = "updated";
    AttachmentSortFields["UpdatedBy"] = "updatedBy";
})(AttachmentSortFields || (exports.AttachmentSortFields = AttachmentSortFields = {}));
var AudienceSortFields;
(function (AudienceSortFields) {
    AudienceSortFields["Created"] = "created";
    AudienceSortFields["CreatedBy"] = "createdBy";
    AudienceSortFields["DeletedBy"] = "deletedBy";
    AudienceSortFields["Id"] = "id";
    AudienceSortFields["InActive"] = "inActive";
    AudienceSortFields["InternalComment"] = "internalComment";
    AudienceSortFields["LockedBy"] = "lockedBy";
    AudienceSortFields["Name"] = "name";
    AudienceSortFields["RemoteUpdated"] = "remoteUpdated";
    AudienceSortFields["Type"] = "type";
    AudienceSortFields["Updated"] = "updated";
    AudienceSortFields["UpdatedBy"] = "updatedBy";
})(AudienceSortFields || (exports.AudienceSortFields = AudienceSortFields = {}));
var BriefingSortFields;
(function (BriefingSortFields) {
    BriefingSortFields["AlertNotification"] = "alertNotification";
    BriefingSortFields["AudienceRaw"] = "audienceRaw";
    BriefingSortFields["BringForward"] = "bringForward";
    BriefingSortFields["ContentApprovedBy"] = "contentApprovedBy";
    BriefingSortFields["Created"] = "created";
    BriefingSortFields["CreatedBy"] = "createdBy";
    BriefingSortFields["DeletedBy"] = "deletedBy";
    BriefingSortFields["DraftedBy"] = "draftedBy";
    BriefingSortFields["HashtagsRaw"] = "hashtagsRaw";
    BriefingSortFields["HighlightImageUrl"] = "highlightImageUrl";
    BriefingSortFields["Id"] = "id";
    BriefingSortFields["InActive"] = "inActive";
    BriefingSortFields["InternalComment"] = "internalComment";
    BriefingSortFields["LastModifiedDate"] = "lastModifiedDate";
    BriefingSortFields["LocationId"] = "locationId";
    BriefingSortFields["LockedBy"] = "lockedBy";
    BriefingSortFields["MainUntilDate"] = "mainUntilDate";
    BriefingSortFields["PublishedBy"] = "publishedBy";
    BriefingSortFields["PublishedDate"] = "publishedDate";
    BriefingSortFields["RemoteUpdated"] = "remoteUpdated";
    BriefingSortFields["Restricted"] = "restricted";
    BriefingSortFields["Source"] = "source";
    BriefingSortFields["SourceRefId"] = "sourceRefId";
    BriefingSortFields["SourcesRaw"] = "sourcesRaw";
    BriefingSortFields["Status"] = "status";
    BriefingSortFields["StyleApprovedBy"] = "styleApprovedBy";
    BriefingSortFields["Title"] = "title";
    BriefingSortFields["Type"] = "type";
    BriefingSortFields["Updated"] = "updated";
    BriefingSortFields["UpdatedBy"] = "updatedBy";
})(BriefingSortFields || (exports.BriefingSortFields = BriefingSortFields = {}));
var BriefingType;
(function (BriefingType) {
    BriefingType["AnnualReport"] = "AnnualReport";
    BriefingType["Briefing"] = "Briefing";
    BriefingType["BusinessDevelopment"] = "BusinessDevelopment";
    BriefingType["HelpGuides"] = "HelpGuides";
    BriefingType["Restricted"] = "Restricted";
    BriefingType["Webinar"] = "Webinar";
    BriefingType["WeeklyOutlook"] = "WeeklyOutlook";
})(BriefingType || (exports.BriefingType = BriefingType = {}));
var CampaignSortFields;
(function (CampaignSortFields) {
    CampaignSortFields["Created"] = "created";
    CampaignSortFields["CreatedBy"] = "createdBy";
    CampaignSortFields["DeletedBy"] = "deletedBy";
    CampaignSortFields["Id"] = "id";
    CampaignSortFields["InActive"] = "inActive";
    CampaignSortFields["InternalComment"] = "internalComment";
    CampaignSortFields["LastModifiedDate"] = "lastModifiedDate";
    CampaignSortFields["LockedBy"] = "lockedBy";
    CampaignSortFields["Monitoring"] = "monitoring";
    CampaignSortFields["Name"] = "name";
    CampaignSortFields["RemoteUpdated"] = "remoteUpdated";
    CampaignSortFields["Status"] = "status";
    CampaignSortFields["Updated"] = "updated";
    CampaignSortFields["UpdatedBy"] = "updatedBy";
})(CampaignSortFields || (exports.CampaignSortFields = CampaignSortFields = {}));
var CleanUpRelationshipType;
(function (CleanUpRelationshipType) {
    CleanUpRelationshipType["Campaigns"] = "campaigns";
    CleanUpRelationshipType["Companies"] = "companies";
    CleanUpRelationshipType["Groups"] = "groups";
    CleanUpRelationshipType["Issues"] = "issues";
    CleanUpRelationshipType["Location"] = "location";
    CleanUpRelationshipType["ProminentIndividuals"] = "prominentIndividuals";
})(CleanUpRelationshipType || (exports.CleanUpRelationshipType = CleanUpRelationshipType = {}));
var ClientNotificationAckSortFields;
(function (ClientNotificationAckSortFields) {
    ClientNotificationAckSortFields["ClientNotificationId"] = "clientNotificationId";
    ClientNotificationAckSortFields["CompanyContactId"] = "companyContactId";
    ClientNotificationAckSortFields["Created"] = "created";
    ClientNotificationAckSortFields["CreatedBy"] = "createdBy";
    ClientNotificationAckSortFields["DeletedBy"] = "deletedBy";
    ClientNotificationAckSortFields["Id"] = "id";
    ClientNotificationAckSortFields["InActive"] = "inActive";
    ClientNotificationAckSortFields["InternalComment"] = "internalComment";
    ClientNotificationAckSortFields["LockedBy"] = "lockedBy";
    ClientNotificationAckSortFields["RemoteUpdated"] = "remoteUpdated";
    ClientNotificationAckSortFields["Updated"] = "updated";
    ClientNotificationAckSortFields["UpdatedBy"] = "updatedBy";
})(ClientNotificationAckSortFields || (exports.ClientNotificationAckSortFields = ClientNotificationAckSortFields = {}));
var ClientNotificationSortFields;
(function (ClientNotificationSortFields) {
    ClientNotificationSortFields["CompanyContactId"] = "companyContactId";
    ClientNotificationSortFields["Created"] = "created";
    ClientNotificationSortFields["CreatedBy"] = "createdBy";
    ClientNotificationSortFields["DeletedBy"] = "deletedBy";
    ClientNotificationSortFields["EndDate"] = "endDate";
    ClientNotificationSortFields["Id"] = "id";
    ClientNotificationSortFields["InActive"] = "inActive";
    ClientNotificationSortFields["InternalComment"] = "internalComment";
    ClientNotificationSortFields["IsActive"] = "isActive";
    ClientNotificationSortFields["LockedBy"] = "lockedBy";
    ClientNotificationSortFields["RemoteUpdated"] = "remoteUpdated";
    ClientNotificationSortFields["StartDate"] = "startDate";
    ClientNotificationSortFields["Type"] = "type";
    ClientNotificationSortFields["Updated"] = "updated";
    ClientNotificationSortFields["UpdatedBy"] = "updatedBy";
})(ClientNotificationSortFields || (exports.ClientNotificationSortFields = ClientNotificationSortFields = {}));
/** Client Notification Types */
var ClientNotificationType;
(function (ClientNotificationType) {
    ClientNotificationType["ImmediateAlert"] = "ImmediateAlert";
    ClientNotificationType["Platform"] = "Platform";
    ClientNotificationType["Service"] = "Service";
    ClientNotificationType["SummaryAlert"] = "SummaryAlert";
})(ClientNotificationType || (exports.ClientNotificationType = ClientNotificationType = {}));
var CompanyContactSortFields;
(function (CompanyContactSortFields) {
    CompanyContactSortFields["CompanyId"] = "companyId";
    CompanyContactSortFields["Created"] = "created";
    CompanyContactSortFields["CreatedBy"] = "createdBy";
    CompanyContactSortFields["DeletedBy"] = "deletedBy";
    CompanyContactSortFields["Email"] = "email";
    CompanyContactSortFields["GivenName"] = "givenName";
    CompanyContactSortFields["InActive"] = "inActive";
    CompanyContactSortFields["InternalComment"] = "internalComment";
    CompanyContactSortFields["LockedBy"] = "lockedBy";
    CompanyContactSortFields["Sub"] = "sub";
    CompanyContactSortFields["Surname"] = "surname";
    CompanyContactSortFields["Updated"] = "updated";
    CompanyContactSortFields["UpdatedBy"] = "updatedBy";
})(CompanyContactSortFields || (exports.CompanyContactSortFields = CompanyContactSortFields = {}));
var CompanyIntegrationSortFields;
(function (CompanyIntegrationSortFields) {
    CompanyIntegrationSortFields["ClientId"] = "clientId";
    CompanyIntegrationSortFields["Created"] = "created";
    CompanyIntegrationSortFields["CreatedBy"] = "createdBy";
    CompanyIntegrationSortFields["DeletedBy"] = "deletedBy";
    CompanyIntegrationSortFields["Id"] = "id";
    CompanyIntegrationSortFields["InActive"] = "inActive";
    CompanyIntegrationSortFields["InternalComment"] = "internalComment";
    CompanyIntegrationSortFields["LockedBy"] = "lockedBy";
    CompanyIntegrationSortFields["RemoteUpdated"] = "remoteUpdated";
    CompanyIntegrationSortFields["Type"] = "type";
    CompanyIntegrationSortFields["Updated"] = "updated";
    CompanyIntegrationSortFields["UpdatedBy"] = "updatedBy";
})(CompanyIntegrationSortFields || (exports.CompanyIntegrationSortFields = CompanyIntegrationSortFields = {}));
var CompanyLocationSortFields;
(function (CompanyLocationSortFields) {
    CompanyLocationSortFields["ClientId"] = "clientId";
    CompanyLocationSortFields["Created"] = "created";
    CompanyLocationSortFields["CreatedBy"] = "createdBy";
    CompanyLocationSortFields["DeletedBy"] = "deletedBy";
    CompanyLocationSortFields["Id"] = "id";
    CompanyLocationSortFields["InActive"] = "inActive";
    CompanyLocationSortFields["InternalComment"] = "internalComment";
    CompanyLocationSortFields["Latitude"] = "latitude";
    CompanyLocationSortFields["LockedBy"] = "lockedBy";
    CompanyLocationSortFields["Longitude"] = "longitude";
    CompanyLocationSortFields["RemoteUpdated"] = "remoteUpdated";
    CompanyLocationSortFields["Updated"] = "updated";
    CompanyLocationSortFields["UpdatedBy"] = "updatedBy";
})(CompanyLocationSortFields || (exports.CompanyLocationSortFields = CompanyLocationSortFields = {}));
var CompanySortFields;
(function (CompanySortFields) {
    CompanySortFields["Created"] = "created";
    CompanySortFields["CreatedBy"] = "createdBy";
    CompanySortFields["DeletedBy"] = "deletedBy";
    CompanySortFields["Id"] = "id";
    CompanySortFields["InActive"] = "inActive";
    CompanySortFields["InternalComment"] = "internalComment";
    CompanySortFields["LockedBy"] = "lockedBy";
    CompanySortFields["Name"] = "name";
    CompanySortFields["RemoteUpdated"] = "remoteUpdated";
    CompanySortFields["SsoEmailPatterns"] = "ssoEmailPatterns";
    CompanySortFields["Team"] = "team";
    CompanySortFields["Updated"] = "updated";
    CompanySortFields["UpdatedBy"] = "updatedBy";
})(CompanySortFields || (exports.CompanySortFields = CompanySortFields = {}));
var DimensionType;
(function (DimensionType) {
    DimensionType["Campaign"] = "CAMPAIGN";
    DimensionType["Company"] = "COMPANY";
    DimensionType["Group"] = "GROUP";
    DimensionType["Issue"] = "ISSUE";
    DimensionType["Location"] = "LOCATION";
    DimensionType["Sector"] = "SECTOR";
    DimensionType["Tactic"] = "TACTIC";
})(DimensionType || (exports.DimensionType = DimensionType = {}));
var EmailDistributionType;
(function (EmailDistributionType) {
    EmailDistributionType["All"] = "all";
    EmailDistributionType["DailyUpdate"] = "dailyUpdate";
    EmailDistributionType["Dps"] = "dps";
    EmailDistributionType["Fysa"] = "fysa";
    EmailDistributionType["KeyContact"] = "keyContact";
    EmailDistributionType["MonthlySector"] = "monthlySector";
    EmailDistributionType["Portal"] = "portal";
    EmailDistributionType["ProactiveAlerts"] = "proactiveAlerts";
    EmailDistributionType["WeeklyOutlook"] = "weeklyOutlook";
})(EmailDistributionType || (exports.EmailDistributionType = EmailDistributionType = {}));
var EventSortFields;
(function (EventSortFields) {
    EventSortFields["BriefingRequired"] = "briefingRequired";
    EventSortFields["CompanyId"] = "companyId";
    EventSortFields["Created"] = "created";
    EventSortFields["CreatedBy"] = "createdBy";
    EventSortFields["DeletedBy"] = "deletedBy";
    EventSortFields["EndDate"] = "endDate";
    EventSortFields["Id"] = "id";
    EventSortFields["InActive"] = "inActive";
    EventSortFields["InternalComment"] = "internalComment";
    EventSortFields["LastModifiedDate"] = "lastModifiedDate";
    EventSortFields["Latitude"] = "latitude";
    EventSortFields["LocationId"] = "locationId";
    EventSortFields["LockedBy"] = "lockedBy";
    EventSortFields["Longitude"] = "longitude";
    EventSortFields["Monitoring"] = "monitoring";
    EventSortFields["Name"] = "name";
    EventSortFields["Private"] = "private";
    EventSortFields["RemoteUpdated"] = "remoteUpdated";
    EventSortFields["Risk"] = "risk";
    EventSortFields["StartDate"] = "startDate";
    EventSortFields["Status"] = "status";
    EventSortFields["Type"] = "type";
    EventSortFields["Updated"] = "updated";
    EventSortFields["UpdatedBy"] = "updatedBy";
})(EventSortFields || (exports.EventSortFields = EventSortFields = {}));
var EventType;
(function (EventType) {
    EventType["Agm"] = "AGM";
    EventType["Activism"] = "Activism";
    EventType["DomesticPolitical"] = "DomesticPolitical";
    EventType["Industry"] = "Industry";
    EventType["International"] = "International";
})(EventType || (exports.EventType = EventType = {}));
/** Group by */
var GroupBy;
(function (GroupBy) {
    GroupBy["Day"] = "DAY";
    GroupBy["Month"] = "MONTH";
    GroupBy["Week"] = "WEEK";
    GroupBy["Year"] = "YEAR";
})(GroupBy || (exports.GroupBy = GroupBy = {}));
var GroupSortFields;
(function (GroupSortFields) {
    GroupSortFields["Created"] = "created";
    GroupSortFields["CreatedBy"] = "createdBy";
    GroupSortFields["DeletedBy"] = "deletedBy";
    GroupSortFields["Id"] = "id";
    GroupSortFields["InActive"] = "inActive";
    GroupSortFields["InternalComment"] = "internalComment";
    GroupSortFields["LastModifiedDate"] = "lastModifiedDate";
    GroupSortFields["LockedBy"] = "lockedBy";
    GroupSortFields["Monitoring"] = "monitoring";
    GroupSortFields["Name"] = "name";
    GroupSortFields["ParentGroupId"] = "parentGroupId";
    GroupSortFields["RemoteUpdated"] = "remoteUpdated";
    GroupSortFields["Status"] = "status";
    GroupSortFields["Updated"] = "updated";
    GroupSortFields["UpdatedBy"] = "updatedBy";
})(GroupSortFields || (exports.GroupSortFields = GroupSortFields = {}));
var IntegrationTxLogSortFields;
(function (IntegrationTxLogSortFields) {
    IntegrationTxLogSortFields["CompanyId"] = "companyId";
    IntegrationTxLogSortFields["Created"] = "created";
    IntegrationTxLogSortFields["CreatedBy"] = "createdBy";
    IntegrationTxLogSortFields["DeletedBy"] = "deletedBy";
    IntegrationTxLogSortFields["EventDate"] = "eventDate";
    IntegrationTxLogSortFields["EventId"] = "eventId";
    IntegrationTxLogSortFields["EventUpdated"] = "eventUpdated";
    IntegrationTxLogSortFields["Id"] = "id";
    IntegrationTxLogSortFields["InActive"] = "inActive";
    IntegrationTxLogSortFields["InternalComment"] = "internalComment";
    IntegrationTxLogSortFields["LockedBy"] = "lockedBy";
    IntegrationTxLogSortFields["RemoteUpdated"] = "remoteUpdated";
    IntegrationTxLogSortFields["Type"] = "type";
    IntegrationTxLogSortFields["Updated"] = "updated";
    IntegrationTxLogSortFields["UpdatedBy"] = "updatedBy";
})(IntegrationTxLogSortFields || (exports.IntegrationTxLogSortFields = IntegrationTxLogSortFields = {}));
/** Integration Types */
var IntegrationType;
(function (IntegrationType) {
    IntegrationType["Airtable"] = "AIRTABLE";
    IntegrationType["Api"] = "API";
    IntegrationType["Everbridge"] = "EVERBRIDGE";
    IntegrationType["Gsheet"] = "GSHEET";
})(IntegrationType || (exports.IntegrationType = IntegrationType = {}));
var IssueSortFields;
(function (IssueSortFields) {
    IssueSortFields["Created"] = "created";
    IssueSortFields["CreatedBy"] = "createdBy";
    IssueSortFields["DeletedBy"] = "deletedBy";
    IssueSortFields["Id"] = "id";
    IssueSortFields["InActive"] = "inActive";
    IssueSortFields["InternalComment"] = "internalComment";
    IssueSortFields["LastModifiedDate"] = "lastModifiedDate";
    IssueSortFields["LockedBy"] = "lockedBy";
    IssueSortFields["Monitoring"] = "monitoring";
    IssueSortFields["Name"] = "name";
    IssueSortFields["RemoteUpdated"] = "remoteUpdated";
    IssueSortFields["Status"] = "status";
    IssueSortFields["Updated"] = "updated";
    IssueSortFields["UpdatedBy"] = "updatedBy";
})(IssueSortFields || (exports.IssueSortFields = IssueSortFields = {}));
var LocationSortFields;
(function (LocationSortFields) {
    LocationSortFields["City"] = "city";
    LocationSortFields["Country"] = "country";
    LocationSortFields["Created"] = "created";
    LocationSortFields["CreatedBy"] = "createdBy";
    LocationSortFields["DeletedBy"] = "deletedBy";
    LocationSortFields["Id"] = "id";
    LocationSortFields["InActive"] = "inActive";
    LocationSortFields["InternalComment"] = "internalComment";
    LocationSortFields["LockedBy"] = "lockedBy";
    LocationSortFields["MetropolitanArea"] = "metropolitanArea";
    LocationSortFields["Province"] = "province";
    LocationSortFields["Region"] = "region";
    LocationSortFields["Updated"] = "updated";
    LocationSortFields["UpdatedBy"] = "updatedBy";
})(LocationSortFields || (exports.LocationSortFields = LocationSortFields = {}));
var PortalExternalShareSortFields;
(function (PortalExternalShareSortFields) {
    PortalExternalShareSortFields["Created"] = "created";
    PortalExternalShareSortFields["CreatedBy"] = "createdBy";
    PortalExternalShareSortFields["DeletedBy"] = "deletedBy";
    PortalExternalShareSortFields["Id"] = "id";
    PortalExternalShareSortFields["InActive"] = "inActive";
    PortalExternalShareSortFields["InternalComment"] = "internalComment";
    PortalExternalShareSortFields["LockedBy"] = "lockedBy";
    PortalExternalShareSortFields["PostId"] = "postId";
    PortalExternalShareSortFields["PostType"] = "postType";
    PortalExternalShareSortFields["RemoteUpdated"] = "remoteUpdated";
    PortalExternalShareSortFields["ShareToRaw"] = "shareToRaw";
    PortalExternalShareSortFields["ShareUntil"] = "shareUntil";
    PortalExternalShareSortFields["Updated"] = "updated";
    PortalExternalShareSortFields["UpdatedBy"] = "updatedBy";
})(PortalExternalShareSortFields || (exports.PortalExternalShareSortFields = PortalExternalShareSortFields = {}));
var PortalPreferenceSortFields;
(function (PortalPreferenceSortFields) {
    PortalPreferenceSortFields["Alerts"] = "alerts";
    PortalPreferenceSortFields["Created"] = "created";
    PortalPreferenceSortFields["CreatedBy"] = "createdBy";
    PortalPreferenceSortFields["DeletedBy"] = "deletedBy";
    PortalPreferenceSortFields["Email"] = "email";
    PortalPreferenceSortFields["InActive"] = "inActive";
    PortalPreferenceSortFields["InternalComment"] = "internalComment";
    PortalPreferenceSortFields["LockedBy"] = "lockedBy";
    PortalPreferenceSortFields["Updated"] = "updated";
    PortalPreferenceSortFields["UpdatedBy"] = "updatedBy";
})(PortalPreferenceSortFields || (exports.PortalPreferenceSortFields = PortalPreferenceSortFields = {}));
var PortalSortFields;
(function (PortalSortFields) {
    PortalSortFields["Created"] = "created";
    PortalSortFields["CreatedBy"] = "createdBy";
    PortalSortFields["DeletedBy"] = "deletedBy";
    PortalSortFields["Id"] = "id";
    PortalSortFields["InActive"] = "inActive";
    PortalSortFields["InternalComment"] = "internalComment";
    PortalSortFields["LockedBy"] = "lockedBy";
    PortalSortFields["Name"] = "name";
    PortalSortFields["RemoteUpdated"] = "remoteUpdated";
    PortalSortFields["Updated"] = "updated";
    PortalSortFields["UpdatedBy"] = "updatedBy";
    PortalSortFields["WelcomeEmailTemplate"] = "welcomeEmailTemplate";
})(PortalSortFields || (exports.PortalSortFields = PortalSortFields = {}));
var PostStatus;
(function (PostStatus) {
    PostStatus["ContentReview"] = "ContentReview";
    PostStatus["Draft"] = "Draft";
    PostStatus["Published"] = "Published";
    PostStatus["StyleReview"] = "StyleReview";
    PostStatus["Unpublished"] = "Unpublished";
})(PostStatus || (exports.PostStatus = PostStatus = {}));
var PostType;
(function (PostType) {
    PostType["Action"] = "Action";
    PostType["Article"] = "Article";
    PostType["Briefing"] = "Briefing";
    PostType["RawAction"] = "RawAction";
})(PostType || (exports.PostType = PostType = {}));
var ProminentIndividualSortFields;
(function (ProminentIndividualSortFields) {
    ProminentIndividualSortFields["Created"] = "created";
    ProminentIndividualSortFields["CreatedBy"] = "createdBy";
    ProminentIndividualSortFields["DeletedBy"] = "deletedBy";
    ProminentIndividualSortFields["Id"] = "id";
    ProminentIndividualSortFields["InActive"] = "inActive";
    ProminentIndividualSortFields["InternalComment"] = "internalComment";
    ProminentIndividualSortFields["LockedBy"] = "lockedBy";
    ProminentIndividualSortFields["Name"] = "name";
    ProminentIndividualSortFields["RemoteUpdated"] = "remoteUpdated";
    ProminentIndividualSortFields["Updated"] = "updated";
    ProminentIndividualSortFields["UpdatedBy"] = "updatedBy";
})(ProminentIndividualSortFields || (exports.ProminentIndividualSortFields = ProminentIndividualSortFields = {}));
var ProtestBacklogSortFields;
(function (ProtestBacklogSortFields) {
    ProtestBacklogSortFields["CompletedOn"] = "completedOn";
    ProtestBacklogSortFields["Created"] = "created";
    ProtestBacklogSortFields["CreatedBy"] = "createdBy";
    ProtestBacklogSortFields["Date"] = "date";
    ProtestBacklogSortFields["DeletedBy"] = "deletedBy";
    ProtestBacklogSortFields["Id"] = "id";
    ProtestBacklogSortFields["InActive"] = "inActive";
    ProtestBacklogSortFields["InternalComment"] = "internalComment";
    ProtestBacklogSortFields["LockedBy"] = "lockedBy";
    ProtestBacklogSortFields["Priority"] = "priority";
    ProtestBacklogSortFields["RemoteUpdated"] = "remoteUpdated";
    ProtestBacklogSortFields["Status"] = "status";
    ProtestBacklogSortFields["Updated"] = "updated";
    ProtestBacklogSortFields["UpdatedBy"] = "updatedBy";
    ProtestBacklogSortFields["Url"] = "url";
})(ProtestBacklogSortFields || (exports.ProtestBacklogSortFields = ProtestBacklogSortFields = {}));
var ProtestBacklogStatus;
(function (ProtestBacklogStatus) {
    ProtestBacklogStatus["Completed"] = "Completed";
    ProtestBacklogStatus["Created"] = "Created";
    ProtestBacklogStatus["Duplicate"] = "Duplicate";
    ProtestBacklogStatus["MarkedForProcessing"] = "MarkedForProcessing";
})(ProtestBacklogStatus || (exports.ProtestBacklogStatus = ProtestBacklogStatus = {}));
/** Request Access Code Response Enum */
var RequestAccessCodeResposeEnum;
(function (RequestAccessCodeResposeEnum) {
    RequestAccessCodeResposeEnum["EmailSent"] = "EMAIL_SENT";
    RequestAccessCodeResposeEnum["Expired"] = "EXPIRED";
    RequestAccessCodeResposeEnum["NotShared"] = "NOT_SHARED";
    RequestAccessCodeResposeEnum["NoAccess"] = "NO_ACCESS";
})(RequestAccessCodeResposeEnum || (exports.RequestAccessCodeResposeEnum = RequestAccessCodeResposeEnum = {}));
var ResourceSortFields;
(function (ResourceSortFields) {
    ResourceSortFields["Created"] = "created";
    ResourceSortFields["CreatedBy"] = "createdBy";
    ResourceSortFields["DeletedBy"] = "deletedBy";
    ResourceSortFields["Id"] = "id";
    ResourceSortFields["InActive"] = "inActive";
    ResourceSortFields["InternalComment"] = "internalComment";
    ResourceSortFields["LockedBy"] = "lockedBy";
    ResourceSortFields["Name"] = "name";
    ResourceSortFields["RemoteUpdated"] = "remoteUpdated";
    ResourceSortFields["Type"] = "type";
    ResourceSortFields["Updated"] = "updated";
    ResourceSortFields["UpdatedBy"] = "updatedBy";
})(ResourceSortFields || (exports.ResourceSortFields = ResourceSortFields = {}));
var RoleSortFields;
(function (RoleSortFields) {
    RoleSortFields["Id"] = "id";
})(RoleSortFields || (exports.RoleSortFields = RoleSortFields = {}));
var SectorSortFields;
(function (SectorSortFields) {
    SectorSortFields["Created"] = "created";
    SectorSortFields["CreatedBy"] = "createdBy";
    SectorSortFields["DeletedBy"] = "deletedBy";
    SectorSortFields["Id"] = "id";
    SectorSortFields["InActive"] = "inActive";
    SectorSortFields["InternalComment"] = "internalComment";
    SectorSortFields["LockedBy"] = "lockedBy";
    SectorSortFields["Name"] = "name";
    SectorSortFields["Ppd21"] = "ppd21";
    SectorSortFields["RemoteUpdated"] = "remoteUpdated";
    SectorSortFields["Updated"] = "updated";
    SectorSortFields["UpdatedBy"] = "updatedBy";
})(SectorSortFields || (exports.SectorSortFields = SectorSortFields = {}));
var ServiceRequestSortFields;
(function (ServiceRequestSortFields) {
    ServiceRequestSortFields["AssignedToRaw"] = "assignedToRaw";
    ServiceRequestSortFields["ClientId"] = "clientId";
    ServiceRequestSortFields["CompanyContactId"] = "companyContactId";
    ServiceRequestSortFields["Created"] = "created";
    ServiceRequestSortFields["CreatedBy"] = "createdBy";
    ServiceRequestSortFields["DeletedBy"] = "deletedBy";
    ServiceRequestSortFields["EndDate"] = "endDate";
    ServiceRequestSortFields["Hours"] = "hours";
    ServiceRequestSortFields["Id"] = "id";
    ServiceRequestSortFields["InActive"] = "inActive";
    ServiceRequestSortFields["InternalComment"] = "internalComment";
    ServiceRequestSortFields["LockedBy"] = "lockedBy";
    ServiceRequestSortFields["PlannedEndDate"] = "plannedEndDate";
    ServiceRequestSortFields["PlannedHours"] = "plannedHours";
    ServiceRequestSortFields["PlannedStartDate"] = "plannedStartDate";
    ServiceRequestSortFields["Priority"] = "priority";
    ServiceRequestSortFields["QualifiesBespoke"] = "qualifiesBespoke";
    ServiceRequestSortFields["RemoteUpdated"] = "remoteUpdated";
    ServiceRequestSortFields["StartDate"] = "startDate";
    ServiceRequestSortFields["Status"] = "status";
    ServiceRequestSortFields["TargetDate"] = "targetDate";
    ServiceRequestSortFields["Title"] = "title";
    ServiceRequestSortFields["Type"] = "type";
    ServiceRequestSortFields["Updated"] = "updated";
    ServiceRequestSortFields["UpdatedBy"] = "updatedBy";
})(ServiceRequestSortFields || (exports.ServiceRequestSortFields = ServiceRequestSortFields = {}));
var ServiceRequestStatus;
(function (ServiceRequestStatus) {
    ServiceRequestStatus["Approved"] = "Approved";
    ServiceRequestStatus["Assessment"] = "Assessment";
    ServiceRequestStatus["Cancelled"] = "Cancelled";
    ServiceRequestStatus["Completed"] = "Completed";
    ServiceRequestStatus["Forecasted"] = "Forecasted";
    ServiceRequestStatus["InProgress"] = "InProgress";
    ServiceRequestStatus["Paused"] = "Paused";
    ServiceRequestStatus["Planned"] = "Planned";
    ServiceRequestStatus["Rejected"] = "Rejected";
    ServiceRequestStatus["Requested"] = "Requested";
})(ServiceRequestStatus || (exports.ServiceRequestStatus = ServiceRequestStatus = {}));
var ServiceRequestType;
(function (ServiceRequestType) {
    ServiceRequestType["Briefing"] = "Briefing";
    ServiceRequestType["CustomerSatisfaction"] = "CustomerSatisfaction";
    ServiceRequestType["DataRequest"] = "DataRequest";
    ServiceRequestType["Holiday"] = "Holiday";
    ServiceRequestType["Integration"] = "Integration";
    ServiceRequestType["Internal"] = "Internal";
    ServiceRequestType["Monitoring"] = "Monitoring";
    ServiceRequestType["Ooo"] = "OOO";
    ServiceRequestType["Other"] = "Other";
    ServiceRequestType["Presentation"] = "Presentation";
    ServiceRequestType["Profile"] = "Profile";
    ServiceRequestType["Query"] = "Query";
    ServiceRequestType["Report"] = "Report";
    ServiceRequestType["SourceCheck"] = "SourceCheck";
    ServiceRequestType["System"] = "System";
    ServiceRequestType["Training"] = "Training";
    ServiceRequestType["Vacation"] = "Vacation";
    ServiceRequestType["Webinar"] = "Webinar";
})(ServiceRequestType || (exports.ServiceRequestType = ServiceRequestType = {}));
/** Sort Directions */
var SortDirection;
(function (SortDirection) {
    SortDirection["Asc"] = "ASC";
    SortDirection["Desc"] = "DESC";
})(SortDirection || (exports.SortDirection = SortDirection = {}));
/** Sort Nulls Options */
var SortNulls;
(function (SortNulls) {
    SortNulls["NullsFirst"] = "NULLS_FIRST";
    SortNulls["NullsLast"] = "NULLS_LAST";
})(SortNulls || (exports.SortNulls = SortNulls = {}));
var TacticSortFields;
(function (TacticSortFields) {
    TacticSortFields["Created"] = "created";
    TacticSortFields["CreatedBy"] = "createdBy";
    TacticSortFields["DeletedBy"] = "deletedBy";
    TacticSortFields["Id"] = "id";
    TacticSortFields["InActive"] = "inActive";
    TacticSortFields["InternalComment"] = "internalComment";
    TacticSortFields["LockedBy"] = "lockedBy";
    TacticSortFields["Name"] = "name";
    TacticSortFields["Protest"] = "protest";
    TacticSortFields["RemoteUpdated"] = "remoteUpdated";
    TacticSortFields["Updated"] = "updated";
    TacticSortFields["UpdatedBy"] = "updatedBy";
    TacticSortFields["Virtual"] = "virtual";
})(TacticSortFields || (exports.TacticSortFields = TacticSortFields = {}));
var TermSortFields;
(function (TermSortFields) {
    TermSortFields["Acronym"] = "acronym";
    TermSortFields["Created"] = "created";
    TermSortFields["CreatedBy"] = "createdBy";
    TermSortFields["DeletedBy"] = "deletedBy";
    TermSortFields["Description"] = "description";
    TermSortFields["Id"] = "id";
    TermSortFields["InActive"] = "inActive";
    TermSortFields["InternalComment"] = "internalComment";
    TermSortFields["LockedBy"] = "lockedBy";
    TermSortFields["RemoteUpdated"] = "remoteUpdated";
    TermSortFields["Term"] = "term";
    TermSortFields["Updated"] = "updated";
    TermSortFields["UpdatedBy"] = "updatedBy";
})(TermSortFields || (exports.TermSortFields = TermSortFields = {}));
var TravelRiskAdvisorySortFields;
(function (TravelRiskAdvisorySortFields) {
    TravelRiskAdvisorySortFields["CountryId"] = "countryId";
    TravelRiskAdvisorySortFields["Created"] = "created";
    TravelRiskAdvisorySortFields["CreatedBy"] = "createdBy";
    TravelRiskAdvisorySortFields["DeletedBy"] = "deletedBy";
    TravelRiskAdvisorySortFields["Id"] = "id";
    TravelRiskAdvisorySortFields["InActive"] = "inActive";
    TravelRiskAdvisorySortFields["InternalComment"] = "internalComment";
    TravelRiskAdvisorySortFields["LockedBy"] = "lockedBy";
    TravelRiskAdvisorySortFields["RemoteUpdated"] = "remoteUpdated";
    TravelRiskAdvisorySortFields["Updated"] = "updated";
    TravelRiskAdvisorySortFields["UpdatedBy"] = "updatedBy";
})(TravelRiskAdvisorySortFields || (exports.TravelRiskAdvisorySortFields = TravelRiskAdvisorySortFields = {}));
var TravelRiskCountrySortFields;
(function (TravelRiskCountrySortFields) {
    TravelRiskCountrySortFields["Created"] = "created";
    TravelRiskCountrySortFields["CreatedBy"] = "createdBy";
    TravelRiskCountrySortFields["DeletedBy"] = "deletedBy";
    TravelRiskCountrySortFields["InActive"] = "inActive";
    TravelRiskCountrySortFields["InternalComment"] = "internalComment";
    TravelRiskCountrySortFields["IsoCode"] = "isoCode";
    TravelRiskCountrySortFields["LockedBy"] = "lockedBy";
    TravelRiskCountrySortFields["Updated"] = "updated";
    TravelRiskCountrySortFields["UpdatedBy"] = "updatedBy";
})(TravelRiskCountrySortFields || (exports.TravelRiskCountrySortFields = TravelRiskCountrySortFields = {}));
exports.ActionsDocument = (0, graphql_tag_1.default) `
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
exports.ActionsForSearchDocument = (0, graphql_tag_1.default) `
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
exports.ActionDocument = (0, graphql_tag_1.default) `
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
exports.ActivityLogAggregateDocument = (0, graphql_tag_1.default) `
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
exports.CreateOneActivityLogDocument = (0, graphql_tag_1.default) `
    mutation CreateOneActivityLog($input: CreateOneActivityLogInput!) {
  createOneActivityLog(input: $input) {
    id
    created
  }
}
    `;
exports.AdUsersDocument = (0, graphql_tag_1.default) `
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
exports.AnnualSubscriptionsDocument = (0, graphql_tag_1.default) `
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
exports.AnnualSubscriptionsSummaryDocument = (0, graphql_tag_1.default) `
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
exports.AnnualSubscriptionDocument = (0, graphql_tag_1.default) `
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
exports.EmailsDocument = (0, graphql_tag_1.default) `
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
exports.ArticlesDocument = (0, graphql_tag_1.default) `
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
exports.ArticlesForSearchDocument = (0, graphql_tag_1.default) `
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
exports.ArticleDocument = (0, graphql_tag_1.default) `
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
exports.ClientNotificationsDocument = (0, graphql_tag_1.default) `
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
exports.CompanyContactsDocument = (0, graphql_tag_1.default) `
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
exports.CompanyIntegrationsLightDocument = (0, graphql_tag_1.default) `
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
exports.CompanyIntegrationsDocument = (0, graphql_tag_1.default) `
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
exports.CreateManyIntegrationTxLogsDocument = (0, graphql_tag_1.default) `
    mutation createManyIntegrationTxLogs($input: CreateManyIntegrationTxLogsInput!) {
  createManyIntegrationTxLogs(input: $input) {
    id
  }
}
    `;
exports.IntegrationTxLogsDocument = (0, graphql_tag_1.default) `
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
exports.CreateOneClientNotificationDocument = (0, graphql_tag_1.default) `
    mutation createOneClientNotification($input: CreateOneClientNotificationInput!) {
  createOneClientNotification(input: $input) {
    id
    endDate
    notice
    startDate
  }
}
    `;
exports.PortalPreferencesDocument = (0, graphql_tag_1.default) `
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
exports.PortalPreferencesAlertsDocument = (0, graphql_tag_1.default) `
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
exports.PostsDeletedSinceDocument = (0, graphql_tag_1.default) `
    query PostsDeletedSince($since: DateTime!) {
  statsPostsDeletedSince(since: $since) {
    id
    type
  }
}
    `;
exports.UserContextDocument = (0, graphql_tag_1.default) `
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
exports.CheckUserContextDocument = (0, graphql_tag_1.default) `
    query CheckUserContext($email: String!) {
  getUserContext(email: $email) {
    email
    type
    audiences
    access
  }
}
    `;
const defaultWrapper = (action, _operationName, _operationType, _variables) => action();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        Actions(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ActionsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'Actions', 'query', variables);
        },
        ActionsForSearch(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ActionsForSearchDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'ActionsForSearch', 'query', variables);
        },
        Action(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ActionDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'Action', 'query', variables);
        },
        ActivityLogAggregate(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ActivityLogAggregateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'ActivityLogAggregate', 'query', variables);
        },
        CreateOneActivityLog(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateOneActivityLogDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CreateOneActivityLog', 'mutation', variables);
        },
        AdUsers(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AdUsersDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'AdUsers', 'query', variables);
        },
        AnnualSubscriptions(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AnnualSubscriptionsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'AnnualSubscriptions', 'query', variables);
        },
        AnnualSubscriptionsSummary(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AnnualSubscriptionsSummaryDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'AnnualSubscriptionsSummary', 'query', variables);
        },
        AnnualSubscription(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AnnualSubscriptionDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'AnnualSubscription', 'query', variables);
        },
        Emails(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.EmailsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'Emails', 'query', variables);
        },
        Articles(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ArticlesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'Articles', 'query', variables);
        },
        ArticlesForSearch(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ArticlesForSearchDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'ArticlesForSearch', 'query', variables);
        },
        Article(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ArticleDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'Article', 'query', variables);
        },
        ClientNotifications(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ClientNotificationsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'ClientNotifications', 'query', variables);
        },
        CompanyContacts(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CompanyContactsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CompanyContacts', 'query', variables);
        },
        CompanyIntegrationsLight(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CompanyIntegrationsLightDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CompanyIntegrationsLight', 'query', variables);
        },
        CompanyIntegrations(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CompanyIntegrationsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CompanyIntegrations', 'query', variables);
        },
        createManyIntegrationTxLogs(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateManyIntegrationTxLogsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createManyIntegrationTxLogs', 'mutation', variables);
        },
        IntegrationTxLogs(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.IntegrationTxLogsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'IntegrationTxLogs', 'query', variables);
        },
        createOneClientNotification(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateOneClientNotificationDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createOneClientNotification', 'mutation', variables);
        },
        PortalPreferences(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.PortalPreferencesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'PortalPreferences', 'query', variables);
        },
        PortalPreferencesAlerts(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.PortalPreferencesAlertsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'PortalPreferencesAlerts', 'query', variables);
        },
        PostsDeletedSince(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.PostsDeletedSinceDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'PostsDeletedSince', 'query', variables);
        },
        UserContext(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UserContextDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'UserContext', 'query', variables);
        },
        CheckUserContext(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CheckUserContextDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CheckUserContext', 'query', variables);
        }
    };
}
//# sourceMappingURL=jarvis.js.map