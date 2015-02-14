module.exports = function(fancy) {
	var credentials = require('../secure/credentials');
	var client = require('twilio')(credentials.twilio.sid, credentials.twilio.token);

	client.messages.create({
		body: "Hey "+fancy.first_name+", a secret admirer sent you an message on SecretFancy. http://secretfancy.com/fancy/"+fancy._id,
		to: fancy.phone,
		from: credentials.twilio.from
	}, function(err, message) {
		console.log(message);
	});
};