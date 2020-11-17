const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var config = {
	entry: './src/app.js',
	
	output: {
		filename: 'bundle.js',
		// chunkFilename: 'bundles-[name].js'
	},

	devtool: false,

	optimization: {
		minimize: true
	},

	module: {
		//... liste des règles de traitement des fichiers
		rules: [
			{
				test: /\.(html)$/,
				loader: "raw-loader"
			},

			{
				test: /\.(css|scss)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},

					{
						loader: "css-loader"
					},

					{
						loader: "sass-loader"
					}
				]
			}
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "bundle.css",
			// chunkFilename: "bundle-[name].css"
		})
	]
};

module.exports = config;