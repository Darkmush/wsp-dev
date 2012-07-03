var express = require('express');
//var mongo = require("mongojs");
var util = require("util");

//user/pass hard coded during testing.. nothing to see anyway.
//var dbAdr = "wsp-user:dbpassword@ds033257.mongolab.com:33257/wsp-db";
//var collections = ["users", "reports"];
//var db = mongo.connect(dbAdr, collections);

var app = express.createServer();
var port = process.env.PORT || 19270;

// Configuration
app.configure( function() {
});

util.puts("hej nodester!");

// Routes
app.get('/', function(req, res) {
    res.send('What do you know, det funkar ju.');
});

app.listen(port);