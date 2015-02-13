module.exports = (function() {
	var router = require('express').Router();

	var checkMatch = require('../methods/checkMatch');
	var createFancy = require('../methods/createFancy');
	var deleteFancy = require('../methods/deleteFancy');
	var getFancy = require('../methods/getFancy');

	router.route('/fancies')
		.post(createFancy);

	router.route('/fancies/:fancy_id')
		.get(getFancy)
		.delete(deleteFancy);

	router.route('/match')
		.post(checkMatch);

	return router;
})();