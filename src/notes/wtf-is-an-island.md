---
title: Wtf is an island and why is it in my website?
slug: wtf-is-an-island
added: 2022-09-13 05:56
updated: 2022-09-13 05:56
tags: [development]
excerpt: Wrapping my head around Islands Architecture.
---

The newest website frameworks[^1] keep referencing this thing called islands architecture. Which had me asking: what is an island? And how is it architected?

When I first read about how islands architecture works: _the HTML for a page is rendered by the server and then sections (islands) of that page are made interactive via JavaScript_, I was confused. Isn't that just describing how we built webpages back in 2011 with jQuery?

I think the motivation to create a new term can be explained by the context of how web development has progressed in the last seven or so years. React and its competitors exploded in popularity thanks to their features that greatly improved developer experience and capability: most notably the ability to build with Components and have UI automatically update to match a change in application state.

We got on the JavaScript-rendering train at [CodePen](https://codepen.io), migrating our Rails and jQuery powered website to a React rendered one. We gained the ability to ship interactive features faster, but we lost the performance and accessibility of server-side rendering. If we screw up and bork the React rendering on the CodePen homepage, you'll get a Black [Screen of Death](https://en.wikipedia.org/wiki/Blue_screen_of_death). It's not great, but it was the trade-off you made to make a decent web application in 2017.

Frameworks like [Next.js](https://nextjs.org/) tried to fix this problem by using server-side rendering of React. Speaking from experience, marrying the two versions of your React code is [not an easy task](https://www.joshwcomeau.com/react/the-perils-of-rehydration/). You also still need to ship an entire framework's worth of JS to add some interactivity to the page. In some (highly complex, highly interactive) sites this trade-off makes sense. In others: not so much.

Front end developers tried to do the client-side JavaScript framework thing, they tried the both-sides JavaScript framework thing, and now they're back to server-rendered HTML with JavaScript on top. An ungenerous take would be to call this an idiotic circle where we've ended up back in the beginning, but that's not what's actually happened. And that's why people are talking about "island's architecture" now.

This is not like building websites in 2011. Modern frameworks have picked up the authoring features made popular by SPA frameworks and figured out how to include them in a system that still ends up serving HTML. So you can get a great developer experience while still building fast, accessible websites. Personally, [I'm a fan](https://rachsmith.com/initial-thoughts-on-astro/).

As someone who builds a full-on [web application](https://codepen.io), I'm interested to see how and if people use islands archicture frameworks to build their "intense" interactive applications. It seems like a no-brainer for blogs, documentation and other "content sites". But what happens if you have 120 "islands" on your page? And all those islands need to know about eachother's state? It may not be time to throw your SPA framework in the bin yet.

[^1]: [Astro](https://astro.build), [Fresh](https://fresh.deno.dev/), [Slinkity](https://slinkity.dev/) to name a few.
