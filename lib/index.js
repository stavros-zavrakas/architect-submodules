'use strict';

var path = require('path');
var http = require('http');
var express = require('express');

module.exports = setup;

setup.consumes = [
  'grevil.router',
  'grevil.template'
];

setup.provides = [];

function setup(options, imports) {
  var router = imports['grevil.router'];
  var template = imports['grevil.template'];

  let app = express();

  // Initialize the templates
  app.engine(template.engine, template.exphbs);

  app.set('views', path.resolve(template.viewsPath));
  app.set('view engine', template.engine);

  app.use('/public', express['static'](template.publicPath));

  // Initialize the router
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
