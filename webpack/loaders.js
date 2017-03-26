/**
 * The goal is to have all of the assets in your project to be webpack's concern
 * and not the browser's. (This doesn't mean that they all have to be bundled
 * together). webpack treats every file (.css, .html, .scss, .jpg, etc.) as a
 * module. However, webpack only understands JavaScript.
 *
 * Loaders in webpack transform these files into modules as they are added
 * to your dependency graph.
 *
 * At a high level, they have two purposes in your webpack config.
 * - Identify what files should be transformed by a certain loader. (test property)
 * - Transform that file so that it can be added to your dependency graph
 *   (and eventually your bundle). (use property)
 *
 * "Hey webpack compiler, when you come across a path that resolves to a '.js'
 * or '.jsx' file inside of a require()/import statement, use the babel-loader
 * to transform it before you add it to the bundle".
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const jsLoaders = () => ({
  test: [
    /\.js$/,
    /\.jsx$/,
  ],
  exclude: '/node_modules/',
  use: [
    "babel-loader",
    "eslint-loader",
  ],
});

const cssLoaders = () => ({
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: {
      loader: 'css-loader',
      options: {
        modules: true,
        importLoaders: 1,
        localIdentName: '[name]__[local]___[hash:base64:5]',
      },
    },
  }),
});

module.exports.jsLoaders = jsLoaders;
module.exports.cssLoaders = cssLoaders;
