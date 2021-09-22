var http = require('http'); // 1 - Import Node.js core module

var server = http.createServer(function (req, res) {   // 2 - creating server

  res.writeHead(200);
  // res.end("Hello, World !");
  res.end(`<h1 style="font-size: 20px; color: blue"> ahihi hello ae</h1>`);

  //handle incomming requests here..

});

server.listen(5000); //3 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running...')