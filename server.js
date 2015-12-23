var app = require('express')();

app.get('/', function(req, res) {
	console.log("REQUEST RECEIVED");
	res.send("WASSUP BOOBOO");
});

app.listen(2222);
console.log("Server is served at port 2222");