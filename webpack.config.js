"use strict";

const debug = process.env.NODE_ENV !== "production";

const webpack = require('webpack');
const path = require('path');
const definePlugin = new webpack.DefinePlugin({
  "__BROWSER__": "true"
});

module.exports = {
  devtool: debug ? 'inline-sourcemap' : null,
  entry: path.join(__dirname, 'src', 'app.js'),
  devServer: {
    inline: true,
    port: 3333,
    contentBase: "app/"
  },
  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: path.join(__dirname, 'src'),
      loader: ['babel-loader'],
      query: {
        cacheDirectory: 'babel_cache',
        presets: ['react', 'es2015', 'react-hmre'],
        plugins: ['react-html-attrs']
      }
    }]
  },
  plugins: debug ? [definePlugin] : [
    definePlugin,
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false,
      beautify: false,
      dead_code: true
    }),
  ]
};