module.exports = (function() {
	'use strict';

	var Fancy = require('../models/fancy');
	var router = require('express').Router();
	var credentials = require('../secure/credentials');
	var sendgrid = require("sendgrid")(credentials.sendgrid.user, credentials.sendgrid.key);

	var getFancy = function(req, res) {
		Fancy.findById(req.params.fancy_id, function(err, fancy) {
			if (err)
				res.send(err);
			res.json(fancy);
		});
	};

	var deleteFancy = function(req, res) {
		Fancy.remove({
			_id: req.params.fancy_id
		}, function(err, fancy) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted.' });
		});
	};

	var newFancy = function(req, res) {
		var fancy = new Fancy();

		fancy.first_name = req.body.first_name;
		fancy.email = req.body.email;
		fancy.message = req.body.message;

		fancy.save(function(err, saved) {
			if (err)
				res.send(err);

			sendEmail(saved);
			res.json(saved);
		});
	};

	var sendEmail = function(fancy) {
		var email = new sendgrid.Email();

		console.log(credentials.sendgrid.user, credentials.sendgrid.key);
		console.log(fancy._id);

		email.addTo(fancy.email);
		email.setFrom("donotreply@secretfancy.com");
		email.setSubject("Somebody sent you a message on SecretFancy");
		email.setHtml("Love is in the air! Somebody sent you an anonymous message on Secret Fancy. <a href='http://secretfancy.com/fancy/"+fancy._id+"'>Click here to read the message</a>");

		console.log(JSON.stringify(email));

		sendgrid.send(email);
	};

	router.route('/fancies')
		.post(newFancy);

	router.route('/fancies/:fancy_id')
		.get(getFancy)
		.delete(deleteFancy);

	return router;
})();