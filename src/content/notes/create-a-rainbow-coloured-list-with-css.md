---
title: "Create a rainbow-coloured list with :nth-of-type()"
slug: create-a-rainbow-coloured-list-with-css
added: 2023-02-20 20:03
updated: 2023-02-20 20:03
tags: [development]
excerpt: "This is my favourite thing to do with the `:nth-of-type()` selector."
publish: true
---

This is my favourite thing to do with the `:nth-of-type()` selector:
<p class="codepen" data-height="675.7109375" data-theme-id="21435" data-default-tab="result" data-slug-hash="yLxYwxx" data-user="rachsmith" data-token="54523390db7abd2e9cd34d296599fdfd" style="height: 675.7109375px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rachsmith/pen/yLxYwxx/54523390db7abd2e9cd34d296599fdfd">
  rainbow list with :nth-of-type()</a> by Rachel Smith (<a href="https://codepen.io/rachsmith">@rachsmith</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

First, you need some colour values. I like to store them in [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) so it easy to order them the way you like later.

```css
:root {
  --red: #f21332;
  --orange: #f27225;
  --pink: #e20b88;
  --yellow: #f2ad24;
  --green: #00b249;
  --blue: #1844b5;
  --purple: #a033b3;
}
```

Then you want to add an `:nth-of-type` declaration for each colour. The [functional notation](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child#functional_notation) for each `:nth-of-type` is in the format of `An+B`, where `A` is the total number of colours you have, and `B` is the position of each colour. So as I have 7 colours, my functions look like `7n+1`, `7n+2`, `7n+3` and so on...

```css
li:nth-of-type(7n + 1) {
  color: var(--red);
}

li:nth-of-type(7n + 2) {
  color: var(--orange);
}

li:nth-of-type(7n + 3) {
  color: var(--pink);
}

li:nth-of-type(7n + 4) {
  color: var(--yellow);
}

li:nth-of-type(7n + 5) {
  color: var(--green);
}

li:nth-of-type(7n + 6) {
  color: var(--blue);
}

li:nth-of-type(7n + 7) {
  color: var(--purple);
}
```

You can never have too many rainbows.

<p class="codepen" data-height="396.8671875" data-theme-id="31536" data-default-tab="css,result" data-slug-hash="yLxYwxx" data-user="rachsmith" data-token="54523390db7abd2e9cd34d296599fdfd" style="height: 396.8671875px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rachsmith/pen/yLxYwxx/54523390db7abd2e9cd34d296599fdfd">
  rainbow list with :nth-of-type()</a> by Rachel Smith (<a href="https://codepen.io/rachsmith">@rachsmith</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

