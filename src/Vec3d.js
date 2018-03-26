class Vec3d {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  equals(v) {
    return v.x === this.x && v.y === this.y && v.z === this.z; 
  }

  add(v) {
    return new Vec3d(this.x + v.x, this.y + v.y, this.z + v.z);
  }

  subtract(v) {
    return new Vec3d(this.x - v.x, this.y - v.y, this.z - v.z);
  }

  scalarMultiply(s) {
    return new Vec3d(this.x * s, this.y * s, this.z * s);
  }

  scalarDivide(s) {
    return new Vec3d(this.x / s, this.y / s, this.z / s);
  }

  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  cross(v) {
    return new Vec3d(this.y * v.z - this.z * v.y,
                     this.z * v.x - this.x * v.z,
                     this.x * v.y - this.y * v.x);
  }

  length() {
    return Math.sqrt(this.dot(this));
  }

  distance(v) {
    return (v.subtract(this)).length();
  }

  normalize() {
    let length = this.length();
    return new Vec3d(this.x / length, this.y / length, this.z / length);
  }

  toStr(v) {
    return 'Vec3d (' + this.x + ', ' + this.y + ', ' + this.z + ')';
  }
}

// module.exports = Vec3d;
