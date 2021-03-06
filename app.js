
/**
 * Module dependencies.
 */

var express = require('express')
  , promoter = require('./routes/promoter')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  //cookies för vad?
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', promoter.home);
app.post('/', promoter.home_post_handler);
app.post('/embed', promoter.embed_post_handler);
app.post('/send', promoter.send_post_handler);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Up & Running on port: " + app.get('port'));
});
