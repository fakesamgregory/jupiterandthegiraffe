const argv = require('yargs').argv;
const FAST_COMPILE = argv.env.FAST_COMPILE || false;
const path = require('path');

const merge = require('webpack-merge');
const common = require('./common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
var {AggressiveMergingPlugin} = require('webpack').optimize;

module.exports = (env) => {
	const common_options = common(env);

	common_options.plugins.push(
		new HtmlWebpackPlugin({
			title: 'Staging',
			// filename: 'example',
			template: './src/index.html',
			// chunks: ['dev'],
		})
	);

	// common_options.plugins.push(new UglifyJsWebpackPlugin()); //minify everything // no need, terser (below is better)
	if (!FAST_COMPILE) {
		common_options.plugins.push(new AggressiveMergingPlugin()); //Merge chunks
		common_options.plugins.push(
			new CompressionPlugin({
				test: /\.(js)$/,
			})
		); // gs by default
		common_options.plugins.push(
			new CompressionPlugin({
				filename: '[path].br[query]',
				algorithm: 'brotliCompress',
				test: /\.(js|css|html|svg)$/,
				compressionOptions: {level: 11},
				threshold: 10240,
				minRatio: 0.8,
			})
		);
	}

	common_options.output.filename = '[name].[contenthash].js';
	// common_options.output.chunkFilename = '[name].bundle.[hash].js'; // to ensure the bundles are not cached
	// common_options.output.chunkFilename = '[name].[contenthash].js';
	// to create js and index in the public folder, to deploy on netlify
	common_options.output.path = path.resolve(__dirname, '../public/js');
	if (env.PUBLIC_PATH) {
		common_options.output.publicPath = env.PUBLIC_PATH; // this may be crucial to update depending on the build
	}

	return merge(common_options, {
		mode: 'production',
		devtool: 'source-map',
		optimization: {
			chunkIds: 'named',
			minimize: !FAST_COMPILE,
			minimizer: [
				new TerserPlugin({
					extractComments: true,
					parallel: true,
				}),
			],
		},
	});
};
