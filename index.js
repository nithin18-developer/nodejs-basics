// pure nodejs basics
// why require?
// require is used to import the packages of nodejs and also some of the files included in the project
const http = require('http');

// es5 version
// http.createServer(function(req, res, next) {})

// create server is used to to run the server. It is a function that has 2 params request and response, request is the incoming request from browser and response is what we sent back to browser
http.createServer((req, res) =>{})

// listen is used to listen for incoming events
http.listen(3000);

// EXPRESS
// its a framework used in nodejs to simplify the code from nodejs which is too complex to handle
const express = require('express');
const app = express();

app.use((req, res, next) => {})

app.listen(3000);
