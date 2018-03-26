class IntersectionPoint {
  constructor(hit, position, normal, ray, material) {
    this.hit = hit;
    this.position = position;
    this.normal = normal;
    this.material = material;
    if (this.hit) this.distance = position.distanceFrom(ray.origin);
    else this.distance = Number.MAX_SAFE_INTEGER;
  }
}
