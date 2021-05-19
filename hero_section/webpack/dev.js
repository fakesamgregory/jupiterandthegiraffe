// const CREATE_EXAMPLE_INDEX = false;
const CREATE_TEST_INDEX = false;

const merge = require('webpack-merge');
const common = require('./common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env) => {
	const common_options = common(env);

	// if (CREATE_EXAMPLE_INDEX) {
	// common_options.entry.example = './src/example.ts';
	common_options.plugins.push(
		new HtmlWebpackPlugin({
			title: 'Hero Section - Dev',
			// filename: 'example',
			template: './src/index.html',
			// chunks: ['dev'],
		})
	);
	// }

	// load test index file
	if (CREATE_TEST_INDEX) {
		common_options.entry.test = './tests/index.ts';
		common_options.plugins.push(
			new HtmlWebpackPlugin({
				title: 'Test',
				filename: 'test',
				template: 'tests/index.html',
				chunks: ['test'],
			})
		);
	}

	return merge(common_options, {
		mode: 'development',
		devtool: 'inline-source-map', // 'cheap-module-eval-source-map',
		devServer: {
			contentBase: path.join(__dirname, '../public'),
			hot: true,
		},
	});
};
