---
title: 'Code sketch #4'
slug: code-sketch-4
added: 2024-05-11T10:05:00.000Z
updated: 2024-05-11T10:05:00.000Z
excerpt: >-
  I wanted to make something bees and bombsesque for code sketch #4. Like their
  old school, minimal stuff.
note: published
publish: true
tags:
  - development
---

I wanted to make something [bees and bombsesque](https://beesandbombs.com/) for code sketch #4. Like their old school, minimal stuff.

I started with some squares moving around a square path. I created the path just by making even increments along each side, and then moving the squares along each frame. That created something that looks like this.

<img src="/images/squares.gif" alt="several small squares squares are moving along a larger square path at a uniform speed" style="max-width: 400px;"/>

It was kind of what I wanted, but it wasn't satisfying enough. I also didn't like how the squares in the corner were intersecting with each other. I thought about changing the speed of the squares as they moved around the larger squares - so they moved "quicker" in and out of the corners and slower along the sides.

I tried coming up with an algorithmic way to do this, but I couldn't get the result I wanted. In the end I settled for manually setting the squares "start position" along the path, so I could tweak them until the motion felt right.

Once I was happy with how the squares were moving. I used the p5's HSL color mode to make each square a different color of the rainbow. Y'all should know by now I can not stop myself with this.

Here's the final pen:

<p class="codepen" data-height="640" data-theme-id="31536" data-default-tab="result" data-slug-hash="XWwJMgv" data-user="rachsmith" style="height: 640px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rachsmith/pen/XWwJMgv">
  code sketch #4 p5.js</a> by Rachel Smith (<a href="https://codepen.io/rachsmith">@rachsmith</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>


<hr>

This has been post no. 11 for #WeblogPoMo2024 and it is what I was interested in today.

