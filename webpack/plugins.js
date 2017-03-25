/**
 * configuration for webpack plugins
 * https://webpack.js.org/configuration/plugins/
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ([
  // split the code into vendor and application.
  // the vendor dependencies defined above in entry will not be included
  // in the application bundle
  // http://jonathancreamer.com/advanced-webpack-part-1-the-commonschunk-plugin/
  new webpack.optimize.CommonsChunkPlugin({
    names: ["vendor"]
  }),

  // creates an index.html page using the template provided
  // will automatically include all bundles and hash them for cache busting
  new HtmlWebpackPlugin({
    template: './src/index.ejs',
    hash: true
  })
])
