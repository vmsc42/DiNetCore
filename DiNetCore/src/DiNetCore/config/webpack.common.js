var path = require( "path" );
var webpack = require( "webpack" );

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var Autoprefixer = require( "autoprefixer" );
var HtmlWebpackPlugin = require( "html-webpack-plugin" );
var ExtractTextPlugin = require( "extract-text-webpack-plugin" );
var CopyWebpackPlugin = require( "copy-webpack-plugin" );
var CleanWebpackPlugin = require( "clean-webpack-plugin" );
var ForkCheckerPlugin = require( "awesome-typescript-loader" ).ForkCheckerPlugin;
var helpers = require( "./webpack.helpers" );

module.exports = {
	//debug: true,
	entry: {
		"polyfills": "./scripts/polyfills.ts",
		"vendor": "./scripts/vendor.ts",
		"app": "./scripts/main.ts" // app
	},
	output: {
		path: "./wwwroot/",
		filename: "script/[name].js",
		chunkFilename: "[id].[hash].chunk.js",
		publicPath: "/"
	},
	resolve: {
		extensions: ["", ".ts", ".js", ".json", ".css", ".less", ".html"]
	},
	//devServer: {
	//	historyApiFallback: true,
	//	stats: "minimal",
	//	outputPath: path.join( __dirname, "wwwroot/" )
	//},
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: "ts",
				query: {
					"ignoreDiagnostics": [
						2403, // 2403 -> Subsequent variable declarations
						2300, // 2300 -> Duplicate identifier
						2374, // 2374 -> Duplicate number index signature
						2375, // 2375 -> Duplicate string index signature
						2502 // 2502 -> Referenced directly or indirectly
					]
				},
				exclude: [/node_modules\/(?!(ng2-.+))/]
			},
			// copy those assets to output
			{
				test: /\.(png|jpg|gif|ico|woff|woff2|ttf|svg|eot)$/,
				loader: "file?name=data/assets/[name].[ext]"
			},
			// Load less files which are required in vendor.ts
			{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract( "css?sourceMap!" + "less?sourceMap" )
			},
			// Load css files which are required in vendor.ts
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract( "css?sourceMap!" + "less?sourceMap" )
			},
			{
				test: /\.html$/,
				loader: "raw"
			}
		],
		noParse: [/.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/, /angular2-polyfills\.js/]
	},
	//postcss: [Autoprefixer( { browsers: ['last 3 versions', '> 1%'] } )],
	plugins: [
		new ExtractTextPlugin( "style/styles.css", { allChunks: true } ),
		new CommonsChunkPlugin( { name: ["app", "vendor", "polyfills"] } ),
		new CopyWebpackPlugin( [{ from: "scripts/text", to: "data/text" }] ),
		new CopyWebpackPlugin( [{ from: "scripts/templates", to: "data/templates" }] ),
		new HtmlWebpackPlugin( {
			filename: "index.html",
			inject: "body",
			chunksSortMode: helpers.packageSort( ["polyfills", "vendor", "app"] ),
			template: "./scripts/index.html"
		} )
	]
};