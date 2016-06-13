var express = require("express");
var winston = require("winston");
var md5 = require("md5");
var bodyParser = require("body-parser");
var objectAssign = require("object-assign");
var Immutable = require("immutable");

var app = express();

var logger = new winston.Logger();

var db = new Immutable.List([{
    id: '0a76f075154f9d560aef31df283f84ab',
    name: 'Item#1',
    value: 998.3
}, {
    id: '614b5c0d89246bd50aacc4a36fca0a37',
    name: 'Item#2',
    value: 7626.3
}, {
    id: '9f7b879262fdc579960bee57ec6d92c5',
    name: 'Item#3',
    value: 9082.2
}, {
    id: '8d76e139dd34ab1e796f702d1a39c734',
    name: 'Item#4',
    value: 1298.00
}, {
    id: '0cbab2bc3f0daaca34db4250d9c7144e',
    name: 'Item#5',
    value: 7827.93
}]);

var SERVER_LATENCY = 20

app.use(bodyParser.json());

// Allow CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");

    next();
});

// Get all items
app.get("/item", function(req, res) {
    console.log(`[GET] /item`);

    items = db.sortBy(function(item) {
        return item.name
    });

    setTimeout(function() {
        res.end(JSON.stringify(items));
    }, SERVER_LATENCY);
});

// Get one item
app.get("/item/:id", function(req, res) {
    console.log(`[GET] /item/:id`);

    var id = req.params.id;

    var item = db.filter(function(item) { return (item.id === id) }).get(0);

    setTimeout(function() {
        res.end(JSON.stringify(item));
    }, SERVER_LATENCY);
});

// Create an item
app.post("/item", function(req, res) {
    console.log(`[POST] /item`);

    var item = {
        "id": md5(JSON.stringify(req.body) + new Date().getMilliseconds()),
        "name": req.body.name,
        "value": req.body.value
    };

    db = db.push(item);

    setTimeout(function() {
        res.end(JSON.stringify(item));
    }, SERVER_LATENCY);
});

// Update an item
app.put("/item/:id", function(req, res) {
    console.log(`[PUT] /item/${req.params.id}`);

    var id = req.params.id;
    var newItem = null;

    var pos = db.findIndex(function(item) {
        return (item.id === id);
    });

    newItem = {
        "id": req.params.id,
        "name": req.body.name,
        "value": req.body.value
    };

    db = db.update(db.findIndex(function(item) {
        return item.id === id;
    }), function(item) {
        return objectAssign(item, newItem);
    });
    
    setTimeout(function() {
        res.end(JSON.stringify(newItem));
    }, SERVER_LATENCY);
});

// Delete one item
app.delete("/item/:id", function(req, res) {
    console.log(`[DELETE] /item/${req.params.id}`);

    var output = []
    var id = req.params.id;
    var element = null;

    db = db.delete(
        db.findIndex(function(item) {
            if (item.id === id) {
                element = item;
                return true;
            } else {
                return false;
            }
        })
    );

    setTimeout(function() {
        res.end(JSON.stringify(element));
    }, SERVER_LATENCY);
});

var PORT = process.env.PORT || 3131;

app.listen(PORT, function() {
    console.log("API listening on port", PORT);
});
