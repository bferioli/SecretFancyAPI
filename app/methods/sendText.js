module.exports = function(fancy) {
	console.log('text');
	return;
	
	var credentials = require('../secure/credentials');
	var twilio = require('twilio')(credentials.twilio.sid, credentials.twilio.token);

	twilio.messages.create({
		body: fancy.first_name+", A secret admirer sent you an message on SecretFancy. http://secretfancy.com/fancy/"+fancy._id,
		to: fancy.phone,
		from: credentials.twilio.from
	}, function(err, message) {
		console.log(message);
	});
};