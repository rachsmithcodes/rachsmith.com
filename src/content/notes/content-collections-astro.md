---
title: Content Collections are a welcome addition to my Astro setup
slug: content-collections-astro
added: 2023-03-28 14:00
updated: 2023-03-28 14:00
tags: [development]
excerpt: 
note: publish
---

All of the notes on this site are built from markdown files in an Astro static site. As of Astro 2.0, you can effectively add type validation to your markdown files, via a feature called Content Collections.

I must confess, I don't enjoy TypeScript all that much. I can see how and why it is useful in certain circumstances, but I'm definitely not in the "make everything TypeScript because *TyPeScRiPt iS tHe fUtUre*" demographic. 

For this usecase, of improving the experience of debugging issues in your markdown files, it definitely makes sense. I'm currently working on a little redesign of this site, and having the note content typed has made working on it faster and easier.

## How I upgraded my site to use Content Collections

### Updated Astro
`npm install astro@latest`

### Moved all the notes to `src/content/notes`
Previously there were in a a directory at `src/notes`, but Content Collections need to be kept in the `content` directory.

### Added type definitions
For my notes collection in `src/content/config.js`
```js
// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const notesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    added: z.string(),
    updated: z.string(),
    excerpt: z.string().nullable(),
  })
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'notes': notesCollection,
};
```

### Replaced the usage of `Astro.glob` with `getCollection`
The old way of getting all my notes:
```js
const notes = await Astro.glob(`../notes/*.md`);
```
The new way:
```js
import { getCollection, getEntryBySlug } from 'astro:content';

const notes = await getCollection('notes');
```

`Astro.glob` returned an array objects with a `frontmatter` property. `getCollection` returns an array of objects with a `data` property, so I had to update the places where I was accessing the frontmatter.

For example
```js
note.frontmatter.title
```
is now
```js
note.data.title
```