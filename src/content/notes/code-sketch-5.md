---
title: 'Code sketch #5'
slug: code-sketch-5
added: 2024-05-19T10:05:00.000Z
updated: 2024-05-19T10:05:00.000Z
excerpt: >-
  I started this one with a grid of squares. I imagined an invisible circle
  growing from the centre of the grid, and the squares changing size depending
  on their closeness to the circle.
note: published
publish: true
tags:
  - development
---
I started this one with a grid of squares. I imagined an invisible circle growing from the centre of the grid, and the squares changing size depending on their closeness to the circle.

First I drew the grid, and also the circle just so I could visualise its placement.

<p class="codepen" data-height="560" data-theme-id="31536" data-default-tab="result" data-slug-hash="32336d27d3f41affc1709c5126d8c0b7" data-user="rachsmith" style="height: 560px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rachsmith/pen/oNRbqMd/32336d27d3f41affc1709c5126d8c0b7">
  5.1</a> by Rachel Smith (<a href="https://codepen.io/rachsmith">@rachsmith</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Then I needed to adjust the size of the squares depending on how close they were to the circle. There might be a more sophisticated way to do this, but I figured I could just calculate the angle of each square from the centre of the circle, use that angle to calculate the position on the circle (at the same angle), and then get the distance between the square and that position.

```javascript
// calculate angle from center of circle
const angle = atan2(this.centre.y - Circle.y, this.centre.x - Circle.x);
// extend the line to the edge of the circle
const x = Circle.x + Circle.radius * cos(angle);
const y = Circle.y + Circle.radius * sin(angle);
// get the distance from the point on the line
const distance = abs(dist(this.centre.x, this.centre.y, x, y));
```

I then mapped the square size to the distance, so squares closer to the circle edge were larger, and squares farther away were smaller. This was what I had imagined in my head!

<p class="codepen" data-height="560" data-theme-id="31536" data-default-tab="result" data-slug-hash="83a8601da9e8802765ed4f7fcefd4db5" data-user="rachsmith" style="height: 560px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rachsmith/pen/gOJPzZM/83a8601da9e8802765ed4f7fcefd4db5">
  5.2</a> by Rachel Smith (<a href="https://codepen.io/rachsmith">@rachsmith</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Finally, I adjusted the hue over time, so it cycles through the rainbow. 

Here's the finished Pen:

<p class="codepen" data-height="600" data-theme-id="31536" data-default-tab="result" data-slug-hash="BaejVZJ" data-user="rachsmith" style="height: 600px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rachsmith/pen/BaejVZJ">
  5.2</a> by Rachel Smith (<a href="https://codepen.io/rachsmith">@rachsmith</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<hr>

This has been post no. 19 for #WeblogPoMo2024 and it is what I was interested in today.

