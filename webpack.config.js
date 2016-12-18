// In webpack.config.js
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
//     'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
// 'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
'./index.js'

  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/,exclude: /node_modules/, loaders: ["babel-loader"]}
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
