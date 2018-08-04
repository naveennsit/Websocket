var express = require('express');
var socket = require('socket.io');

var app = express();

var server = app.listen(4000, () => {
    console.log('server is running on 4000');
});

app.use(express.static('public'));

// socket

var io = socket(server);

io.on('connection', (socket) => {
    console.log('connection ', socket.id);
    socket.on('chat', function(data) {
        console.log(data)
        io.sockets.emit('chat', data);
    })
})

