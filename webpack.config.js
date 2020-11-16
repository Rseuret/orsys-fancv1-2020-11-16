var config = {
	entry: './src/app.js',
	output: {
		filename: 'bundle.js'
	},

	devtool: false,

	optimization: {
		minimize: true
	},

	module: {
		//... liste des règles de traitement des fichiers
	}
};

module.exports = config;