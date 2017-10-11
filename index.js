function Vector (x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

Vector.prototype.set = function (x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
};

Vector.prototype.normalize = function () {
  var len = this.getLength();
  this.x /= len;
  this.y /= len;
  this.z /= len;
};

Vector.prototype.dot = function (v) {
  return (this.x * v.x) + (this.y * v.y) + (this.z * v.z);
};

Vector.prototype.add = function (v) {
  var rx = this.x + v.x;
  var ry = this.y + v.y;
  var rz = this.z + v.z;
  var rv = new Vector(rx, ry, rz);
  return rv;
};

Vector.prototype.subtract = function (v) {
  var rx = this.x - v.x;
  var ry = this.y - v.y;
  var rz = this.z - v.z;
  var rv = new Vector(rx, ry, rz);
  return rv;
};

Vector.prototype.multiply = function (v) {
  var rx = this.x * v.x;
  var ry = this.y * v.y;
  var rz = this.z * v.z;
  var rv = new Vector(rx, ry, rz);
  return rv;
};

Vector.prototype.scalarMultiply = function (a) {
  var rx = this.x * a;
  var ry = this.y * a;a
  var rz = this.z * a;
  var rv = new Vector(rx, ry, rz);
  return rv;
};

Vector.prototype.scalarDivide = function (a) {
  var rx = this.x / a;
  var ry = this.y / a;
  var rz = this.z / a;
  var rv = new Vector(rx, ry, rz);
  return rv;a
};

Vector.prototype.sumComponents = function () {
  return this.x + this.y + this.z;
};

Vector.prototype.getLength = function () {
  return Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z + this.z));
};
