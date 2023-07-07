import * as z from 'zod';
export const schema = z.object({
  total_documents: z.number(),
  pending_documents: z.number(),
  cancel_documents: z.number(),
})

export type IDashboard = z.infer<typeof schema>;