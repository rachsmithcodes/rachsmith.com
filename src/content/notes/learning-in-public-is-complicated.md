---
title: Learning in public isn't so easy when you're buried by layers of engineering
slug: learning-in-public-is-complicated
added: 2023-01-18T10:15:00.000Z
updated: 2023-01-18T10:15:00.000Z
excerpt: >-
  I've come to appreciate that unless you're a full-time content creator who can
  devote hours to polish, the only way to publish regularly is by embracing the
  approach of "working with the garage door up"
publish: true
tags:
  - development
  - work
---

I've come to appreciate that unless you're a full-time content creator who can devote hours to polishing, the only way to publish regularly is by embracing the approach of "[working with the garage door up](https://notes.andymatuschak.org/Work_with_the_garage_door_up)" or "[learning in public](https://www.swyx.io/learn-in-public/)".   [Show Your Work!](/thoughts-on-show-your-work-by-austin-kleon/) as [Austin Kleon](http://austinkleon.com/) says.

[TIL](https://dictionary.cambridge.org/dictionary/english/til)-style posts about what you've been working on are a great type of content for your developer blog. And if your work is straightforward enough, the writing is straightforward enough too. A CSS developer could share how they use a new language feature. A UI developer could share their opinions on a React component pattern. 

But as the scope and complexity of your role grows, the harder it is to write something about your day. At least this is how I've experienced it.

Take one of my work days recently. I was struggling with something and thought writing a note about it might help. The problem was that the "something" was generating [TypeScript](https://www.typescriptlang.org) types from [GraphQL](https://graphql.org) files using [GraphQL Code Generator](https://the-guild.dev/graphql/codegen) in a [Next.js](https://nextjs.org) project using a custom [webpack](https://webpack.js.org/) config, that lives in a [monorepo](https://en.wikipedia.org/wiki/Monorepo) powered by [Lerna](http://www.lerna.com.au/). There were ...seven tools or technologies in that sentence. My potential note is niched down so hard, it feels like there is maybe one other person in the world who can relate. His name is Geoff and chances are he's not reading this site[^1].

A way to rise to this challenge is to work on the skill of abstracting something more generic/simple from your complex work situation. A "minimal, reproducible example" via blog post if you will. [Chris Coyier](https://chriscoyier.net/) is good at this, turning what is *layered* work at [CodePen](https://codepen.io) into simpler hypothetical scenarios.

> [Say you have some JSON data like this....](https://chriscoyier.net/2022/11/12/personal-coding-challenge-data-validation-correction-and-default-handling/)

Or, you could turn complaining about this challenge into post content instead, as I have here.

[^1]: Geoff, if you're reading, we should talk. 

