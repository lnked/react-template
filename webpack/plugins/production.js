'use strict';

const webpack = require('webpack');
const define  = require('../define');

const WebpackChunkHash = require('webpack-chunk-hash');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack2-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin');

const plugins = [
    new WebpackManifestPlugin({
        basePath: define.rs_output_path,
        fileName: "webpack-manifest.json"
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'js/vendor.[hash:5].js',
        minChunks(module) {
            return module.context && module.context.indexOf('node_modules') >= 0;
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
        minChunks: Infinity
    }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
        filename: 'chunk-manifest.json',
        manifestVariable: 'webpackManifest',
        inlineManifest: true
    }),
    new ExtractTextPlugin({
        filename: define.rs_production ? 'css/[name].[hash:5].css' : '[name].css',
        allChunks: define.rs_production
    }),
    new ResourceHintWebpackPlugin(),
    new ScriptExtHtmlWebpackPlugin({
        sync: /vendor/,
        inline: 'manifest',
        defaultAttribute: 'async'
    })
];

module.exports.config = plugins;
