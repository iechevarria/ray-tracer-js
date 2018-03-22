class Scene {
  constructor (depth) {
    this.geometry = [];
    this.lights = [];
    this.depth = depth;
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
      if (ipc.hit && (!ip.hit || (ip.distance > ipc.distance))) ip = ipc;
    }
    return ip;
  }
}