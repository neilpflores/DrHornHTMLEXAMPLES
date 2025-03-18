const http = require('node:http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 7000;

const server = http.createServer((req, res) => {

    const requrl = req.url.split('/')[1];
    const html = fs.readFileSync(requrl);
    console.log(requrl);
    if (requrl.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
    } else {
        res.setHeader('Content-Type', 'text/html');
    }
  res.statusCode = 200;

  
  //res.end('Hello World\n');
  res.end(html);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
