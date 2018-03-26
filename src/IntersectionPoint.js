class IntersectionPoint {
  constructor(isHit, position, normal, ray, material) {
    this.isHit = isHit;
    this.position = position;
    this.normal = normal;
    this.material = material;
    if (this.isHit) this.distance = position.distance(ray.origin);
    else this.distance = Number.MAX_SAFE_INTEGER;
  }
}
