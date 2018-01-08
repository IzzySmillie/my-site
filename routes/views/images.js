var keystone = require('keystone');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'Images';

  var Image = keystone.list('Image').model;

  Image.find({}, function(err, contentImages) {
    view.render('grid_overview', {contentImages: contentImages});
  });

  // Render the view
  // view.render('grid_overview');
};
