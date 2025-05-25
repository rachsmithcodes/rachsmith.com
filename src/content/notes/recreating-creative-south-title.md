---
title: Recreating the title effect from creativesouth.com
slug: recreating-creative-south-title
added: 2023-04-09T10:35:00.000Z
updated: 2023-04-09T10:35:00.000Z
excerpt: >-
  I am just so impressed with the design of the website for Creative South '23.
  What a gorgeous site! One neat detail is the mouse-aware "3D" effect on the
  title text. I decided to see if I could recreate it.
publish: true
tags:
  - development
---

I am just so impressed with the design of [the website for Creative South '23](https://www.creativesouth.com/) . What a gorgeous site! One neat detail is the mouse-aware "3D" effect on the title text. I decided to see if I could recreate it.

### HTML and CSS
A quick inspection of the title revealed that they've used SVG for the word "Pure" and its background layers. I'm just going to use HTML for mine because I'm too lazy to prepare any assets in an image editor. So my HTML will have the title as a `<h1>` element and then some `<span>`s for the background layers. I put `aria-hidden="true"` on the spans so a Screen Reader won't read "waves waves waves waves waves" in the event someone copies my code verbatim in to their own website.  

```html
<div class="container" id="container">
  <header>
    <h1>waves</h1>
    <span aria-hidden="true" class="copy copy-1">waves</span>
    <span aria-hidden="true" class="copy copy-2">waves</span>
    <span aria-hidden="true" class="copy copy-3">waves</span>
    <span aria-hidden="true" class="copy copy-4">waves</span>
  </header>
</div>
```

I chose a chunky font from Google fonts and then added the CSS for styling the text. I gave the H1 and the spans a solid outline using the text-shadow technique [as described by this CSS tricks article](https://css-tricks.com/adding-stroke-to-web-text/#aa-simulation). I chose to use the [`vw` unit](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units) to size the text, that way it will scale down for smaller window widths.

```css
h1,
span.copy {
  font-family: "Lilita One", cursive;
  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,
    2px 2px 0 #000;
  font-size: 20vw;
  display: block;
}
```

Then I styled each of the layers so they were given a perspective of `500px` and translated by `-15px` on the `z` axis. Each layer goes a further `15px` backwards. I also updated the `z-index` so the `h1` was in front and the `spans` lined up behind.

```css
h1 {
  color: #e7e7e7;
  z-index: 50;
}

.copy-1 {
  transform: perspective(500px) translate3d(0, 0, -15px);
  color: #f24c00;
  z-index: 40;
}

.copy-2 {
  transform: perspective(500px) translate3d(0, 0, -30px);
  color: #9792e3;
  z-index: 30;
}

.copy-3 {
  transform: perspective(500px) translate3d(0, 0, -45px);
  color: #fc7a1e;
  z-index: 20;
}

.copy-4 {
  transform: perspective(500px) translate3d(0, 0, -60px);
  color: #eda96d;
  z-index: 10;
}
```

### JavaScript

In order to determine how much rotation or translation to give each background layer, I need to calculate the distance from the centre of the text to the mouse position. The greater the distance, the greater the effect on the text. 

I can get the centre position of the text's container by getting the [`DOMRect`](https://developer.mozilla.org/en-US/docs/Web/API/DOMRect) info of the container div. Then I get the mouse position and distance from the center point whenever the mouse moves.

```js
const container = document.getElementById("container");

const rect = container.getBoundingClientRect();
center.x = rect.left + rect.width / 2;
center.y = rect.top + rect.height / 2;

function trackMousePosition(event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
  distanceFromCenter.x = center.x - mouse.x;
  distanceFromCenter.y = center.y - mouse.y;
}

document.addEventListener("mousemove", trackMousePosition);
```

Now I have the `distanceFromCenter` value, I can use that to calculate the translation on the y axis and z axis, rotation value and skew value. Then I construct the string to use as the transform value on each layer. Rather than update the layers based on the actual position of the mouse, I am using [lerp](/lerp/) to make the effect a little smoother. 

```js
function updateTextPosition(t) {
  lerpV2(distanceLerped, distanceFromCenter);

  for (var i = 1; i < copies.length + 1; i++) {
    const copy = copies[i - 1];
    copy.style.transform = makeTransformString(
      i * distanceLerped.y * 0.03,
      i * translateZ,
      i * rotate * (distanceLerped.x * 0.003),
      i * skew * (distanceLerped.x * 0.003)
    );
  }

  requestAnimationFrame(updateTextPosition);
}

function makeTransformString(y, z, rotate, skew) {
  return `perspective(${perspective}px) translate3d(0px, ${y}px, ${z}px) rotate(${rotate}deg) skew(${skew}deg)`;
}

requestAnimationFrame(updateTextPosition);
```

Here's the final Pen: 

<p class="codepen" data-height="300" data-theme-id="31536" data-default-tab="result" data-slug-hash="KKxLEjY" data-user="rachsmith" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rachsmith/pen/KKxLEjY">
  trippy text (inspired by creativesouth.com)</a> by Rachel Smith (<a href="https://codepen.io/rachsmith">@rachsmith</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
