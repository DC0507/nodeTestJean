"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAzureSearch = loadAzureSearch;
const functions_1 = require("@azure/functions");
const load_azure_search_service_1 = require("../services/load-azure-search/load-azure-search.service");
const setup_container_1 = require("../shared/services/setup-container");
const config_service_1 = require("../shared/config/config.service");
async function loadAzureSearch(myTimer, context) {
    if (!config_service_1.configService.isProduction &&
        !config_service_1.configService.getValue('SERVICES').includes('AZURESEARCH')) {
        context.log(`AZURESEARCH service is not enabled, skipping execution of loadAzureSearch`);
        return;
    }
    context.log('Processing Load Azure Search');
    const container = (0, setup_container_1.setupContainer)(context);
    const loadAzureSearchService = container.get(load_azure_search_service_1.LoadAzureSearchService);
    await loadAzureSearchService.loadNewDocuments();
}
functions_1.app.timer('timerLoadAzureSearch', {
    schedule: '0 */30 * * * *',
    handler: loadAzureSearch,
});
//# sourceMappingURL=timer-load-azure-search.js.map