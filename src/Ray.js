class Ray {
  constructor(origin, direction) {
    this.origin = origin;
    this.direction = direction;
  }

  times(s) {
    return this.origin + s * this.direction;
  }
}

module.exports = Ray;
