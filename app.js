
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
require('connect-redis').extend(express)

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
  app.use(express.logger()); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', function(req, res, next){
  if(Math.random() > 0.5)
    next();
  res.render('index', { title: 'Express' })
});
app.get('/', function(req, res){
  res.send('awesome fallback')
});
app.get('/user/:id', function(req, res){
  res.send('user'+ req.params.id)
});

app.post('/', function(req, res){
  console.log(req.body.username)
  res.send(req.body);
});

app.put('/', function(req, res){
    console.log('putting stuff')
  res.send(req.body);
});


app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
