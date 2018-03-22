class IntersectionPoint {
  constructor(hit, point, normal, ray, material) {
    this.hit = hit;
    this.point = point;
    this.normal = normal;
    this.ray = ray;
    this.material = material;
    if (this.hit) this.distance = (point.vectorSubtract(ray.origin)).length();
    else this.distance = Number.MAX_SAFE_INTEGER;
  }

  closerThan() {
    
  }
}
