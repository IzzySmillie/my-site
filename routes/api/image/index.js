var keystone = require('keystone');
var Image = keystone.list('Image').model;
var handlers = {
  getImages: function(req, res) {
    Image.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  }
}
module.exports = handlers;