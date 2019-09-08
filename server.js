var app = require('express')();
var express = require('express')
var http = require('http').Server(app);
var io = require('socket.io')(http);
const path = require('path');

var port = process.env.PORT || 3000;

app.use('/',express.static(path.join(__dirname, '')));
// app.use('/src',express.static(path.join(__dirname, 'src')));
// app.use('/node_modules',express.static(path.join(__dirname, 'node_modules')));
// app.use('/node_modules',express.static(path.join(__dirname, 'node_modules')));



app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    socket.broadcast.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});