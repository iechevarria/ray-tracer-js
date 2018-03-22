class Sphere {
  constructor(center, radius, color) {
    this.center = center;
    this.radius = radius;
    this.color = color;
  }

  intersect(r) {
    let t = 0;

    let b = 2 * r.direction.dot(r.origin.vectorSubtract(this.center));
    let tmp = r.origin.vectorSubtract(this.center);
    let c = tmp.dot(tmp) - this.rad * this.rad;
    let dis = b * b - 4 * c;

    if (dis <= 0) return new IntersectionPoint(false);

    let t1 = (-1 * b + Math.sqrt(dis)) / 2;
    let t2 = (-1 * b - Math.sqrt(dis)) / 2;

    if ((t1 < 0) && (t2 < 0)) return new IntersectionPoint(false);
    else if (t2 < 0) t = t1;
    else t = Math.min(t1, t2);


    let ip = r.times(t);
    let normal = (ip.vectorSubtract(this.center)).scalarDivide(this.radius);

    return new IntersectionPoint(true, ip, normal, r, this.color);
  }
}
