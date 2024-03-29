const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = (options) => {
  return {
    entry: "./index.js",
    output: {
      filename: "bundle.js",
      publicPath: "http://localhost:4202/",
      uniqueName: "child-react",
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                cacheDirectory: true,
                presets: ["@babel/react", "@babel/env"],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "childReact",
        filename: "remoteEntry.js",
        remotes: {
          childBus: "childBus@http://localhost:4204/remoteEntry.js",
        },
        exposes: {
          "./web-components": "./src/components/App/app.js",
        },
        shared: ["react", "react-dom"],
      }),
    ],
    devServer: {
      port: 4202,
    },
  };
};
