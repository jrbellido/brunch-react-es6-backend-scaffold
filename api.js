var express = require("express");
var winston = require("winston");
var md5 = require("md5");

var app = express();

var logger = new winston.Logger();

var db = [
	{ id: 1, name: "item#1", value: 5.1 },
	{ id: 2, name: "item#2", value: 3.0 },
	{ id: 3, name: "item#3", value: 3.3 },
	{ id: 4, name: "item#4", value: 1.0 },
	{ id: 5, name: "item#5", value: 0.3 },
	{ id: 6, name: "item#6", value: 8.0 }
];

// Allow CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
})

app.get('/item', function(req, res) {
	setTimeout(function() {
		res.end(JSON.stringify(db));
	}, 200);
});

app.post('/item', function(req, res) {
	setTimeout(function() {
		db.push({
			id: md5(JSON.stringify(req.params) + new Date().getMilliseconds()), 
			name: "Hello", 
			value: 0.5 
		})

		res.end(JSON.stringify(db));
	}, 200);
});

var PORT = process.env.PORT || 3131;

app.listen(PORT, function() {
  console.log('API listening on port ', PORT);
});
