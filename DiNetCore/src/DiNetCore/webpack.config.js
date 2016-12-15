/// <binding AfterBuild='Run - Development' />

var isProd = (process.env.NODE_ENV === 'production');
if (!isProd) {
	module.exports = require('./config/webpack.dev.js');
} else {
	module.exports = require('./config/webpack.prod.js');
}