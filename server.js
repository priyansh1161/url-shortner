var express = require('express'),
mongoose = require('mongoose'),
urlBase = require('./model/db.model'),
apiController = require('./controller/apiController'),
htmlController = require('./controller/htmlController');
var app = express();
mongoose.connect('mongodb://test:test@ds023442.mlab.com:23442/testingbasicnodemongodb');
app.set('view engine', 'pug');
app.use('/public',express.static(__dirname + '/public'));
app.use(function(req,res,next){
  if(req.url == '/favicon.ico'){
    res.send();
  }
  else{
    next();
  }
});
apiController(app , __dirname , urlBase);
htmlController(app , __dirname , urlBase);
var port = process.env.PORT || 80;
app.listen(port);
