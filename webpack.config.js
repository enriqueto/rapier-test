const path = require('path');
const pathToPhaser = path.join(__dirname, '/node_modules/phaser/');
const phaser = path.join(pathToPhaser, 'dist/phaser-arcade-physics.min');

const config = {
	entry: './src/app.ts',
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/',
	},
	module: {
		rules: [
			{ test: /phaser\.js$/, use: 'expose-loader?Phaser' },
			/* {
				test: /\.js$/,
				loader: 'string-replace-loader',
				options: {
					search: '__PHYSICS_VERSION__', replace: "0.0.1"
				}
			}, */

			{ test: /\.ts$/, use: 'ts-loader', exclude: '/node_modules/' },
		]
	},
	experiments: {
		asyncWebAssembly: true,
		syncWebAssembly: true
	},
	devServer: {
		static: path.resolve(__dirname, './'),
		host: '127.0.0.1',
		port: 8080,
		open: true
	},
	resolve: {
		extensions: ['.ts', '.js'],
		alias: {
			phaser: phaser
		}
	}
}

module.exports = (env, argv) => {
	if (argv.mode === 'development') {
		config.mode = 'development';
		config.output.webassemblyModuleFilename = 'rapier3d.debug.wasm';
	}

	if (argv.mode === 'production') {
		config.mode = 'production';
		config.output.webassemblyModuleFilename = 'rapier3d.wasm';
	}

	return config;
};