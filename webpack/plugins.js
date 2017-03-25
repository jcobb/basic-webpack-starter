/**
 * configuration for webpack plugins
 * https://webpack.js.org/configuration/plugins/
 *
 * Since Loaders only execute transforms on a per-file basis, plugins are most
 * commonly used (but not limited to) performing actions and custom
 * functionality on "compilations" or "chunks" of your bundled modules
 * (and so much more).
 *
 * The webpack Plugin system is extremely powerful and customizable.
 *
 * In order to use a plugin, you just need to require() it and add it to the
 * plugins array. Most plugins are customizable via options. Since you can use
 * a plugin multiple times in a config for different purposes, you need to
 * create an instance of it by calling it with new.
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ENV = require('./constants').ENV;

module.exports = (env) => ([
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
  }),

  // extract all css to a seperate app.css bundle
  new ExtractTextPlugin("app.css"),

  // Across the application 'process.env.NODE_ENV' will have the value that is
  // passed when we build our application.
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(env),
  }),

  //production only past this point
  ...(env == ENV.PRODUCTION ? [
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }),

    new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
            screw_ie8: true,
            keep_fnames: true
        },
        compress: {
            screw_ie8: true
        },
        comments: false
    }),
  ] : [])
])
