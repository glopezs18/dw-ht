const express = require('express');
const path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('../webpack.config');

var app = express();
app.set('port', (process.env.PORT || 3000));
app.set('/static', express.static('dist'));
// app.use(
//     express.static(path.join(__dirname, "dist/"))
// );
app.use(webpackDevMiddleware(webpack(webpackConfig)));

app.get('/', function(req, res, next){
    res.send('ht4');
});

app.listen(app.get('port'), () => {
    console.log('Ht4 activo');
});