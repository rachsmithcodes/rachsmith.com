---
title: Styling the external links on this site
slug: styling-external-links
added: 2024-05-18T04:05:00.000Z
updated: 2024-05-18T04:05:00.000Z
excerpt: >-
  One nice side-effect of doing this #WeblogPoMo2024 challenge is that I'm
  forced to look at my website every day, and I'm inspired to make little
  changes to it.
note: published
publish: true
tags:
  - development
  - meta
  - astro
---
One nice side-effect of doing this #WeblogPoMo2024 challenge is that I'm forced to look at my website every day, and I'm inspired to make [little](/using-lighter-embeds/) [changes](/i-added-a-now-page/) to it. I decided I wanted to add some visual distinction between external links and internal links.

I figured I'd have to put some "middleware" in the markdown-to-HTML processing that Astro uses. I was researching [rehype plugins](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md), trying to figure out what exactly to do before I found an [Astro docs page](https://docs.astro.build/en/recipes/external-links/) explaining how to achieve almost exactly what I wanted. Another high-five to the Astro docs maintainers!

In their example, they insert HTML content to the link, but I just wanted to add a class to the external links, so I could add an icon with a Pseudo-element. I worked out how to add the className property using the [rehype-external-links](https://unifiedjs.com/explore/package/rehype-external-links/) plugin. Then I added some css so the external links show a little arrow on them.

[Here's the commit](https://github.com/rachsmithcodes/rachsmith.com/commit/888dd944fce8dbf12ebddd797ea2350dbcdaa471) with the changes to the site.

Now I've styled the external links, I'm thinking about adding a "peek" functionality to the internal links. The idea is that when you hover on the internal links you get a little preview to the content of the note that is linked. You can see an example of this sort of hover effect at [Andy Matuschak's notes](https://notes.andymatuschak.org/About_these_notes). 

What do you think about that feature? Would it be cool? Or annoying? Sound off in the comments/my inbox/on Mastodon.

<hr>

This has been post no. 18 for #WeblogPoMo2024 and it is what I was interested in today.


