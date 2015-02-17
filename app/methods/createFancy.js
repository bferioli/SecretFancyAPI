module.exports = function(req, res) {
  var credentials = require('../secure/credentials');
  var Fancy = require('../models/fancy');
  var sendEmail = require('./sendEmail');
  var sendText = require('./sendText');

  Fancy.find({"user.id": req.body.user.id}, function(err, fancies) {
    if (err)
      res.send(err);

    if (fancies.length >= 3 && req.body.user.id !== credentials.master_user) {
      res.status(400).send("You cannot send more than 3 fancies per account.");
      return;
    }

    var fancy = new Fancy();

    fancy.delivery = req.body.delivery;
    fancy.first_name = req.body.first_name;
    fancy.phone = req.body.phone;
    fancy.email = req.body.email;
    fancy.message = req.body.message.replace(/\n/g, "<br />");
    fancy.user = req.body.user;

    fancy.save(function(err, saved) {
      if (err)
        res.send(err);

      if (saved.delivery === "text")
        sendText(saved);
      else if (saved.delivery === "email")
        sendEmail(saved);

      res.json(saved);
    });
  });
};