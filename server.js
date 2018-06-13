const fs = require('fs');
const http = require('http');

let startServer = (route) => {
    let onRequest = (request, response) => {
        console.log('Request received' + request.url);
        route(request.url);
    }
}

module.exports.startServer = startServer;