const { resolve } = require('path');

const {
  PATHS,
  ENV,
} = require('./webpack/constants');

const {
  entry,
  output,
  jsLoaders,
  cssLoaders,
  plugins,
} = require('./webpack');

const buildConfig = (env) => ({
  entry: entry(env),
  output: output(__dirname),
  context: resolve(__dirname, PATHS.SOURCE_DIR),
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
  },
  devtool: (env === ENV.DEVELOPMENT ? 'inline-source-map' : ''),
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, PATHS.CONTENT_BASE),
    publicPath: PATHS.PUBLIC_PATH,
  },
  module: {
    rules: [
      jsLoaders(),
      cssLoaders(),
    ],
  },
  plugins: plugins(env),
});

module.exports = buildConfig;
