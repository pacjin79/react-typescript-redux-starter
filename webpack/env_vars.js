const path = require('path');

const appPath = path.join(__dirname, '..', 'app');
const distPath = path.join(__dirname, '..', 'dist');
const nodeModulePath = path.join(__dirname, '..', 'node_modules');

const envVars = {
    appPath: appPath,
    srcPath: appPath,
    nodeModulesPath: nodeModulePath,
    distPath: distPath,
    distAssetsPath: path.join(distPath, 'assets'),
    devServer: {
        port: 9000
    }
};

module.exports = envVars;