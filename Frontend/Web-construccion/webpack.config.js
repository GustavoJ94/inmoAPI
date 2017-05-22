var webpack = require('webpack');
var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: ["babel-polyfill",  APP_DIR + '/inicio.jsx'],
  output: {
    path: BUILD_DIR,
    filename: 'inmo.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({comments:false})
  ]
};

module.exports = config;