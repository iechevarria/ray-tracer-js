class Sphere {
  constructor(center, radius, material) {
    this.center = center;
    this.radius = radius;
    this.material = material;
  }

  intersect(ray) {
    // compute discriminant
    let a = 1.0;
    let b = 2 * ray.direction.dot(ray.origin.subtract(this.center));
    let rayToCenter = ray.origin.subtract(this.center);
    let c = rayToCenter.dot(rayToCenter) - this.radius * this.radius;
    let discriminant = b * b - 4 * c;

    if (discriminant <= 0) return new IntersectionPoint(false);

    // find distances to intersection point
    let closestDistance = 0;
    let distance1 = (-1 * b + Math.sqrt(discriminant)) / 2;
    let distance2 = (-1 * b - Math.sqrt(discriminant)) / 2;

    // get closest distance
    if ((distance1 < 0) && (distance2 < 0)) return new IntersectionPoint(false);
    else if (distance2 < 0) closestDistance = distance1;
    else closestDistance = Math.min(distance1, distance2);

    // get interesection point, normal vector
    let position = ray.at(closestDistance);
    let normal = (position.subtract(this.center)).scalarDivide(this.radius);

    return new IntersectionPoint(true, position, normal, ray, this.material);
  }
}
