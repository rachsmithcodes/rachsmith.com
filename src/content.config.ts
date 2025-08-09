import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const note = z.object({
  type: z.enum(['note', 'book']).optional(),
  title: z.string(),
  tags: z.array(z.string()),
  added: z.date(),
  updated: z.date(),
  excerpt: z.string().optional().nullable(),
  rating: z.number().optional().nullable(),
  noComments: z.boolean().optional().nullable(),
});

const notesCollection = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './src/content/notes',
  }),
  schema: note,
});

const monthNotesCollection = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './src/content/mnnm',
  }),
  schema: note,
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

const nuggetsCollection = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './src/content/nuggets',
  }),
  schema: z.object({
    excerpt: z.string(),
  }),
});

const commentsCollection = defineCollection({
  loader: glob({
    pattern: '*.json',
    base: './src/content/comments',
  }),
  schema: z.object({
    comments: z.array(comment),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  notes: notesCollection,
  monthNotes: monthNotesCollection,
  comments: commentsCollection,
  nuggets: nuggetsCollection,
};
