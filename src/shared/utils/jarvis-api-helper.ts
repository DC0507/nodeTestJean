import { Action } from '../graphql/jarvis';
import request from 'request';
import { configService } from '../config/config.service';

/**
 * Downloads actions from a REST API based on specified audiences and time limit.
 * @param audiences - An array of audience strings.
 * @param limit48Hours - A boolean to limit the download to 48 hours.
 * @returns A promise that resolves to an array of actions.
 */
export async function downloadActionsFromRestApi(
  audiences: string[],
  limit48Hours = false,
): Promise<Action[]> {
  return new Promise<any>((resolve, reject) => {
    const headers = {
      apiKey: configService.getValue('APIKEY'),
    };

    const from = new Date(new Date().setDate(new Date().getDate()))
      .toISOString()
      .substring(0, 10);
    const to = !limit48Hours
      ? new Date(new Date().setDate(new Date().getDate() + 7 * 12))
          .toISOString()
          .substring(0, 10)
      : new Date(new Date().setDate(new Date().getDate() + 2))
          .toISOString()
          .substring(0, 10);

    request.post(
      {
        url: configService.getValue('DATA_DOWNLOAD_URL'),
        headers,
        form: {
          dateRange: [from, to],
          forCustomer: true,
          audiences: audiences,
          status: 'Published',
          useActionDate: true,
          inPerson: true,
          postType: ['Action'],
          actionType: ['Action', 'RawAction'],
          noSource: true,
        },
        encoding: null,
      },
      (error: any, response: any, body: any) => {
        if (error) {
          reject(
            new Error(
              'Error downloading data from REST API: ' +
                JSON.stringify(error, Object.getOwnPropertyNames(error)),
            ),
          );
        } else {
          resolve(JSON.parse(body));
        }
      },
    );
  });
}

/**
 * Downloads an Excel file from a REST API based on specified audiences and time limit.
 * @param audiences - An array of audience strings.
 * @param limit48Hours - A boolean to limit the download to 48 hours.
 * @returns A promise that resolves to an object containing the file name and file buffer.
 */
export function downloadExcelFromRestApi(
  audiences: string[],
  limit48Hours = false,
) {
  return new Promise<{ fileName: any; file: Buffer }>((resolve, reject) => {
    const headers = {
      apiKey: configService.getValue('APIKEY'),
    };

    const from = new Date(new Date().setDate(new Date().getDate()))
      .toISOString()
      .substring(0, 10);
    const to = !limit48Hours
      ? new Date(new Date().setDate(new Date().getDate() + 7 * 12))
          .toISOString()
          .substring(0, 10)
      : new Date(new Date().setDate(new Date().getDate() + 2))
          .toISOString()
          .substring(0, 10);
    request.post(
      {
        url: configService.getValue('EXCEL_DOWNLOAD_URL'),
        headers,
        form: {
          filenameNote: 'DPS',
          dateRange: [from, to],
          forCustomer: true,
          audiences: audiences,
          status: 'Published',
          useActionDate: true,
          inPerson: true,
          postType: ['Action'],
          actionType: ['Action', 'RawAction'],
          noSource: true,
        },
        encoding: null,
      },
      (error: any, response: any, body: any) => {
        if (error) {
          reject(
            new Error(
              'Error downloading Excel file from REST API: ' +
                JSON.stringify(error, Object.getOwnPropertyNames(error)),
            ),
          );
        } else {
          resolve({
            fileName: response.headers['content-disposition']
              ? response.headers['content-disposition'].split('"')[1]
              : 'unknown.blob',
            file: body,
          });
        }
      },
    );
  });
}
