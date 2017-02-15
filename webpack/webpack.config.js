'use strict';

const path = require('path');
const webpack = require('webpack');

const rules = require('./rules');
const define = require('./define');
const plugins = require('./plugins');

module.exports = {
    
    context: define.rs_root,

    devtool: define.rs_production ? 'cheap-module-source-map' : 'eval-source-map',

    entry: {
        app: path.resolve(define.rs_root, 'app.jsx')
    },

    target: 'web', // electron-main | electron-renderer

    output: {
        publicPath: '/',
        path: define.rs_dist,
        filename: '[name].[hash].js',
        crossOriginLoading: "use-credentials"
    },

    resolve: {
        modules: [
            define.rs_root,
            'node_modules',
            'components',
            'reducers',
            'layouts',
            'pages',
            'utils'
        ],
        mainFiles: ['index', 'app'],
        unsafeCache: true,
        enforceExtension: false,
        enforceModuleExtension: false,
        extensions: ['.jsx', '.js'],
        descriptionFiles: ['package.json', 'bower.json'],
        alias: {
            utils: path.resolve(__dirname, '../app/utils/'),
            pages: path.resolve(__dirname, '../app/pages/'),
            layouts: path.resolve(__dirname, '../app/layouts/'),
            reducers: path.resolve(__dirname, '../app/reducers/'),
            components: path.resolve(__dirname, '../app/components/')
        }
    },

    resolveLoader: {
        modules: ['node_modules']
    },

    module: {
        noParse: /jquery|lodash/,
        rules: rules.config
    },

    performance: {
        maxAssetSize: 100000,
        maxEntrypointSize: 300000,
        hints: false
    },

    devServer: {
        contentBase: define.rs_dist,
        watchContentBase: define.rs_development,
        historyApiFallback: { disableDotRule: true },
        stats: {
            modules: false,
            cached: false,
            colors: true,
            chunk: false
        },
        compress: true,
        host: '0.0.0.0',
        port: 7777,
        public: '0.0.0.0:7777'
    },

    watch: define.rs_development,

    watchOptions: {
        aggregateTimeout: 100
    },

    plugins: plugins.config,

    stats: {
        colors: true,
        timings: true,
        reasons: define.rs_development,
        hash: define.rs_production,
        version: define.rs_production,
        chunks: define.rs_production,
        chunkModules: define.rs_production,
        cached: define.rs_production,
        cachedAssets: define.rs_production
    }
};
