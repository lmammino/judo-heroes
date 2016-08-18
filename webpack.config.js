"use strict";

const path = require('path');
const webpack = require('webpack');
const definePlugin = new webpack.DefinePlugin({
	"__BROWSER__": "true"
});
const uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
	beautify: false,
	dead_code: true
});

module.exports = {
	entry: path.join(__dirname, "src", "app.js"),
	output: {
		path: path.join(__dirname, "app"),
		filename: "bundle.js"
	},
	module: {
		loaders: [{
			test: path.join(__dirname, "src"),
			loader: 'babel-loader',
			query: {
				cacheDirectory: 'babel_cache',
				presets: ['es2015', 'react']
			}
		}]
	},
	plugins: [definePlugin, uglifyJsPlugin]
};