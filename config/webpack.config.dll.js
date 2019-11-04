const webpack = require('webpack')
const path = require('path')


const resolve = (dir) => path.join(__dirname, '../', dir)

const vendors = [
    'axios',
    'react',
    'react-dom',
    'react-router-dom'
]

module.exports = {
    mode: 'production',
    entry: {
      vendor: vendors,
    },
    output: {
      path: resolve('vendor'),
      filename: '[name].js',
      library: '[name]',
    },
    plugins: [
      new webpack.DllPlugin({
        path:resolve('vendor/manifest.json'),
        name: '[name]',
        context: __dirname,
      })
    ]
  }
  