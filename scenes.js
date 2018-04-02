let scene1 = new Scene();

let white = new Material(new Color(1, 1, 1), new Color(0.2, 0.2, 0.2), true);
let mirror = new Material(new Color(0, 0, 0), new Color(1, 1, 1), true);

scene1.addGeometry(new Sphere(new Vec3d(0, 0, -4), 0.5, white));

scene1.addGeometry(new Sphere(new Vec3d(-1.5, 1.5, -5), 0.1, white));
scene1.addGeometry(new Sphere(new Vec3d(1.5, -1.5, -5), 0.1, white));
scene1.addGeometry(new Sphere(new Vec3d(1.5, 1.5, -5), 0.1, white));  
scene1.addGeometry(new Sphere(new Vec3d(-1.5, -1.5, -5), 0.1, white));

scene1.addGeometry(new Sphere(new Vec3d(0, 2, -5.5), 0.5, white));
scene1.addGeometry(new Sphere(new Vec3d(0, -2, -5.5), 0.5, white));
scene1.addGeometry(new Sphere(new Vec3d(2, 0, -5.5), 0.5, white));
scene1.addGeometry(new Sphere(new Vec3d(-2, 0, -5.5), 0.5, white));

scene1.addGeometry(new Triangle(new Vec3d(1, -1, -4),
                                new Vec3d(0, 1, -6),
                                new Vec3d(-1, -1, -4), 
                                white));

scene1.addLight(new PointLight(new Vec3d(0, 0, -4), new Color(1, 1, 1), new Vec3d(0, 0, 1)));
scene1.addLight(new PointLight(new Vec3d(-3, 3, 0), new Color(30, 30, 0), new Vec3d(0, 0, 1)));
scene1.addLight(new PointLight(new Vec3d(3, -3, 0), new Color(15, 0, 0), new Vec3d(0, 0, 1)));
scene1.addLight(new PointLight(new Vec3d(0, 0, 0), new Color(10, 10, 10), new Vec3d(0, 0, 1)));


let scene2 = new Scene();
scene2.addLight(new PointLight(new Vec3d(-3, 3, 0), new Color(30, 30, 0), new Vec3d(0, 0, 1)));
scene2.addLight(new PointLight(new Vec3d(3, -3, 0), new Color(15, 0, 0), new Vec3d(0, 0, 1)));
scene2.addLight(new PointLight(new Vec3d(0, 0, 0), new Color(10, 10, 10), new Vec3d(0, 0, 1)));

scene2.addGeometry(new Triangle(new Vec3d(-2, -2, 0),
                                new Vec3d(2, 0, -6),
                                new Vec3d(2, 2, 0), 
                                white));
