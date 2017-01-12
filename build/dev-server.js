'use strict'

const express = require('express')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const webpackConfig = require('./config/example')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
process.env.NODE_ENV = 'development'

app.use(webpackDevMiddleware(webpack(webpackMerge(webpackConfig, {
  devtool: 'source-map'
})), {
  stats: {
    chunks: false,
    colors: true
  }
}))

app.listen(8080, () => console.log('Development server listening at 8080...\n'))
