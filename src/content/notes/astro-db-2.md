---
title: How quickly can I make an Astro DB project? (part 2)
slug: astro-db-2
added: 2024-05-15 20:05
updated: 2024-05-15 20:05
tags:
  - development
  - astro
excerpt: I don't have by-the-minute updates today. But I can tell you that I spent another 40 minutes on this and I have something that writes to the database, reads from the database and works on production.
note: published
publish: true
---
[See part 1](/astro-db-1/).

I don't have by-the-minute updates today. But I can tell you that I spent another 40 minutes on this and I have something that writes to the database, reads from the database and works on production.

I'd never done anything dynamic with Astro before so I looked up the [DB docs](https://docs.astro.build/en/guides/astro-db/#insert) and copied straight from the Insert example to make a form that submits to the DB.

I looked around for a while to see if there was any way to inspect the local Astro DB in [TablePlus](https://tableplus.com/) but it wasn't obvious how to get the connection details. Oh well, I just had to query the table to inspect the data.

This was my first time using [drizzle](https://orm.drizzle.team/) so I had to look up [the docs](https://orm.drizzle.team/docs/select#aggregations-helpers) to work out how to select counts using a groupBy (I'm building a poll). 

Everything was working on local, but my hosted/production DB still had nothing in it.

I tried running `npx astro db push` but the astro cli said I needed to login first. So I ran `npx astro db login` to login. Then I tried to push again but the cli told me I needed to run `npx astro db link` first to "link" my repo to the Astro Studio project. I had been wondering how to connect the local project to Astro Studio, so was glad the cli gave me the command. Finally I could push my db schema to the hosted DB in Astro Studio!

The data/ops part of the project is now sorted! I just need to make it look nice now 😊.

To only take 70 mins total from go to woah is pretty impressive. In terms of documentation and tooling (cli etc), Astro remains top of the game in my opinion. Granted, I have previous experience with database ORMs, deployments and serverless functions, so can probably get going quicker than a beginner coder. But really, it was a pretty smooth experience!


<hr>

This has been post no. 15 for #WeblogPoMo2024 and it is what I was interested in today.