---
title: I made some rainbow fireworks with PixiJS
slug: i-made-some-fireworks
added: 2023-07-09T04:42:00.000Z
updated: 2023-07-09T04:42:00.000Z
excerpt: >-
  I'm challenging myself to follow up any Pen I create with some notes on how I
  did it.
publish: true
tags:
  - development
---
I'm challenging myself to follow up any [Pen](https://codepen.io) I create with some notes on how I did it. The only way that is ever going to happen is if I take the pressure off and let go of the idea that I have to write a comprehensive tutorial. So you can think of this as less of a "how to make fireworks with JavaScript" and more of a "how I made fireworks with JavaScript" post.

Planning this out, I'm thinking I want to create an array of fireworks that can be launched, explode, "burn out" and then be ready to be launched again. So each firework will have a single particle that shoots up in to "the air" and explodes in to many (say, 200) particles.

I could do this sort of animation [with a few difference tools](/how-to-get-started-with-animating-on-the-web/) but I decide to go with my favourite, WebGL with [PixiJS](https://pixijs.com/). 

First I want to set up a stage, and give it a dark blue background.
```js
// set up Pixi stage and container
  app = new PIXI.Application({
    width,
    height,
    backgroundColor: 0x070514
  });

  container = new PIXI.ParticleContainer(3000, {
    tint: true
  });

  app.stage.addChild(container);
  document.body.appendChild(app.view);
```

That code will create a canvas element and add it to the HTML body. So I add a little CSS to style it to fill the page.

```css
body {
  background: #070514;
}
canvas {
  position: absolute;
  left: 0;
  top: 0;
}

```
Each particle in the fireworks is going to be a [Pixi Sprite](https://pixijs.download/dev/docs/PIXI.Sprite.html). A Sprite is an object that get rendered in the Pixi stage, and you can control its properties such as size, position, colour etc. I want all the Sprites to use the same circle shape, so I draw a circle using [Pixi Graphics](https://pixijs.download/dev/docs/PIXI.Graphics.html). This graphic can then be re-used for every sprite I create.

```js
// create a circle graphic for the sprites
  const gr = new PIXI.Graphics();
  gr.beginFill(0xffffff);
  gr.lineStyle(0);
  gr.drawCircle(10, 10, 10);
  gr.endFill();
  circleTexture = app.renderer.generateTexture(gr);
```

Now it is time to add some fireworks. I know OOP isn't cool anymore but I like to think about my animation code in terms of Objects, and how those Objects behave on each frame of the animation. I create a `Particle` class to control each of the little particles that are shot out when a firework explodes.

Each particle has a sprite, a position (of the sprite), size (of the sprite), a velocity in the x and y direction, a hue (to control the colour), and an alpha value (to control the opacity of the sprite). The sprite is added to the container. In this constructor, the position and opacity is set to 0 as I don't want the particles to appear on the stage until they have been "exploded".

```js
class Particle {
  constructor() {
    this.sprite = new PIXI.Sprite(circleTexture);
    this.sprite.x = 0;
    this.sprite.y = 0;
    this.sprite.width = 5;
    this.sprite.height = 5;
    this.vx = 0;
    this.vy = 0;
    this.hue = 0;
    this.sprite.alpha = 0;
    this.active = false;
    container.addChild(this.sprite);
  }
}
```

At the moment a particle is "exploded" from the firework, it needs to be given a position and a hue, a velocity, and set to `active` so it will update with each animation frame. So I add a method to the `Particle` class to handle this.

I am launching 200 particles every time a firework explodes. I want them to shoot out in a circular shape around the original firework particle. So I use a little trigonometry to create `vx` and `vy` values at 200 positions in a circle around the start `x` and `y` position. I then create a little variation by multiplying the the velocity by `Math.random()`. That way the firework explodes in shape that looks roughly circular but doesn't look super neat. 

```js
  reset(x, y, i) {
	this.sprite.x = x;
	this.sprite.y = y;
	this.vx = Math.cos((i / 200) * Math.PI * 2) * Math.random();
	this.vy = Math.sin((i / 200) * Math.PI * 2) * Math.random();
	this.hue = this.hue;
	this.sprite.alpha = 1;
	this.sprite.width = 5;
	this.sprite.height = 5;
	this.active = true;
  }
```

Once the particle has been set to `active = true` and is appearing on the stage, I need to update it on each frame of the animation. The particle needs to move according to its velocity, and change its colour (hue). I'm cycling through the hue value on each frame. That's what gives the fireworks a rainbow look as they burn out. 

```js
  update() {
    // particles that have faded away are set back to inactive
    if (this.sprite.alpha <= 0) this.active = false;

    // only update active particles
    if (!this.active) return;
    // reduce alpha on each frame
    if (this.sprite.alpha >= 0) this.sprite.alpha -= 0.003;

    this.adjustHue();
    this.applyForces();
    this.reduceSize();
  }

  adjustHue() {
    this.hue += 3;
    if (this.hue > 360) this.hue = 0;
    const color = new PIXI.Color({ h: this.hue, s: 80, l: 50, a: 1 });
    this.sprite.tint = color;
  }

  applyForces() {
    // move x & y (velocity)
    this.sprite.x += this.vx;
    this.sprite.y += this.vy;
    // apply a little friction
    this.vx *= 0.994;
    this.vy *= 0.994;
    // add a little gravity
    this.vy += 0.002;
  }

  reduceSize() {
    this.sprite.width -= 0.02;
    this.sprite.height -= 0.02;
  }
```

That class will control the animation of the particles that explode out of the firework. I need to make a special kind of particle that is the original particle getting shot in to "the sky". So I extend the `Particle` class to make a `Firework` class. 

```javascript
class Firework extends Particle {
  constructor() {
    super();
    // random hue
    this.hue = Math.floor(Math.random() * 360);
    const color = new PIXI.Color({ h: this.hue, s: 80, l: 50, a: 1 });
    this.sprite.tint = color;
    this.launched = false;
    this.exploding = false;

    this.particles = [];
    for (let i = 0; i < 200; i++) {
      this.particles.push(new Particle());
    }
  }
}
```

The `Firework` class constructor does the same things as the `Particle` class constructor, except it is assigned a random `hue` when it is instantiated. It also has a property called `particles`: an array that contains the 200 particles to be exploded when the Firework particle has completed soaring in to "the sky".

A Firework needs to get launched from the bottom of the stage up in to the sky. While it is climbing up its velocity is being effected by friction and gravity, so it will eventually slow down. At the point it has almost slowed to a stop, it is "exploded" and its particles are reset to shoot out from its current colour and position. I add a method to handle the "launch" and "explode" behaviour of the firework.

```js
  launch() {
    this.exploded = false;

    // set up position and velocity
    this.sprite.y = height;
    if (offset > 0) this.sprite.y += offset;
    this.sprite.x = width * 0.2 + Math.random() * width * 0.6;
    this.vx = -1 + Math.random() * 2;
    this.vy = -3 - Math.random();
    this.sprite.alpha = 1;

    this.launched = true;
  }

  explode() {
    this.exploding = true;
    this.sprite.alpha = 0;
    for (let i = 0; i < this.particles.length; i++) {
      // set all the particles in this firework to explaode from the current position
      this.particles[i].reset(this.sprite.x, this.sprite.y, i);
    }
  }
```

I add an `update` function to the `Firework` class to handle the updating of the firework particle on each frame. It is a bit like the original `Particle` update function, except the firework particle stays the same size and same hue.

```js
  update() {
    if (!this.launched) return;

    this.applyForces();

    // If the firework particle has slowed, explode it
    if (this.vy > -0.5 && !this.exploding) this.explode();

    let allParticlesComplete = true;
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update();
      if (this.particles[i].active) allParticlesComplete = false;
    }

    // Once all the particles in the firework have faded out to alpha 0
    // it is set to launched = false so they are available to be launched again
    if (this.exploding && allParticlesComplete) {
      this.launched = false;
      this.exploding = false;
    }
  }
```

Whenever the firework update function runs, it checks all the particles in its `particles` array to see if they have all been set to `active: false` (aka, they have all "burnt out" to an alpha value of 0). If that is the case the firework can be set back to `launched = false`.

The reason I want to check when a Firework is completed, is because I want to keep launching fireworks for as long the Pen is open, and by recycling my Firework and Particle objects I don't have to worry about creating memory issues.

I create an array of 8 Firework objects in my `setup` function.

```js
// create 8 fireworks
  for (let i = 0; i < 8; i++) {
    fireworks.push(new Firework());
  }
```

I call `update()` on each of my fireworks on every animation frame.
```js
function animate(d) {
  for (let i = 0; i < fireworks.length; i++) {
    fireworks[i].update();
  }

  requestAnimationFrame(animate);
}
```

Now, I call a `launch()` function at random intervals. Each time launch is called, it looks for an un-launched firework in the array and launches it. If they are all in the process of being launched or exploding, it will just try again at the next launch call. This way my fireworks can technically keep launching and burning out forever.

```js
function launch() {
  for (let i = 0; i < fireworks.length; i++) {
    if (!fireworks[i].launched) {
      // launch the first available unlaunched firework in the array
      fireworks[i].launch();
      break;
    }
  }
  setTimeout(launch, Math.random() * 3000);
}

// begin launching
setTimeout(launch, Math.random() * 3000);
```

And that's it! Here's the final Pen

<p class="codepen" data-height="500" data-theme-id="31536" data-default-tab="result" data-slug-hash="jOQLoaJ" data-user="rachsmith" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rachsmith/pen/jOQLoaJ">
  rainbow fireworks</a> by Rachel Smith (<a href="https://codepen.io/rachsmith">@rachsmith</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
