/**
 * Created by mrcode on 16-6-21.
 */
'use strict'

//利用webpack启动项目
let [express, webpack,webpackMiddleware,
    webpackHotMiddleware, config,router] = [
        require('express'),
        require('webpack'),
        require('webpack-dev-middleware'),
        require('webpack-hot-middleware'),
        require('./../webpack.config.js'),
        require('./routes.js'),
    ],
    app = express(),
    compiler = webpack(config);

app.use(express.static('../dist'));
app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
app.use('/', router);

app.listen(3000);