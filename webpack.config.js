const {
  entry,
  output,
  jsLoaders,
  cssModules,
  plugins,
} = require('./webpack');

module.exports = {
  entry: entry(),
  output: output(),
  module: {
    rules: [
      jsLoaders(),
      cssModules(),
    ],
  },
  plugins: plugins(),
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
  },
  devtool: "source-map",
};
