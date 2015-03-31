
var express = require('express');


var app = express();


app.get('/add/:x/:y', function(req,res) {
  var x=Number(req.params.x);
  var y=Number(req.params.y);
  var sum=x+y;
  res.sendStatus(sum);
});

app.get('/subtract/:x/:y', function(req,res) {
  var x=Number(req.params.x);
  var y=Number(req.params.y);
  var sum=x-y;
  res.sendStatus(sum);
});

app.get('/multiply/:x/:y', function(req,res) {
  var x=Number(req.params.x);
  var y=Number(req.params.y);
  var sum=x*y;
  res.sendStatus(sum);
});

app.get('/divide/:x/:y', function(req,res) {
  var x=Number(req.params.x);
  var y=Number(req.params.y);
  var sum=x/y;
  res.sendStatus(sum);
});

app.listen(3000);