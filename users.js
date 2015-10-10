Users = function() {
  this.users = require('./usersSampleData');
  this.fetchUserBatch = function(params, cb) {
    var offset = parseInt(params.offset);
    var limit = parseInt(params.limit);
    cb(null, this.users.slice(offset, offset + limit));
  };

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