const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: path.resolve(__dirname, 'app/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: './bundle.js',
  },
  module: {
    rules: [
      { test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader!less-loader',
          fallback: 'style-loader',
        }) },
      { test: /\.js[x]?$/, exclude: /node_modules/, use: 'babel-loader' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app'),
    ],
  },
  plugins: [
    new CopyWebpackPlugin(['*.html']),
    new ExtractTextPlugin('style.css'),
  ],
}
