var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Image Model
 * =============
 */

var Image = new keystone.List('Image', {
    map: { name: 'name' },
    autokey: { path: 'slug', from: 'name', unique: true }
});

Image.add({
  name: { type: String, initial: true, required: true },
  publishedDate: { type: Date, default: Date.now },
  image: { type: String, initial: true, required: true },
  featuredImage: { type: Types.Boolean, initial: true},
  description: { type: Types.Textarea, initial: true },
});

Image.register();
