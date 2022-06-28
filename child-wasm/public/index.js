import('../pkg/index.js')
  .then(({ Universe }) => {
    console.log(`loaded Wasm module`);

    const pre = document.getElementsByTagName('child-wasm-element')[0];

    const universe = Universe.new();

    const renderLoop = () => {
      pre.textContent = universe.render();
      universe.tick();

      requestAnimationFrame(renderLoop);
    };

    requestAnimationFrame(renderLoop);
  })
  .catch(console.error);
