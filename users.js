Users = function() {
  this.users = require('./usersSampleData');
  this.fetchAllUsers = function(cb) {
    cb(null, this.users);
  };
  this.fetchUserById = function(id, cb) {
    var foundUsers = this.users.filter(function(user) {return user.id == id});
    if (foundUsers.length == 0) {
      cb('User not found', null);
    } else {
      cb(null, foundUsers[0]);
    }
  };

  // possible ideas:
  // fetchUserByInterestedIn
  // fetchUserByLocation

  // example for posting
  // this.updateUser = function(user, cb) {
  //   this.fetchUserById(user._id, function(error, _user) {
  //     if (error) {
  //       cb(error, null);
  //     } else {
  //       _user.name = user.name;
  //       _user.city = user.city;
  //       _user.state = user.state;
  //       cb(null, _user);
  //     }
  //   });
  // };
};
exports.Users = Users;