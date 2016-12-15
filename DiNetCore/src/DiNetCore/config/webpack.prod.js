var webpack = require("webpack");
var webpackMerge = require("webpack-merge");
var commonConfig = require("./webpack.common.js");

//var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
//var HtmlWebpackPlugin = require("html-webpack-plugin");
//var ExtractTextPlugin = require("extract-text-webpack-plugin");
//var CopyWebpackPlugin = require("copy-webpack-plugin");
//var CleanWebpackPlugin = require("clean-webpack-plugin");
//var ForkCheckerPlugin = require("awesome-typescript-loader").ForkCheckerPlugin;
//var helpers = require("./webpack.helpers");

module.exports = webpackMerge(commonConfig, {
	debug: false,

	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	]
});