const HWP = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname + "/dist",
		publicPath: "/",
		filename: "bundle.js",
	},
	devServer: {
		contentBase: __dirname + "/dist",
		hot: true,
		host: "localhost",
		port: 8888,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "fonts/",
						},
					},
				],
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [new HWP({ template: __dirname + "/public/index.html" })],
};
