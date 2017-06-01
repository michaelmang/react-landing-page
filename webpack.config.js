const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
});
const config = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      }
    ]
 },
 plugins: [HtmlWebpackPluginConfig]
};

if("production") {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env' = {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  )
}
