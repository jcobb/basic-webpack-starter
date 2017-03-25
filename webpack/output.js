/**
 * webpack output configuration
 * https://webpack.js.org/configuration/output/
 */

const path = require('path');

module.exports = (root) => ({
  // the target directory for all output files
  // must be an absolute path (use the Node.js path module)
  path: path.resolve(root, "dist"), // string

  // the filename template for entry chunks
  filename: "[name].js", // string
});
