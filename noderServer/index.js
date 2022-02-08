// NODE_SERVER

const io = require("socket.io")(8000);
const users = {};


io.on('connection', socket => {
    socket.on('user-joined', username => {
        console.log(username, " joined");
        users[socket.id] = username;
        socket.broadcast.emit('user-joined', username);
    });

    socket.on('send', message => {
        socket.broadcast.emit('send', { message: message, username: users[socket.id] })
    });
})