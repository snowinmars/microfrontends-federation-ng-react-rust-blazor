const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:4204/",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 4204,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "childBus",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./web-components/bus": "./src/bus.ts",
      },
      shared: {
        ...deps,
      },
    })
  ],
};
