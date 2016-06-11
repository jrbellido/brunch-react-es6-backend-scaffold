'use strict';

require('babel-register')({});

var config = require("./config")(process.argv);
var server = require("./server").default; // TODO: ES6 conversion results in a default attribute

server(config).listen(config.server.port, config.server.host, function() {
  console.log('Server listening on %s:%s', config.server.host, config.server.port);
});
