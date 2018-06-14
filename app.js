const server = require('./server');
const route = require('./router');
const handler = require('./handler');

let handle = {};
handle['/home'] = handler.home;
handle['/'] = handler.home;
handle['/review'] = handler.review;
handle['/api/vi/records'] = handler.api_records;

server.startServer(route.route,handle);