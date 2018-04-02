class Triangle {
  constructor(v1, v2, v3, material) {
    this.v1 = v1;
    this.v2 = v2;
    this.v3 = v3;
    this.material = material;
  }

  normal() {
    let v2mv1 = this.v2.subtract(this.v1);
    let v3mv1 = this.v3.subtract(this.v1);
    return v2mv1.cross(v3mv1).normalize();
  }

  intersect(ray) {
    // get distance to plane defined by triangle's points
    let v2mv1 = this.v2.subtract(this.v1);
    let v3mv1 = this.v3.subtract(this.v1);
    let denom = ray.direction.cross(v3mv1).dot(v2mv1);
    let num = ray.origin.subtract(this.v1).cross(v2mv1);
    let t = num.dot(v3mv1) / denom;

    // return no intersection if ray is parallel to plane or is too close
    if (t < 0.0001) return new IntersectionPoint(false);

    // compute barycentric coordinates
    let q = ray.at(t);
    let normal = this.normal();

    let p1mq = this.v1.subtract(q);
    let p2mq = this.v2.subtract(q);
    let p3mq = this.v3.subtract(q);

    let A1 = 0.5 * ((p2mq).cross(p3mq)).dot(normal);
    let A2 = 0.5 * ((p3mq).cross(p1mq)).dot(normal);
    let A3 = 0.5 * ((p1mq).cross(p2mq)).dot(normal);
    let A_SUM = A1 + A2 + A3;

    let alpha = A1 / A_SUM;
    let beta = A2 / A_SUM;
    let gamma = A3 / A_SUM;

    // return no intersection if plane intersection point is outside of triangle
    if (alpha < 0 || beta < 0 || gamma < 0) return new IntersectionPoint(false);

    return new IntersectionPoint(true, q, this.normal(), ray, this.material);
  }
}
