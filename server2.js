const http = require('node:http');
const fs = require('fs');
const process = require('process');

const hostname = '127.0.0.1';
const port = 7000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    const requrl = req.url.split('/')[1];
  res.statusCode = 200;
  if (requrl.endsWith('.css')) {
    res.setHeader('Content-Type', 'text/css');
  } else {
    res.setHeader('Content-Type', 'text/html');
  }
  const data = fs.readFileSync(requrl);
  res.end(data);
  //res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

process.on('SIGINT', () => {
    console.log('exiting');
    process.exit();
})