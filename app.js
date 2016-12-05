/**
 * Created by caoyi on 2016/11/10.
 */
var express = require('express');
var app = express();

// set up handlebars view engine
var handlebars = require('express3-handlebars')
    .create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3333);

//静态资源路径挂在
app.use(express.static(__dirname + '/public'));

//set 'showTests' context property if the querystring contains test=1
app.use(function (req, res, next) {
    "use strict";
    res.locals.showTests = req.query.test === '1';
    next();//Notice: don't forget
});

//set route
app.get('/', function (req, res) {
    /* res.send('Hello World!');*/
    res.render('home');
});
app.get('/about', function(req,res){
    res.render('about', {
        pageTestScript: '/qa/tests-about.js'
    } );
});
// 404 catch-all handler (middleware)
app.use(function (req, res, next) {
    res.status(404);
    res.render('404');
});

// 500 error handler (middleware)
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

var server = app.listen(app.get('port'), function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
