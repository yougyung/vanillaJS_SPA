const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		publicPath: '/',
	},
	devtool: 'eval',
	devServer: {
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.css$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: { import: true },
					},
					'postcss-loader',
				],
			},
			{
				test: /\.png$/i,
				use: {
					loader: 'file-loader',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
		new webpack.DefinePlugin({ 
			'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
			'process.env.IMAGE_URL': JSON.stringify(process.env.IMAGE_URL),
			'process.env.IMAGE_ACCESS_KEY': JSON.stringify(process.env.IMAGE_ACCESS_KEY) ,
		}),
			
		new MiniCssExtractPlugin(),
	],
};
