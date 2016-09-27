'use strict';

var http = require('http');
var express = require('express');

module.exports = setup;

setup.consumes = ['grevil.router'];
setup.provides = [];

function setup(options, imports) {
  var router = imports['grevil.router'];

  let app = express();

  app.use(router);

  // @todo: uncomment when ready
  // if (app.get('env') === 'development') {
  //   app.use(errorHandler());
  // }

  var server = http.createServer(app);

  server.listen(process.env.PORT, function () {
    console.log('server listening', server.address().port);
    // logger.log({ type: 'info', msg: 'listening', port: server.address().port });
  });
}
