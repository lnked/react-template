'use strict';

const { resolve } = require('path');

const webpack = require('webpack');
const define  = require('../define');
const helpers = require('../helpers');
const scripts = require('../rules/scripts')

const HappyPack = require('happypack');
const SvgStore = require('webpack-svgstore-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const plugins = [
    new webpack.DefinePlugin({
        '__DEV__': define.rs_development,
        'process.env.BROWSER': true,
        'process.env.NODE_ENV': JSON.stringify(define.rs_environment)
    }),
    new webpack.WatchIgnorePlugin([
        /css\.d\.ts$/,
        /scss\.d\.ts$/
    ]),
    new WebpackNotifierPlugin(),
    new HappyPack({
        loaders: scripts.loaders,
        threads: 4,
        verbose: false
    }),
    new webpack.ContextReplacementPlugin(
        /moment[\/\\]locale$/,
        /(en-gb|en|ru)/
    ),
    new webpack.LoaderOptionsPlugin({
        debug: define.rs_development,
        minimize: define.rs_production,
        options: {}
    }),
    new HtmlWebpackPlugin(helpers.generateConfig('index', 'app', 'vendors')),
    new CopyWebpackPlugin([
        { from: 'assets/images', to: 'images', copyUnmodified: true, ignore: [ '.DS_Store' ] },
        {
            context: 'assets/misc',
            from: { glob: '**/*', dot: true },
            to: define.rs_dist,
            copyUnmodified: true,
            ignore: [ '.DS_Store' ]
        }
    ])
];

module.exports.config = plugins;
