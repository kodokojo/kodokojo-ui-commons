'use strict'

// imports
var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var validate = require('webpack-validator')

// webpack config
var configCommon = require('../webpack.config.common')
var configDev = require('../webpack.config.dev')

var configStyleguide = {
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}

module.exports = validate(
  merge.smart(
    configCommon,
    configDev,
    configStyleguide
  )
)


