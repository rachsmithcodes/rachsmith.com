import { z, defineCollection } from 'astro:content';

export const collections = {
  'notes': defineCollection({ 
    schema: z.object({
      title: z.string(),
      tags: z.array(z.string()),
      added: z.string(),
      updated: z.string(),
      excerpt: z.union([z.string(), z.null()]),
    })
  })
};