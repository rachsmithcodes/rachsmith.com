---
title: Lerp
slug: lerp
added: 2023-04-06 20:12
updated: 2023-04-06 20:12
tags: [development]
excerpt: Lerp is the nickname for Linear Interpolation between two points. It's a fairly simple effect to implement but can really improve the look of your animations if you're moving an object from a point A to point B.
publish: true
---

<p class="callout">
When <a href="https://blog.codepen.io/2020/08/28/posts-sunset/">CodePen blogs</a> were a thing I added a bunch of posts to mine. Some of the content still holds up in 2023 so I decided to repost my favourites on this site.
</p>

Today I want to talk about a little animation trick that I use all the time called **lerp**. Lerp is the nickname for Linear Interpolation between two points. It's a fairly simple effect to implement but can really improve the look of your animations if you're moving an object from a point A to point B.

## How does it work?

Given you have a current position for an object, and a position you want to move that object towards - you can linearly interpolate to a percentage of the distance between those points, and update the position by that amount on each frame.

```js
// to run on each frame
function lerp(position, targetPosition) {
// update position by 20% of the distance between position and target position
  position.x += (targetPosition.x - position.x)*0.2;
  position.y += (targetPosition.y - position.y)*0.2;
}
```

By doing this, the amount the object moves becomes smaller as the distance between position and target decreases. This means the object will slow down as it gets closer to its target, creating a nice easing effect.

## Lerp in action - some examples

Here is an example of a ball following the user's mouse or touch. If we make the ball move to the place the mouse is as soon as it moves, the ball movement can be very fast and/or disjointed. We might also be able to see separate "ball frames" if we move our mouse really fast.

<p class="codepen" data-height="300" data-theme-id="31536" data-default-tab="result" data-slug-hash="avXmyV" data-user="rachsmith" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rachsmith/pen/avXmyV">
  Follow the mouse - no lerp</a> by Rachel Smith (<a href="https://codepen.io/rachsmith">@rachsmith</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Here's the same demo, except this time we're using lerp. Instead of moving the ball right to the mouse position, we'll move it 10% of the distance towards that position on each frame.

<p class="codepen" data-height="300" data-theme-id="31536" data-default-tab="result" data-slug-hash="yYZapV" data-user="rachsmith" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rachsmith/pen/yYZapV">
  Follow the mouse - with lerp</a> by Rachel Smith (<a href="https://codepen.io/rachsmith">@rachsmith</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Notice the ball movement is a lot smoother and an overall more pleasing effect.

Here's another example of using lerp. This time we've got a scrolling indicator that updates as you scroll down the "page".

<p class="codepen" data-height="300" data-theme-id="31536" data-default-tab="result" data-slug-hash="rOPMvz" data-user="rachsmith" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rachsmith/pen/rOPMvz">
  Scrolling - no lerp</a> by Rachel Smith (<a href="https://codepen.io/rachsmith">@rachsmith</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<p class="codepen" data-height="300" data-theme-id="31536" data-default-tab="result" data-slug-hash="epxdxe" data-user="rachsmith" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rachsmith/pen/epxdxe">
  Scrolling - with lerp</a> by Rachel Smith (<a href="https://codepen.io/rachsmith">@rachsmith</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

If we add lerp to this example we're lerping the indicator towards the scroll percentage instead of pointing it at the actual position - this smoothes out the movement of the indicator. 

So, the lerp "trick" is a great tool to have up our web animation sleeves to combat linear or jagged movement.
