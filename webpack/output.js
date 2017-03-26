/**
 * webpack output configuration
 * https://webpack.js.org/configuration/output/
 */

const path = require('path');
const { PATHS } = require('./constants');

module.exports = (root) => ({
  // the target directory for all output files
  // must be an absolute path (use the Node.js path module)
  path: path.resolve(root, PATHS.CONTENT_BASE), // string

  // the filename template for entry chunks
  filename: "[name].js",

  // necessary for HMR to know where to load the hot update chunks
  publicPath: PATHS.PUBLIC_PATH,
});
