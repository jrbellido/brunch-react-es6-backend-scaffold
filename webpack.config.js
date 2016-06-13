var fp = require("path")
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = require("./config")(process.argv);

module.exports = {
  entry: {
    app: "./app/client.js",
    vendor: [
      "react",
      "react-dom",
      "react-redux",
      "react-router",
      "redux",
      "immutable",
      "axios",
      "process"
    ]
  },
  output: {
    path: __dirname + "/public/assets/",
    publicPath: config.server.assetPath,
    filename: "[name].js"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
    new ExtractTextPlugin("[name].css")
  ],
  module: {
    loaders: [
      { 
        test: /\.jsx?$/,
        loader: "babel", 
        exclude: /node_modules/, 
        query: {
          presets: ["es2015", "es2016", "react"],
          plugins: ["transform-decorators-legacy", "transform-class-properties", "transform-object-rest-spread"],
          cacheDirectory: true
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|otf|woff2|woff|ttf)(\?.*)?$/,
        loader: "file"
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("css!autoprefixer!sass")
      },
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        include: fp.resolve("node_modules/mapbox-gl-shaders/index.js"),
        loader: "transform/cacheable?brfs"
      }
    ],
    postLoaders: [
      {
        include: /node_modules\/mapbox-gl-shaders/,
        loader: "transform",
        query: "brfs"
      }
    ]
  },
  resolve: {
    extensions: ["", ".js"],
    alias: { "webworkify": "webworkify-webpack" }
  },
};
