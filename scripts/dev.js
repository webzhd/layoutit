'use strict'

const log = require('../config/utils/chalk-log')
const path = require('path')
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../config/webpack.base.config')
const otherConfig = require('../config/development.config')
const webpackPlugins = require('../config/plugin')
const webpackLoader = require('../config/loader')

const resolve = (dir) => path.join(__dirname, '../', dir)

const mode = "development"
process.env.NODE_ENV = mode
config.mode = mode

const devConfig = {
    plugins: [
        ...webpackPlugins(mode)
    ],
    module: {
        rules: [
            ...webpackLoader(mode)
        ]
    }
}

Object.assign(config, devConfig, otherConfig)

const compiler = webpack(config)

const devServer = new WebpackDevServer(compiler, {
    historyApiFallback: true,
    hot: true,
    open: true
})
devServer.listen('9000', '0.0.0.0')

