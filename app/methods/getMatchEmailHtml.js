module.exports = function(fancy) {
	var html =  '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
		html += '<html xmlns="http://www.w3.org/1999/xhtml">';
		html += ' <head>';
		html += '  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
		html += '  <title>Demystifying Email Design</title>';
		html += '  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>';
		html += '</head>';
		html += '<body style="margin: 0; padding: 0;">';
		html += '<table align="center" border="0" cellpadding="0" cellspacing="0" width="600">';
		html += ' <tr>';
		html += '  <td style="padding: 40px 0 20px 0; text-align: center;">';
		html += '   <img src="http://secretfancy.com/images/logo.jpg" alt="SecretFancy" width="494" height="95" />';
		html += '  </td>';
		html += ' </tr>';
		html += ' <tr>';
		html += '  <td style="font-family: Helvetica, Arial, sans-serif; font-size: 16px; padding: 20px;">';
		html += ' 	<p style="margin-bottom: 20px; ">';+fancy.user.first_name+',</p>';
		html += ' 	<p style="margin-bottom: 50px; ">Love is in the air! '+fancy.first_name+' fancies you back. Go on lovebirds, have fun!</p>';
		html += '  </td>';
		html += ' </tr>';
		html += ' <tr>';
		html += '  <td style="color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 12px; padding: 100px 20px 20px 20px; text-align: center;">';
		html += '   &copy; Copyright 2015 SecretFancy - All Rights Reserved';
		html += '  </td>';
		html += ' </tr>';
		html += '</table>';
		html += '</body>';
		html += '</html>';

	return html;
};