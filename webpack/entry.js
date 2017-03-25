/**
 * entry point configuration for webpack
 * https://webpack.js.org/configuration/entry-context/#entry
 */

const devtools = [
  'webpack/hot/only-dev-server',
];

const polyfills = [
  'babel-polyfill',
  'isomorphic-fetch'
];

const libs = [
  'react',
  'react-dom',
  'redux',
  'react-redux',
  'redux-thunk',
  'redux-responsive',
];

const utils = [
  'lodash',
];

module.exports = () => ({
  app: './src/index.js',
  vendor: [
    ...devtools,
    ...polyfills,
    ...libs,
    ...utils,
  ],
});
