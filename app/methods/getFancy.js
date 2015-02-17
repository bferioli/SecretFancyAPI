module.exports = function(req, res) {
  var Fancy = require('../models/fancy');

  Fancy.findById(req.params.fancy_id, function(err, fancy) {
    if (!fancy) {
      res.status(400).send('Invalid Fancy ID');
      return;
    }

    var output = {
      _id: fancy._id,
      first_name: fancy.first_name,
      message: fancy.message
    };

    res.json(output);
  });
};