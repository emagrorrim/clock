const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: "./src/app/App.js"
  },
  output: {
    path: path.resolve(__dirname, "./public/dist"),
    filename: "[name].js",
    publicPath: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.js|jsx/,
        exclude: [
          path.resolve(__dirname, "./node_modules")
        ],
        loader: "babel-loader",
        options: {
          presets: ["es2015", "react"]
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader'},
      { test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/, loader: 'url?limit=10000&name=fonts/[name].[ext]' },
      { test: /\.(png|jpe?g|gif)(\?\S*)?$/, loader: 'url?limit=10000&name=images/[name].[ext]' }
    ],
  },
  devtool: "source-map",
  plugins: [
      new ExtractTextPlugin("style/[name].css"),
      new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
      new HTMLWebpackPlugin({
        template: 'src/index.html'
      })
  ]
};