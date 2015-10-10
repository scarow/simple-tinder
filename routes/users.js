var express = require('express');
var router = express.Router();
var Users = require('../users.js').Users;
var users = new Users();
var cors = require('cors');

/* GET users listing. */
router.get('/', cors(), function(req, res) {
  var params = req.query;
  users.fetchUserBatch(params, function(error, users) {
    res.send(users);
  });
});

  // example for posting
  // router.post('/:id', function(req, res) {
  //   var _user = req.body;
  //   _user._id = req.params.id;
  //   users.updateUser(_user, function(error, user) {
  //     if (user == null) {
  //       res.send(error, 404);
  //     } else {
  //       res.send(user);
  //     }
  //   });
  // });

module.exports = router;
