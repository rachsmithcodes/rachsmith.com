---
title: "10,000 gatsby develops later"
slug: 10000-gatsby-develops-later
added: 2021-11-22 19:00
updated: 2021-11-22 19:00
tags: [development]
excerpt: I love gatsby, I hate gatsby.
---

A month ago, I had an idea that I wanted to change [[The Tech setup for this blog - Ghost + Gatsby|my site's stack]].

- 👋🏼 remove Ghost as the provider of content, change to publishing via commiting to the git repo.
- 🗄 move the content in to an [[Loving right now Obsidian md|Obsidian]] vault.
- 😎 have Gatsby generate a static site from the markdown files in the vault.
- 💁🏻‍♀️ support double-square bracket wiki-style links in the content, and support backlinks.
- 💅 use [Tailwind CSS](https://tailwindcss.com/) for styling.

When I first set this site up a year ago, I really wanted to focus my time on writing, not learning a technology. So I slightly moderated a [starter project](https://github.com/TryGhost/gatsby-starter-ghost) and launched with that. This time around, I thought I could go ahead and build something myself and learn how to use Gatsby in the process. I thought it would take maybe a week or two of my writing time of 20-30 minutes per day. It ended up taking a month, with half of that consisting of my banging my head against the desk.

One of the great things about using tech like Gatsby is the huge ecosystem of resources and open source code around it. I found the following docs and posts very helpful in putting the site together.

- [Install Tailwind CSS with Gatsby](https://tailwindcss.com/docs/guides/gatsby)
- [Adding Markdown Pages](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/)
- [Adding Tags and Categories to Blog Posts](https://www.gatsbyjs.com/docs/adding-tags-and-categories-to-blog-posts/)
- [Migrating Remark to MDX](https://www.gatsbyjs.com/docs/how-to/routing/migrate-remark-to-mdx/)
- [Working with Images in Gatsby](https://www.gatsbyjs.com/docs/working-with-images/)
- [Creating a DIY Digital Garden with Obsidian and Gatsby](https://dev.to/joeholmes/creating-a-diy-digital-garden-with-obsidian-and-gatsby-378e)

Doing all the React & GraphQL for the site was very quick and straight forward. Where I got owned was incompatibilities between plugin versions and trying to figure out the right combo to get things doing what they are supposed to. I probably did not help myself here by upgrading to Gatsby 4 after it was released about a week in to developing this thing. 

I abhor config-style development. That is the kind of dev where you modify something in a config file, run a process and wait for it to complete, only to discover it is still broken. You repeat this until you get the config just right, or you have a mental breakdown, whatever comes first. Unfortunately, working with Gatsby (or any static site generator software, probably) falls under this category.

After spending so long tweaking JavaScript just to generate some HTML pages, I wondered if it would have been quicker just to hand code the site. And maybe it would have been. But now I've completed the setup, it will be very quick and easy to publish new notes going forward. Which is the whole point of using something like Gatsby of course.

How wild is it that I can be given all of this code for free, with tonnes of documentation, and I can still turn around and moan about the Developer Experience of it? We are so spoiled with open source culture. I wonder if there is any other profession that gives away so much for free and its members can feel so entitled as a result? 
