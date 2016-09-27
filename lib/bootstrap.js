'use strict';

var http = require('http');

module.exports = setup;

setup.consumes = ['routes'];
setup.provides = [];

function setup(options, imports) {
  var routes = imports.routes;
  
  var routes = api();

  var server = http.createServer();

  function onListen() {
    console.log('server listening', server.address().port);
    // logger.log({ type: 'info', msg: 'listening', port: server.address().port });
  }

  server.listen(process.env.PORT, onListen);
}
