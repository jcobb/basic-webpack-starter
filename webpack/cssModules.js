/**
 * module loders for css modules
 * https://webpack.js.org/configuration/module/
 * https://github.com/css-modules/css-modules
 */

module.exports = () => ({
  test: /\.css$/,
  use: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
      options: {
        modules: true,
        importLoaders: 1,
        localIdentName: '[name]__[local]___[hash:base64:5]',
      },
    },
  ],
});
