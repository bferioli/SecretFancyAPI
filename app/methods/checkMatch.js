module.exports = function(req, res) {
	var credentials = require('../secure/credentials');
	var Fancy = require('../models/fancy');
	var sendgrid = require("sendgrid")(credentials.sendgrid.user, credentials.sendgrid.key);
	
	Fancy.findById(req.body.fancy_id, function(err, fancy) {
		if (!fancy) {
			res.status(400).send('Invalid Fancy ID');
			return;
		}

		if (fancy.match_name) {
			res.status(400).send('You can only check your match once!');
			return;
		}

		fancy.match_name = req.body.match_name;
		fancy.save();

		var match = ( fancy.match_name.toLowerCase().trim() === fancy.user.first_name.toLowerCase().trim() );
		var output = { match: match };

		if (match) {
			var params = {
				to: fancy.user.email,
				toname: fancy.user.first_name,
				from: "donotreply@secretfancy.com",
				fromname: "SecretFancy",
				subject: "Your fancy likes you back!",
				html: fancy.user.first_name+",\n<br>Love is in the air! "+fancy.first_name+" likes you back. Go on lovebirds, have fun!"
			}

			var email = new sendgrid.Email(params);

			sendgrid.send(email);
		}

		res.json(output);
	});
};