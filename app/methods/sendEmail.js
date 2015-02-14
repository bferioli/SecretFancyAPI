module.exports = function(fancy) {
	var credentials = require('../secure/credentials');
	var sendgrid = require("sendgrid")(credentials.sendgrid.user, credentials.sendgrid.key);
	var getFancyEmailHtml = require("./getFancyEmailHtml");

	var params = {
		to: fancy.email,
		toname: fancy.first_name,
		from: "donotreply@secretfancy.com",
		fromname: "SecretFancy",
		subject: "Somebody sent you a message on SecretFancy",
		html: getFancyEmailHtml(fancy)
	}

	var email = new sendgrid.Email(params);

	sendgrid.send(email);
};