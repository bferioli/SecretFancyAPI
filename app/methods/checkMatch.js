module.exports = function(req, res) {
	var Fancy = require('../models/fancy');
	
	Fancy.findById(req.body.fancy_id, function(err, fancy) {
		if (!fancy) {
			res.status(400).send('Invalid Fancy ID');
			return;
		}

		var match = ( fancy.user.first_name.toLowerCase().trim() === req.body.match_name.toLowerCase().trim() ),
			output = { match: match };

		res.json(output);
	});
};