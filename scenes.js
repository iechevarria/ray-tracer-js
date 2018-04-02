let scene1 = new Scene();

let white = new Material(new Color(1, 1, 1), new Color(0.2, 0.2, 0.2), true);
let mirror = new Material(new Color(0, 0, 0), new Color(1, 1, 1), true);

scene1.addGeometry(new Sphere(new Vec3d(0, 0, -5), 0.5, white));

scene1.addGeometry(new Sphere(new Vec3d(-1.5, 1.5, -5), 0.1, white));
scene1.addGeometry(new Sphere(new Vec3d(1.5, -1.5, -5), 0.1, white));
scene1.addGeometry(new Sphere(new Vec3d(1.5, 1.5, -5), 0.1, white));  
scene1.addGeometry(new Sphere(new Vec3d(-1.5, -1.5, -5), 0.1, white));

scene1.addGeometry(new Sphere(new Vec3d(0, 2, -5.5), 0.5, white));
scene1.addGeometry(new Sphere(new Vec3d(0, -2, -5.5), 0.5, white));
scene1.addGeometry(new Sphere(new Vec3d(2, 0, -5.5), 0.5, white));
scene1.addGeometry(new Sphere(new Vec3d(-2, 0, -5.5), 0.5, white));

scene1.addLight(new PointLight(new Vec3d(3, 3, 0), new Color(30, 30, 0), new Vec3d(0, 0, 1)));
scene1.addLight(new PointLight(new Vec3d(-3, 3, 0), new Color(15, 0, 0), new Vec3d(0, 0, 1)));
scene1.addLight(new PointLight(new Vec3d(0, 0, 0), new Color(20, 20, 20), new Vec3d(0, 0, 1)));

// scene1.addGeometry(new Triangle(new Vec3d(10, -2.5, 0),
//                                 new Vec3d(0, -2.5, -10),
//                                 new Vec3d(-10, -2.5, 0), 
//                                 white));

// scene1.addGeometry(new Triangle(new Vec3d(-10, 4, 0),
//                                 new Vec3d(0, 4, -10),
//                                 new Vec3d(10, 4, 0), 
//                                 white));

// scene1.addGeometry(new Triangle(new Vec3d(10, -2.5, 0),
//                                 new Vec3d(0, -2.5, -10),
//                                 new Vec3d(-10, -2.5, 0), 
//                                 white));

// scene1.addGeometry(new Triangle(new Vec3d(10, -2.5, 0),
//                                 new Vec3d(0, -2.5, -10),
//                                 new Vec3d(-10, -2.5, 0), 
//                                 white));
