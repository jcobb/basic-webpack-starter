const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const jsLoaders = {
    test: [
        /\.js$/,
        /\.jsx$/,
    ],
    exclude: /(node_modules)/,
    use: {
        loader: 'babel-loader',
    },
};

const sassLoaders = {
    test: /\.scss$/,
    use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
    ],
};

module.exports = {
    entry: {
        app: './src/index.js',
        utils: [
            './src/utils/index.js',
            './src/constants/constants.js',
            './src/store/actions.js',
            './src/store/createStore.js',
            './src/store/reducers.js',
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // string
        filename: '[name].[chunkhash].js',
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.scss'],
    },
    module: {
        rules: [
            jsLoaders,
            sassLoaders,
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css',
            chunkFilename: '[name].[chunkhash].css',
        }),
        new ManifestPlugin(),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    chunks: 'all',
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                },
                components: {
                    chunks: 'all',
                    test: /\.jsx$/,
                    name: 'components',
                    minSize: 1,
                    minChunks: 2,
                },
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
};
