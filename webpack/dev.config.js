'use strict';

const { resolve } = require('path');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const defaultConfig = require('./config');

const stats = require('./stats');
const define = require('./define');
const optimization = require('./optimization');

module.exports = webpackMerge(defaultConfig, {
    mode: define.rs_environment,

    devtool: 'cheap-module-eval-source-map',

    watch: define.rs_development,

    cache: define.rs_development,

    optimization: optimization,

    devServer: {
        // headers: { 'Access-Control-Allow-Origin': '*' },
        hot: true,
        open: true,
        // inline: true,
        overlay: {
            errors: true,
            warnings: true
        },
        compress: false,
        contentBase: define.rs_dist,
        // disableHostCheck: true,
        watchContentBase: true,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 100,
            poll: 300
        },
        stats: stats.config,
        port: define.rs_port,
        host: define.rs_host
    }
});
