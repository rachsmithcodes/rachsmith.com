---
title: How Supabase fits into your stack
slug: how-supabase-fits-in-to-your-stack
added: 2022-12-09 09:20
updated: 2022-12-09 09:20
tags: [development]
excerpt: "I was looking at different Postgres hosting options when I recalled I had seen buzz from developers on Twitter about Supabase. I wondered if that could be my database host?"
publish: true
---

Recently I considered replacing the [Talkyard](https://www.talkyard.io/) comments solution on my notes here with something I've built myself. To do that I need a database. I was looking at different Postgres hosting options when I recalled I had seen buzz from developers on Twitter about [Supabase](https://supabase.com/). I wondered if that could be my database host?

Supabase's tagline starts with "_Supabase is an open source Firebase alternative._" That didn't tell me much because it has been years since I used [Firebase](https://firebase.google.com/) and I could barely remember how it worked or what it offered. I've done some reading of the Supabase docs and thought I would share my understanding of how Supabase can help on a new project.

When I think about how a website or app is set up, it looks something like this:

1. The server renders the page.
1. The client sends subsequent requests to a back-end application on the server.
1. The application connects to a database and retrieves/writes data, and returns a response to the client.

Or, in the case of this particular project I was designing:

1. The [Astro SSR](https://docs.astro.build/en/guides/server-side-rendering/) page is rendered via a [Netlify function](https://docs.netlify.com/functions/overview/).
2. The client sends subsequent requests to an API provided by a Netlify function.
3. The serverless function code connects to a database and retrieves/writes data, and returns a response to the client.

In both cases, it's the same client -> server -> DB flow, except serverless functions are standing in for an app on a server in the second case.

I was looking for something to fulfill the database section of that design, and Supabase does provide Postgres DB hosting, but it is also trying to remove the need for you to code a server-side application to control the flow of data in your project. You can write code on the client that interfaces directly with the database via the [API](https://supabase.com/docs/guides/api#rest-api-overview) provided by Supabase.

When I saw that the flow of information in a Supabase Project goes from client to DB (via a thin ready-made API layer), my first thought was, what about authentication? Don't you need to write server-side code to make sure the person who is sending the data is allowed to put that in the database? Supabase allows you to set [policies](https://supabase.com/docs/guides/auth/row-level-security) on DB table rows so you can control access to reading, creating, updating and deleting rows on tables.

On the subject of authentication... one of the features of the Supabase JS client is that it provides shortcuts to building "Sign Up and Log In" solutions for your app. That's pretty cool as most apps require user authentication and it is a tedious thing to get right when you're coding it from scratch.

Anyway, I think I will use Supabase as the DB solution for my new project. Even if I don't go all-in on client-side functionality with the [Supabase JS client](https://supabase.com/docs/reference/javascript) (I'm trying to make progressive enhancement a priority), I can use their REST APIs with Astro SSR functionality. It still looks like an easy enough (and affordable) option for adding a Postgres database to my project. 

> Can't you hear that  
Boom, badoom, boom, boom, badoom, boom, bass?  
[He got that super bass](https://www.youtube.com/watch?v=4JipHEz53sU))
