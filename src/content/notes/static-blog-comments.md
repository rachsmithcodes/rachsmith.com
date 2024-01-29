---
title: My simple 16 step system for adding comments to my static site built with Astro
slug: static-blog-comments
added: 2023-11-20 08:10
updated: 2023-11-20 08:10
tags: [development, astro, meta]
excerpt: How I replaced my third-party comments system with a form and some JSON files.
note: publish
publish: true
---

Okay, maybe there aren't *sixteen* steps, but it does feel slightly convoluted.

First, some background: my original solution for adding comments to this site was to use [talkyard.io](https://blog-comments.talkyard.io/). I was grateful to have a 3rd party option that was low-weight, respected users' privacy, and affordable. It worked great for the most part, but readers occasionally reported availability issues. I decided it was time to build something for comments myself.

At first, I thought about options for dynamically writing from and reading to a database. I [looked into supabase](/how-supabase-fits-in-to-your-stack/) as an option for storing comment data. If I wanted to render dynamic data from a DB on page load, I'd have to switch my note pages from statically generated to SSR (via server functions). I didn't want to do that. I love how cheap and efficient SSG is. 

Since I wanted to keep the notes pages static, I considered implementing the comments in an iframe storing a page using SSR. Kind of like how Talkyard worked, but from my own website. I also decided against that because I didn't want to deal with sizing the iframe just right, depending on how much content was there[^1].

I reconsidered everything again... who says comments have to be dynamic, and stored in a database? The notes are just .md files [in the site repo](https://github.com/rachsmithcodes/rachsmith.com). What if the comments were just JSON files in the repo, too? I liked the simplicity of that idea. 

I wanted the comments to live in my repo as JSON. How would I get them there? I tried a [Netlify form](https://www.netlify.com/platform/core/forms/) for submitting comments, and it worked well. I was impressed with how easy it was to get a form functional on the site using this method. I got a few spam submissions at first, but after adding a [honeypot field](https://docs.netlify.com/forms/spam-filters/#honeypot-field) they stopped. 

Netlify makes all form responses available via [their API](https://www.netlify.com/blog/2021/12/17/handling-form-submissions-via-the-netlify-api/). I made a tiny [SvelteKit](https://kit.svelte.dev/) app to read the responses from the API so I can review, approve or delete them. When I approve the comment, the app calls a tiny [Express Server](https://expressjs.com/) that writes the comment data to the JSON file in this website's data folder. Then, I review and commit the changes with git, like when adding a new note. 

<img src="/images/comments-dash.jpg" width="600" alt="A screenshot of my comments approval app. The pages reads: You have 1 comment to approve. A test comment's details are listed underneath. There is an Approve and Delete button underneath the comment." />

This is what I mean when I say it is pretty convoluted. To approve a comment, I have to:

- be on my computer
- running the SvelteKit app locally
- running the Express server locally
- commit the changes with git

But, considering how infrequently I get comments submitted to this website, it is working just fine for now. What I love most is how fast the comments load for users on the site. The comments are just HTML: no scripts, no iFrames.

In the future, I may make the system a little more portable: deploy the SvelteKit app to hosting somewhere and learn the GitHub API so I can commit changes from the cloud. Then, I could approve and publish comments on the go. Right now, I have no desire to do all that[^2].

I have the SvelteKit app and node server code in a [GitHub repo](https://github.com/rachsmithcodes/site-tools) if you're interested in seeing the code. 

[^1]: because I am lazy.
[^2]: see above.