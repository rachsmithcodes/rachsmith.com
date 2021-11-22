---
title: "The Tech setup for this blog - Ghost + Gatsby"
added: 2021-02-21 20:55
updated: 2021-11-22 17:00
tags: [development]
excerpt: The best way to procrastinate on writing for your new blog is to deliberate over choosing the tech stack for your new blog. 
---

**Update:** The stack for this blog has changed a little. It no longer uses Ghost to store the content. The content is now stored within the Gatsby `src`. [[10,000 gatsby develops later|Read more here]].

## The Stack
The best way to procrastinate on writing for your new blog is to deliberate over choosing the tech stack for your new blog. Especially if you are a capable cross-stack Web Developer, as the options to choose from may as well be infinite. 

I’ve been wanting to give the [Jamstack](https://jamstack.org/) a try for years now, so was hoping to find a Jamstack solution. The number one requirement was that it wouldn’t take long for me to get up and running. After doing some research I found [this blog post](https://emtr0.dev/how-to-set-up-free-jamstack-ghost-blog-heroku-gatsby-github-netlify/) that gave a step-by-step process of how to set up a blog using Ghost and Gatsby. Within an hour I had a blog up and running. 

The setup is:
* A [Ghost](https://ghost.org/) (Node) backend running on a [Heroku](https://www.heroku.com/home) Dyno.
* A [Gatsby](https://www.gatsbyjs.com/) Front-End hosted on [Netlify](https://www.netlify.com/) that uses Ghost's GraphQL API to provide the blog data.

Once I completed the initial setup, I just needed to modify the React and CSS provided by [this starter theme](https://github.com/TryGhost/gatsby-starter-ghost) to make it my own. All the code for the front end [is in this repo](https://github.com/rachsmithcodes/rachsmith.com).

One of the pleasant things about this setup is that you can run it all for free. You need to pay if you want an always-on Dyno running Ghost, but I like that having a basic portfolio/blog is accessible to unemployed or Junior Developers who are short on cash.

## Drafting and editing
As I am pretty time poor at the moment, I tap a lot of my initial drafts out on my phone while the baby feeds in 10+ minute increments. Then when I have a bit of time to sit down on the MacBook, I edit and copy the final version over to Ghost.

My original workflow was:
* using [Ulysses](https://ulysses.app/) for writing
* editing for spelling and grammar in [Grammarly](https://app.grammarly.com/)
* converting to markdown and publishing on Ghost 
It felt clunky, as I would prefer to write in markdown from the start. 

I have recently started a new workflow: 
* I write in [iaWriter](https://ia.net/writer) (amazing)
* proof in [ProWritingAid](https://prowritingaid.com/Premium) (very promising, can handle markdown)
* publishing on Ghost