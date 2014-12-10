'use strict';

/**
 * Module dependencies.
 */
var fs = require('fs'),
    busboy = require('connect-busboy');

exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null
	});
};

exports.uploadImage = function(req, res) {
  var fstream;
  req.pipe(req.busboy);
  req.busboy.on('file', function (fieldname, file, filename) {
    console.log("Uploading: " + filename);
    fstream = fs.createWriteStream(__dirname + '/temp_files/' + filename);
    file.pipe(fstream);
    fstream.on('close', function () {
      res.redirect('back');
    });
  });
};
