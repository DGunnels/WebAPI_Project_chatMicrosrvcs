
var authJwtController = require('./auth_jwt');
var User = require('./Users');
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var cors = require('cors');
var jwt = require('jsonwebtoken');


function getJSONObject(req, message, status) {
    var json = {
        status: status,
        message: message,
        headers : "No Headers",
        env: process.env.UNIQUE_KEY,
        body : "No Body"
    };

    if (req.body != null) {
        json.body = req.body;
    }
    if (req.headers != null) {
        json.headers = req.headers;
    }

    return json;
}

var server = express();
module.exports = server;
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));


server.use(passport.initialize());

var router = express.Router();

router.route('/')
    .get(function (req, res) { })
    .post(function (req, res) { })
    .put(function (req, res) { })
    .delete(function (req, res) { })
    .all(function (req, res) { });

router.route('/signin')
    .get(function (req, res) { })
    .post(function (req, res) { })
    .put(function (req, res) { })
    .delete(function (req, res) { })
    .all(function (req, res) { });

router.route('/signup')
    .get(function (req, res) { })
    .post(function (req, res) { })
    .put(function (req, res) { })
    .delete(function (req, res) { })
    .all(function (req, res) { });

router.route('/home:userId')
    .get(authJwtController.isAuthenticated, function (req, res)
    {
        var id = req.params.userId;
        User.findById(id, function(err, user) {
            if (err) res.send(err);

            var userJson = JSON.stringify(user);
            // return that user
            res.json(user);
        });
    })


    .post(function (req, res) { })
    .put(function (req, res) { })
    .delete(function (req, res) { })
    .all(function (req, res) { });

server.use('/', router);
server.listen(process.env.PORT || 8080);