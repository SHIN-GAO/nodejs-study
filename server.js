const fs = require('fs');
const http = require('http');
const url = require('url');
const querystring = require('querystring');
let startServer = (route, handle) => {
    let onRequest = (request, response) => {
        let pathName = url.parse(request.url).pathname;
        console.log('Request received' + pathName);
        let data = []
        request.on("error", (err) => {
            console.error(err);
        }).on("data", (chunk) => {
            data.push(chunk);
        }).on("end", () => {
            if (request.method === 'post') {
                if(data.length > 1e6) {
                    request.connection.destroy();
                }
                data = Buffer.concat(data).toString();
                route(handle, pathName, response, querystring.parse(data));
            } else {
                let params = url.parse(request.url, true).query
                route(handle, pathName, response, params);
            }
        })
    }
    let server = http.createServer(onRequest)
    server.listen(3000, '127.0.0.1');
    console.log('Server started on localhost port 3000');
}

module.exports.startServer = startServer;