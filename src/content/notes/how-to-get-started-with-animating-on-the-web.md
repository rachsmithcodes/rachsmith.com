---
title: How to get started with animating on the web
slug: how-to-get-started-with-animating-on-the-web
added: 2022-07-25 15:03
updated: 2022-07-25 15:03
tags: [development]
excerpt: Pick a medium, choose your tools, have fun.
publish: true
---

You've seen something cool on the web and you want to start making your own animations? Sometimes when you're getting started with web animation it can be overwhelming to pull apart all the methods and tools and techniques.

I'll try to break web animation down to a simple explanation.

Animation is achieved when you take an object or "thing", and change one of its properties, over time.

The "thing" might be a background, a html button, the underline on a link, some divs on a page, a geometric shape in an SVG document, or some particles on a canvas or WebGL graphic.

The property might be the size, width, height, colour, position, or something else. Discovering the properties you can change is a lot of the fun in web animation!

Once you pick a thing, and a property, you need to figure out how to:
- make the thing appear on the screen
- let some time pass
- change the property
- repeat

As for making the thing appear on the screen, you can achieve this using many different _mediums_.

Examples of mediums are:
- HTML elements
- SVG document
- Canvas
- WebGL

These two demos are both moving a square back and forth. The thing being animated is the square. The property that is being changed is its position. The mediums are different though. One is using a HTML `<div>` and CSS. The other is using Canvas and JavaScript. Different mediums, same result.

<p class="codepen" data-height="280" data-theme-id="31536" data-default-tab="result" data-slug-hash="VwXWdBb" data-user="rachsmith" data-token="a785af5a893fdd5398a7ac0d6f88f4e8" style="height: 346.6640625px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">

  <span>See the Pen <a href="https://codepen.io/rachsmith/pen/VwXWdBb/a785af5a893fdd5398a7ac0d6f88f4e8">

  moving square 1: HTML &amp; CSS</a> by Rachel Smith (<a href="https://codepen.io/rachsmith">@rachsmith</a>)

  on <a href="https://codepen.io">CodePen</a>.</span>

</p>

<p class="codepen" data-height="280" data-theme-id="31536" data-default-tab="result" data-slug-hash="QWmgxzo" data-user="rachsmith" data-token="d22a659ed99f347c2bdb27eefcafc157" style="height: 346.6640625px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">

  <span>See the Pen <a href="https://codepen.io/rachsmith/pen/VwXWdBb/a785af5a893fdd5398a7ac0d6f88f4e8">

  moving square 1: HTML &amp; CSS</a> by Rachel Smith (<a href="https://codepen.io/rachsmith">@rachsmith</a>)

  on <a href="https://codepen.io">CodePen</a>.</span>

</p>

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

In these examples, the rate at which the square moves over time is consistent.

Here’s another demo with canvas and JavaScript, but I’ve also included an animation library called [GSAP](https://greensock.com/gsap/). GSAP is a tool that helps me control the _time_ part of the equation. By using a tween with an ease to control the position of the square, I can create a more pleasing movement.

<p class="codepen" data-height="280" data-theme-id="31536" data-default-tab="result" data-slug-hash="wvmeXVR" data-user="rachsmith" data-token="43ab18bf1676868e3de6c8d39d7076be" style="height: 346.6640625px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">

  <span>See the Pen <a href="https://codepen.io/rachsmith/pen/wvmeXVR/43ab18bf1676868e3de6c8d39d7076be">

  moving square 1: HTML &amp; CSS</a> by Rachel Smith (<a href="https://codepen.io/rachsmith">@rachsmith</a>)

  on <a href="https://codepen.io">CodePen</a>.</span>

</p>

This is just one way to introduce easing though, I can achieve the same effect by updating the CSS in my original HTML and CSS demo to include a timing function.

Here are some potential combinations of what you could animate, which medium and tools you could use to create a web animation

**what:** button <br/>
**with:** HTML + CSS

**what:** navigation <br/>
**with:** HTML + CSS

**what:** chart or graph <br/>
**with:** SVG + JavaScript

**what:** illustration <br/>
**with:** SVG + CSS

**what:** motion graphics <br/>
**with:** SVG + [GSAP](https://greensock.com/gsap/)

**what:** site header background <br/>
**with:** Canvas + JavaScript

**what:** 2D games <br/>
**with:** WebGL + [Pixi.js](https://pixijs.com/)

**what:** react components <br/>
**with:** HTML + React + [Framer](https://www.framer.com/motion/)

**what:** 3D graphics <br/>
**with:** WebGL + [three.js](https://threejs.org/)

I’m just scratching the surface here.

**Given all the ways you could make an animation, the inevitable question is: what should I start with?**

I say, start with whatever you want! From all the things you can animate: choose whatever peaks your interest. Do a quick Google of the mediums and tools available to you. Just pick one and give it a go. Animate, iterate, repeat. Eventually you’ll find a medium and tool/s you really enjoy using and will want to stick with for a while.