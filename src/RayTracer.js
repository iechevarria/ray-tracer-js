class RayTracer {
  constructor(samples, depth) {
    this.samples = samples;
    this.depth = depth;
  }

  traceRay(r, s, d) {
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
  }

  render(ctx, s) {
    for (let x = 0; x < 800; x++) {
      for (let y = 0; y < 800; y++) {
        
        let color = new Color(0, 0, 0);
        
        for (let sample = 0; sample < this.samples; sample++) {
          let ray;
          if (this.samples === 1) {
            ray = new Ray(new Vec3d(0, 0, 0),
                          new Vec3d(((x + 0.5) / 800) - 0.5, 0.5 - ((y + 0.5) / 800), -1).normalize());
          } else {
            ray = new Ray(new Vec3d(0, 0, 0),
                          new Vec3d(((x + Math.random()) / 800) - 0.5, 0.5 - ((y + Math.random()) / 800), -1).normalize());
          }
          color = color.add((this.traceRay(ray, s, this.depth)).clamp(0, 1).scalarDivide(this.samples));
        }

        ctx.fillStyle = "rgba(" + color.r * 255 + "," + color.g * 255 + "," + color.b * 255 + ", 1)";
        ctx.fillRect(x, y, 1, 1);
      }
    }  
  }
}
