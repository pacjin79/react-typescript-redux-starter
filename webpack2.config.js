const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const _ = require('lodash');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackDevConfig = require('./webpack/dev');


const srcPath = path.resolve(__dirname, 'app/src');
const defaultEnv = {
    mode: 'dev',
    project: 'app'
};

const webpackProdConfig = {
    context: path.resolve(__dirname, '.'),
    entry: {
        app: './app/src/main'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.css', '.less'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            srcPath
        ]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                include: srcPath,
                use: ['react-hot-loader/webpack', 'ts-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {importLoaders: 1}},
                    'less-loader'
                ]
            },
            {
                test: /\.(jpe|jpg)$/,
                use: [
                    'url-loader'
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    'url-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({  // TODO: switch to manual bundling later
            name: 'commons',
            filename: 'commons.js',
            minChunks: 2,
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            excludeChunks: ['test'],
            template: path.join(srcPath, "index.html")
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};


module.exports = (env) => {
    let finalEnv;
    if (env) {
        finalEnv = _.merge({}, defaultEnv, env);
    } else {
        finalEnv = defaultEnv;
    }
    console.log('==========executing webpack env === ', finalEnv);
    if (finalEnv.mode === 'prod') {
        return webpackProdConfig;
    } else if (finalEnv.mode === 'dev') {
       // return merge(webpackProdConfig, webpackDevConfig);
        return webpackDevConfig;
    }
};