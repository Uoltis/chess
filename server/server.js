var app = require('express')();
var express = require('express')
var http = require('http').Server(app);
var io = require('socket.io')(http);
const path = require('path');

var port = process.env.PORT || 3000;

app.use('/',express.static(path.join(__dirname, '')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', "server side:" + msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});