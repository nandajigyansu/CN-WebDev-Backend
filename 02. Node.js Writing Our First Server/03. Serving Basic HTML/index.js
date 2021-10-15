const http = require('http');
const port = 8000;

function requestHandler(req, res) {
    console.log(req.url);
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end('<h1>Hello World !!!</h1>');
}

const server = http.createServer(requestHandler);

server.listen(port, function (err) {
    if (err) {
        console.log('Error');
        return;
    }
    console.log('server is up and running on port', port);
});
