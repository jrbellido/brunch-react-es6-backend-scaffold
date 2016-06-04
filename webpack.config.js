var fp = require('path')
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

//var lessExtract = new ExtractTextPlugin(fp.join(__dirname, "public", "styles-[name].[chunkhash].css"));

module.exports = {
  entry: {
    app: "./app/index.js",
    vendor: [
      "react",
      "react-dom",
      "react-redux",
      "react-router",
      "redux"
    ]
  },
  output: {
    path: __dirname + "/public/assets/",
    publicPath: "/assets/",
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
        exclude: /(node_modules|bower_components)/, 
        query: {
          presets: ["es2015", "es2016", "react"],
          cacheDirectory: true
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("css!sass")
      }
      /*,
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader"),
        include: [fp.join(__dirname, "app", "styles")]
      },
      {
        text: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }*/
    ]
  },
  resolve: {
    extensions: ['', '.js'],
  },
};
