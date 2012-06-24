var express = require('express');
var mongo = require("mongojs");

//user/pass hard coded during testing.. nothing to see anyway.
//var dbAdr = "wsp-user:dbpassword@ds033257.mongolab.com:33257/wsp-db";
//var collections = ["users", "reports"];
//var db = mongo.connect(dbAdr, collections);

var app = express.createServer();

// Configuration
app.configure( function() {
});

// Routes
app.get('/', function(req, res) {
    res.send('What do you know, det funkar ju.');
});

app.listen(process.env.PORT);