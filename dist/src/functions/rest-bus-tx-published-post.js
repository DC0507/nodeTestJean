"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.txPublishedPost = txPublishedPost;
const jarvis_1 = require("../shared/graphql/jarvis");
const functions_1 = require("@azure/functions");
const auth_1 = require("../shared/middleware/auth");
const graphql_client_service_1 = require("../shared/services/graphql-client.service");
const service_bus_1 = require("@azure/service-bus");
const config_service_1 = require("../shared/config/config.service");
const jarvis_common_1 = require("jarvis-common");
/**
 * This function will hydrate the post (either action or article) and send it to the published
 * post topic for subsequent processing.
 * @param request
 * @param context
 * @returns
 */
async function txPublishedPost(request, context) {
    // Apply the JWT auth middleware
    try {
        await (0, auth_1.authMiddleware)(context, request);
    }
    catch (err) {
        return {
            status: 401,
            body: 'authentication failed.',
        };
    }
    const requestBody = await request.json();
    if (!config_service_1.configService.isProduction) {
        context.log('txPublishedPost received message in non-production environment');
        context.log(requestBody);
    }
    const serviceBusClient = new service_bus_1.ServiceBusClient(config_service_1.configService.getValue('jarvismq_SERVICEBUS'));
    const queueName = (0, jarvis_common_1.getServiceBusName)(config_service_1.configService.getValue('BUS_PUBLISHED_POST_TOPIC'));
    const sender = serviceBusClient.createSender(queueName);
    try {
        // Parse the request body to ensure it is valid
        const parseResult = jarvis_common_1.PublishedPostMessageSchema.safeParse(requestBody);
        if (!parseResult.success) {
            return {
                status: 400,
                body: 'Invalid request body: ' + JSON.stringify(parseResult.error.format()),
            };
        }
        const publishedPostMessage = parseResult.data;
        // hydrate the post
        const messageBody = {};
        if (publishedPostMessage.actionId || publishedPostMessage.articleId) {
            const graphql = new graphql_client_service_1.GraphQLClientService();
            if (publishedPostMessage.actionId) {
                const actionResponse = await graphql.client.query({
                    query: jarvis_1.ActionDocument,
                    variables: {
                        actionId: publishedPostMessage.actionId,
                    },
                });
                if (actionResponse?.data?.action) {
                    messageBody.action = actionResponse?.data?.action;
                }
            }
            if (publishedPostMessage.articleId) {
                const articleResponse = await graphql.client.query({
                    query: jarvis_1.ArticleDocument,
                    variables: {
                        articleId: publishedPostMessage.articleId,
                    },
                });
                if (articleResponse?.data?.article) {
                    messageBody.article = articleResponse?.data?.article;
                }
            }
        }
        if (!messageBody.action && !messageBody.article) {
            return {
                status: 500,
                body: `Post could not be retrieved`,
            };
        }
        // Create a message
        const message = {
            body: messageBody,
            contentType: 'application/json',
            //label: "myMessage", // Optional: You can add custom labels if needed
        };
        context.log(`Sending message to ${queueName}`);
        // Send the message to the topic
        await sender.sendMessages(message);
        // Immediately acknowledge the request
        return {
            status: 202,
            body: `Message sent to ${queueName}`,
        };
    }
    catch (error) {
        context.log(error);
        return {
            status: 500,
            body: `Failed to send message to ${queueName}`,
        };
    }
    finally {
        await sender.close();
        await serviceBusClient.close();
    }
}
if (config_service_1.configService.getValue('BUS_PUBLISHED_POST_TOPIC')) {
    functions_1.app.http('txPublishedPost', {
        methods: ['POST'],
        authLevel: 'anonymous',
        handler: txPublishedPost,
    });
}
else {
    console.log('BUS_PUBLISHED_POST_TOPIC is not set, cannot start txPublishedPost');
}
//# sourceMappingURL=rest-bus-tx-published-post.js.map