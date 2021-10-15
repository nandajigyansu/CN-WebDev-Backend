const http = require('http');
const port = 8000;

// "fs" module used to read and write files
const fs = require('fs');



function requestHandler(req, res) {
    console.log(req.url);
    res.writeHead(200, { 'content-type': 'text/html' });

    // readFile(1st arg: path, 2nd arge: callback function(error, data_being_read))
    fs.readFile('./index.html', function (err, data) {
        if (err) {
            console.log('Error: ', err);
            return res.end('<h1>Error!</h1>');
        }
        return res.end(data);
    });
}

const server = http.createServer(requestHandler);

server.listen(port, function (err) {
    if (err) {
        console.log('Error');
        return;
    }
    console.log('server is up and running on port', port);
});
