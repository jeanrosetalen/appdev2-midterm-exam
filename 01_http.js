const http = require('http');


const server = http.createServer((req, res) => {

    if (req.url === '/') {
        const date = new Date()

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(date.toISOString());

    } else if(req.url === '/hello') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World!');

    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Content not found');
    }
});

const port = 3000;
const hostname = 'localhost'

server.listen(port, hostname, () => {
    console.log('Server running at http://'+hostname+':'+port+'/');
});



  