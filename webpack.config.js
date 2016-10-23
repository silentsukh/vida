const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

const SASS_DIR = path.resolve(__dirname, 'sass');


module.exports = [{
  name: 'js',
  target: 'web',
  context: SRC_DIR,
  entry: './index.js',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [{
        test: /\.jsx?$/,
        include: SRC_DIR,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'react-hmre'],
          plugins: ["transform-object-rest-spread"]
        }
    }, {
      test: /\.scss$/,
      include: SASS_DIR,
      exclude: path.resolve(__dirname, 'node_modules'),
      loader: ExtractTextPlugin.extract('css!sass')
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
      allChunks: true
    })
  ]
}];