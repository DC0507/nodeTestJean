import { z } from 'zod';
// Define TypeScript interfaces for the input types
interface IFYSASubscriberInput {
  subscriptionId?: string;
  message?: string;
  articleIds?: string[];
  actionIds?: string[];
}
export interface IFYSAInput {
  message?: string;
  entries?: IFYSASubscriberInput[];
}

// Define the schema for IFYSASubscriberInput
export const IFYSASubscriberInputSchema = z.object({
  subscriptionId: z.string().optional(),
  message: z.string().optional(),
  articleIds: z.array(z.string()).optional(),
  actionIds: z.array(z.string()).optional(),
});

// Define the schema for IFYSAInput
export const IFYSAInputSchema = z.object({
  message: z.string().optional(),
  entries: z.array(IFYSASubscriberInputSchema).optional(),
});

// Infer TypeScript types from the schemas (Optional but useful)
export type IFYSASubscriberInputType = z.infer<
  typeof IFYSASubscriberInputSchema
>;
export type IFYSAInputType = z.infer<typeof IFYSAInputSchema>;
