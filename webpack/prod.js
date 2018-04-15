const fsExtra = require('fs-extra');
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

const clientConfig = {
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
    },
};

// function compileClientWithWebpack() {
//     return new Promise((resolve, reject) => {
//         const webCompiler = webpack(clientConfig);
//
//         webCompiler.run((err, stats) => {
//             if (err) {
//                 console.log(err);
//                 reject(err);
//             } else {
//                 fsExtra.writeFile(
//                     path.resolve(clientConfig.output.path, 'file-names.json'),
//                     JSON.stringify(stats.toJson().assetsByChunkName),
//                     (writeFileErr) => {
//                         if (writeFileErr) {
//                             console.log(writeFileErr);
//                             reject(writeFileErr);
//                         } else {
//                             console.log('done');
//                             console.log(stats);
//                             resolve();
//                         }
//                     }
//                 );
//             }
//         });
//     });
// }
webpack(clientConfig, () => console.log('done'));
// compileClientWithWebpack();
