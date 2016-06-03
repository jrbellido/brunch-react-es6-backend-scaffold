var webpack = require("webpack");

module.exports = {
  entry: {
    "app": "./app/app.js",
    "vendor": []
  },
  output: {
    path: __dirname,
    filename: "public/[name].js"
  },
  plugins: [
    //new webpack.optimize.CommonsChunkPlugin("vendor.js")
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: "babel", exclude: /(node_modules|bower_components)/, query: {
        presets: ["es2015", "react"],
        cacheDirectory: true
      } },
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};
