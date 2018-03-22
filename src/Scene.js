class Scene {
  constructor () {
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
    let ip = this.geometry[0].intersect(r);
    for (let i = 0; i < this.geometry.length; i++) {
      let ipc = this.geometry[i].intersect(r);
      if (ipc.hit && (!ip.hit || (ip.point.distanceFrom(r.origin) > ipc.point.distanceFrom(r.origin)))) ip = ipc;
    }
    return ip;
  }
}