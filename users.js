Users = function() {
  this.users = require('./usersSampleData');
  this.fetchUserBatch = function(params, cb) {
    var offset = parseInt(params.offset);
    var limit = parseInt(params.limit);
    cb(null, this.users.slice(offset, offset + limit));
  };
};
exports.Users = Users;