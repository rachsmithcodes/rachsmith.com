---
title: "GitHub Copilot, hedonic adaptation and developer tools"
slug: github-copolit-hedonic-adaptation-and-developer-tools
added: 2021-12-13 19:00
updated: 2021-12-13 19:00
tags: [work, development, productivity]
excerpt: Some developer tools that reset my expectations to a new level.
publish: true
---

A little while ago, I signed up for the technical preview of [GitHub Copilot](https://copilot.github.com/). I spent one full workday with it running in [vscode](https://code.visualstudio.com/) on my work machine. That weekend I went to work on this site on my personal machine, and I had already got so used to the bot writing code for me I couldn't stand not having it. I installed it on that computer.

It got me thinking about other developer tooling I've used in the past - where the [hedonic adaptation](https://en.wikipedia.org/wiki/Hedonic_treadmill) is so swift that removing the tool soon after would make me miserable, even when I had spent months or years prior being perfectly happy without it.

Some that came up for me:  

## [Prettier](https://prettier.io/)

Newer devs might find it hard to believe I spent the first five years or so of my career manually indenting and formatting my code. The amount of time that I would have spent hitting Enter and Tab to get everything all lined up perfectly and then having to re-align when you add some new code! Not to mention the energy spent feeling annoyed about coworkers who were less fastidious with their formatting. But that is just what we all did back then, in the before-Prettier times.

## [VSCode JavaScript Auto-imports](https://code.visualstudio.com/docs/languages/javascript)

Five minutes into using the release where vscode introduced automatic import-statement-writing of JS functions, I knew I could never go back. I still have to manually write imports for Queries and Mutations in `.graphql` files, and I *hate it*.

## [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

Before using React and Redux I had experience with
- 🙃 typical jQuery style development, where you attach event handlers to DOM elements (wild)
- 😕 JavaScript MVC style development, where state is tracked via JS objects (a little more controlled)

Redux devtools was my first experience with a tool that would show you a visual representation of your application state and the effect of all the actions taken on that state as you modified the application. No more endless console logging was required. I never wanted to go back to being 'in the dark' about state again.

We don't use Redux anymore, but Apollo Client has [similar devtools](https://chrome.google.com/webstore/detail/apollo-client-devtools/jdkknkkbebbapilgoeccciglkfbmbnfm) where you can track the state of your local cache data. I suspect Redux played a large part in setting a new standard around in-browser tooling. [React](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) also has excellent tooling for tracking props and context. That old jQuery style development seems archaic in comparison.

<br/>

These were what occurred to me, but in reality, there are probably hundreds of small and significant improvements to the developer experience that I couldn't even recall because that is the nature of hedonic adaptation. I can imagine a future where we look back and marvel at how much time was "wasted" spent writing code ourselves, as bots transform our thoughts into logic. For me, the exciting part of my job is solving problems and coming up with new ideas, not writing React components over and over. So I say, bring it on.