import { z, defineCollection } from 'astro:content';

const notesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    added: z.string(),
    updated: z.string(),
    excerpt: z.string().nullable(),
  }),
});

const comment = z.object({
  id: z.string(),
  parentId: z.string().nullable(),
  createdAt: z.number(),
  html: z.string(),
  createdBy: z.object({
    fullName: z.string(),
  }),
});

const commentsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    comments: z.array(comment),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  notes: notesCollection,
  comments: commentsCollection,
};
