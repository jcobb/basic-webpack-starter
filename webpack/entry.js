/**
 * entry point configuration for webpack
 * https://webpack.js.org/configuration/entry-context/#entry
 */
const { ENV } = require('./constants');

const devtools = [
  // activate HMR for React
  'react-hot-loader/patch',
  // bundle the client for webpack-dev-server
  // and connect to the provided endpoint
  'webpack-dev-server/client?http://localhost:8080',
  // bundle the client for hot reloading
  // only- means to only hot reload for successful updates
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

module.exports = (env) => ({
  app: [
    ...(env == ENV.DEVELOPMENT ? devtools : []),
    './index.js'
  ],
  vendor: [
    ...polyfills,
    ...libs,
    ...utils,
  ],
});
