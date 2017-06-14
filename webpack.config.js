const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: "./src/js/main.js"
  },
  output: {
    path: "./public/dist",
    filename: "[name].js",
    publicPath: "./public"
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          presets: "es2015"
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
        loader: 'url?limit=10000&name=fonts/[name].[ext]'
      },
      {
        test: /\.(png|jpe?g|gif)(\?\S*)?$/,
        loader: 'url?limit=10000&name=images/[name].[ext]'
      }
    ],
  },
  devtool: "#cheap-source-map",
  plugins: [
      new ExtractTextPlugin("style/[name].css"),
      new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
      new HTMLWebpackPlugin({
        template: 'src/index.html'
      })
  ]
};