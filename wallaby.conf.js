const wallabyWebpack = require('wallaby-webpack');
const webpack = require('webpack');
const compilerOptions = require("./tsconfig.json").compilerOptions;
const webpackPostprocess = wallabyWebpack({
    externals: {
        "react": "React"
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.css', '.less']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('test')
        })
    ]
});

module.exports = function (wallaby) {
  return {
      files: [
          {pattern: 'app/src/**/*.ts', load: false},
          {pattern: 'app/src/**/*.tsx', load: false},
          {pattern: 'app/src/**/*spec.ts', ignore: true},
          {pattern: 'app/src/**/*spec.tsx', ignore: true}
      ],
      tests: [
          {pattern: 'app/src/**/*spec.ts', load: false},
          {pattern: 'app/src/**/*spec.tsx', load: false}
      ],
      compilers: {
          '**/*.ts': wallaby.compilers.typeScript(compilerOptions),
          '**/*.tsx': wallaby.compilers.typeScript(compilerOptions),
      },
      postprocessor: webpackPostprocess,
      setup: () => {
          window.__moduleBundler.loadTests();
      },
      testFramework: 'mocha',
      debug: true
  }
};