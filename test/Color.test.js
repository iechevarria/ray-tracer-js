const Color = require('../src/Color.js');

console.log('Testing Color...');

// equals
{
  let a = new Color(1, 1, 1);
  let b = new Color(1, 1, 1);
  let c = new Color(1, 0, 1);

  console.assert(a.equals(a));
  console.assert(a.equals(b));
  console.assert(!a.equals(c));

  console.log('  ✅  equals passed');
}

// add
{
  let a = new Color(4, 2, 1);
  let b = new Color(2, 4, 0);

  console.assert(a.add(b).equals(new Color(6, 6, 1)));

  console.log('  ✅  add passed');
}

// subtract
{
  let a = new Color(0.4, 0.2, 1);
  let b = new Color(0.2, 0.4, 0);

  console.assert(a.subtract(b).equals(new Color(0.2, -0.2, 1)));

  console.log('  ✅  subtract passed');
}

// colorMultiply
{
  let a = new Color(5, 3, 1);
  let b = new Color(2, 4, 0);

  console.assert(a.colorMultiply(b).equals(new Color(10, 12, 0)));

  console.log('  ✅  colorMultiply passed');
}

// scalarDivide
{
  let a = new Color(2, 4, 0);

  console.assert(a.scalarDivide(2).equals(new Color(1, 2, 0)));

  console.log('  ✅  scalarDivide passed');
}

// clamp
{
  let a = new Color(2.01, 0.14, -0.14);

  console.assert(a.clamp(0, 1).equals(new Color(1, 0.14, 0)));

  console.log('  ✅  clamp passed');
}
