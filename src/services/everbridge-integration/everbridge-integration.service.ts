import { JarvisService } from '../../shared/services/jarvis.service';
import * as http from 'http';
import * as https from 'https';
import { URL } from 'url';
import moment from 'moment';
import {
  Action,
  ActionsDocument,
  CompanyIntegration,
  CompanyIntegrationsDocument,
  CreateManyIntegrationTxLogsDocument,
  IntegrationTxLogsDocument,
  IntegrationType,
  PostStatus,
} from '../../shared/graphql/jarvis';
import {
  audiencesToArray,
  addHoursToDate,
  getActionTitle,
  isMidnight,
  previewHTMLContent,
} from 'jarvis-common';
import dotenv from 'dotenv';
import { inject, injectable, optional } from 'inversify';
import { InvocationContext } from '@azure/functions';
import { Logger } from '../../shared/utils/logger';
import { configService } from '../../shared/config/config.service';
dotenv.config();

const BATCH_SIZE = 50;

interface ApiResponse {
  statusCode: number;
  data: string;
}

interface EverbridgeMessage {
  identifier: string;
  sent: Date;
  status: enumEverbridgeStatus;
  //status: enumEverbridgeStatus;
  msgType: enumEverbridgeMessageType;
  scope: enumEverbridgeScope;
  //language: string;
  info: EverbridgeEvent[];
}
interface EverbridgeEvent {
  urgency: enumEverbridgeUrgency;
  severity: enumEverbridgeSeverity;
  certainty: enumEverbridgeCertainty;
  headline: string;
  description: string;
  effective: Date;
  expires: Date;
  category: enumEverbridgeCategory[];
  parameter: enumEverbridgeParameter[];
  web?: URL;
  resourceDesc?: string;
  area: EverbridgeArea[];
}
interface enumEverbridgeParameter {
  valueName: string;
  value: string;
}
interface EverbridgeArea {
  areaDesc: string;
  polygon?: string[];
  circle?: string[];
}
enum enumEverbridgeSubCategory {
  CivilDemonstration = 'Civil Demonstration',
  CivilRioting = 'Civil Rioting',
  GeneralCivilUnrest = 'General Civil Unrest',
  AviationWorkerStrike = 'Aviation Worker Strike',
  CargoTransportationStrike = 'Cargo Transportation Strike',
  CivilServiceStrike = 'Civil Service Strike',
  EnergySectorStrike = 'Energy Sector Strike',
  GeneralStrike = 'General Strike',
  IndustrialStrike = 'Industrial Strike',
  MedicalServicesStrike = 'Medical Services Strike',
  MineWorkersStrike = 'Mine Workers Strike',
  PortStrike = 'Port Strike',
  PublicTransportationStrike = 'Public Transportation Strike',
  PlannedStrike = 'Planned Strike',
}
enum enumEverbridgeCertainty {
  Observed = 'Observed',
  Likely = 'Likely',
  Possible = 'Possible',
  Unlikely = 'Unlikely',
  Unknown = 'Unknown',
}
enum enumEverbridgeSeverity {
  Extreme = 'Extreme',
  Severe = 'Severe',
  Moderate = 'Moderate',
  Minor = 'Minor',
  Unknown = 'Unknown',
}
enum enumEverbridgeUrgency {
  Immediate = 'Immediate',
  Expected = 'Expected',
  Future = 'Future',
  Past = 'Past',
  Unknown = 'Unknown',
}
enum enumEverbridgeMessageType {
  Alert = 'Alert',
  Update = 'Update',
}
enum enumEverbridgeStatus {
  Actual = 'Actual',
}
enum enumEverbridgeScope {
  Public = 'Public',
}
enum enumEverbridgeCategory {
  CivilUnrest = 'Civil Unrest',
}

interface ActionsResponse {
  actions: {
    edges: { node: Action }[];
    pageInfo: {
      endCursor: string | null;
      hasNextPage: boolean;
    };
  };
}

// Define the type for the integration transaction log
interface IntegrationTxLog {
  companyId: string;
  eventId: string;
  type: IntegrationType;
  eventUpdated: any; // Replace 'any' with the appropriate type if known
  eventDate: any; // Replace 'any' with the appropriate type if known
}

@injectable()
export class EverbridgeIntegrationService {
  everbridgeApi: string;
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
              \/                    \/  Everbridge Integration`);
    this.logger = new Logger('EverbridgeIntegrationService', invocationContext);
    this.logger.info(
      `connecting to: ${configService.getValue('GRAPHQL_SERVER')}`,
    );

    this.everbridgeApi = configService.getValue('EVERBRIDGE_API');
  }

  private async loadActionsWindow(
    from: moment.Moment,
    to: moment.Moment,
    audiences: string[],
  ): Promise<Action[]> {
    try {
      let audienceFilter: any[] = [];
      audienceFilter = audiences.map((audience) => {
        return {
          audienceRaw: {
            like: `%${audience}%`,
          },
        };
      });

      let cursor = null;
      let actions: Action[] = [];
      do {
        const rsp: any = await this.jarvisService.client.query({
          query: ActionsDocument,
          variables: {
            paging: {
              first: 50,
              after: cursor,
            },
            filter: {
              status: { eq: PostStatus.Published },
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
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  private async saveIntegrationTxLogEvents(
    clientId: string,
    sendResults: {
      requestId: string;
      processingStatus: string;
      errorCode: string;
      errorMsg: string;
    }[],
    actions: Action[],
  ) {
    const integrationTxLogs = sendResults.reduce<IntegrationTxLog[]>(
      (accu, sendRequest) => {
        const relatedAction = actions.find(
          (x) => x.id === sendRequest.requestId,
        );
        if (relatedAction === undefined || relatedAction === null) {
          this.logger.info(
            ` --> WTF.., could not find ${sendRequest.requestId} in actions sent`,
          );
        } else {
          accu.push({
            companyId: clientId,
            eventId: sendRequest.requestId,
            type: IntegrationType.Everbridge,
            eventUpdated: relatedAction.updated,
            eventDate: relatedAction.date,
          });
        }
        return accu;
      },
      [],
    );

    if (integrationTxLogs && integrationTxLogs.length > 0) {
      const rsp = await this.jarvisService.client.mutate({
        mutation: CreateManyIntegrationTxLogsDocument,
        variables: {
          input: {
            integrationTxLogs: integrationTxLogs,
          },
        },
      });
    }
  }

  private async loadIntegrationTxLogEvents(
    companyId: string,
    from: moment.Moment,
    to: moment.Moment,
  ) {
    const rsp = await this.jarvisService.client.query({
      query: IntegrationTxLogsDocument,
      variables: {
        filter: {
          companyId: { eq: companyId },
          type: { eq: IntegrationType.Everbridge },
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
    const results = rsp.data.integrationTxLogs.edges.map((x: any) => x.node);
    return results;
  }

  private async loadEverbridgeIntegrations(): Promise<CompanyIntegration[]> {
    const rsp = await this.jarvisService.client.query({
      query: CompanyIntegrationsDocument,
      variables: {
        filter: {
          type: {
            eq: IntegrationType.Everbridge,
          },
        },
      },
    });
    const results = rsp.data.companyIntegrations.edges.map((x: any) => x.node);
    return results;
  }

  async postBulkToEverbridge(data: string, authentication: string) {
    return new Promise<ApiResponse>((resolve, reject) => {
      // "https://rei.everbridge.net/riskevents/v1/custom/" (used for single)
      const urlObj = new URL(this.everbridgeApi);

      const options: http.RequestOptions = {
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
          const apiResponse: ApiResponse = {
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

  getSeverity(action: Action): enumEverbridgeSeverity {
    if (!action.impact) return enumEverbridgeSeverity.Unknown;
    if (action.impact.startsWith('1')) return enumEverbridgeSeverity.Minor;
    if (action.impact.startsWith('2')) return enumEverbridgeSeverity.Moderate;
    if (action.impact.startsWith('3')) return enumEverbridgeSeverity.Severe;
    if (action.impact.startsWith('4')) return enumEverbridgeSeverity.Extreme;
    return enumEverbridgeSeverity.Unknown;
  }

  actionToEverbridgeEvent(
    action: Action,
    type: enumEverbridgeMessageType = enumEverbridgeMessageType.Alert,
  ): EverbridgeMessage {
    const result: EverbridgeMessage = {
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
          headline: getActionTitle(action),
          description: previewHTMLContent(action.content || '', 500),
          effective: action.date.slice(0, -1),
          expires: action.endDate
            ? action.endDate.slice(0, -1)
            : isMidnight(action.date)
            ? addHoursToDate(action.date, 24).toISOString().slice(0, -1)
            : addHoursToDate(action.date, 4).toISOString().slice(0, -1),
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
          web: new URL(
            `https://portal.foresightreports.com/portal/actions/detail/${action.id}?referrer=EVERBRIDGE`,
          ),
          resourceDesc: 'FORESIGHT (www.foresightreports.com)',
          area: [
            {
              areaDesc: `${
                action?.locationDescription || 'Unknown Location'
              }, ${action?.location?.city || 'Unknown City'}`,
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
    const now = moment.utc();

    // get the active everbridge integration clients
    const integrations = await this.loadEverbridgeIntegrations();

    const activeIntegrations = integrations.filter(
      (x) =>
        x.client.id &&
        (x.client.subscriptions?.length ?? 0) > 0 &&
        x.config?.apiKey &&
        x.config?.enabled === true,
    );
    this.logger.info(
      `loaded ${activeIntegrations.length} active Everbridge integration clients for ${now}`,
    );

    if (activeIntegrations.length > 0) {
      for (const integration of activeIntegrations) {
        const audiences = audiencesToArray(
          integration.client.subscriptions?.[0]?.audiences || '',
        );

        const hoursForward =
          parseInt(integration.config?.forwardWindowInHours) || 72;
        const endWindow = moment(now).add(hoursForward, 'h');

        this.logger.info(
          `processing ${integration.client.name}, audiences: ${audiences}, action window for ${hoursForward} hours`,
        );

        // load the actions
        const actions = (
          await this.loadActionsWindow(now, endWindow, audiences)
        ).filter(
          (x) =>
            x.latitude && x.longitude && x.latitude !== 0 && x.longitude !== 0,
        );

        this.logger.info(` --> loaded ${actions.length} actions`);

        // load the window for what we have sent in the past to this client
        const sent = await this.loadIntegrationTxLogEvents(
          integration.client.id || 'Unknown Client ID',
          now,
          endWindow,
        );

        this.logger.info(` --> loaded ${sent.length} sent events`);

        // only process actions which have not been sent already or have been updated since they have been sent
        const actionsToSend = actions.filter(
          (x) =>
            !sent.some(
              (y: any) => y.eventId === x.id && y.eventUpdated === x.updated,
            ),
        );

        if (actionsToSend.length === 0) {
          this.logger.info(
            ` --> No new or updated actions to send to ${integration.client.name}`,
          );
          continue;
        }
        this.logger.info(
          ` --> from ${actions.length} actions, ${actionsToSend.length} to send`,
        );

        // we support multiple api keys for a single client, comma delimited
        const apikeys = (integration.config.apiKey || '')
          .split(',')
          .map((x: any) => x.trim());
        this.logger.info(` --> identified ${apikeys.length} api keys`);

        for (const apikey of apikeys) {
          this.logger.info(` --> processing ${apikey}`);
          for (let i = 0; i < actionsToSend.length; i += BATCH_SIZE) {
            this.logger.info(` --> batch: ${i} from ${actionsToSend.length}, batch size: ${BATCH_SIZE}`);
            const everbridgeEvents = actionsToSend
              .slice(i, i + BATCH_SIZE)
              .map((x) => this.actionToEverbridgeEvent(x));

            if (
              integration.preprocessor &&
              integration.preprocessor.functions
            ) {
              for (const event of everbridgeEvents) {
                try {
                  for (const processor of integration.preprocessor?.functions) {
                    this.logger.info(
                      ` ----> running preprocessor function: ${processor.name} on ${event.identifier}`
                    );
                    const myfunc = new Function(
                      'action',
                      'event',
                      Buffer.from(processor.function, 'base64').toString(
                        'ascii',
                      ),
                    );
                    myfunc(
                      actions.find((x) => x.id === event.identifier),
                      event,
                    );
                  }
                } catch (e) {
                  this.logger.error(e);
                }
              }
            }
            this.logger.info(`batch: ${everbridgeEvents.length}`);
            const batch = everbridgeEvents.slice(i, i + BATCH_SIZE);
            const results = await this.postBulkToEverbridge(
              JSON.stringify(batch),
              apikey,
            );

            const sentResults = JSON.parse(results.data);

            if (results.statusCode === 200) {
              this.logger.info(` --> saving integration tx log events`);
              await this.saveIntegrationTxLogEvents(
                integration.client.id || 'Unknown Client ID',
                sentResults,
                actionsToSend,
              );
            }
          }
        }
      }
    }
  }
}
