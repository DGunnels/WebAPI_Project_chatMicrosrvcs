'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var authJwtController = require('./auth_jwt');
var User = require('./Users');
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var cors = require('cors');
var jwt = require('jsonwebtoken');


var app = express();
module.exports = app;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(passport.initialize());

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

router.route('/home')
    .get(authJwtController.isAuthenticated, function (req, res) })
    .post(function (req, res) { })
    .put(function (req, res) { })
    .delete(function (req, res) { })
    .all(function (req, res) { });

app.use('/', router);
app.listen(process.env.PORT || 8080);