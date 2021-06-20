const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "development",
  target: "node",
  externals: [nodeExternals()],
  entry: "./src/client",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/client/index.html",
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    hot: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {},
          mangle: true,
        },
        test: /\.js(\?.*)?$/i,
        parallel: 4,
      }),
    ],
  },
};
