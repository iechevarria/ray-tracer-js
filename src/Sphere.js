class Sphere {
  constructor(center, radius, material) {
    this.center = center;
    this.radius = radius;
    this.material = material;
  }

  intersect(r) {
    // compute discriminant
    let a = 1.0;
    let b = 2 * r.direction.dot(r.origin.vectorSubtract(this.center));
    let rayToCenter = r.origin.vectorSubtract(this.center);
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
    let position = r.at(closestDistance);
    let normal = (position.vectorSubtract(this.center)).scalarDivide(this.radius);

    return new IntersectionPoint(true, position, normal, r, this.material);
  }
}
