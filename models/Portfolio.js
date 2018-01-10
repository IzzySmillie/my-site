var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Portfolio Model
 * =============
 */

var Portfolio = new keystone.List('Portfolio', {
    map: { name: 'name' },
    autokey: { path: 'slug', from: 'name', unique: true },
    defaultSort: 'publishedDate'
});

Portfolio.add({
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
  heroImage: {
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
  tech: {
    type: Types.Text,
    intial: true
  },
  link: {
    type: Types.Url,
    initial: true
  },
  layout: {
    type: Types.Select,
    options: [{value: 'port', label: 'Portrait Image'}, {value: 'land', label: 'Landscape Image'}],
    initial: true,
    required: true
  },
});

Portfolio.register();
