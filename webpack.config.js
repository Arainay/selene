const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const outputPath = path.resolve(__dirname, './dist');

module.exports = {
  entry: path.resolve(__dirname, './src/Content.js'),
  output: {
    path: outputPath,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /dist/],
        loader: 'babel-loader',
        options: { presets: ['react', 'stage-0', 'react-hmre'] }
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/, /dist/],
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg)$/,
        exclude: [/node_modules/, /dist/],
        include: '/src/assets/',
        use: 'url-loader?limit=10000&name=assets/[name]-[hash].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/assets/index.html'),
      filename: 'index.html',
      path: outputPath
    }),
    new ExtractTextPlugin("styles.css"),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: outputPath,
    port: 9090,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
};