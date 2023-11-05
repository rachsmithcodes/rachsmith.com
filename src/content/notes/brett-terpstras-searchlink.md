---
title: "Where has Brett Terpstra's SearchLink been all my life?"
slug: brett-terpstras-searchlink
added: 2022-12-15 05:37
updated: 2022-12-15 05:37
tags: [productivity, podcasts]
excerpt: 
publish: true
---

I listened to the [Automators podcast](https://www.relay.fm/automators/116) with [Brett Terpstra](https://brettterpstra.com/). There's lots of automating and productivity gold in this episode but there was one thing in particular that piqued my interest.

Brett was describing a [MacOS service he created](https://brettterpstra.com/projects/searchlink/) that allowed you to select any markdown text, run the service on it, and it would use an internet search to fill in the links for you.

Before I publish here I like to make sure I've linked up as many terms as I can to their respective web pages, especially the tech and dev ones in case there are any newcomers to development that are reading my notes. To do that I have to manually search e.g. "Apollo Client", copy the first result's URL and paste it into my note. 

Using this service I can just leave the markdown link URL section blank e.g. `[Apollo Client]()`, and when the service is run, it fills the link with the first result from a [DuckDuckGo](https://duckduckgo.com) search. You can also add a more specific search term when your link text isn't what you want in the search e.g. `[Astro](!g "Astro build")`.

After adding all my "empty" links to my note, when I've finished writing the note I can select all the text on it, run the service, and all the links will fill in. No manual searching and filling is required! Brilliant!