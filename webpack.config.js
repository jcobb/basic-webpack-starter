const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
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
        new OptimizeCssAssetsPlugin(),
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
        runtimeChunk: {
            name: 'manifest',
        },
    },
    // performance: {
    //     hints: 'error', // "error" or false are valid too
    //     maxAssetSize: 1000, // in bytes
    // },
};
