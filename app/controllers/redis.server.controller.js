
'use strict';

/**
 * This controller temporally holding the lists hard-coded.
 * next step is to integrate the server with redis and wire this controller.
 */

/**
 * Module dependencies.
 */
//var redis = require('redis'),


/**
 *
 * @param req
 * @param res
 * @returns {*}
 */

var categories = [
  'Men',
  'Women',
  'Surfboards',
  'Wetsuites',
  'Fins',
  'Accessories',
  'Leash'
];

var colors = [
  'Black',
  'White',
  'Brown',
  'Red',
  'Green',
  'Blue'
];

var sizes = [
  'S',
  'M',
  'L',
  'XL'
];

var mostViewedProducts = [
  {name: "Surfboard_1", views: 98},
  {name: "Surfboard_2", views: 96},
  {name: 'Surfboard1_3', views: 75},
  {name: "Surfboard_4", views: 48}
];


exports.categoriesList = function(req, res) {
  return res.send(categories);
};

//async problems may occur here
//maybe use callback pattern
exports.addCategory = function(req, res) {
  categories.push(req.value);
  return res.send(categories);
};

exports.colorsList = function(req, res) {
  return res.send(colors);
};

//async problems may occur here
//maybe use callback pattern
exports.addColor = function(req, res) {
  colors.push(req.value);
  return res.send(colors);
};

exports.sizesList = function(req, res) {
  return res.send(sizes);
};

//async problems may occur here
//maybe use callback pattern
exports.addSize = function(req, res) {
  sizes.push(req.value);
  return res.send(sizes);
};


exports.getMostViewedProducts = function(req, res) {
  return res.send(mostViewedProducts);
};

