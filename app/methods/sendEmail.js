module.exports = function(fancy) {
	var credentials = require('../secure/credentials');
	var sendgrid = require("sendgrid")(credentials.sendgrid.user, credentials.sendgrid.key);

	var params = {
		to: fancy.email,
		toname: fancy.first_name,
		from: "donotreply@secretfancy.com",
		fromname: "SecretFancy",
		subject: "Somebody sent you a message on SecretFancy",
	}

	params.html =  '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'
	params.html += '<html xmlns="http://www.w3.org/1999/xhtml">'
	params.html += ' <head>'
	params.html += '  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'
	params.html += '  <title>Demystifying Email Design</title>'
	params.html += '  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>'
	params.html += '</head>'
	params.html += '<body style="margin: 0; padding: 0;">'
	params.html += '<table align="center" border="0" cellpadding="0" cellspacing="0" width="600">'
	params.html += ' <tr>'
	params.html += '  <td style="padding: 40px 0 20px 0; text-align: center;">'
	params.html += '   <img src="http://secretfancy.com/images/logo.jpg" alt="Creating Email Magic" width="494" height="95" />'
	params.html += '  </td>'
	params.html += ' </tr>'
	params.html += ' <tr>'
	params.html += '  <td style="font-family: Helvetica, Arial, sans-serif; font-size: 16px; padding: 20px;">'
	params.html += ' 	<p style="margin-bottom: 20px; ">'+fancy.first_name+',</p>'
	params.html += ' 	<p style="margin-bottom: 50px; ">A secret admirer sent you a message on SecretFancy.</p>'
	params.html += '	<a href="http://secretfancy.com/fancy/'+fancy._id+'" style="border-radius: 5px; background: #2591DA; color: #ffffff; padding: 7px 12px 7px 12px; text-decoration: none;"><font color="#ffffff">Read your message now</font></a>'
	params.html += '  </td>'
	params.html += ' </tr>'
	params.html += ' <tr>'
	params.html += '  <td style="color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 12px; padding: 100px 20px 20px 20px; text-align: center;">'
	params.html += '   &copy; Copyright 2015 SecretFancy - All Rights Reserved'
	params.html += '  </td>'
	params.html += ' </tr>'
	params.html += '</table>'
	params.html += '</body>'
	params.html += '</html>'

	var email = new sendgrid.Email(params);

	sendgrid.send(email);
};