const path = require('path');
const envVars = require('./env_vars');

const host = envVars.devServer.host || 'localhost';

module.exports = {
    port: envVars.devServer.port,
    hot: true,
    compress: false,
    historyApiFallback:true,
    host: host,
    stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
        colors: {
            green: '\u001b[32m',
        }
    }
};