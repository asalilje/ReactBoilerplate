module.exports = {
	entry: {
		app: ['webpack/hot/dev-server', './src/scripts/main.jsx']
	},
	output: {
		path: './src',
		filename: 'main.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{ test: /\.(jsx|js)$/, loader: 'babel-loader' }
		]
	},
	externals: {
		"react": "React"
	},
	devtool: "#source-map"
};
