let scene1 = new Scene(1);

let white = new Material(new Color(0.8, 0.8, 0.8), new Color(0.2, 0.2, 0.2), true);

scene1.addGeometry(new Sphere(new Vec3d(0, 0, -6), 1, white));

scene1.addGeometry(new Sphere(new Vec3d(-1.5, 1.5, -5), 0.1, white));
scene1.addGeometry(new Sphere(new Vec3d(1.5, -1.5, -5), 0.1, white));
// scene1.addGeometry(new Sphere(new Vec3d(1.5, 1.5, -5), 0.1, white));  
// scene1.addGeometry(new Sphere(new Vec3d(-1.5, -1.5, -5), 0.1, white));

// scene1.addGeometry(new Sphere(new Vec3d(0, 2, -5.5), 0.5, white));
scene1.addGeometry(new Sphere(new Vec3d(0, -2, -5.5), 0.5, white));
// scene1.addGeometry(new Sphere(new Vec3d(2, 0, -5.5), 0.5, white));
// scene1.addGeometry(new Sphere(new Vec3d(-2, 0, -5.5), 0.5, white));

scene1.addLight(new PointLight(new Vec3d(-3, 3, 0), new Color(30, 30, 0), new Vec3d(0, 0, 1)));
// scene1.addLight(new PointLight(new Vec3d(3, -3, -4.5), new Color(0, 0, 15), new Vec3d(0, 0, 1)));
// scene1.addLight(new PointLight(new Vec3d(0, 0, 0), new Color(10, 10, 10), new Vec3d(0, 0, 1)));
