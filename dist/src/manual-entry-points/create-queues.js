"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_bus_1 = require("@azure/service-bus");
const dotenv_1 = __importDefault(require("dotenv"));
const config_service_1 = require("../shared/config/config.service");
const jarvis_common_1 = require("jarvis-common");
dotenv_1.default.config();
const connectionString = config_service_1.configService.getValue('jarvismq_SERVICEBUS');
const client = new service_bus_1.ServiceBusAdministrationClient(connectionString);
async function getQueueDetails(queueName) {
    const prefixedQueueName = (0, jarvis_common_1.getServiceBusName)(queueName);
    try {
        const queue = await client.getQueue(prefixedQueueName);
        console.log(queue);
    }
    catch (error) {
        console.error('Error fetching queue details:', error);
    }
}
async function getTopicDetails(topicName) {
    const prefixedTopicName = (0, jarvis_common_1.getServiceBusName)(topicName);
    try {
        const topic = await client.getTopic(prefixedTopicName);
        console.log(topic);
    }
    catch (error) {
        console.error('Error fetching topic details:', error);
    }
}
/**
 * Check if a queue exists, and create it if not
 */
async function createQueueIfNotExists(queueName, requiresDuplicateDetection = false, enableSessions = false) {
    const prefixedQueueName = (0, jarvis_common_1.getServiceBusName)(queueName);
    // Check if queue exists
    const queueExists = await client
        .getQueue(prefixedQueueName)
        .then(() => true)
        .catch(() => false);
    if (!queueExists) {
        console.log(`🚀 Creating queue: ${prefixedQueueName}`);
        await client.createQueue(prefixedQueueName, {
            requiresDuplicateDetection,
            requiresSession: enableSessions,
        });
        console.log(`✅ Queue '${prefixedQueueName}' created successfully.`);
    }
    else {
        console.log(`ℹ️ Queue '${prefixedQueueName}' already exists.`);
    }
}
/**
 * Check if a topic exists, and create it if not
 */
async function createTopicIfNotExists(topicName, requiresDuplicateDetection = false) {
    const prefixedTopicName = (0, jarvis_common_1.getServiceBusName)(topicName);
    // Check if topic exists
    const topicExists = await client
        .getTopic(prefixedTopicName)
        .then(() => true)
        .catch(() => false);
    if (!topicExists) {
        console.log(`🚀 Creating topic: ${prefixedTopicName}`);
        await client.createTopic(prefixedTopicName, {
            requiresDuplicateDetection,
        });
        console.log(`✅ Topic '${prefixedTopicName}' created successfully.`);
    }
    else {
        console.log(`ℹ️ Topic '${prefixedTopicName}' already exists.`);
    }
}
/**
 * Create a subscription for a topic (if it does not exist)
 */
async function createSubscriptionIfNotExists(topicName, subscriptionName) {
    const prefixedTopicName = (0, jarvis_common_1.getServiceBusName)(topicName);
    // Check if subscription exists
    const subscriptionExists = await client
        .getSubscription(prefixedTopicName, subscriptionName)
        .then(() => true)
        .catch(() => false);
    if (!subscriptionExists) {
        console.log(`🚀 Creating subscription '${subscriptionName}' for topic '${prefixedTopicName}'`);
        await client.createSubscription(prefixedTopicName, subscriptionName);
        console.log(`✅ Subscription '${subscriptionName}' created successfully.`);
    }
    else {
        console.log(`ℹ️ Subscription '${subscriptionName}' already exists.`);
    }
}
async function listQueuesForEnvironment() {
    getQueueDetails(config_service_1.configService.getValue('BUS_EMAIL_ALERT_QUEUE'));
    getQueueDetails(config_service_1.configService.getValue('BUS_EMAIL_ALERT_BATCH_QUEUE'));
    getTopicDetails(config_service_1.configService.getValue('BUS_PUBLISHED_POST_TOPIC'));
}
/**
 * Main function to create queues and topics
 */
async function createQueuesForEnvironment() {
    try {
        // Create queues with configurations
        await createQueueIfNotExists(config_service_1.configService.getValue('BUS_EMAIL_ALERT_QUEUE'), false, false); // duplicate detection only
        await createQueueIfNotExists(config_service_1.configService.getValue('BUS_EMAIL_ALERT_BATCH_QUEUE'), true, true); // sessions enabled
        // Create topics with duplicate detection
        await createTopicIfNotExists(config_service_1.configService.getValue('BUS_PUBLISHED_POST_TOPIC'), true);
        // Create subscriptions for the topic
        await createSubscriptionIfNotExists(config_service_1.configService.getValue('BUS_PUBLISHED_POST_TOPIC'), 'process-alerts');
    }
    catch (error) {
        console.error('❌ Error:', error);
    }
    finally {
    }
}
createQueuesForEnvironment().then(() => listQueuesForEnvironment());
//# sourceMappingURL=create-queues.js.map