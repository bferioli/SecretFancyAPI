module.exports = function(fancy) {
	var credentials = require('../secure/credentials');
	var sendgrid = require("sendgrid")(credentials.sendgrid.user, credentials.sendgrid.key);
	var email = new sendgrid.Email();

	email.addTo(fancy.email);
	email.addToName(fancy.first_name);
	email.setFrom("donotreply@secretfancy.com");
	email.setFromName("SecretFancy");
	email.setSubject("Somebody sent you a message on SecretFancy");
	email.setHtml(fancy.first_name+",\n<br>A secret admirer sent you a message on SecretFancy. <a href='http://secretfancy.com/fancy/"+fancy._id+"'>Click here to read the message</a>");

	sendgrid.send(email);
};