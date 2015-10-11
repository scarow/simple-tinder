var express = require('express');
var router = express.Router();
var Users = require('../users.js').Users;
var users = new Users();
var cors = require('cors');

router.get('/', cors(), function(req, res) {
  var params = req.query;
  users.fetchUserBatch(params, function(error, users) {
    res.send(users);
  });
});

module.exports = router;
