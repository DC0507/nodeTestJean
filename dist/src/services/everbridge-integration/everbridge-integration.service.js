"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.EverbridgeIntegrationService = void 0;
const jarvis_service_1 = require("../../shared/services/jarvis.service");
const http = __importStar(require("http"));
const https = __importStar(require("https"));
const url_1 = require("url");
const moment_1 = __importDefault(require("moment"));
const jarvis_1 = require("../../shared/graphql/jarvis");
const jarvis_common_1 = require("jarvis-common");
const dotenv_1 = __importDefault(require("dotenv"));
const inversify_1 = require("inversify");
const functions_1 = require("@azure/functions");
const logger_1 = require("../../shared/utils/logger");
const config_service_1 = require("../../shared/config/config.service");
dotenv_1.default.config();
const BATCH_SIZE = 50;
var enumEverbridgeSubCategory;
(function (enumEverbridgeSubCategory) {
    enumEverbridgeSubCategory["CivilDemonstration"] = "Civil Demonstration";
    enumEverbridgeSubCategory["CivilRioting"] = "Civil Rioting";
    enumEverbridgeSubCategory["GeneralCivilUnrest"] = "General Civil Unrest";
    enumEverbridgeSubCategory["AviationWorkerStrike"] = "Aviation Worker Strike";
    enumEverbridgeSubCategory["CargoTransportationStrike"] = "Cargo Transportation Strike";
    enumEverbridgeSubCategory["CivilServiceStrike"] = "Civil Service Strike";
    enumEverbridgeSubCategory["EnergySectorStrike"] = "Energy Sector Strike";
    enumEverbridgeSubCategory["GeneralStrike"] = "General Strike";
    enumEverbridgeSubCategory["IndustrialStrike"] = "Industrial Strike";
    enumEverbridgeSubCategory["MedicalServicesStrike"] = "Medical Services Strike";
    enumEverbridgeSubCategory["MineWorkersStrike"] = "Mine Workers Strike";
    enumEverbridgeSubCategory["PortStrike"] = "Port Strike";
    enumEverbridgeSubCategory["PublicTransportationStrike"] = "Public Transportation Strike";
    enumEverbridgeSubCategory["PlannedStrike"] = "Planned Strike";
})(enumEverbridgeSubCategory || (enumEverbridgeSubCategory = {}));
var enumEverbridgeCertainty;
(function (enumEverbridgeCertainty) {
    enumEverbridgeCertainty["Observed"] = "Observed";
    enumEverbridgeCertainty["Likely"] = "Likely";
    enumEverbridgeCertainty["Possible"] = "Possible";
    enumEverbridgeCertainty["Unlikely"] = "Unlikely";
    enumEverbridgeCertainty["Unknown"] = "Unknown";
})(enumEverbridgeCertainty || (enumEverbridgeCertainty = {}));
var enumEverbridgeSeverity;
(function (enumEverbridgeSeverity) {
    enumEverbridgeSeverity["Extreme"] = "Extreme";
    enumEverbridgeSeverity["Severe"] = "Severe";
    enumEverbridgeSeverity["Moderate"] = "Moderate";
    enumEverbridgeSeverity["Minor"] = "Minor";
    enumEverbridgeSeverity["Unknown"] = "Unknown";
})(enumEverbridgeSeverity || (enumEverbridgeSeverity = {}));
var enumEverbridgeUrgency;
(function (enumEverbridgeUrgency) {
    enumEverbridgeUrgency["Immediate"] = "Immediate";
    enumEverbridgeUrgency["Expected"] = "Expected";
    enumEverbridgeUrgency["Future"] = "Future";
    enumEverbridgeUrgency["Past"] = "Past";
    enumEverbridgeUrgency["Unknown"] = "Unknown";
})(enumEverbridgeUrgency || (enumEverbridgeUrgency = {}));
var enumEverbridgeMessageType;
(function (enumEverbridgeMessageType) {
    enumEverbridgeMessageType["Alert"] = "Alert";
    enumEverbridgeMessageType["Update"] = "Update";
})(enumEverbridgeMessageType || (enumEverbridgeMessageType = {}));
var enumEverbridgeStatus;
(function (enumEverbridgeStatus) {
    enumEverbridgeStatus["Actual"] = "Actual";
})(enumEverbridgeStatus || (enumEverbridgeStatus = {}));
var enumEverbridgeScope;
(function (enumEverbridgeScope) {
    enumEverbridgeScope["Public"] = "Public";
})(enumEverbridgeScope || (enumEverbridgeScope = {}));
var enumEverbridgeCategory;
(function (enumEverbridgeCategory) {
    enumEverbridgeCategory["CivilUnrest"] = "Civil Unrest";
})(enumEverbridgeCategory || (enumEverbridgeCategory = {}));
let EverbridgeIntegrationService = class EverbridgeIntegrationService {
    constructor(jarvisService, invocationContext) {
        this.jarvisService = jarvisService;
        this.invocationContext = invocationContext;
        console.log(String.raw `
     ____.                  .__        
    |    |____ __________  _|__| ______
    |    \__  \\_  __ \  \/ /  |/  ___/
/\__|    |/ __ \|  | \/\   /|  |\___ \ 
\________(____  /__|    \_/ |__/____  )
              \/                    \/  Everbridge Integration`);
        this.logger = new logger_1.Logger('EverbridgeIntegrationService', invocationContext);
        this.logger.info(`connecting to: ${config_service_1.configService.getValue('GRAPHQL_SERVER')}`);
        this.everbridgeApi = config_service_1.configService.getValue('EVERBRIDGE_API');
    }
    async loadActionsWindow(from, to, audiences) {
        try {
            let audienceFilter = [];
            audienceFilter = audiences.map((audience) => {
                return {
                    audienceRaw: {
                        like: `%${audience}%`,
                    },
                };
            });
            let cursor = null;
            let actions = [];
            do {
                const rsp = await this.jarvisService.client.query({
                    query: jarvis_1.ActionsDocument,
                    variables: {
                        paging: {
                            first: 50,
                            after: cursor,
                        },
                        filter: {
                            status: { eq: jarvis_1.PostStatus.Published },
                            tactic: { protest: { is: true } },
                            or: audienceFilter,
                            date: {
                                between: {
                                    lower: from.toISOString(),
                                    upper: to.toISOString(),
                                },
                            },
                        },
                        sorting: [],
                    },
                });
                const results = rsp.data.actions.edges.map((x) => x.node);
                cursor = rsp.data.actions.pageInfo.endCursor;
                actions = actions.concat(results);
            } while (!!cursor);
            return actions;
        }
        catch (e) {
            this.logger.error(e);
            throw e;
        }
    }
    async saveIntegrationTxLogEvents(clientId, sendResults, actions) {
        const integrationTxLogs = sendResults.reduce((accu, sendRequest) => {
            const relatedAction = actions.find((x) => x.id === sendRequest.requestId);
            if (relatedAction === undefined || relatedAction === null) {
                this.logger.info(` --> WTF.., could not find ${sendRequest.requestId} in actions sent`);
            }
            else {
                accu.push({
                    companyId: clientId,
                    eventId: sendRequest.requestId,
                    type: jarvis_1.IntegrationType.Everbridge,
                    eventUpdated: relatedAction.updated,
                    eventDate: relatedAction.date,
                });
            }
            return accu;
        }, []);
        if (integrationTxLogs && integrationTxLogs.length > 0) {
            const rsp = await this.jarvisService.client.mutate({
                mutation: jarvis_1.CreateManyIntegrationTxLogsDocument,
                variables: {
                    input: {
                        integrationTxLogs: integrationTxLogs,
                    },
                },
            });
        }
    }
    async loadIntegrationTxLogEvents(companyId, from, to) {
        const rsp = await this.jarvisService.client.query({
            query: jarvis_1.IntegrationTxLogsDocument,
            variables: {
                filter: {
                    companyId: { eq: companyId },
                    type: { eq: jarvis_1.IntegrationType.Everbridge },
                    eventDate: {
                        between: {
                            lower: from,
                            upper: to,
                        },
                    },
                },
                paging: { first: 10000 },
            },
        });
        const results = rsp.data.integrationTxLogs.edges.map((x) => x.node);
        return results;
    }
    async loadEverbridgeIntegrations() {
        const rsp = await this.jarvisService.client.query({
            query: jarvis_1.CompanyIntegrationsDocument,
            variables: {
                filter: {
                    type: {
                        eq: jarvis_1.IntegrationType.Everbridge,
                    },
                },
            },
        });
        const results = rsp.data.companyIntegrations.edges.map((x) => x.node);
        return results;
    }
    async postBulkToEverbridge(data, authentication) {
        return new Promise((resolve, reject) => {
            // "https://rei.everbridge.net/riskevents/v1/custom/" (used for single)
            const urlObj = new url_1.URL(this.everbridgeApi);
            const options = {
                hostname: urlObj.hostname,
                port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
                path: urlObj.pathname,
                method: 'POST',
                headers: {
                    Authentication: authentication,
                    'Content-Type': 'application/json',
                    'Content-Length': Buffer.byteLength(data),
                },
            };
            const protocol = urlObj.protocol === 'https:' ? https : http;
            const req = protocol.request(options, (res) => {
                let responseData = '';
                res.setEncoding('utf8');
                res.on('data', (chunk) => {
                    responseData += chunk;
                });
                res.on('end', () => {
                    const apiResponse = {
                        statusCode: res.statusCode || 0,
                        data: responseData,
                    };
                    resolve(apiResponse);
                });
            });
            req.on('error', (error) => {
                reject(error);
            });
            req.write(data);
            req.end();
        });
    }
    getSeverity(action) {
        if (!action.impact)
            return enumEverbridgeSeverity.Unknown;
        if (action.impact.startsWith('1'))
            return enumEverbridgeSeverity.Minor;
        if (action.impact.startsWith('2'))
            return enumEverbridgeSeverity.Moderate;
        if (action.impact.startsWith('3'))
            return enumEverbridgeSeverity.Severe;
        if (action.impact.startsWith('4'))
            return enumEverbridgeSeverity.Extreme;
        return enumEverbridgeSeverity.Unknown;
    }
    actionToEverbridgeEvent(action, type = enumEverbridgeMessageType.Alert) {
        const result = {
            identifier: action.id || 'Unknown Action ID',
            sent: new Date(),
            msgType: type,
            status: enumEverbridgeStatus.Actual,
            scope: enumEverbridgeScope.Public,
            info: [
                {
                    urgency: enumEverbridgeUrgency.Future,
                    severity: this.getSeverity(action),
                    certainty: enumEverbridgeCertainty.Possible,
                    headline: (0, jarvis_common_1.getActionTitle)(action),
                    description: (0, jarvis_common_1.previewHTMLContent)(action.content || '', 500),
                    effective: action.date.slice(0, -1),
                    expires: action.endDate
                        ? action.endDate.slice(0, -1)
                        : (0, jarvis_common_1.isMidnight)(action.date)
                            ? (0, jarvis_common_1.addHoursToDate)(action.date, 24).toISOString().slice(0, -1)
                            : (0, jarvis_common_1.addHoursToDate)(action.date, 4).toISOString().slice(0, -1),
                    category: [enumEverbridgeCategory.CivilUnrest],
                    parameter: [
                        {
                            valueName: 'subCategory',
                            value: enumEverbridgeSubCategory.CivilDemonstration,
                        },
                        {
                            valueName: 'tactic',
                            value: action.tactic?.name || '',
                        },
                    ],
                    web: new url_1.URL(`https://portal.foresightreports.com/portal/actions/detail/${action.id}?referrer=EVERBRIDGE`),
                    resourceDesc: 'FORESIGHT (www.foresightreports.com)',
                    area: [
                        {
                            areaDesc: `${action?.locationDescription || 'Unknown Location'}, ${action?.location?.city || 'Unknown City'}`,
                            circle: [
                                `${action?.longitude || 0} ${action?.latitude || 0} ${0}`,
                            ],
                        },
                    ],
                },
            ],
        };
        return result;
    }
    async processIntegration(test = false) {
        const now = moment_1.default.utc();
        // get the active everbridge integration clients
        const integrations = await this.loadEverbridgeIntegrations();
        const activeIntegrations = integrations.filter((x) => x.client.id &&
            (x.client.subscriptions?.length ?? 0) > 0 &&
            x.config?.apiKey &&
            x.config?.enabled === true);
        this.logger.info(`loaded ${activeIntegrations.length} active Everbridge integration clients for ${now}`);
        if (activeIntegrations.length > 0) {
            for (const integration of activeIntegrations) {
                const audiences = (0, jarvis_common_1.audiencesToArray)(integration.client.subscriptions?.[0]?.audiences || '');
                const hoursForward = parseInt(integration.config?.forwardWindowInHours) || 72;
                const endWindow = (0, moment_1.default)(now).add(hoursForward, 'h');
                this.logger.info(`processing ${integration.client.name}, audiences: ${audiences}, action window for ${hoursForward} hours`);
                // load the actions
                const actions = (await this.loadActionsWindow(now, endWindow, audiences)).filter((x) => x.latitude && x.longitude && x.latitude !== 0 && x.longitude !== 0);
                this.logger.info(` --> loaded ${actions.length} actions`);
                // load the window for what we have sent in the past to this client
                const sent = await this.loadIntegrationTxLogEvents(integration.client.id || 'Unknown Client ID', now, endWindow);
                this.logger.info(` --> loaded ${sent.length} sent events`);
                // only process actions which have not been sent already or have been updated since they have been sent
                const actionsToSend = actions.filter((x) => !sent.some((y) => y.eventId === x.id && y.eventUpdated === x.updated));
                if (actionsToSend.length === 0) {
                    this.logger.info(` --> No new or updated actions to send to ${integration.client.name}`);
                    continue;
                }
                this.logger.info(` --> from ${actions.length} actions, ${actionsToSend.length} to send`);
                // we support multiple api keys for a single client, comma delimited
                const apikeys = (integration.config.apiKey || '')
                    .split(',')
                    .map((x) => x.trim());
                this.logger.info(` --> identified ${apikeys.length} api keys`);
                for (const apikey of apikeys) {
                    this.logger.info(` --> processing ${apikey}`);
                    for (let i = 0; i < actionsToSend.length; i += BATCH_SIZE) {
                        this.logger.info(` --> batch: ${i} from ${actionsToSend.length}, batch size: ${BATCH_SIZE}`);
                        const everbridgeEvents = actionsToSend
                            .slice(i, i + BATCH_SIZE)
                            .map((x) => this.actionToEverbridgeEvent(x));
                        if (integration.preprocessor &&
                            integration.preprocessor.functions) {
                            for (const event of everbridgeEvents) {
                                try {
                                    for (const processor of integration.preprocessor?.functions) {
                                        this.logger.info(` ----> running preprocessor function: ${processor.name} on ${event.identifier}`);
                                        const myfunc = new Function('action', 'event', Buffer.from(processor.function, 'base64').toString('ascii'));
                                        myfunc(actions.find((x) => x.id === event.identifier), event);
                                    }
                                }
                                catch (e) {
                                    this.logger.error(e);
                                }
                            }
                        }
                        this.logger.info(`batch: ${everbridgeEvents.length}`);
                        const batch = everbridgeEvents.slice(i, i + BATCH_SIZE);
                        const results = await this.postBulkToEverbridge(JSON.stringify(batch), apikey);
                        const sentResults = JSON.parse(results.data);
                        if (results.statusCode === 200) {
                            this.logger.info(` --> saving integration tx log events`);
                            await this.saveIntegrationTxLogEvents(integration.client.id || 'Unknown Client ID', sentResults, actionsToSend);
                        }
                    }
                }
            }
        }
    }
};
exports.EverbridgeIntegrationService = EverbridgeIntegrationService;
exports.EverbridgeIntegrationService = EverbridgeIntegrationService = __decorate([
    (0, inversify_1.injectable)(),
    __param(1, (0, inversify_1.inject)(functions_1.InvocationContext)),
    __param(1, (0, inversify_1.optional)()),
    __metadata("design:paramtypes", [jarvis_service_1.JarvisService,
        functions_1.InvocationContext])
], EverbridgeIntegrationService);
//# sourceMappingURL=everbridge-integration.service.js.map