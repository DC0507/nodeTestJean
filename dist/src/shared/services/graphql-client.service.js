"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLClientService = void 0;
const jarvis_common_1 = require("jarvis-common");
const inversify_1 = require("inversify");
const config_service_1 = require("../config/config.service");
let GraphQLClientService = class GraphQLClientService extends jarvis_common_1.GraphQLClientCoreService {
    constructor() {
        const config = {
            apikey: config_service_1.configService.getValue('APIKEY'),
            uri: config_service_1.configService.getValue('GRAPHQL_SERVER'),
        };
        super(config);
    }
};
exports.GraphQLClientService = GraphQLClientService;
exports.GraphQLClientService = GraphQLClientService = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], GraphQLClientService);
//# sourceMappingURL=graphql-client.service.js.map