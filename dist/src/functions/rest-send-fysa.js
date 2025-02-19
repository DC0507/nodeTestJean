"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("@azure/functions");
const fysa_interfaces_1 = require("../services/email-fysa/fysa-interfaces");
const auth_1 = require("../shared/middleware/auth");
const email_fysa_service_1 = require("../services/email-fysa/email-fysa.service");
const setup_container_1 = require("../shared/services/setup-container");
const config_service_1 = require("../shared/config/config.service");
// Define the handler function
async function sendFYFA(request, context) {
    try {
        // Apply the JWT auth middleware
        try {
            await (0, auth_1.authMiddleware)(context, request);
        }
        catch (err) {
            return {
                status: 401,
                body: 'Authentication failed.',
            };
        }
        const requestBody = await request.json();
        if (!config_service_1.configService.isProduction) {
            context.log('sendFYSA received message in non-production environment');
            context.log(requestBody);
        }
        if (!config_service_1.configService.isProduction &&
            !config_service_1.configService.getValue('SERVICES').includes('FYSA')) {
            context.log(`FYSA service is not enabled, skipping execution of sendFYFA`);
            return;
        }
        const user = context.extraInputs.get('user');
        // validate the request body
        const parseResult = fysa_interfaces_1.IFYSAInputSchema.safeParse(requestBody);
        if (!parseResult.success) {
            return {
                status: 400,
                body: `Invalid request body: ${JSON.stringify(parseResult.error.format())}`,
            };
        }
        const fysaInput = parseResult.data;
        const container = (0, setup_container_1.setupContainer)(context);
        const sendFYSAService = container.get(email_fysa_service_1.EmailFYSAService);
        const results = await sendFYSAService.processFYSAInput(fysaInput, user.emails[0]);
        return {
            status: 200,
            body: JSON.stringify(['FYSA Processed Successfully'].concat(results))
        };
    }
    catch (e) {
        console.error(e);
        return {
            status: 500,
            body: `Error processing FYSA: ${e}`,
        };
    }
}
functions_1.app.http('sendFYSA', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: sendFYFA,
});
//# sourceMappingURL=rest-send-fysa.js.map