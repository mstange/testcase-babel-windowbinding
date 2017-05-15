const path = require('path');
const webpack = require('webpack');

const config = {
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
    }],
  },
  node: {
    process: false,
  },
  entry: [
    './index',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/',
  },
};

module.exports = config;
