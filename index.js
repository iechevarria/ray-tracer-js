const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#00f';
ctx.fillRect(0, 0, 800, 800);


const traceRay = (ray, scene, depth) => {
  color = new Color(0, 0, 0);

  return color;
}

const render = (ctx, s) => {
  for (let x = 0; x < 800; x++) {
    for (let y = 0; y < 800; y++) {
      let ray = new Ray(new Vec3d(0, 0, 0),
                        new Vec3d(800/x - 0.5, 0.5 - 800/y, 1).normalize());
    }
  }
}