'use strict';

module.exports = function(app) {
	// Root routing
  var users = require('../../app/controllers/users');
	var core = require('../../app/controllers/core');

  app.route('/').get(core.index);

  app.route('/uploadImage')
    .post(users.requiresLogin, users.hasAuthorization('admin'), core.uploadImage);

};

