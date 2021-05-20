var express= require('express');
var app = express();

app.get('/', function(req,res){
  absulotePath= __dirname + '/views/index.html';
  res.sendFile(absulotePath);
})

app.use('/', express.static(__dirname + '/public');
app.get('json', function(req,res){
  let jfile = {"message": "Hello Json"};
  res.send(jfile);
})











module.exports = app;
