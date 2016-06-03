var webpack = require("webpack");

module.exports = {
  entry: {
    app: "./app/index.js",
    vendor: []
  },
  output: {
    path: __dirname,
    filename: "public/assets/[name].js"
  },
  plugins: [
    //new webpack.optimize.CommonsChunkPlugin("public/vendor-bundle.js")
  ],
  module: {
    preLoaders: [
      {
        text: /\.js?$/,
        loader: 'eslint'
      }
    ],
    loaders: [
      { 
        test: /\.jsx?$/,
        loader: "babel", 
        exclude: /(node_modules|bower_components)/, 
        query: {
          presets: ["es2015", "react"],
          cacheDirectory: true
        } 
      },
      { 
        test: /\.css$/, 
        loader: "style!css" 
      }
    ]
  }
};
