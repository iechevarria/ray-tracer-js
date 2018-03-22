class Ray {
  constructor(origin, direction) {
    this.origin = origin;
    this.direction = direction;
  }

  at(s) {
    return this.origin.vectorAdd(this.direction.scalarMultiply(s));
  }
}

// module.exports = Ray;
