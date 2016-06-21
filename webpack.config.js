var webpack = require('webpack');
var path = require('path');                 //引入node的path库

var config = {
    entry: [ 'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        './app/entry.js'],                //入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),  // 指定编译后的代码位置为 dist/bundle.js
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
            //{
            //    test: /\.js$/,
            //    exclude: /(node_modules|bower_components)/,
            //    loader: 'babel', // 'babel-loader' is also a legal name to reference
            //    query: {
            //        presets: ['es2015']
            //    }
            //}

        ]
    },
}

module.exports = config;