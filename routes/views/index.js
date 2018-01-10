var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res, next) {

  var view = new keystone.View(req, res);

  async.parallel({
      portfolio: function(callback) {
        var Portfolio = keystone.list('Portfolio').model.find().limit(3).exec(callback);
      },
      images: function(callback) {
        var Image = keystone.list('Image').model.find().limit(4).exec(callback);
      }
    },
    function(err, contentImages) {
      if (err) {
        res.status(500).send(err);
        return;
      }
      console.log(contentImages);
      view.render('index', {contentImages: contentImages});
  });

};