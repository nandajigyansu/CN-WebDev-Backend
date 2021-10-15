const http = require('http');

const port = 8000;

// create server
const server = http.createServer();


// server should listen on the port that we created
// first arguement passed in the function will always the error
server.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Server is up and running on port", port);
});
