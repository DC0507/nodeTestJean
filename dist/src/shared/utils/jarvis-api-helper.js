"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadActionsFromRestApi = downloadActionsFromRestApi;
exports.downloadExcelFromRestApi = downloadExcelFromRestApi;
const request_1 = __importDefault(require("request"));
const config_service_1 = require("../config/config.service");
/**
 * Downloads actions from a REST API based on specified audiences and time limit.
 * @param audiences - An array of audience strings.
 * @param limit48Hours - A boolean to limit the download to 48 hours.
 * @returns A promise that resolves to an array of actions.
 */
async function downloadActionsFromRestApi(audiences, limit48Hours = false) {
    return new Promise((resolve, reject) => {
        const headers = {
            apiKey: config_service_1.configService.getValue('APIKEY'),
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
        request_1.default.post({
            url: config_service_1.configService.getValue('DATA_DOWNLOAD_URL'),
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
        }, (error, response, body) => {
            if (error) {
                reject(new Error('Error downloading data from REST API: ' +
                    JSON.stringify(error, Object.getOwnPropertyNames(error))));
            }
            else {
                resolve(JSON.parse(body));
            }
        });
    });
}
/**
 * Downloads an Excel file from a REST API based on specified audiences and time limit.
 * @param audiences - An array of audience strings.
 * @param limit48Hours - A boolean to limit the download to 48 hours.
 * @returns A promise that resolves to an object containing the file name and file buffer.
 */
function downloadExcelFromRestApi(audiences, limit48Hours = false) {
    return new Promise((resolve, reject) => {
        const headers = {
            apiKey: config_service_1.configService.getValue('APIKEY'),
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
        request_1.default.post({
            url: config_service_1.configService.getValue('EXCEL_DOWNLOAD_URL'),
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
        }, (error, response, body) => {
            if (error) {
                reject(new Error('Error downloading Excel file from REST API: ' +
                    JSON.stringify(error, Object.getOwnPropertyNames(error))));
            }
            else {
                resolve({
                    fileName: response.headers['content-disposition']
                        ? response.headers['content-disposition'].split('"')[1]
                        : 'unknown.blob',
                    file: body,
                });
            }
        });
    });
}
//# sourceMappingURL=jarvis-api-helper.js.map