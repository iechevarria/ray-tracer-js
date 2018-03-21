class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  equals(c) {
    return this.r === c.r && this.g === c.g && this.b === c.b;
  }

  add(c) {
    return new Color(this.r + c.r, this.g + c.g, this.b + c.b);
  }

  subtract(c) {
    return new Color(this.r - c.r, this.g - c.g, this.b - c.b);
  }

  colorMultiply(c) {
    return new Color(this.r * c.r, this.g * c.g, this.b * c.b);
  }

  scalarDivide(s) {
    return new Color(this.r / s, this.g / s, this.b / s);
  }

  clamp(lower, upper) {
    return new Color(Math.max(lower, Math.min(this.r, upper)),
                     Math.max(lower, Math.min(this.g, upper)),
                     Math.max(lower, Math.min(this.b, upper))); 
  }

  toStr() {
    return 'Color (' + this.r + ', ' + this.g + ', ' + this.b + ')';
  }
}

module.exports = Color;
