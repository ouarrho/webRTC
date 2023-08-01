const fs = require('fs')

const http = require('http').createServer((req, res) => {
  // Set CORS headers to allow requests from any origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  fs.readFile('index.html', (err, data) => {
    if (err) {
      // Handle error if the file can't be read
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal Server Error');
    } else {
      // Set the Content-Type header to 'text/html' for HTML responses
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      // Send the HTML content as the response
      res.end(data);
    }
  });
});

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    socket.on('message', (message, username) =>     {
        io.emit('message', username, message);   
    });
});

http.listen(8080, () => console.log('listening on port 8080') );


// Regular Websockets

// const WebSocket = require('ws')
// const server = new WebSocket.Server({ port: '8080' })

// server.on('connection', socket => { 

//   socket.on('message', message => {

//     socket.send(`Roger that! ${message}`);

//   });

// });


 
