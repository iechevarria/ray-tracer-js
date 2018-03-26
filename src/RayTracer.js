class RayTracer {
  constructor(samples, depth) {
    this.samples = samples;
    this.depth = depth;
  }

  traceRay(ray, scene, depth) {
    let color = new Color(0, 0, 0);
    let ip = scene.intersect(ray);
    
    // if the ray hits
    if (ip.hit && ip.normal.z > 0) {

      // for each light in scene
      for (let i = 0; i < scene.lights.length; i++) {
    
        // generate shadow ray
        let directionToLight = scene.lights[i].position.vectorSubtract(ip.position).normalize();      
        let shadowRay = new Ray(ip.position.vectorAdd(directionToLight.scalarMultiply(0.00001)), directionToLight);
        let shadowIp = scene.intersect(shadowRay);
  
        // if not in shadow, compute diffuse shading
        if (!shadowIp.hit || (shadowIp.distance > scene.lights[i].distance(ip.position))) {
          let intensity = scene.lights[i].intensityAt(ip.position);
          color = color.add(intensity.colorMultiply(ip.material.diffuseAlbedo.scalarMultiply(1.0 * ip.normal.z)));
        }
      }

      // recursively draw reflections
      if (depth > 1 && ip.material.isSpecular) {

        // reflect direction off of surface normal
        let reflectedVector = ray.direction.vectorSubtract(ip.normal.scalarMultiply(2 * ip.normal.dot(ray.direction)));
        let reflectedRay = new Ray(ip.position.vectorAdd(ip.normal.scalarMultiply(0.00001)), reflectedVector);

        // get light from reflections
        let reflectedLight = this.traceRay(reflectedRay, scene, depth - 1);
        color = color.add(reflectedLight.colorMultiply(ip.material.specularAlbedo));
      }
    }

    return color;  
  }

  render(ctx, scene) {
    for (let x = 0; x < 800; x++) {
      for (let y = 0; y < 800; y++) {
        
        let color = new Color(0, 0, 0);
        
        for (let sample = 0; sample < this.samples; sample++) {
          let ray;
          if (this.samples === 1) ray = new Ray(new Vec3d(0, 0, 0),
                                        new Vec3d(((x + 0.5) / 800) - 0.5, 0.5 - ((y + 0.5) / 800), - 1).normalize());
          else ray = new Ray(new Vec3d(0, 0, 0),
                     new Vec3d(((x + Math.random()) / 800) - 0.5, 0.5 - ((y + Math.random()) / 800), -1).normalize());
          color = color.add((this.traceRay(ray, scene, this.depth)).clamp(0, 1).scalarDivide(this.samples));
        }

        ctx.fillStyle = "rgba(" + color.r * 255 + "," + color.g * 255 + "," + color.b * 255 + ", 1)";
        ctx.fillRect(x, y, 1, 1);
      }
    }  
  }
}
