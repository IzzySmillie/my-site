var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

  var Portfolio = keystone.list('Portfolio').model.find({});
  var Image = keystone.list('Image').model.find({});
  var entirePortfolio = {
    portfolio: Portfolio.exec.bind(Portfolio),
    image: Image.exec.bind(Image),
  };

  async.parallel(entirePortfolio, function(error, contentImages) {
    if (error) {
      res.status(500).send(error);
      return;
    }
    res.render('index', {contentImages: contentImages});
  })
};
