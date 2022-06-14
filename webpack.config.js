/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = (env) => {
	return {
		entry: "./src/index.ts",
		mode: 'development',
		module: {
			rules: [
				{
					test: /\.ts$/,
					use: "ts-loader",
					include: [path.resolve(__dirname, "src")]
				},
				{
					test: /\.(jpg|png)$/,
					use: [{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
						}
					}]
				}
			]
		},
		devServer: {
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
				"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
			},
			port: env.port
		},
		output: {
			publicPath: "/",
			filename: "bundle.js",
			path: path.resolve(__dirname, "public")
		},
		resolve: {
			extensions: [".ts", ".js"]
		}
	}
};