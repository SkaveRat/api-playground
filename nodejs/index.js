var Sipgate = require('./lib/sipgateClient');

var username = "dehaan+live+team+1@sipgate.de";
var password = "12345678";

var sipgate = new Sipgate(username, password);


sipgate.contacts();
