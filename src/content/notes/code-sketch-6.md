---
title: 'Code sketch #6'
slug: code-sketch-6
added: 2024-05-25T09:02:00.000Z
updated: 2024-05-25T09:02:00.000Z
excerpt: >-
  This one was a throwback to an animated background headers inspiration post I
  made for Codrops just under 10(!!!) years ago.
note: published
publish: true
tags:
  - development
---
This one was a throwback to an [animated background headers inspiration](https://tympanus.net/codrops/2014/09/23/animated-background-headers/) post I made for Codrops just under 10(!!!) years ago. The first demo (dots connected by lines) sparked a minor trend, and many website headers with this effect were shipped for the next year or so.

The effect is achieved by:

1. placing dots on random positions on the canvas and giving them a random velocity in a random direction.
2. on each animation frame: calculate the distance between each dot. If it is below a certain threshold, draw a line between the dots.

<p class="codepen" data-height="560" data-theme-id="31536" data-default-tab="result" data-slug-hash="69477f01960a5fe0b98716d19e7b9648" data-user="rachsmith" style="height: 560px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rachsmith/pen/XWwjMBg/69477f01960a5fe0b98716d19e7b9648">
  6.1</a> by Rachel Smith (<a href="https://codepen.io/rachsmith">@rachsmith</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

I don't know why, but I still just find this effect so satisfying!

It just needed some colour.

I wanted to have the dots and lines change colour depending on how many connections they have. To do this I had to add some code to keep track of which dots are connected to each other. Finally I lowered the opacity on the lines to make them more subtle. 

I'm pretty happy with how it turned out. Here's the final Pen:

<p class="codepen" data-height="600" data-theme-id="31536" data-default-tab="result" data-slug-hash="oNRzwjj" data-user="rachsmith" style="height: 600px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rachsmith/pen/oNRzwjj">
  code sketch #6 p5.js</a> by Rachel Smith (<a href="https://codepen.io/rachsmith">@rachsmith</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<hr>

This has been post no. 25 for `#WeblogPoMo2024` and it is what I was interested in today.

