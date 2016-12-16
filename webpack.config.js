const path = require('path');

// base webpack blocks
const {
  webpack,
  createConfig,
  addPlugins,
  env,
  entryPoint,
  setOutput,
  sourceMaps,
  customConfig
} = require('@webpack-blocks/webpack');

// blocks
const babel = require('@webpack-blocks/babel6');
const cssModules = require('@webpack-blocks/css-modules');
const extractText = require('@webpack-blocks/extract-text');
const devServer = require('@webpack-blocks/dev-server');
const eslint = require('./tools/webpack-blocks');

// other plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = createConfig([
  // entryPoint
  // vendor: an array of dependencies to form a vendor bundle
  // app: the entry point for the application code
  entryPoint({
    vendor: [
      'webpack/hot/only-dev-server',
      'babel-polyfill',
      'react', 'react-dom',
      'redux', 'react-redux', 'redux-thunk', 'redux-responsive',
      'lodash', 'isomorphic-fetch'
    ],
    app: './src/index.js'
  }),

  // setOutput
  // path: this is where our bundled files are output
  // filename: the [name] the files take will match the keys above in entry
  setOutput({
    path: path.join(__dirname, 'dist'),
    filename: '/[name].js'
  }),

  // addPlugins
  // plugins are additional node modules that usually work on the resulting bundle.
  // plugins work at bundle or chunk level and usually work at the end of the bundle generation process.
  // some plugins like commonsChunksPlugins go even further and modify how the bundles themselves are created.
  addPlugins([
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
  ]),

  // custom eslint block
  // see ./tools/webpack-blocks
  eslint(),

  // @webpack-blocks/babel6
  // https://github.com/andywer/webpack-blocks/tree/master/packages/babel6
  babel(),

  // @webpack-blocks/css-modules
  // https://github.com/andywer/webpack-blocks/tree/master/packages/css-modules
  cssModules(),

  // @webpack-blocks/extract-text
  // https://github.com/andywer/webpack-blocks/tree/master/packages/extract-text
  extractText('/styles.css', 'text/css'),

  customConfig({
    // resolve
    // extensions: the file extensions are automatically resolved on import
    // root: allow absolute path imports from the /src dir
    resolve: {
      extensions: ['', '.js'],
      root: [
        path.resolve('./src')
      ]
    }
  })
]);
