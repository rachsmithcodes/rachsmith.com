let width, height;
let app, container;
let mouse = { x: 0, y: 0 },
  lastMouse = { x: 0, y: 0 },
  mouseV = { x: 0, y: 0 };
let spritesheet,
  particles = [];
const colors = [
  0xe31104, 0xef5f1f, 0xc80e84, 0x48a71e, 0x1b81b4, 0x5741ac, 0x393f85,
];

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  if (app) app.renderer.resize(width, height);
}

async function setup() {
  resize();

  // set up Pixi stage and container
  app = new PIXI.Application({
    width,
    height,
    backgroundAlpha: 0,
  });

  container = new PIXI.ParticleContainer(3000, {
    tint: true,
  });

  app.stage.addChild(container);
  document.body.prepend(app.view);

  const spriteData = {
    meta: {
      image: '/assets/paint.png',
      size: { w: 480, h: 480 },
      scale: 1,
    },
    frames: [],
  };
  for (let x = 0; x < 480; x += 80) {
    for (let y = 0; y < 480; y += 80) {
      spriteData.frames.push({
        frame: { x, y, w: 80, h: 80 },
        sourceSize: { w: 80, h: 80 },
        spriteSourceSize: { x: 0, y: 0, w: 80, h: 80 },
      });
    }
  }

  spritesheet = new PIXI.Spritesheet(
    PIXI.BaseTexture.from(spriteData.meta.image),
    spriteData
  );

  await spritesheet.parse();
  for (let i = 0; i < 3000; i++) {
    particles.push(new Particle(i));
  }
}

setup();

class Particle {
  constructor(i) {
    this.sprite = new PIXI.Sprite(spritesheet.textures[i % 36]);
    this.sprite.alpha = 0;
    this.sprite.tint = new PIXI.Color(
      colors[Math.floor(Math.random() * colors.length)]
    );
    this.sprite.width = 80;
    this.sprite.height = 80;
    this.sprite.anchor.set(0.5);
    container.addChild(this.sprite);
  }

  launch({ x, y }, { x: vx, y: vy }) {
    this.sprite.alpha = 0.2 + Math.round(Math.random() * 16) / 100;
    this.vx = vx * randomNormal() * 2;
    this.vy = vy * randomNormal() * 2;
    if (this.vx > 6) this.vx = 6;
    if (this.vy > 6) this.vy = 6;
    if (this.vx < -6) this.vx = -6;
    if (this.vy < -6) this.vy = -6;
    this.sprite.x = x;
    this.sprite.y = y;
  }

  update() {
    if (this.sprite.alpha > 0) {
      this.sprite.alpha -= 0.005;
      this.sprite.x += this.vx;
      this.sprite.y += this.vy;
      this.vx *= 0.9;
      this.vy *= 0.9;
    }
  }
}

window.addEventListener('resize', resize);
window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  spinning = false;
});
window.addEventListener('touchmove', (e) => {
  mouse.x = e.touches[0].clientX;
  mouse.y = e.touches[0].clientY;
  spinning = false;
});

function animate(t) {
  if (window.localStorage.getItem('cursorTrails') === 'false') {
    return;
  }
  mouseV.x = lastMouse.x - mouse.x;
  mouseV.y = lastMouse.y - mouse.y;
  lastMouse.x = mouse.x;
  lastMouse.y = mouse.y;

  if (Math.abs(mouseV.x) + Math.abs(mouseV.y) > 1) {
    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i];
      if (particle.sprite.alpha <= 0) {
        particle.launch(mouse, mouseV);
        break;
      }
    }
  }

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

function randomNormal() {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) return randomNormal(); // resample between 0 and 1
  return num;
}
