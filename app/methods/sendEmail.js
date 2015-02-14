module.exports = function(fancy) {
	var credentials = require('../secure/credentials');
	var sendgrid = require("sendgrid")(credentials.sendgrid.user, credentials.sendgrid.key);

	var params = {
		to: fancy.email,
		toname: fancy.first_name,
		from: "donotreply@secretfancy.com",
		fromname: "SecretFancy",
		subject: "Somebody sent you a message on SecretFancy",
		html: fancy.first_name+",\n<br>A secret admirer sent you a message on SecretFancy. <a href='http://secretfancy.com/fancy/"+fancy._id+"'>Click here to read the message</a>"
	}

	var email = new sendgrid.Email(params);

	sendgrid.send(email);
};