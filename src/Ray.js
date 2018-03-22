class Ray {
  constructor(origin, direction) {
    this.origin = origin;
    this.direction = direction;
  }

  times(s) {
    return this.origin.vectorAdd(this.direction.scalarMulitply(s));
  }
}

// module.exports = Ray;
