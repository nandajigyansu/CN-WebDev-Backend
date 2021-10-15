// npm init
// npm install express -> installs all dependencies
// package-lock.json -> lists down all further list of dependencies
// node_modules -> contains all dependencies

const express = require('express');
const port = 8000;

const app = express();

app.get('/', function (req, res) {
    res.send('Great. Express server is running');
});

app.listen(port, function (err) {
    if (err) {
        console.log("Error:", err);
        return;
    }
    console.log('My express server is running on port', port);
});
