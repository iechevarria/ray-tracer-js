class Triangle {
  constructor(v1, v2, v3, material) {
    this.v1 = v1;
    this.v2 = v2;
    this.v3 = v3;
    this.material = material;
  }

  normal() {
    let e1 = this.v2.subtract(this.v1);
    let e2 = this.v3.subtract(this.v1);
    return e1.cross(e2).normalize();
  }

  intersect(r) {
    let N = this.normal();
    let p1 = this.v1;

    // get distance to plane defined by triangle's points
    let d = N.dot(p1);
    let denom = r.direction.dot(N);
    let num = r.origin.dot(N) + d;
    let t = num / denom;

    // return no intersection if ray is parallel to plane or is too close
    if (t < 0.0001) return new IntersectionPoint(false);

    // compute barycentric coordinates
    let q = r.at(t);

    let p1mq = this.v1.subtract(q);
    let p2mq = this.v2.subtract(q);
    let p3mq = this.v3.subtract(q);

    let A1 = 0.5 * ((p2mq).cross(p3mq)).dot(N);
    let A2 = 0.5 * ((p3mq).cross(p1mq)).dot(N);
    let A3 = 0.5 * ((p1mq).cross(p2mq)).dot(N);
    let A_SUM = A1 + A2 + A3;

    let alpha = A1 / A_SUM;
    let beta = A2 / A_SUM;
    let gamma = A3 / A_SUM;

    // return no intersection if plane intersection point is outside of triangle
    if (alpha < 0 || beta < 0 || gamma < 0) return new IntersectionPoint(false);

    return new IntersectionPoint(true, q, this.normal(), r, this.material);
  }
}
