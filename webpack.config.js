/** @format */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  return {
    mode: env.production ? "production" : "development",
    entry: "./src/index.js",
    resolve: {
      extensions: [".css", ".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          include: path.join(__dirname, "src/"),
          use: [
            env.production ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "postcss-loader",
          ],
        },
        {
          test: /\.jsx?$/i,
          include: path.join(__dirname, "src/"),
          use: ["babel-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        meta: {
          charset: "utf-8",
          viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        },
        template: "./public/index.html",
        title: "Hacker News • React ⚛️",
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
      }),
    ],
    devServer: {
      compress: true,
      historyApiFallback: {
        rewrites: [{ from: /\/hn-react\/[^?]/, to: "/404.html" }],
      },
      port: 8080,
    },
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/hn-react",
      clean: true,
    },
  };
};
