const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4200/",
    uniqueName: "Host",
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        childAngular: "childAngular@http://localhost:4201/remoteEntry.js",
        childReact: "childReact@http://localhost:4202/remoteEntry.js",
        childWasm: "childWasm@http://localhost:4203/remoteEntry.js",
        childBus: "childBus@http://localhost:4204/remoteEntry.js",
		    childBlazor: "childBlazor@http://localhost:4205/remoteEntry.js",
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"],
    }),
  ],
};
