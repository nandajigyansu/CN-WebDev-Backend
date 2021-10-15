const http = require('http');
const port = 8000;

// by default this kind of function will take two parameters: request, response
function requestHandler(req, res) {
    console.log(req.url);

    res.end("Hello there..");
}


// create server
const server = http.createServer(requestHandler);


// server should listen on the port that we created
// first arguement passed in the function will always the error
server.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Server is up and running on port", port);
});
