const https = require('http');

const port = 3001;

https.createServer((req, res) => {
  res.writeHead(200);
  res.end("Hi Sembo! This is the server application running :)\n");
}).listen(port);
