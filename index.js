const main = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const rt = new RayTracer(16, 1);
  rt.render(ctx, scene1);
};

main();
