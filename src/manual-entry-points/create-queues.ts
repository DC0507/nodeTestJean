import { ServiceBusAdministrationClient } from '@azure/service-bus';
import dotenv from 'dotenv';
import { configService } from '../shared/config/config.service';
import { getServiceBusName} from 'jarvis-common'

dotenv.config();

const connectionString = configService.getValue('jarvismq_SERVICEBUS');
const client = new ServiceBusAdministrationClient(connectionString);

async function getQueueDetails(queueName: string) {
  const prefixedQueueName = getServiceBusName(queueName);
  try {
    const queue = await client.getQueue(prefixedQueueName);
    console.log(queue);
  } catch (error) {
    console.error('Error fetching queue details:', error);
  }
}

async function getTopicDetails(topicName: string) {
  const prefixedTopicName = getServiceBusName(topicName);
  try {
    const topic = await client.getTopic(prefixedTopicName);
    console.log(topic);
  } catch (error) {
    console.error('Error fetching topic details:', error);
  }
}

/**
 * Check if a queue exists, and create it if not
 */
async function createQueueIfNotExists(
  queueName: string,
  requiresDuplicateDetection = false,
  enableSessions = false,
) {
  const prefixedQueueName = getServiceBusName(queueName);

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
  } else {
    console.log(`ℹ️ Queue '${prefixedQueueName}' already exists.`);
  }
}

/**
 * Check if a topic exists, and create it if not
 */
async function createTopicIfNotExists(
  topicName: string,
  requiresDuplicateDetection = false,
) {
  const prefixedTopicName = getServiceBusName(topicName);

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
  } else {
    console.log(`ℹ️ Topic '${prefixedTopicName}' already exists.`);
  }
}

/**
 * Create a subscription for a topic (if it does not exist)
 */
async function createSubscriptionIfNotExists(
  topicName: string,
  subscriptionName: string,
) {
  const prefixedTopicName = getServiceBusName(topicName);

  // Check if subscription exists
  const subscriptionExists = await client
    .getSubscription(prefixedTopicName, subscriptionName)
    .then(() => true)
    .catch(() => false);

  if (!subscriptionExists) {
    console.log(
      `🚀 Creating subscription '${subscriptionName}' for topic '${prefixedTopicName}'`,
    );

    await client.createSubscription(
      prefixedTopicName,
      subscriptionName,
    );

    console.log(
      `✅ Subscription '${subscriptionName}' created successfully.`,
    );
  } else {
    console.log(
      `ℹ️ Subscription '${subscriptionName}' already exists.`,
    );
  }
}

async function listQueuesForEnvironment() {
  getQueueDetails(configService.getValue('BUS_EMAIL_ALERT_QUEUE'));
  getQueueDetails(configService.getValue('BUS_EMAIL_ALERT_BATCH_QUEUE'));
  getTopicDetails(configService.getValue('BUS_PUBLISHED_POST_TOPIC'));
}

/**
 * Main function to create queues and topics
 */
async function createQueuesForEnvironment() {
  try {
    // Create queues with configurations
    await createQueueIfNotExists(
      configService.getValue('BUS_EMAIL_ALERT_QUEUE'),
      false,
      false,
    ); // duplicate detection only
    await createQueueIfNotExists(
      configService.getValue('BUS_EMAIL_ALERT_BATCH_QUEUE'),
      true,
      true,
    ); // sessions enabled

    // Create topics with duplicate detection
    await createTopicIfNotExists(
      configService.getValue('BUS_PUBLISHED_POST_TOPIC'),
      true,
    );

    // Create subscriptions for the topic
    await createSubscriptionIfNotExists(
      configService.getValue('BUS_PUBLISHED_POST_TOPIC'),
      'process-alerts',
    );
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
  }
}

createQueuesForEnvironment().then(() => listQueuesForEnvironment());
