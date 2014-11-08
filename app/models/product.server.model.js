'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Product Schema
 */
var ProductSchema = new Schema({
	title: {
		type: String,
		default: '',
		required: 'Please fill product title',
		trim: true
	},
  shortDescription: {
    type: String,
    default: '',
    required: 'Please fill product short description',
    trim: true
  },
  fullDescription: {
    type: String,
    default: '',
    required: 'Please fill product full description',
    trim: true
  },
  colors: {
    type: Array,
    default: '',
    required: 'Please fill product colors',
    trim: true
  },
  sizes: {
    type: Array,
    default: '',
    required: 'Please fill product sizes',
    trim: true
  },
  price: {
    type: Number,
    default: '',
    required: 'Please fill product price (in $US)',
    trim: true
  },
  mainImage: {
    type: String,
    default: '',
    required: 'Please insert product main image',
    trim: true
  },
  images: {
    type: Array,
    default: '',
    required: 'Please insert product images',
    trim: true
  },
  categories: {
    type: Array,
    default: '',
    required: 'Please insert product categories',
    trim: true
  },
  views: {
    type: Number,
    default: '',
    trim: true
  },
  purchased: {
    type: Number,
    default: '',
    trim: true
  },
	created: {
		type: Date,
		default: Date.now
	},
  modified: {
    type: Date,
    default: Date.now
  },
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Product', ProductSchema);