
var mongoose = require('mongoose');
let bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost/nodeauth');

let db = mongoose.connection;

// User Schema
let UserSchema = mongoose.Schema({
    username: {
        type: String,
        index: true
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    name: {
        type: String
    },
    profileimage: {
        type: String
    }
});

let User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback) {
    bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("newUser.password", salt, function(err, hash) {
    newUser.password = hash;
    newUser.save(callback);
    });
});
}