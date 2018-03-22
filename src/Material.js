class Material {
  constructor(albedo, specular) {
    this.albedo = albedo;
    this.specular = specular;
  }

  reflects(c) {
    return this.albedo.colorMultiply(c);
  }
}
