const path = require('path');
const webpack = require('webpack');

let config = {
  entry:'./src/index.js',
  output: {
    path: path.join(__dirname, './public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // files ending with .js
        exclude: /node_modules/, // exclude the node_modules directory
        loader: "babel-loader" // use this (babel-core) loader
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}

module.exports = config;