var SipgateClient;

var http = require('https');
var parseString = require('xml2js').parseString;


var username, password;

SipgateClient = function(aUsername, aPassword) {
	username = aUsername;
	password = aPassword;
	return {
		'contacts': _getContacts
	}
}

function _getContacts() {
	console.log("Request with" + username + '/' + password);
	http.request({
			'hostname': 'api.sipgate.net',
			'port': 443,
			'path': '/my/contacts/?version=2.37.0',
			'method' : 'GET',
			'headers': {
				'Accept': 'application/json',
				'X-Requested-With': 'XMLHttpRequest'
			},
			'auth': username + ':' + password
		}, function(res) {
			var json = "";

			res.setEncoding('utf8');
			res.on('data', function (chunk) {
				json += chunk;
			});

			res.on('end', function() {
				json =JSON.parse(json);
				console.log(json.Contacts.items[0]);
			});
		}
	).end();
}



module.exports = SipgateClient;