"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeAndEnvVar = getTimeAndEnvVar;
const functions_1 = require("@azure/functions");
const config_service_1 = require("../shared/config/config.service");
async function getTimeAndEnvVar(request, context) {
    context.log(`Http function processed request for url "${request.url}"`);
    return {
        status: 200,
        body: `PORTAL_FROM_EMAIL : ${config_service_1.configService.getValue('PORTAL_FROM_EMAIL')}, CURRENT_TIME : ${Math.floor(new Date().getTime() / 1000)}, CURRENT LOCAL TIME : ${new Date().toLocaleString()}`,
    };
}
functions_1.app.http('getTimeAndEnvVar', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: getTimeAndEnvVar,
});
//# sourceMappingURL=rest-get-time-and-env-var.js.map