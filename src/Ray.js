class Ray {
  constructor(origin, direction) {
    this.origin = origin;
    this.direction = direction;
  }

  at(s) {
    return this.origin.add(this.direction.scalarMultiply(s));
  }
}
