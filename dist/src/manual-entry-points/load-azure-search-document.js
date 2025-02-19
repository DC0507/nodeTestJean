"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const load_azure_search_service_1 = require("../services/load-azure-search/load-azure-search.service");
const setup_container_1 = require("../shared/services/setup-container");
const container = (0, setup_container_1.setupContainer)();
const loadSearchService = container.get(load_azure_search_service_1.LoadAzureSearchService);
//loadSearchService.createNewIndex("jarvis-2023-09-07");
loadSearchService.loadDocument('0321f616-a84c-4175-98b2-558edfd3c711');
//# sourceMappingURL=load-azure-search-document.js.map