const envVars = require('./env_vars');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devServerConfig = require('./devServerConfig');
const baseConfig = require('./base');
const path = require('path');

const {
    srcPath,
    distPath
} = envVars;

const webpackDevConfig = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:9000',
        'webpack/hot/only-dev-server',
        './app/src/main'
    ],
    output: {
        path: distPath,
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    resolve: baseConfig.resolve,
    module: baseConfig.module,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devtool: 'eval-source-map',
    devServer: devServerConfig
};

module.exports = webpackDevConfig;