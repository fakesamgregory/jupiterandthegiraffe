module.exports = {
	test: /\.ts?$/,
	use: [
		{
			loader: 'ts-loader',
			options: {
				allowTsInNodeModules: true,
			},
		},
	],
};
