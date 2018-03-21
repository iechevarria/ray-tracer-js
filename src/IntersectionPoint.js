class IntersectionPoint {
  constructor(hit, point, normal, ray) {
    this.hit = hit;
    this.point = point;
    this.normal = normal;
    this.ray = ray;
    if (this.hit) this.distance = (point.vectorSubtract(ray.origin)).length();
    else this.distance = Number.MAX_SAFE_INTEGER;
  }
}
