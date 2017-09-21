const path = require('path');
const webpack = require('webpack');

let config = {
  entry:'./index.js',
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // files ending with .js
        exclude: /node_modules/, // exclude the node_modules directory
        loader: "babel-loader" // use this (babel-core) loader
      }
    ]
  }
}

module.exports = config;