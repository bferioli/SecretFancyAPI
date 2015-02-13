module.exports = function(req, res) {
	var Fancy = require('../models/fancy');

	Fancy.remove({
		_id: req.params.fancy_id
	}, function(err, fancy) {
		if (!fancy) {
			res.status(400).send("Invalid Fancy ID");
			return;
		}

		res.json({ deleted: true });
	});
};