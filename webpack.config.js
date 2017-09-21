const path = require('path');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
        use: ExtractTextWebpackPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin('styles.css'),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './public'), //from where we servce
    historyApiFallback: true, //fallback to index.html for SPAs
    inline: true,
    open: true
  },
  devtool: 'eval-source-map'
}

module.exports = config;

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}