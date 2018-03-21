class Vec3d {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  equals(v) {
    return v.x === this.x && v.y === this.y && v.z === this.z; 
  }

  vectorAdd(v) {
    return new Vec3d(this.x + v.x, this.y + v.y, this.z + v.z);
  }

  vectorSubtract(v) {
    return new Vec3d(this.x - v.x, this.y - v.y, this.z - v.z);
  }

  scalarMulitply(s) {
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

  normalize() {
    let len = this.length();
    return new Vec3d(this.x / len, this.y / len, this.z / len);
  }

  clamp(lower, upper) {
    return new Vec3d(Math.max(lower, Math.min(this.x, upper)),
                     Math.max(lower, Math.min(this.y, upper)),
                     Math.max(lower, Math.min(this.z, upper))); 
  }

  toStr(v) {
    return 'Vec3d (' + this.x + ', ' + this.y + ', ' + this.z + ')';
  }
}

module.exports = Vec3d;
