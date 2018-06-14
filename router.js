const fs = require('fs');

let route = (handle, pathName, response, params) => {
    console.log('Routing a request for ' + pathName);
    if (typeof handle[pathName] === 'function') {
        handle[pathName](response, params);
    } else {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(response);
    }
}

module.exports.route = route;