'use strict';

module.exports = function(app) {
  var users = require('../../app/controllers/users');
  var redis = require('../../app/controllers/redis');


  // Redis Routes

  //Categories
  app.route('/redis/categories')
    .get(redis.categoriesList)
    .post(users.hasAuthorization('admin'), redis.addCategory);

  //Colors
  app.route('/redis/colors')
    .get(redis.colorsList)
    .post(users.hasAuthorization('admin'), redis.addColor);

  //Sizes
  app.route('/redis/sizes')
    .get(redis.sizesList)
    .post(users.hasAuthorization('admin'), redis.addSize);



  //Start with mostViewedProduct routes
  app.route('/redis/mostViewedProduct')
    .get(users.requiresLogin, users.hasAuthorization('admin'), redis.getMostViewedProducts);
//    .post(users.requiresLogin, users.hasAuthorization('admin'), redis.addToMostViewedProduct)
//    .put(users.requiresLogin, users.hasAuthorization('admin'), redis.updateMostViewedProduct)


};