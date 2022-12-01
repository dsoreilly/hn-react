/** @format */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    return {
        mode: env.production ? 'production' : 'development',
        entry: './src/index.js',
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    include: path.join(__dirname, 'src/'),
                    use: [
                        env.production
                            ? MiniCssExtractPlugin.loader
                            : 'style-loader',
                        'css-loader',
                        'postcss-loader',
                    ],
                },
                {
                    test: /\.js$/i,
                    include: path.join(__dirname, 'src/'),
                    use: ['babel-loader'],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: false,
                meta: {
                    charset: 'utf-8',
                    viewport:
                        'width=device-width, initial-scale=1, shrink-to-fit=no',
                },
                template: './public/index.html',
                title: 'Hacker News SPA',
            }),
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css',
            }),
        ],
        devServer: {
            compress: true,
            historyApiFallback: true,
            port: 8080,
        },
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            clean: true,
        },
    };
};
