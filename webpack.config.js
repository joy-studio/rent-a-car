const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/js/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  mode: "development",
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "./dist"),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/index.html"), // шаблон
      filename: "index.html", // название выходного файла
    }),
  ],
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // CSS
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      // Шрифты
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: "file-loader?name=Assets/Fonts/Manrope/[name].[ttf]",
          },
        ],
      },
      // изображения
      {
        // test: /\.(gif|png|jpg|jpeg|svg)?$/,
        // loader: "file-loader",
        // options: {
        //   name: "Assets/Images/[name].[ext]",
        // },
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "Assets/Images/",
            },
          },
        ],
      },
    ],
  },
};
