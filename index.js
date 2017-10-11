// ----------- Vector object -----------

function Vector () {}

function Vector (x, y, z) {
  this.set(x, y, z);
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

// ----------- Ray object -----------

function Ray () {
  this.org = new Vector();
  this.dir = new Vector();
} 


// ----------- Color object -----------

function Color () {
  this.r = 0;
  this.g = 0;
  this.b = 0;
}


// ----------- Node object -----------

// TODO
function Node (sphere, color) {

}

Node.prototype.set = function (sphere, color, next) {

};


// ----------- Sphere object -----------

function Sphere () {}

function Sphere (x, y, z, r) {
  this.set(x, y, z, r);
}

Sphere.prototype.set = function (x, y, z, r) {
  this.ctr.set(x, y, z);
  this.rad = r;
};

// TODO
Sphere.prototype.intersect = function () {

};

// ----------- Light object -----------

function Light () {}

function Light (x, y, z) {
  this.set(x, y, z);
  this.loc = new Vector();
}

Light.prototype.set = function (x, y, z) {
  this.loc.set(x, y, z);
}

Light.prototype.illuminate = function (ray, surface_color, int_pt, normal) {
  // ambient light
  var col = new Color();
  col.r = surface_color.r * 0.1;
  col.g = surface_color.g * 0.1;
  col.b = surface_color.b * 0.1;
  
  // diffuse light
  var L = this.loc.subtract(int_pt);
  L.normalize();
  var dot = L.dot(normal);

  if (dot > 0) {
    col.r += dot * surface_color.r;
    col.g += dot * surface_color.g;
    col.b += dot * surface_color.b;

    // specular highlights
    var R = L.subtract(normal.scalarMultiply(2 * normal.dot(L)));
    R.normalize();
    var dot2 = R.dot(ray.dir);

    if (dot2 > 0) {
      col.r += Math.pow(dot2, 200.0);
      col.g += Math.pow(dot2, 200.0);
      col.b += Math.pow(dot2, 200.0);
    }
  }

  return col;
};