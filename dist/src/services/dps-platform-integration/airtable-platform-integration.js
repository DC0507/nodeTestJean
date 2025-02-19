"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirTablePlatformIntegration = void 0;
const airtable_1 = __importDefault(require("airtable"));
const moment_1 = __importDefault(require("moment"));
const jarvis_common_1 = require("jarvis-common");
const config_service_1 = require("../../shared/config/config.service");
const airtableAccessToken = config_service_1.configService.getValue('AIRTABLE_TOKEN');
const airtableSchema = {
    fields: {
        Id: 'Id',
        Date: 'Date',
        EndDate: 'End Date',
        City: 'City',
        State: 'State/Province',
        Country: 'Country',
        Industry: 'Industry',
        Issue: 'Issue',
        Campaign: 'Campaign',
        Group: 'Organizers: Group',
        Location: 'Location',
        Tactic: 'Tactic',
        Target: 'Target',
        Time: 'Time',
        EndTime: 'End Time',
        Interested: 'Interested',
        Going: 'Going',
        RiskRating: 'Risk Rating',
        Lat: 'Lat.',
        Long: 'Long.',
        Description: 'Description',
        Hashtags: 'Hashtags',
        Added: 'Date Added',
        Region: 'Region',
        Url: 'Url',
        Source: 'Source',
        Updated: 'Updated',
    },
};
function getAirtableRow(event) {
    return {
        fields: {
            [airtableSchema.fields.Id]: event.id,
            [airtableSchema.fields.Date]: event.date
                ? moment_1.default.utc(event.date).format(jarvis_common_1.DATE_FORMAT)
                : null, //starts
            [airtableSchema.fields.EndDate]: event.endDate
                ? moment_1.default.utc(event.endDate).format(jarvis_common_1.DATE_FORMAT)
                : event.date
                    ? moment_1.default.utc(event.date).format(jarvis_common_1.DATE_FORMAT)
                    : null,
            [airtableSchema.fields.City]: event.location?.city,
            [airtableSchema.fields.State]: event.location?.province,
            [airtableSchema.fields.Country]: event.location?.country,
            [airtableSchema.fields.Industry]: event.sectors
                ? event.sectors?.map((x) => x.name).join(', ')
                : null,
            [airtableSchema.fields.Issue]: event.issues
                ? event.issues?.map((x) => x.name).join(', ')
                : null, // Issues
            [airtableSchema.fields.Campaign]: event.campaigns
                ? event.campaigns?.map((x) => x.name).join(', ')
                : null, // Campaigns
            [airtableSchema.fields.Group]: event.groups
                ? event.groups?.map((x) => x.name).join(', ')
                : null, // Organizers: Groups
            [airtableSchema.fields.Location]: event.locationDescription,
            [airtableSchema.fields.Tactic]: event?.tactic?.name || '',
            [airtableSchema.fields.Target]: event.companies
                ? event.companies
                    .map((x) => {
                    return x.externalName ? x.externalName : x.name;
                })
                    .join(', ')
                : null,
            [airtableSchema.fields.Time]: event.date
                ? `${moment_1.default.utc(event.date).format(jarvis_common_1.TIME_FORMAT)}`
                : null, //starts
            [airtableSchema.fields.EndTime]: event.endDate
                ? `${moment_1.default.utc(event.endDate).format(jarvis_common_1.TIME_FORMAT)}`
                : null, //ends
            [airtableSchema.fields.Interested]: event.interested,
            [airtableSchema.fields.Going]: event.going,
            [airtableSchema.fields.RiskRating]: event.impact && event.impact.length > 0 ? event.impact.charAt(0) : null,
            [airtableSchema.fields.Lat]: event.latitude,
            [airtableSchema.fields.Long]: event.longitude,
            [airtableSchema.fields.Description]: event.content
                ? (0, jarvis_common_1.previewHTMLContent)(event.content)
                : null,
            [airtableSchema.fields.Hashtags]: event.hashtags?.join(', '),
            [airtableSchema.fields.Added]: event.lastModifiedDate
                ? (0, moment_1.default)(event.lastModifiedDate).format(jarvis_common_1.DATE_FORMAT)
                : null,
            [airtableSchema.fields.Region]: event.location?.region,
            [airtableSchema.fields
                .Url]: `https://portal.foresightreports.com/portal/actions/detail/${event.id}?referrer=DPS`,
            [airtableSchema.fields.Source]: event.sources?.join(', '),
            [airtableSchema.fields.Updated]: event.updated,
        },
    };
}
function getAirtableUrl(baseId, tableId) {
    return `https://airtable.com/${baseId}/${tableId}`;
}
class AirtableHelper {
    constructor(apiKey, baseId) {
        this.base = new airtable_1.default({ apiKey }).base(baseId);
    }
    async createRecord(tableId, data) {
        try {
            const record = await this.base(tableId).create(data);
            //console.log("Record created:", record);
            return record;
        }
        catch (error) {
            console.error('Error creating record:', error);
            throw error;
        }
    }
    async createRecords(tableId, recordsData) {
        try {
            const records = await this.base(tableId).create(recordsData);
            //console.log("Records created:", records);
            return records;
        }
        catch (error) {
            console.error('Error creating records:', error);
            throw error;
        }
    }
    async deleteAllRecords(tableId) {
        try {
            const records = await this.base(tableId).select({}).all();
            const recordIds = records.map((record) => record.id);
            while (recordIds.length > 0) {
                const chunk = recordIds.splice(0, 10); // Airtable allows a maximum of 10 deletions per request
                await this.base(tableId).destroy(chunk);
                //console.log(`Deleted records: ${chunk}`);
            }
            //console.log("All records deleted successfully");
        }
        catch (error) {
            console.error('Error deleting records:', error);
            throw error;
        }
    }
}
const AirTablePlatformIntegration = async (integrationConfig, actions, title, // not used in this function
sendToEmails) => {
    const airtableCalls = [];
    const airtableHelper = new AirtableHelper(airtableAccessToken || '', integrationConfig.config.baseId);
    const sortedActions = actions.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    const airtableRecords = sortedActions.map((event) => getAirtableRow(event));
    // delete the old records
    await airtableHelper.deleteAllRecords(integrationConfig.config.tableId);
    // add the new rows
    const batchSize = 10;
    for (let i = 0; i < airtableRecords.length; i += batchSize) {
        const batch = airtableRecords.slice(i, i + batchSize);
        airtableCalls.push(airtableHelper.createRecords(integrationConfig.config.tableId, batch));
    }
    await Promise.all(airtableCalls);
    return getAirtableUrl(integrationConfig.config.baseId, integrationConfig.config.tableId);
};
exports.AirTablePlatformIntegration = AirTablePlatformIntegration;
//# sourceMappingURL=airtable-platform-integration.js.map