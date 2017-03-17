const path = require('path');
const envVar = require('./env_vars');
const {
    srcPath,
    nodeModulesPath
} = envVar;

const baseWebpackConfig = {
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.css', '.less'],
        modules: [
            nodeModulesPath,
            srcPath
        ]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
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
};

module.exports = baseWebpackConfig;