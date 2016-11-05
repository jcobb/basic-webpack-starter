const webpack = require('webpack');
const path = require('path');
const ETP = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Hack for Ubuntu on Windows: interface enumeration fails with EINVAL, so return empty.
try {
  require('os').networkInterfaces();
} catch (e) {
  require('os').networkInterfaces = () => ({});
}

module.exports = {

  // entry
  // ===========================================================================
  // vendor: an array of dependencies to form a vendor bundle
  // app: the entry point for the application code
  entry: {
    vendor: [
      'react', 'react-dom',
      'redux', 'react-redux', 'redux-thunk'
    ],
    app: './src/index.js'
  },


  // output
  // ===========================================================================
  // publicPath: is used by plugins to update asset paths when generating production builds.
  // path: this is where our bundled files are output
  // filename: the [name] the files take will match the keys above in entry
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '/[name].js'
  },


  // plugins
  // ===========================================================================
  // plugins are additional node modules that usually work on the resulting bundle.
  // plugins work at bundle or chunk level and usually work at the end of the bundle generation process.
  // some plugins like commonsChunksPlugins go even further and modify how the bundles themselves are created.
  plugins: [
    // split the code into vendor and application.
    // the vendor dependencies defined above in entry will not be included
    // in the application bundle
    // (http://jonathancreamer.com/advanced-webpack-part-1-the-commonschunk-plugin/)
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor"]
    }),

    // take all the .css files processed by the loader below,
    // combine their contents and it extract them to a single "styles.css"
    new ETP("/styles.css"),

    // creates an index.html page using the template provided
    // will automatically include all bundles and hash them for cache busting
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      hash: true
    })
  ],


  // loaders
  // ===========================================================================
  // loaders are additional node modules that help ‘load’ or ‘import’ files of various types into
  // browser acceptable formats like JS, Stylesheets and so on.
  // loaders also allow importing such files into JS via “require” or “import” in ES6.
  // loaders can be chained and made to work on the same file type. The chaining works from right-to-left
  // and the loader are separated by “!”.
  // loaders themselves can be configured to work differently by passing parameters.
  module: {
    loaders: [
      // { test: /\.html$/, loader: "file?name=[name].[ext]" },
      // transform all js using babel. see bablrc for babel presets
      { test: /\.js$/, exclude: /node_modules/, loader: "babel" },
      // process all css as css modules, use the ExtractTextPlugin to extract results to a .css file
      { test: /\.css$/, loader: ETP.extract('style','css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]') }
    ]
  },

  // resolve
  // extensions: the file extensions are automatically resolved on import
  // ===========================================================================
  // root: allow absolute path imports from the /src dir
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve('./src')
    ]
  }
};
