import { Action, CompanyIntegration } from '../../shared/graphql/jarvis';
import { JWT } from 'google-auth-library';
import { google } from 'googleapis';
import { previewHTMLContent } from 'jarvis-common';
import moment from 'moment';
import { IPlatformIntegration } from './platform-integration-interface';
import { DATE_FORMAT, TIME_FORMAT } from 'jarvis-common';
import { JarvisService } from '../../shared/services/jarvis.service';
// const drive = google.drive("v3");
// const path = require("path");
// const fs = require("fs");
import dotenv from 'dotenv';
import { configService } from '../../shared/config/config.service';

dotenv.config();

const gsheetHeader = [
  'Date',
  'End Date',
  'City',
  'State/Province',
  'Country',
  'Industry',
  'Issue',
  'Campaign',
  'Organizers: Group',
  'Location',
  'Tactic',
  'Target',
  'Time',
  'End Time',
  'Interested',
  'Going',
  'Risk Rating',
  'Lat.',
  'Long.',
  'Description',
  'Hashtags',
  'Date Added',
  'Region',
  'Url',
  'Source',
  'Updated',
];

const serviceAccountAuth = new JWT({
  email: configService.getValue('GOOGLE_SERVICE_ACCOUNT'),
  key: configService.getValue('GOOGLE_PRIVATE_KEY')?.replace(/\\n/g, '\n'),
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive.file',
  ],
});

async function shareSpreadsheet(
  jwtClient: JWT,
  spreadsheetId: string,
  emailAddresses: string[],
  role: 'reader' | 'writer' = 'reader',
) {
  const drive = google.drive({ version: 'v3', auth: jwtClient });

  for (const emailAddress of emailAddresses) {
    try {
      await drive.permissions.create({
        fileId: spreadsheetId,
        requestBody: {
          type: 'user',
          role: role,
          emailAddress: emailAddress,
        },
        sendNotificationEmail: false,
        fields: 'id',
      });
      console.log(`Spreadsheet shared with ${emailAddress}`);
    } catch (e: any) {
      console.error(
        `Failed to share spreadsheet with ${emailAddress}: ${e?.message}`,
      );
    }
  }
}

//TODO: create sheet OR update existing sheet (fix this)
async function getGoogleSheet(
  integration: CompanyIntegration,
  title = 'newSheet',
): Promise<any> {
  const { GoogleSpreadsheet } = await import('google-spreadsheet');

  if (integration.config?.sheetId) {
    if (integration.config?.sheetId) {
      console.log(
        `   !!! Subscription has Google integration with GSheetID: ${integration.config?.sheetId}`,
      );
    }
    const doc = new GoogleSpreadsheet(
      integration.config?.sheetId,
      serviceAccountAuth,
    );
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.clear();
    console.log(`Found existing google sheet, id:${doc.spreadsheetId}`);
    return doc;
  } else {
    const doc = await GoogleSpreadsheet.createNewSpreadsheetDocument(
      serviceAccountAuth,
      {
        title: title,
      },
    );
    console.log(`Created new google sheet, id:${doc.spreadsheetId}`);
    return doc;
  }
}

async function renameSpreadsheet(
  jwtClient: JWT,
  spreadsheetId: string,
  newName: string,
) {
  const drive = google.drive({ version: 'v3', auth: jwtClient });
  try {
    await drive.files.update({
      fileId: spreadsheetId,
      requestBody: {
        name: newName,
      },
    });
    console.log(`Spreadsheet renamed to: ${newName}`);
  } catch (error) {
    console.error('The API returned an error: ' + error);
  }
}

async function generateProtestGSheet(doc: any, actions: Action[]) {
  //console.log(doc);
  console.log('updating gsheet');
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  sheet.setHeaderRow(gsheetHeader);
  await sheet.loadCells('A1:Z1'); // Load a range of cells to apply styles (header row in this case)
  const blueBackground = {
    red: 74 / 255,
    green: 134 / 255,
    blue: 232 / 255,
    alpha: 1,
  }; // A nice shade of blue for background
  const whiteText = { red: 1, green: 1, blue: 1, alpha: 1 }; // White for text color
  for (let c = 0; c < gsheetHeader.length; c++) {
    const cell = sheet.getCell(0, c); // Header row is row 0, and iterate through columns
    cell.textFormat = { bold: true, foregroundColor: whiteText }; // Make text bold and white
    cell.backgroundColor = blueBackground; // Set background color to blue
  }
  await sheet.saveUpdatedCells();

  const sortedActions = actions.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
  //console.log("adding rows");
  await sheet.addRows(
    sortedActions.map((event) => {
      //console.log(` -> ${event.id}`);
      return {
        Date: event.date ? moment.utc(event.date).format(DATE_FORMAT) : '', // Use empty string instead of null
        'End Date': event.endDate
          ? moment.utc(event.endDate).format(DATE_FORMAT)
          : event.date
          ? moment.utc(event.date).format(DATE_FORMAT)
          : '',
        City: event.location?.city || '', // Use empty string instead of null
        'State/Province': event.location?.province || '',
        Country: event.location?.country || '',
        Industry: event.sectors
          ? event.sectors.map((x: any) => x.name).join(', ')
          : '',
        Issue: event.issues
          ? event.issues.map((x: any) => x.name).join(', ')
          : '', // Issues
        Campaign: event.campaigns
          ? event.campaigns.map((x: any) => x.name).join(', ')
          : '', // Campaigns
        'Organizers: Group': event.groups
          ? event.groups.map((x: any) => x.name).join(', ')
          : '', // Organizers: Groups
        Location: event.locationDescription || '',
        Tactic: event?.tactic?.name || '',
        Target: event.companies
          ? event.companies
              .map((x: any) => (x.externalName ? x.externalName : x.name))
              .join(', ')
          : '',
        Time: event.date ? `${moment.utc(event.date).format(TIME_FORMAT)}` : '', // Use empty string instead of null
        'End Time': event.endDate
          ? `${moment.utc(event.endDate).format(TIME_FORMAT)}`
          : '', // Use empty string instead of null
        Interested: event.interested || '',
        Going: event.going || '',
        'Risk Rating':
          event.impact && event.impact.length > 0
            ? parseInt(event.impact.charAt(0)).toString()
            : '',
        'Lat.': event.latitude?.toString() || '',
        'Long.': event.longitude?.toString() || '',
        Description: event.content ? previewHTMLContent(event.content) : '',
        Hashtags: event.hashtags?.join(', ') || '',
        'Date Added': event.lastModifiedDate
          ? moment(event.lastModifiedDate).format(DATE_FORMAT)
          : '',
        Region: event.location?.region || '',
        Url: `https://portal.foresightreports.com/portal/actions/detail/${event.id}?referrer=DPS`,
        Source: event.sources?.join(', ') || '',
        Updated: event.updated || '',
      };
    }),
  );
  //console.log("done - adding formattting");
  await applyConditionalFormattingByValue(
    serviceAccountAuth,
    doc.spreadsheetId,
    sheet.sheetId,
    16,
  );

  //share with specific users, domains, or make public
  console.log(`sharing with service account:${serviceAccountAuth.email}`);
  await doc.share(serviceAccountAuth.email || '', { role: 'writer' });
  //await doc.share("mycorp.com");
  //await doc.setPublicAccessLevel("reader");
  return doc.spreadsheetId;
}

async function applyConditionalFormattingByValue(
  jwtClient: JWT,
  spreadsheetId: string,
  sheetId: number,
  columnIndex: number,
) {
  const sheets = google.sheets({ version: 'v4', auth: jwtClient });

  // Define the colors for the values
  const valueColors = [
    { value: '1', color: { red: 0.0, green: 0.8, blue: 0.0 } }, // Green for 1
    { value: '2', color: { red: 0.9, green: 0.9, blue: 0.0 } }, // Yellow for 2
    { value: '3', color: { red: 0.9, green: 0.647, blue: 0.0 } }, // Orange for 3
    { value: '4', color: { red: 0.9, green: 0.0, blue: 0.0 } }, // Red for 4
  ];

  // Create a conditional format rule for each value-color pair
  const requests = valueColors.map(({ value, color }) => {
    return {
      addConditionalFormatRule: {
        rule: {
          ranges: [
            {
              sheetId: sheetId,
              startRowIndex: 1, // Skip the header row by starting from the second row
              startColumnIndex: columnIndex,
              endColumnIndex: columnIndex + 1,
            },
          ],
          booleanRule: {
            condition: {
              type: 'CUSTOM_FORMULA',
              values: [
                {
                  userEnteredValue: `=EQ($${String.fromCharCode(
                    65 + columnIndex,
                  )}2, ${value})`,
                },
              ],
            },
            format: {
              backgroundColor: color,
            },
          },
        },
        index: 0, // Position of the rule in the conditional format rules list
      },
    };
  });
  await sheets.spreadsheets.batchUpdate({
    auth: serviceAccountAuth,
    spreadsheetId: spreadsheetId,
    requestBody: { requests: requests },
  });
}

function getSpreedsheetUrl(id: string) {
  return `https://docs.google.com/spreadsheets/d/${id}`;
}

export const GSheetPlatformIntegration: IPlatformIntegration = async (
  integrationConfig: CompanyIntegration,
  actions: Action[],
  title: string,
  sendToEmails: string[],
) => {
  const doc = await getGoogleSheet(integrationConfig, title);

  const spreadsheetId = await generateProtestGSheet(doc, actions);

  // grant the email addresses readonly access to the sheet
  await shareSpreadsheet(
    serviceAccountAuth,
    spreadsheetId,
    sendToEmails,
    'writer', // issue with "reader" is they can't resize columns, etc.
  );

  return getSpreedsheetUrl(spreadsheetId);
};

// helper function to delete all the files owned by the service account
async function deleteOwnedFilesOlderThan(
  jarvis: JarvisService,
  daysAgo: number,
) {
  const now = new Date();
  const sevenDaysAgo = new Date(
    now.setDate(now.getDate() - daysAgo),
  ).toISOString();

  // do not delete files which are used as part of gsheet integration
  const gsheetIntegrations = await jarvis.getGsheetIntegrations();
  const gsheetsToKeep = gsheetIntegrations.map((x: any) => x.config?.sheetId);

  const drive = google.drive({
    version: 'v3',
    auth: serviceAccountAuth,
  });

  try {
    const response = await drive.files.list({
      q: `'me' in owners and modifiedTime < '${sevenDaysAgo}'`,
      fields: 'files(id, name, modifiedTime)',
      spaces: 'drive',
    });

    const files =
      response?.data?.files?.filter(
        (x: any) => !gsheetsToKeep.includes(x.id),
      ) || [];

    if (files.length > 0) {
      console.log('Files to clean up:');
      files.forEach((file) => {
        if (file.id) {
          console.log(`${file.name} (${file.id})`);
          // Uncomment the next line to actually perform the deletion
          drive.files.delete({ fileId: file.id });
        }
      });
    } else {
      console.log('No files found to clean up.');
    }
  } catch (err) {
    console.error('The API returned an error: ' + err);
  }
}
