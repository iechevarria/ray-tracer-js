let scene1 = new Scene(1);
scene1.addGeometry(new Sphere(new Vec3d(0, 0, -6), 1, new Color(1, 1, 1)));
scene1.addLight(new PointLight(new Vec3d(-3, 3, -4.5), new Color(15, 0, 0), new Vec3d(0, 0, 1)));
scene1.addGeometry(new Sphere(new Vec3d(-1.5, 1.5, -5), 0.1, new Color(1, 1, 1)));
scene1.addLight(new PointLight(new Vec3d(3, -3, -4.5), new Color(0, 0, 15), new Vec3d(0, 0, 1)));
scene1.addGeometry(new Sphere(new Vec3d(1.5, -1.5, -5), 0.1, new Color(1, 1, 1)));
scene1.addLight(new PointLight(new Vec3d(3, 3, -4.5), new Color(0, 15, 0), new Vec3d(0, 0, 1)));
scene1.addGeometry(new Sphere(new Vec3d(1.5, 1.5, -5), 0.1, new Color(1, 1, 1)));  
scene1.addLight(new PointLight(new Vec3d(-3, -3, -4.5), new Color(5, 5, 5), new Vec3d(0, 0, 1)));
scene1.addGeometry(new Sphere(new Vec3d(-1.5, -1.5, -5), 0.1, new Color(1, 1, 1)));

let scene2 = new Scene(1);
scene2.addGeometry(new Sphere(new Vec3d(0, 0, -6), 1, new Color(1, 1, 1)));
scene2.addGeometry(new Sphere(new Vec3d(-1, 1, -4), 0.2, new Color(1, 1, 1)));
scene2.addGeometry(new Sphere(new Vec3d(-1, 0.5, -4), 0.2, new Color(0.4, 0.2, 1)));
scene2.addLight(new PointLight(new Vec3d(-2, 2, -2), new Color(5, 1, 0), new Vec3d(0, 0, 1)));
