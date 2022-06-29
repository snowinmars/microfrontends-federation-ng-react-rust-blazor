# Micro-frontend example
Testing Webpack 5 Module Federation, Angular as the host app (http://localhost:4200), which contains 4 containers:
* Angular app: http://localhost:4201
* React app: http://localhost:4202
* Rust wasm app: http://localhost:4203
* Blazor wasm app (BlazorApp1): http://localhost:4205

http://localhost:4204 is used by common bus.

BlazorApp2 is ssr.

Blazor wasm included in the repo precompiled, so you don't have to recompile it. But you can.

## Run in localhost
* `yarn`
* `yarn bootstrap`
* `yarn start`
Access http://localhost:4200/

## Main point

Blazor doesn't work. I can't inject it properly, idk why.

I should mount it in `BlazorApp1/bin/Release/net6.0/browser-wasm/publish/wwwroot/index.js`, that's all I'm sure.
