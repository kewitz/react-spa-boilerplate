const conf = require('./webpack.config')
const webpack = require('webpack')

const { UglifyJsPlugin } = webpack.optimize

module.exports = {
  ...conf,
  devtool: 'cheap-source-map',
  plugins: [
    ...conf.plugins,
    new UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
}
