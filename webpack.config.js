'use strict';

var webpack = require('webpack'),
    jsPath = 'app/assets/javascripts',
    path = require('path'),
    srcPath = path.join(__dirname, 'app/assets/javascripts');

var PROD = (process.env.NODE_ENV === 'production');

var config = {
    target: 'web',
    entry: {
        app: path.join(srcPath, 'app.js')
        //, common: ['react-dom', 'react']
    },
    resolve: {
        alias: {},
        root: srcPath,
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules', jsPath]
    },
    output: {
        path: path.resolve(__dirname, jsPath, 'build'),
        publicPath: '',
        filename: '[name].js',
        pathInfo: true
    },

    module: {
        noParse: [],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, '\/app\/assets')]
    },
    plugins: [
        new webpack.NoErrorsPlugin()].concat(
        PROD ? [
            //new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
            new webpack.optimize.UglifyJsPlugin({
                compress: {warnings: false},
                output: {comments: false}
            })] : [])

};

module.exports = config;