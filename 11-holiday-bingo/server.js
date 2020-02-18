const join = require('path').join;
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/socket.io/socket.io.js', (req, res) => {
  res.sendFile(join(__dirname, 'node_modules', 'socket.io-client', 'dist', 'socket.io.slim.js'));
});

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', socket => {
  console.log('socket connect');
  socket.on('hello', name => { console.log('hello,', name); });
  socket.on('disconnect', () => { console.log('socket disconnect'); })
});

server.listen(3000);