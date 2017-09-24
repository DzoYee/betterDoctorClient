const path = require('path');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');

let config = {
  entry:'./src/index.js',
  output: {
    path: path.join(__dirname, './public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png'],
    alias: {
      images: path.resolve(__dirname, 'src/assets/images'),
      components: path.resolve(__dirname, 'src/components')
    }
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
        use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        }))
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules./
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader?context=src/assets/images/&name=images/[path][name].[ext]', {  // images loader
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 4,
            },
            pngquant: {
              quality: '75-90',
              speed: 3,
            },
          },
        }],
        exclude: /node_modules/,
        include: __dirname,
      },
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
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeCSSAssets()
  );
}