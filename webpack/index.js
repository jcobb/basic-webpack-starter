module.exports = {
  entry: require('./entry'),
  output: require('./output'),
  jsLoaders: require('./loaders').jsLoaders,
  cssLoaders: require('./loaders').cssLoaders,
  plugins: require('./plugins'),
};
