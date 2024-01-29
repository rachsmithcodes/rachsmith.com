---
title: Automating the process for moving notes from my Obsidian vault to my Astro site
slug: automating-obsidian-to-astro
added: 2022-10-26 08:13
updated: 2023-10-16 20:07
tags: [development, astro, obsidian, meta]
excerpt: I wrote a script to copy notes from my private vault to my public site.
publish: true
---

Lately, I've been writing the drafts of the notes on this site in my [Obsidian vault](https://obsidian.md/). When I want to publish them, I would copy the contents over to the src directory of my [Astro site code](/initial-thoughts-on-astro/), use the [VSCode Grammarly extension](https://marketplace.visualstudio.com/items?itemName=znck.grammarly) to proof read, add some more frontmatter and push to GitHub. 

I was doing this manually, and it was making publishing a note a *whole thing*. In the interest of [publishing more frequently](/atomic-linked-notes/), I thought I would try and automate parts of the process of getting an obsidian note in to the github repo. 

I wrote a [Node.js script](https://nodejs.dev/en/learn/run-nodejs-scripts-from-the-command-line/) that reads all the notes in my vault, checking for the ones with frontmatter that include a `slug` and `note` status value of `publish`. It then checks the contents of the note for [internal links](https://help.obsidian.md/How+to/Internal+link) (aka wikilinks) that link to other published notes, and replaces them with markdown links. If the note isn't published, link syntax is removed. This way I can link freely between notes in my own vault without worrying about whether a note is published or not.

After processing the notes, the script copies them to the `src` location in this site's repo. Then I can just use the git diff to make sure everything looks like it should before pushing.

At first I tried to get fancy and convert the notes in to a markdown syntax tree with [mdast-util-from-markdown](https://github.com/syntax-tree/mdast-util-from-markdown) and do the processing with that. But I ended up just using a series of `indexOf` checks, `split` calls and a little regex to achieve what I need. 

The first version of the script just copied all the notes and images over when you ran it. Then I updated it to use [chokidar](https://www.npmjs.com/package/chokidar) to watch for changes in the vault, and sync any notes that were updated.

I've shared the script in this [GitHub Repository](https://github.com/rachsmithcodes/obsidian-to-astro-sync/tree/main).