import Airtable from 'airtable';
import moment from 'moment';
import { CompanyIntegration, Action } from '../../shared/graphql/jarvis';
import { DATE_FORMAT, TIME_FORMAT, previewHTMLContent } from 'jarvis-common';
import { IPlatformIntegration } from './platform-integration-interface';
import { configService } from '../../shared/config/config.service';

interface RecordData {
  [key: string]: any;
}

const airtableAccessToken = configService.getValue('AIRTABLE_TOKEN');

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

function getAirtableRow(event: Action) {
  return {
    fields: {
      [airtableSchema.fields.Id]: event.id,
      [airtableSchema.fields.Date]: event.date
        ? moment.utc(event.date).format(DATE_FORMAT)
        : null, //starts
      [airtableSchema.fields.EndDate]: event.endDate
        ? moment.utc(event.endDate).format(DATE_FORMAT)
        : event.date
        ? moment.utc(event.date).format(DATE_FORMAT)
        : null,
      [airtableSchema.fields.City]: event.location?.city,
      [airtableSchema.fields.State]: event.location?.province,
      [airtableSchema.fields.Country]: event.location?.country,
      [airtableSchema.fields.Industry]: event.sectors
        ? event.sectors?.map((x: any) => x.name).join(', ')
        : null,
      [airtableSchema.fields.Issue]: event.issues
        ? event.issues?.map((x: any) => x.name).join(', ')
        : null, // Issues
      [airtableSchema.fields.Campaign]: event.campaigns
        ? event.campaigns?.map((x: any) => x.name).join(', ')
        : null, // Campaigns
      [airtableSchema.fields.Group]: event.groups
        ? event.groups?.map((x: any) => x.name).join(', ')
        : null, // Organizers: Groups
      [airtableSchema.fields.Location]: event.locationDescription,
      [airtableSchema.fields.Tactic]: event?.tactic?.name || '',
      [airtableSchema.fields.Target]: event.companies
        ? event.companies
            .map((x: any) => {
              return x.externalName ? x.externalName : x.name;
            })
            .join(', ')
        : null,
      [airtableSchema.fields.Time]: event.date
        ? `${moment.utc(event.date).format(TIME_FORMAT)}`
        : null, //starts
      [airtableSchema.fields.EndTime]: event.endDate
        ? `${moment.utc(event.endDate).format(TIME_FORMAT)}`
        : null, //ends
      [airtableSchema.fields.Interested]: event.interested,
      [airtableSchema.fields.Going]: event.going,
      [airtableSchema.fields.RiskRating]:
        event.impact && event.impact.length > 0 ? event.impact.charAt(0) : null,
      [airtableSchema.fields.Lat]: event.latitude,
      [airtableSchema.fields.Long]: event.longitude,
      [airtableSchema.fields.Description]: event.content
        ? previewHTMLContent(event.content)
        : null,
      [airtableSchema.fields.Hashtags]: event.hashtags?.join(', '),
      [airtableSchema.fields.Added]: event.lastModifiedDate
        ? moment(event.lastModifiedDate).format(DATE_FORMAT)
        : null,
      [airtableSchema.fields.Region]: event.location?.region,
      [airtableSchema.fields
        .Url]: `https://portal.foresightreports.com/portal/actions/detail/${event.id}?referrer=DPS`,
      [airtableSchema.fields.Source]: event.sources?.join(', '),
      [airtableSchema.fields.Updated]: event.updated,
    },
  };
}

function getAirtableUrl(baseId: string, tableId: string): string {
  return `https://airtable.com/${baseId}/${tableId}`;
}

class AirtableHelper {
  private base: Airtable.Base;

  constructor(apiKey: string, baseId: string) {
    this.base = new Airtable({ apiKey }).base(baseId);
  }

  public async createRecord(
    tableId: string,
    data: RecordData,
  ): Promise<Airtable.Record<any>> {
    try {
      const record = await this.base(tableId).create(data);
      //console.log("Record created:", record);
      return record;
    } catch (error) {
      console.error('Error creating record:', error);
      throw error;
    }
  }

  public async createRecords(
    tableId: string,
    recordsData: RecordData[],
  ): Promise<Airtable.Records<Airtable.FieldSet>> {
    try {
      const records = await this.base(tableId).create(recordsData);
      //console.log("Records created:", records);
      return records;
    } catch (error) {
      console.error('Error creating records:', error);
      throw error;
    }
  }

  public async deleteAllRecords(tableId: string): Promise<void> {
    try {
      const records = await this.base(tableId).select({}).all();
      const recordIds = records.map((record) => record.id);

      while (recordIds.length > 0) {
        const chunk = recordIds.splice(0, 10); // Airtable allows a maximum of 10 deletions per request
        await this.base(tableId).destroy(chunk);
        //console.log(`Deleted records: ${chunk}`);
      }

      //console.log("All records deleted successfully");
    } catch (error) {
      console.error('Error deleting records:', error);
      throw error;
    }
  }
}

export const AirTablePlatformIntegration: IPlatformIntegration = async (
  integrationConfig: CompanyIntegration,
  actions: Action[],
  title: string, // not used in this function
  sendToEmails: string[], // not used in this function
) => {
  const airtableCalls = [];

  const airtableHelper = new AirtableHelper(
    airtableAccessToken || '',
    integrationConfig.config.baseId,
  );

  const sortedActions = actions.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  const airtableRecords = sortedActions.map((event) => getAirtableRow(event));

  // delete the old records
  await airtableHelper.deleteAllRecords(integrationConfig.config.tableId);

  // add the new rows
  const batchSize = 10;
  for (let i = 0; i < airtableRecords.length; i += batchSize) {
    const batch = airtableRecords.slice(i, i + batchSize);
    airtableCalls.push(
      airtableHelper.createRecords(integrationConfig.config.tableId, batch),
    );
  }

  await Promise.all(airtableCalls);

  return getAirtableUrl(
    integrationConfig.config.baseId,
    integrationConfig.config.tableId,
  );
};
