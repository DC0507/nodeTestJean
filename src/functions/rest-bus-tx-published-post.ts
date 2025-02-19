import { ActionDocument, ArticleDocument } from '../shared/graphql/jarvis';
import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from '@azure/functions';
import { authMiddleware } from '../shared/middleware/auth';
import { GraphQLClientService } from '../shared/services/graphql-client.service';
import { ServiceBusClient } from '@azure/service-bus';
import { configService } from '../shared/config/config.service';
import { getServiceBusName, PublishedPostMessage, PublishedPostMessageSchema} from 'jarvis-common';

/**
 * This function will hydrate the post (either action or article) and send it to the published 
 * post topic for subsequent processing. 
 * @param request
 * @param context
 * @returns
 */
export async function txPublishedPost(
  request: HttpRequest,
  context: InvocationContext,
): Promise<HttpResponseInit> {
  // Apply the JWT auth middleware
  try {
    await authMiddleware(context, request);
  } catch (err) {
    return {
      status: 401,
      body: 'authentication failed.',
    };
  }

  const requestBody = await request.json();
  if (!configService.isProduction) {
    context.log(
      'txPublishedPost received message in non-production environment',
    );
    context.log(requestBody);
  }


  const serviceBusClient = new ServiceBusClient(
    configService.getValue('jarvismq_SERVICEBUS'),
  );
  const queueName = getServiceBusName(
    configService.getValue('BUS_PUBLISHED_POST_TOPIC'),
  );
  const sender = serviceBusClient.createSender(queueName);

  try {
    // Parse the request body to ensure it is valid
    const parseResult = PublishedPostMessageSchema.safeParse(requestBody);
    if (!parseResult.success) {
      return {
        status: 400,
        body:
          'Invalid request body: ' + JSON.stringify(parseResult.error.format()),
      };
    }
    const publishedPostMessage: PublishedPostMessage = parseResult.data;


    // hydrate the post
    const messageBody: any = {};
    if (publishedPostMessage.actionId || publishedPostMessage.articleId) {

      const graphql = new GraphQLClientService();
      if (publishedPostMessage.actionId) {
        const actionResponse = await graphql.client.query({
          query: ActionDocument,
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
          query: ArticleDocument,
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
  } catch (error) {
    context.log(error);
    return {
      status: 500,
      body: `Failed to send message to ${queueName}`,
    };
  } finally {
    await sender.close();
    await serviceBusClient.close();
  }
}

if (configService.getValue('BUS_PUBLISHED_POST_TOPIC')) {
  app.http('txPublishedPost', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: txPublishedPost,
  });
} else {
  console.log(
    'BUS_PUBLISHED_POST_TOPIC is not set, cannot start txPublishedPost',
  );
}
