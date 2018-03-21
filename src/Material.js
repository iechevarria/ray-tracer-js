class Material {
  constructor(albedo, isSpecular) {
    this.albedo = albedo;
    this.isSpecular = isSpecular;
  }

  get specular() {
    return isSpecular;
  }

  reflects(c) {
    return this.albedo.colorMultiply(c);
  }
}
