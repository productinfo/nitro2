var path = require("path");
var PACKAGE = require("./package.json");
module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "../..", "dist", PACKAGE.name),
    filename: `${PACKAGE.name}.app.js`
  },
  module: {
    rules: [{ test: /\.(js)$/, use: "babel-loader" }]
  },
  mode: "production"
};
