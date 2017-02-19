var jsonServer = require('json-server');
var bodyParser = require("body-parser");
var Isemail = require('isemail');
var server = jsonServer.create();
var router = jsonServer.router('database.json');
var middlewares = jsonServer.defaults();


server.use(middlewares);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

// Add custom routes before JSON Server router
server.post('/invite', function (req, res) {
    var data = {};

    if (req.body.email !== 'invalid@user.com' && Isemail.validate(req.body.email) == true) {
        data = {
            message: "Registered"
        };
        res.send(JSON.stringify(data));
    } else {
        data = {
            message: "This email has been taken",
        };
        res.status(400).send(JSON.stringify(data));
    }

});


// Use default router
server.use(router);
server.listen(3000, function () {
    console.log('JSON Server is running')
});
