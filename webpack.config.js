const {
  entry,
  output,
  jsLoaders,
  cssLoaders,
  plugins,
} = require('./webpack');

const buildConfig = (env) => ({
  entry: entry(),
  output: output(__dirname),
  module: {
    rules: [
      jsLoaders(),
      cssLoaders(),
    ],
  },
  plugins: plugins(env),
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
  },
});

module.exports = buildConfig;
