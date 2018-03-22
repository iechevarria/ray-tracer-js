let canvas = document.getElementById('canvas');

const traceRay = (r, s, d) => {
  let color = new Color(0, 0, 0);
  let ip = s.intersect(r);

  if (ip.hit) {
    color = color.add(ip.material);
  }

  return color;
}

const render = (ctx, s) => {
  for (let x = 0; x < 512; x++) {
    for (let y = 0; y < 512; y++) {
      let ray = new Ray(new Vec3d(0, 0, 0),
                        new Vec3d(512 / x - 0.5, 0.5 - 512 / y, 1).normalize());

      let color = (traceRay(ray, s, 1)).clamp(0, 1);
      ctx.fillStyle = "rgba(" + color.r * 255 + "," + color.g * 255 + "," + color.b * 255 + ", 1)";
      ctx.fillRect(x, y, 1, 1);
    }
  }
}

const main = () => {
  const ctx = canvas.getContext('2d');
  let s = new Sphere(new Vec3d(0, 0, 10), 1, new Color(1, 0, 0));
  render(ctx, s);
}

main();
