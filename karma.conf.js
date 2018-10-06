var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS' ],
    singleRun: true,
    frameworks: ['jasmine'],
    files: [
      'spec/**/*.spec.js'
    ],
    preprocessors: {
      'spec/**/*.spec.js': ['webpack'],
      'src/**/*.js': ['webpack']
    },
    reporters: ['mocha'],
    webpack: {
      module: {
        rules: [
          {
            test: /\.js$/,
            use: [
              {
                loader: 'babel-loader',
                query: {
                  presets: ['@babel/preset-env', '@babel/preset-react']
                }
              }
            ],
            exclude: /node_modules/
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};
