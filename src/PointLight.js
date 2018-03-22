class PointLight {
  constructor(position, power, attenuation) {
    this.position = position;
    this.power = power;
    this.attenuation = attenuation;
  }

  intensityAt(point) {
    let distance = this.position.distanceFrom(point);
    //let direction = point.vectorSubtract(this.position).normalize();
    let intensity = this.power.scalarDivide((this.attenuation.x) + (this.attenuation.y * distance) + (this.attenuation.z * distance * distance));
    return intensity;
  }
}