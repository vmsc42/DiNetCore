﻿var webpackMerge = require("webpack-merge");
var commonConfig = require("./webpack.common.js");

module.exports = webpackMerge(commonConfig, {
	debug: true,
	devtool: "eval-source-map"
});