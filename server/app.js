/**
 * Created by mrcode on 16-6-21.
 */
'use strict'

//利用webpack启动项目
let [path, express, webpack, webpackMiddleware, webpackHotMiddleware, config] = [
    require('path'),
    require('express'),
    require('webpack'),
    require('webpack-dev-middleware'),
    require('webpack-hot-middleware'),
    require('./../webpack.config.js')
],
    app = express(),
    compiler = webpack(config);

app.use(express.static('../dist'));
app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(3000);