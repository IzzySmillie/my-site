var keystone = require('keystone');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = 'Images';

  var Image = keystone.list('Image').model;

  Image.find()
    .sort('-publishedDate')
    .exec(function(err, contentImages) {
      view.render('grid_overview', {contentImages: contentImages});
    });
};
