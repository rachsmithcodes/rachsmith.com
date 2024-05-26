---
title: "Code sketch #7"
slug: code-sketch-7
added: 2024-05-26 19:02
updated: 2024-05-26 19:02
tags:
  - development
excerpt: This code sketch is inspired by a Pen by Gerard Ferrandez. I wanted to have squares that kept splitting in to smaller squares when clicked.
note: published
publish: true
---
This code sketch is inspired by a [Pen by Gerard Ferrandez](https://codepen.io/ge1doot/full/WbWQOP/). I wanted to have squares that kept splitting in to smaller squares when clicked.

At first I tried pulling the square that is clicked out of the `squares` array, but that was causing dramas (as the p5.js `draw()` function was constantly looping through the array). So instead I just set a `hide` property on the clicked square to true and stopped drawing the squares with `hide = true`.

<p class="codepen" data-height="560" data-theme-id="31536" data-default-tab="result" data-slug-hash="fdbca86f468d21515ab84c7e744a2b17" data-user="rachsmith" style="height: 560px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rachsmith/pen/RwmGBzx/fdbca86f468d21515ab84c7e744a2b17">
  6.1</a> by Rachel Smith (<a href="https://codepen.io/rachsmith">@rachsmith</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

I added a purples and pinks colour palette. I wanted to make it so the squares tweened in to their positions (from the larger square) but I ran out of time for that today. So I may update this one again in the future. 

<p class="codepen" data-height="600" data-theme-id="31536" data-default-tab="result" data-slug-hash="oNRzQex" data-user="rachsmith" style="height: 600px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rachsmith/pen/oNRzQex">
  code sketch #7 p5.js</a> by Rachel Smith (<a href="https://codepen.io/rachsmith">@rachsmith</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<hr>

This has been post no. 26 for #WeblogPoMo2024 and it is what I was interested in today.

