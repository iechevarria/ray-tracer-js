let canvas = document.getElementById('canvas');

const traceRay = (r, s, d) => {
  let color = new Color(0, 0, 0);
  let ip = s.intersect(r);
  
  if (ip.hit && ip.normal.z > 0) {
    for (let l = 0; l < s.lights.length; l++) {
      let ls = s.lights[l].intensityAt(ip.point);
      color = color.add(ls.colorMultiply(ip.material.scalarMultiply(1.0 * ip.normal.z)));
    }
  }
  return color;
}

const render = (ctx, s) => {
  console.log('rendering\n');
  for (let x = 0; x < 512; x++) {
    for (let y = 0; y < 512; y++) {
      let ray = new Ray(new Vec3d(0, 0, 0),
                        new Vec3d((x / 512) - 0.5, 0.5 - (y / 512), -1).normalize());

      let color = (traceRay(ray, s, 1)).clamp(0, 1);
      ctx.fillStyle = "rgba(" + color.r * 255 + "," + color.g * 255 + "," + color.b * 255 + ", 1)";
      ctx.fillRect(x, y, 1, 1);
    }
  }
}

const main = () => {
  const ctx = canvas.getContext('2d');
  let s = new Scene();
  s.addGeometry(new Sphere(new Vec3d(0, 0, -6), 1, new Color(1, 1, 1)));

  s.addLight(new PointLight(new Vec3d(-1.5, 1.5, -6), new Color(3, 0, 0), new Vec3d(0, 0, 1)));
  s.addGeometry(new Sphere(new Vec3d(-1.5, 1.5, -6), 0.1, new Color(1, 1, 1)));
  
  s.addLight(new PointLight(new Vec3d(1.5, -1.5, -6), new Color(0, 0, 3), new Vec3d(0, 0, 1)));
  s.addGeometry(new Sphere(new Vec3d(1.5, -1.5, -6), 0.1, new Color(1, 1, 1)));

  s.addLight(new PointLight(new Vec3d(1.5, 1.5, -6), new Color(0, 3, 0), new Vec3d(0, 0, 1)));
  s.addGeometry(new Sphere(new Vec3d(1.5, 1.5, -6), 0.1, new Color(1, 1, 1)));
    
  s.addLight(new PointLight(new Vec3d(-1.5, -1.5, -6), new Color(1, 1, 1), new Vec3d(0, 0, 1)));
  s.addGeometry(new Sphere(new Vec3d(-1.5, -1.5, -6), 0.1, new Color(1, 1, 1)));

  render(ctx, s);
}

main();
