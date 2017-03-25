/**
 * webpack output configuration
 * https://webpack.js.org/configuration/output/
 */

const path = require('path');

module.exports = () => ({
  // the target directory for all output files
  // must be an absolute path (use the Node.js path module)
  path: path.resolve(__dirname, "dist"), // string

  // the filename template for entry chunks
  filename: "[name].js", // string
});
