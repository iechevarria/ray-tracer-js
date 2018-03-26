class PointLight {
  constructor(position, power, attenuation) {
    this.position = position;
    this.power = power;
    this.attenuation = attenuation;
  }

  distance(point) {
    return this.position.distance(point);
  }

  intensityAt(point) {
    let distance = this.distance(point);
    let intensity = this.power.scalarDivide((this.attenuation.x) + (this.attenuation.y * distance) + (this.attenuation.z * distance * distance));
    return intensity;
  }
}
