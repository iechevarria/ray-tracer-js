class Scene {
  constructor (depth) {
    this.geometry = [];
    this.lights = [];
  }

  addGeometry(g) {
    this.geometry.push(g);
  }

  addLight(l) {
    this.lights.push(l);
  }

  intersect(r) {
    let closestIp = this.geometry[0].intersect(r);
    for (let i = 0; i < this.geometry.length; i++) {
      let currentIp = this.geometry[i].intersect(r);
      if (currentIp.isHit && (!closestIp.isHit || (closestIp.distance > currentIp.distance))) closestIp = currentIp;
    }
    return closestIp;
  }
}
