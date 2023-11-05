---
title: "5 years at CodePen: a reflection"
slug: 5-years-at-codepen-a-reflection
added: 2021-01-14 14:50
updated: 2021-01-14 14:50
tags: [work, development]
excerpt: I have been working for CodePen for 5 years.
publish: true
---

I have been working for [CodePen](https://codepen.io) for 5 years, a long time for a millennial developer to stay in the same job. I thought I would take a minute to reflect on my time with the company.

## How it started vs. how it’s going

I was in the first round of hires after CodePen received some funding to scale the company. Including me, there were 7 full-time people at the company. It was very much a young startup situation. The founders were figuring out how to be leaders and managers. As a group, we were coming up with processes for working with each other, maintaining the website. As I recall it, all the devs were very self-directed. There wasn’t a lot of top-down direction. I loved this, as I  highly valued autonomous work back then. People would often decide they wanted to build a quick feature, bring it up in all hands to get the okay, and then release it 2 weeks later. We sometimes joke about those old days being a “Twitter driven development” model. A user could suggest a feature on Twitter, and we would start building it that week.

In 2021, there are still 7 people working for the company, including me, although I am only part-time. So the company size hasn’t scaled, but oh my have we improved our processes. We have a lot more meetings than we did back then, and we have a bomb Notion setup that records all our planning and decisions, roadmaps etc. The founders are a lot more active in defining a clear vision and strategy for the company. I love all of these changes. My role is still autonomous, but for the most part, I can be confident that what I’m working on is contributing to where the product is supposed to be heading. There is way less guesswork about what I could or should be working on day-to-day.  

## Highlights

**IRL time with the team**
When I look back on the last 5 years, the standout highlights are the few times I hung out with the team in person. Being an all-remote company definitely has its perks. Still, I genuinely enjoyed the company of the people I worked with and would look forward to those moments. I wish they could happen more often.

**Completing big projects**
As far as things I’ve worked on, it is hard to pick favourites as I am incredibly proud of all the features I’ve helped ship for CodePen. Getting CodePen Projects shipped was primarily my responsibility. I have mixed feelings about this one (see things I would do differently below). Still, it was probably the most challenging thing I had to do in my time at CodePen, and I’m proud of that release.

I’m also thrilled with how our new (2020) homepage and turned out. I put a lot of work in the background with Stream to get the data and backend to a place where we could provide a much better experience to our users.Overall, I’m incredibly proud of the extreme glow up CodePen has had over the last 5 years, on the inside and out. Klare joining the team was a pivotal moment. I absolutely love everything she’s designed for the site, and I was always excited to build from her Figma files. Underneath the hood, we have really improved our DX over the last few years, especially in 2020. I am still excited to work with this codebase.

**My working relationship with the founders**
I have enjoyed working with all three original founders: Chris, Alex and Tim, over the years. The nice thing about working in a small company like CodePen is that you feel you can directly influence the product, and the opinions you have are given a lot of weight. When trying to run a “flat” company, there will always be a natural tension around who has authority and ownership over different decisions. It is a bit of a dance, knowing how much you should push for something versus deferring to the person who is your boss at the end of the day. The dynamic can be especially hard to navigate as a woman, as we’ve been socialised to be nice and compliant. I still have to work on the baggage I have around being perceived as “bossy”. I have loved and am so grateful for the experience of working for these guys. I have learnt so much from them about building a SASS product, including the grit and determination required to run a company like this.

**Marie**
Marie is the other remaining OG employee. We have experienced this wild ride together. Navigating the ups and downs all whilst chatting to each other daily in the Slack dm. I see her as a slightly older wise soul who regularly drops the knowledge about work, parenting and life in general. Of all the things this experience has given me, I think I treasure my friendship with her the most.

## What I’ll try and do differently in the future

I don’t like to regret or run hypotheticals about the past as I don’t think it is that useful. But we should reflect and take responsibility for ourselves from time to time if we hope to grow into a better person.

Looking back, I can see where my ego could have contributed to some undesirable outcomes. If you’re into astrology, I’m a Leo. The enneagram: I’m a 3. I’m a classic high achiever. I live for the praise of my higher-ups, telling me what a good job I’m doing. I love to be the star.

For this reason, I have a tendency to stay in my own lane, do my good work, show up to all hands with all my good work and accept my pats on the back. I’m not exactly super charitable with my time and attention when it comes to supporting my fellow developers at CodePen. Of course, I will help people when they ask, I hope that I’m not difficult to approach or work with. I don’t go looking for ways to be of service though. There have been times when people have moved on from the team, and I think back on their time at CodePen and realise I could have been of better support if I wasn’t so busy producing. I could also have been more generous with words of affirmation for others. The problem with having super high expectations for yourself is that you project the same expectations on the people around you. This is something I will always have to work on.

In my rush to be clever and impressive, I can bend over backwards to solve problems, when I should probably first ask if the problem is even one that should be solved. This is how the original CodePen Projects turned out to be something I wasn’t 100% happy with in the end. We worked on it for over a year, and I felt pressure to get it shipped by any means necessary. I should have set my ego aside, and asked for more help, probably throughout the entire time we were building it. Thankfully, we were able to redo Projects in 2020 with new technology and all the lessons we’d learnt the first time around. I’m pleased with where it is at, and no longer have to crumple to the foetal position while reading the insane code I wrote in 2017 trying to fix all the bugs.

## Tools, technology and processes

I thought it would be fun to look back on the software we’ve used over the years.

- Slack has been our primary mode of communication from the start.
- We used to plan and record notes in Trello, but we moved to Notion and never looked back. Over the years, we have got better and better at documenting our thoughts and actions in Notion, super necessary for a functioning all-remote team.
- We were on github.com, then moved to self-hosted GitLab, then moved back to github.com 😆. Our GitHub issues on the main repo used to be a place we dumped every feature request or random thought, as well as bugs. Now we are very strict about bugs we intend to fix only going to GitHub issues. Ideas and feature requests and other random todos for the codebase go into their dedicated spot in Notion.
- We used to create design files in Sketch, we now use Figma.
- Front End tech: we started with everything built in Rails .erb files and jQuery. Then we incorporated React and Redux, gradually converting jQuery powered pages to React rendered ones. We brought in Apollo Client when we built a GraphQL API and progressively replaced the Redux state management. We are currently massaging our codebase of adhoc React components into an intentional, reusable component library.
- Back End tech and infrastructure. First, almost everything in-app ran on Rails servers. We brought in Lambda functions for our Pen processing. We were using SOLR for search but moved to ElasticSearch. We build out a bunch of servers connecting to a Docker swarm and EFS to power CodePen Projects. We brought in Stream to build the new Homepage feeds. In 2020, our CTO Alex and Engineer Dee went into beast mode. Basically, they replaced the entire infrastructure powering Projects and many other parts of the site. They changed so much I actually can’t keep up and do it real justice. But I can tell you we now use Go servers and rely even more on Lambda functions.

## Why I’ve lasted 5 years and am sticking around for the foreseeable future

When it comes to my job I have 3 top values, in no particular order:

- My coworkers and higher-ups respect and acknowledge my skills, experience and effort.
- I have interesting problems to solve.
- I have the flexibility to give my family the time and attention I choose.

Salary, seniority, etc. I care much less about, but I will not compromise on the above. I understand what an extreme privilege it is to say this. I have always felt respected and appreciated at CodePen. Sure, there are the mind-numbing days of beating my head against a webpack config file, or building yet _another_ React component. You have those days in any job. Overall, my work remains fascinating. CodePen has agreed to let me move back home to Australia, take two extended maternity leaves, and reduce to part-time hours since having kids. This is a sacrifice on everyone’s part as scheduling meetings during the limited crossover time can be disruptive. As a result, recruitment efforts from other companies fall on deaf ears.

If you’ve made it this far, thanks for reading. Moving forward, I’d like to write more about what it’s like to work for a small, all-remote company. If there’s anything you’d like to know, please make suggestions in the comments.