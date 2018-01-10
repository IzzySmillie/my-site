var keystone = require('keystone');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = 'Code';

  var Portfolio = keystone.list('Portfolio').model;

  Portfolio.find()
    .sort('-publishedDate')
    .exec(function(err, contentImages) {
      view.render('grid_overview', {contentImages: contentImages});
    });
};
