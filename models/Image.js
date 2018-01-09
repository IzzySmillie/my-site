var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Image Model
 * =============
 */

var Image = new keystone.List('Image', {
    map: { name: 'name' },
    autokey: { path: 'slug', from: 'name', unique: true },
    defaultSort: 'publishedDate'
});

Image.add({
  name: {
    type: String,
    initial: true,
    required: true
  },
  publishedDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  smallImage: {
    type: String,
    initial: true,
    required: true
  },
  bigImage: {
    type: String,
    initial: true,
    required: true
  },
  featuredImage: {
    type: Types.Boolean,
    initial: true
  },
  description: {
    type: Types.Textarea,
    initial: true
  },
  layout: {
    type: Types.Select,
    options: [{value: 'port', label: 'Portrait Image'}, {value: 'land', label: 'Landscape Image'}],
    initial: true,
    required: true
  },
});

Image.register();
