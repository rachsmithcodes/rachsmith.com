---
title: How I added tags to my Astro site
slug: how-i-added-tags-to-my-astro-site
added: 2022-07-17T04:28:00.000Z
updated: 2022-07-17T04:28:00.000Z
excerpt: null
publish: true
tags:
  - development
  - astro
  - meta
---

I store all my note files in a directory in my Astro project called `/notes`.

In each of those notes, I have a frontmatter property called `tags`, which is an array of the tags I want tag the note with.

##### how-i-added-tags-to-my-astro-site.md
```md
---
title: How I added tags to my Astro site
slug: how-i-added-tags-to-my-astro-site
added: 2022-07-17 14:28
updated: 2022-07-17 14:28
tags: [development]
excerpt:
---
```

<br/>

### Tags on the note page

When I'm rendering out the note page, I can use that frontmatter data to create a list of tags.

##### [slug].astro
```js
export async function getStaticPaths() {
  let posts = await Astro.glob(`../notes/*.md`);
  return posts.map((post) => ({
    params: { slug: post.frontmatter.slug },
    props: { post: post },
  }));
}

const { post } = Astro.props;
const {
  Content,
  frontmatter: { title, added, updated, tags, excerpt },
} = post;
```

##### [slug].astro
```astro
<p>
  <em class="meta-label">Tags:</em>{' '}
  {tags.map((tag) => (<Tag tag={tag} />))}
</p>
```

<br/>

### List of all the tags  

To render a list of all the tags, and how many notes are in the tag, I use <code>Astro.glob(`../notes/\*.md\`)</code> to get all the posts and their frontmatter. I then reduce the array of notes in to an object. The object has each tag as a key, and the posts with that tag as the value.

```js
let posts = await Astro.glob(`../notes/*.md`);
const tagsWithPosts = posts.reduce((allTags, post) => {
  const postTags = post.frontmatter.tags;
  if (postTags) {
    postTags.forEach((tag) => {
      if (!allTags[tag]) {
        allTags[tag] = [];
      }
      allTags[tag].push(post);
    });
  }
  return allTags;
}, {});
```

Then I can render out the tags with their post count in the footer of my pages.  

##### Tags.astro
```astro
---
import Tag from './Tag.astro';

const { tags } = Astro.props;
const tagsSorted = tags ? Object.keys(tags).sort() : [];
---

<ul class="tags">
  {tagsSorted.map(tag =>
  <li>
    <Tag {tag} number={tags[tag].length} />
  </li>
  )}
</ul>
```

<figure>
<img alt="a picture of my website tags" src="/images/tags.png" class="webfeedsFeaturedVisual" />
<figcaption>This is a screenshot, the real clickable tags are below!</figcaption>
</figure>
<br />

### Tag page  

Finally, I added a page to my Astro `pages/` directory: `pages/tag/[tag].astro`. I used the tags object from above to get

the posts just for the tag, and passed it to the page via props.

##### [tag].astro

```astro
export async function getStaticPaths() {
  // using tagsWithPosts object from above
  return Object.keys(tagsWithPosts).map(tag => ({
    params: { tag: tag }, props: { posts: allTags[tag] }
  }));
}

const tagHeader = `${posts.length} post${posts.length === 1 ? '' : 's'
  } tagged with "${tag}"`;
```

##### [tag].astro

```astro
<h1>{tagHeader}</h1>
<Section>
  <ul>
    {posts.map(
    ({url, frontmatter: { excerpt, slug, title, tags }}) => (
    <NoteListItem {url} {excerpt} {slug} {title} {tags} />
    ))}
  </ul>
</Section>
```

I added snippets here but you can see how it all works together at the [GitHub repo](https://github.com/rachsmithcodes/rachsmith.com).
