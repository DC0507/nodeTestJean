import { GraphQLClientConfig, GraphQLClientCoreService } from 'jarvis-common';
import { injectable } from 'inversify';
import { configService } from '../config/config.service';
@injectable()
export class GraphQLClientService extends GraphQLClientCoreService {
  constructor() {
    const config: GraphQLClientConfig = {
      apikey: configService.getValue('APIKEY'),
      uri: configService.getValue('GRAPHQL_SERVER'),
    };
    super(config);
  }
}
