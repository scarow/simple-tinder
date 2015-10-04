var express = require('express');
var router = express.Router();
var Users = require('../users.js').Users;
var users = new Users();

/* GET users listing. */
router.get('/', function(req, res) {
  users.fetchAllUsers(function(error, users) {
    res.send(users);
  });
});

router.get('/:id', function(req, res) {
  users.fetchUserById(req.params.id, function(error, user) {
    if (user == null) {
      res.send(error, 404);
    } else {
      res.send(user);
    }
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
