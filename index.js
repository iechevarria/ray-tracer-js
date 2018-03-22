const canvas = document.getElementById('canvas');


const traceRay = (r, s, d) => {
  let color = new Color(0, 0, 0);
  let ip = s.intersect(r);
  
  if (ip.hit && ip.normal.z > 0) {
    for (let l = 0; l < s.lights.length; l++) {

      // get direction to point, light
      let dirP = ip.point.vectorSubtract(s.lights[l].position).normalize();      
      let dirL = dirP.scalarMultiply(-1);

      // generate shadow ray
      let rs = new Ray(ip.point.vectorAdd(dirL.scalarMultiply(0.00001)), dirL);
      let ips = s.intersect(rs);

      // if not obscured, shade pixel
      if (!ips.hit || (ips.distance > s.lights[l].distance(ip.point))) {
        let intensity = s.lights[l].intensityAt(ip.point);
        color = color.add(intensity.colorMultiply(ip.material.scalarMultiply(1.0 * ip.normal.z)));
      }
    }
  }
  return color;
};


const render = (ctx, s) => {
  for (let x = 0; x < 800; x++) {
    for (let y = 0; y < 800; y++) {
      let ray = new Ray(new Vec3d(0, 0, 0),
                        new Vec3d((x / 800) - 0.5, 0.5 - (y / 800), -1).normalize());

      let color = (traceRay(ray, s, 1)).clamp(0, 1);
      
      ctx.fillStyle = "rgba(" + color.r * 255 + "," + color.g * 255 + "," + color.b * 255 + ", 1)";
      ctx.fillRect(x, y, 1, 1);
    }
  }
};


const main = () => {
  const ctx = canvas.getContext('2d');
  render(ctx, scene1);
};


main();
