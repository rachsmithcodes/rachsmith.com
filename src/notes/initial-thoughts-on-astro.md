---
title: Initial thoughts on Astro
slug: initial-thoughts-on-astro
added: 2022-07-11 07:42
updated: 2022-07-11 07:42
tags: [development]
excerpt: In short, I love it.
imageId: '5'
note: publish
---

Last year, [I moved this site to Gatsby 4](/10000-gatsby-develops-later/). The plan was to start jazzing it up with a bit of animation like the [one on the home header](/). You can do canvas animations with React and Gatsby, but the truth is I am just kind of tired of working with (around) React. We've been in a love-hate relationship for 6 years(!!!) and I've been interested in trying something else.

So I decided to give migrating the build to [Astro](https://astro.build/) a try. It was a pretty straightforward process. Astro doesn't have the built-in image optimisation features that Gatsby has, but the upside to that is I'm not losing my life to issues like trying to get [sharp](https://github.com/lovell/sharp) to work on my machine.

### Some initial impressions of Astro
- I love how fast the build time is. So good.
- I like that it gives you the flexibility to use different component libraries, even React. I had a little play with [Svelte](https://svelte.dev/) as I've never used it before. But I actually quite liked using the Astro component syntax the most in the end.
- After working with React for years, building with Astro feels a bit like making websites at the start of my career, before JS frameworks existed. I'm writing HTML in a similar vein to the way I would make a website in the old days, but I have the convenience of componentry and modularised JavaScript. It's like the good things of the old days mixed with the best parts of new tech. It's bloody nice.

Astro is still in beta, and unlike Gatsby feels pretty lean in featureset (I actually like this). For my little website it is perfect, and it has made tinkering on it thoroughly enjoyable again.