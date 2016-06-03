module.exports = {
  entry: "./app/app.js",
  output: {
    path: __dirname,
    filename: "public/app.js"
  },
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
