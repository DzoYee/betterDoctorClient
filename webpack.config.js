const path = require('path');
const webpack = require('webpack');

let config = {
  entry:'./index.js',
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js'
  }
}

module.exports = config;