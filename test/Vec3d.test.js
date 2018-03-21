const Vec3d = require('../src/Vec3d.js');

console.log('Testing Vec3d...');

// equals
{
  let a = new Vec3d(1, 1, 1);
  let b = new Vec3d(1, 1, 1);
  let c = new Vec3d(1, 0, 1);

  console.assert(a.equals(a));
  console.assert(a.equals(b));
  console.assert(!a.equals(c));

  console.log('  ✅  equals passed');
}

// vector addition
{
  let a = new Vec3d(1, 1, 1);
  let b = new Vec3d(1, 2, 3.5);
  let c = a.vectorAdd(b);

  console.assert(c.equals(new Vec3d(2, 3, 4.5)));
  console.assert(a.equals(new Vec3d(1, 1, 1)));
  
  console.log('  ✅  vector addition passed');
}

// vector subtraction
{
  let a = new Vec3d(1, 1, 1);
  let b = new Vec3d(1, 2, 3.5);
  let c = a.vectorSubtract(b);

  console.assert(c.equals(new Vec3d(0, -1, -2.5)));
  console.assert(a.equals(new Vec3d(1, 1, 1)));
  
  console.log('  ✅  vector subtraction passed');
}

// scalar multiplication
{
  let a = new Vec3d(2, 3, 1);
  let b = a.scalarMulitply(5);

  console.assert(b.equals(new Vec3d(10, 15, 5)));
  console.assert(a.equals(new Vec3d(2, 3, 1)));
  
  console.log('  ✅  scalar multiplication passed');
}

// scalar division
{
  let a = new Vec3d(2, 4, 8);
  let b = a.scalarDivide(4);

  console.assert(b.equals(new Vec3d(0.5, 1, 2)));
  console.assert(a.equals(new Vec3d(2, 4, 8)));
  
  console.log('  ✅  scalar division passed');
}

// dot product
{
  let a = new Vec3d(1, 3, -5);
  let b = new Vec3d(4, -2, -1);

  console.assert(a.dot(b) === 3);
  console.assert(a.equals(new Vec3d(1, 3, -5)));
  
  console.log('  ✅  dot product passed');
}

// cross product
{
  let a = new Vec3d(1, 0, -1);
  let b = new Vec3d(-1, 1, 1);

  console.assert(a.cross(b).equals(new Vec3d(1, 0, 1)));
  console.assert(b.cross(a).equals(new Vec3d(-1, 0, -1)));

  console.log('  ✅  cross product passed');
}

// length
{
  let a = new Vec3d(10, 3, 4);
  let l = Math.sqrt(10 * 10 + 3 * 3 + 4 * 4);
  
  console.assert(l === a.length());
  
  console.log('  ✅  length passed');
}

// normalize
{
  let a = new Vec3d(10, 3, 4);
  let b = a.normalize();

  console.assert(b.length() < 1.001 && b.length() > 0.999);
  
  console.log('  ✅  normalize passed');
}

// clamp
{
  let a = new Vec3d(1000, -20, 4);

  console.assert(a.clamp(0, 10).equals(new Vec3d(10, 0, 4)));
  
  console.log('  ✅  clamp passed');
}
