---
title: Don't remove a fence until you know why it was put up in the first place
slug: dont-remove-a-fence
added: 2022-10-31T15:27:00.000Z
updated: 2022-10-31T15:27:00.000Z
excerpt: >-
  Chesterton's Fence states: Don't move a fence until you know why it was put
  there in the first place.
publish: true
tags:
  - development
  - work
---

Recently I learnt about [Chesterton's Fence](https://fs.blog/chestertons-fence/), a mental shortcut to help when you're deciding whether to change something in a system. 

Chesterton's Fence states:
> Don't move a fence until you know why it was put there in the first place.

It is a prompt to consider that the person who put the fence there was using [second-order thinking](https://fs.blog/second-order-thinking) instead of assuming that your superficial understanding of why it should or shouldn't be there is all there is to it.

Do you know where there are a lot of fences? Codebases. Anyone who's worked on a codebase with multiple authors has come across old code that seems unnecessary.
When I was a junior developer, I did some contracting jobs on codebases that many contractors had touched before me. There were a LOT of these fences. I didn't have enough experience to understand why they were there, so there was no way I was going to knock them down. I tiptoed around them.

As my experience and confidence as a developer have grown, I'm more willing to remove a fence. Even though I didn't know it had a name before a few weeks ago, "Chesterton's Fence" is real. I've often been owned by failing to think this way when re-writing code. 

It's not always possible to chase down the exact reason a fence is there. The person who put it there may have moved on from the project. Because I've been working on CodePen for so long, I find fences I built five years ago, and I have *no memory* of why I put them up. That's okay. I just need to do my best to uncover why. 

The important part is not to assume that I know better than the person who made the original decision and take into account nuances or second-order effects that aren't obvious to me. 

Be sure you've found a better reason than "because I know better" before you delete a fence.
