/**
 * module loders for javascript
 * https://webpack.js.org/configuration/module/
 */

module.exports = () => ({
  test: /\.js?$/,
  exclude: '/node_modules/',
  use: [
    {
      loader: "babel-loader",
      options: {
        presets: ["es2015"]
      },
    },
    {
      loader: "eslint-loader",
    }
  ],
});
