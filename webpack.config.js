/*global module, __dirname*/
var path = require('path');

module.exports = {
	entry: './index.web.js',
	output: {
		path: './www/',
		filename: 'index.js'
	},
	devServer: {
		inline: true,
		port: 8080
	},
	module: {
		loaders: [
		{
			test: /\.js$/,
			include: [
				path.resolve(__dirname, 'app'),
				path.resolve(__dirname, 'node_modules/react-native-slider'),
				path.resolve(__dirname, 'node_modules/react-native-vector-icons')
			],
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		},{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		},
		{test: /\.css$/, loader: 'style!css-loader'},
		{test: /\.(jpe?g|png|gif)$/, loader: 'url?name=[path][name].[ext]'}
		]
	},
	resolve: {
		alias: {
			'react-native': 'react-native-web'
		}
	}
};
