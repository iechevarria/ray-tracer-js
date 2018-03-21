let canvas = document.getElementById('canvas');

const traceRay = (r, s, d) => {
  color = new Color(0, 0, 1);
  return color;
}

const render = (ctx, s) => {
  for (let x = 0; x < 800; x++) {
    for (let y = 0; y < 800; y++) {
      let ray = new Ray(new Vec3d(0, 0, 0),
                        new Vec3d(800/x - 0.5, 0.5 - 800/y, 1).normalize());
      traceRay(ray, s, 1);
    }
  }
}

const main = () => {
  const ctx = canvas.getContext('2d');
  let s = new Sphere(new Vec3d(0, 0, 3), 1, new Color(1, 0, 0));
  render(ctx, s);
}

main();
