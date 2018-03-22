class Material {
  constructor(diffuseAlbedo, specularAlbedo, specular) {
    this.diffuseAlbedo = diffuseAlbedo;
    this.specularAlbedo = specularAlbedo;
    this.specular = specular;
  }

  reflects(c) {
    return this.albedo.colorMultiply(c);
  }
}
