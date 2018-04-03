let scene1 = new Scene();

let white = new Material(new Color(0.8, 0.8, 0.8), new Color(0.2, 0.2, 0.2), true);
let red = new Material(new Color(1, 0, 0), false, false);
let mirror = new Material(new Color(0, 0, 0), new Color(1, 1, 1), true);

scene1.addGeometry(new Sphere(new Vec3d(0.8, -1.3, -8), 1.2, mirror));
scene1.addGeometry(new Sphere(new Vec3d(-0.8, -2, -6.2), 0.5, red));


scene1.addLight(new PointLight(new Vec3d(0, 2.49, -7.5), new Color(10, 10, 10), new Vec3d(0, 0, 1)));
scene1.addLight(new PointLight(new Vec3d(0, 0, -1), new Color(5, 0, 0), new Vec3d(0, 0, 1)));
scene1.addLight(new PointLight(new Vec3d(1, -2, -9), new Color(0, 0.5, 1), new Vec3d(0, 0, 1)));

// floor
scene1.addGeometry(new Triangle(new Vec3d(2.5, -2.5, 1),
                                new Vec3d(2.5, -2.5, -10),  
                                new Vec3d(-2.5, -2.5, 1), 
                                white));

scene1.addGeometry(new Triangle(new Vec3d(2.5, -2.5, -10),
                                new Vec3d(-2.5, -2.5, -10),  
                                new Vec3d(-2.5, -2.5, 1), 
                                white));

// ceiling
scene1.addGeometry(new Triangle(new Vec3d(-2.5, 2.5, 1),
                                new Vec3d(2.5, 2.5, -10),  
                                new Vec3d(2.5, 2.5, 1), 
                                white));

scene1.addGeometry(new Triangle(new Vec3d(-2.5, 2.5, 1),
                                new Vec3d(-2.5, 2.5, -10),  
                                new Vec3d(2.5, 2.5, -10), 
                                white));

// back wall
scene1.addGeometry(new Triangle(new Vec3d(2.5, 2.5, -10),
                                new Vec3d(-2.5, 2.5, -10),  
                                new Vec3d(-2.5, -2.5, -10), 
                                white));

scene1.addGeometry(new Triangle(new Vec3d(2.5, -2.5, -10),
                                new Vec3d(2.5, 2.5, -10),  
                                new Vec3d(-2.5, -2.5, -10), 
                                white));

// left wall
scene1.addGeometry(new Triangle(new Vec3d(-2.5, -2.5, -10),
                                new Vec3d(-2.5, 2.5, 1),  
                                new Vec3d(-2.5, -2.5, 1), 
                                white));

scene1.addGeometry(new Triangle(new Vec3d(-2.5, -2.5, -10),
                                new Vec3d(-2.5, 2.5, -10),  
                                new Vec3d(-2.5, 2.5, 1), 
                                white));

// right wall
scene1.addGeometry(new Triangle(new Vec3d(2.5, -2.5, 1),
                                new Vec3d(2.5, 2.5, 1),  
                                new Vec3d(2.5, -2.5, -10), 
                                white));

scene1.addGeometry(new Triangle(new Vec3d(2.5, 2.5, 1),
                                new Vec3d(2.5, 2.5, -10),  
                                new Vec3d(2.5, -2.5, -10), 
                                white));

// behind camera wall
scene1.addGeometry(new Triangle(new Vec3d(-2.5, -2.5, 1),
                                new Vec3d(-2.5, 2.5, 1),  
                                new Vec3d(2.5, 2.5, 1), 
                                white));

scene1.addGeometry(new Triangle(new Vec3d(-2.5, -2.5, 1),
                                new Vec3d(2.5, 2.5, 1),  
                                new Vec3d(2.5, -2.5, 1), 
                                white));

