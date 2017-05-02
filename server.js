var express = require("express"),
        app = express(),
        port = process.env.PORT || 300,
        mongoose = require('mongoose'),
        Task = require('./api/models/todoModel'),
        bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded( { extended : true } ));
app.use(bodyParser.json());

var routes = require('./api/routes/todoRoutes');
routes(app);

app.use(function(req,res){
    res.status(404).send({  url: req.orignalUrl + ' not found '  })
});

app.listen(port);

console.log("Todo application server running on Port :" + port);