---
title: Using lighter YouTube embeds on the site
slug: using-lighter-embeds
added: 2024-05-03T09:05:00.000Z
updated: 2024-05-03T09:05:00.000Z
excerpt: I replaced the regular YouTube embeds with a lighter version
note: published
publish: true
tags:
  - meta
  - development
---

In [yesterday's note](/djs-that-wear-things/) I added a bunch of YouTube embeds. I remembered that I've been meaning to use a better alternative for a while now. I didn't have time for that yesterday so I swapped them out today.

In terms of performance, [YouTube embeds are pretty woefull](https://shoptalkshow.com/606/#t=37:42), downloading way too many resources before you've even elected to watch the video. I decided to replace my embeds with Paul Irish's `<lite-youtube>` custom element.

It wasn't too much effort:
- Get the JS and CSS resources from [the repo](https://github.com/paulirish/lite-youtube-embed?tab=readme-ov-file).
- Modified my copy of the [Obsidian vault sync](/automating-obsidian-to-astro/) script to detect the presence of any `<lite-youtube>` elements. If so it adds `includeYTResources: true` to the frontmatter of the note .md file in Astro.
- Used the `includeYTResources` property on the note content to add the lite-youtube JS and CSS to any pages containing the embed. 

[Here's the commit](https://github.com/rachsmithcodes/rachsmith.com/commit/d7ca7c8a371167da4642476356f1093205300e37) where I add the changes to the Astro site.

<hr>

This has been post no. 3 for #WeblogPoMo2024 and it is what I was interested in today.



