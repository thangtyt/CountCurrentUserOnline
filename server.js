/**
 * Created by thangtyt on 4/18/17.
 */
'use strict';

let app = require('express')(),
    server = require('http').Server(app),
    port = 4000,
    io = require('socket.io')(server);

server.listen(port, function () {
    console.log('Server socket.io is running on port ' + port);
});

io.on('connection', function (socket) {
    let curentCount = io.engine.clientsCount;
    socket.on('new_user', function () {
        socket.emit('update_user_count',curentCount);
    })
})