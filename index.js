let canvas = document.getElementById('canvas');

const traceRay = (r, s, d) => {
  let color = new Color(0, 0, 0);
  let ip = s.intersect(r);
  
  if (ip.hit && ip.normal.z > 0) {
    for (let l in s.lights) {
      let rs = new Ray(ip.point.vectorAdd(ip.normal.scalarMultiply(-0.0001)), s.lights[l].position); 
      let ips = s.intersect(rs);
      if (!ips.hit || (ips.distance > ip.point.distanceFrom(s.lights[l].position))) {
        let ls = s.lights[l].intensityAt(ip.point);
        color = color.add(ls.colorMultiply(ip.material.scalarMultiply(ip.normal.z)));
      }
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
  //s.addGeometry(new Sphere(new Vec3d(0, 0, -6), 1, new Color(1, 1, 1)));
  s.addGeometry(new Sphere(new Vec3d(0.5, -0.5, -10), 2, new Color(1, 1, 1)));
  s.addLight(new PointLight(new Vec3d(3, -2, -4), new Color(5, 10, 0), new Vec3d(0, 0, 1)));
  s.addLight(new PointLight(new Vec3d(-4, 2, -5), new Color(0, 0, 10), new Vec3d(0, 0, 1)));
  s.addLight(new PointLight(new Vec3d(3, -2, -9), new Color(3, 3, 3), new Vec3d(0, 0, 1)));
  render(ctx, s);
}

main();
