---
title: How quickly can I make an Astro DB project? (part 1)
slug: astro-db-1
added: 2024-05-14 20:05
updated: 2024-05-14 20:05
tags:
  - development
  - astro
excerpt: I've been meaning to try out Astro DB and I have a little project I need to make for our school, but I don't have a lot of time. Here's a real-time live blog of my progress.
note: published
publish: true
---
I've been meaning to try out Astro DB and I have a little project I need to make for our school, but I don't have a lot of time. Here's a real-time live blog of my progress.

Start: I've made Astro sited before (this website is one), but never with SSR, Astro DB and not on [Vercel](https://vercel.com)[^1]. It's been a while since I made a new Astro project so I [looked up the docs](https://docs.astro.build/en/tutorial/1-setup/2/) to find the `npm create astro@latest` command.

3 minutes: I've made a new Astro project. Now looking up [how to make turn it in to a server-side-rendered site](https://docs.astro.build/en/guides/server-side-rendering/).

6 minutes: Vercel adapter successfully added. I'm now looking at the sample site using `npm run dev`. Signing up for Astro DB at https://astro.build/db/. 

9 minutes: I have my [Astro Studio](https://studio.astro.build) account now. Trying to add a db to my project with the `npx astro add db` command recommended in [the docs](https://docs.astro.build/en/guides/astro-db/).

18 minutes: I've [defined my table](https://studio.astro.build/rachsmithcodes/trivia-vote/settings/tokens) in db/config.js. Just trying to figure out how to connect it to Astro Studio now. Pushing all the changes so far to my GitHub repo for the project.

26 minutes: I've created a new Project in the dashboard of Astro Studio and connected it to my GitHub repo. Will also try and deploy to Vercel while I wait.

32 minutes: The Project is created in Studio, but the DB doesn't appear to have any tables yet. My first attempt at deploying to Vercel failed because I didn't [add `--remote` to my deploy command](https://docs.astro.build/en/guides/astro-db/#connect-to-astro-studio), but after doing that and adding a Studio app token to my Vercel project environment variables, everything is deployed.

After 32 minutes I have a new Project set up, a development DB, a connection with Astro Studio, and a successful deployment with Vercel. I'm pretty happy with that. Tomorrow I will try to get my schema on the hosted DB, and start adding records via a form on my site. 

<hr>

This has been post no. 14 for #WeblogPoMo2024 and it is what I was interested in today.

[^1]: I'm a [Netlify](https://www.netlify.com/) girly.