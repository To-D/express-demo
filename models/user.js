const mongoose = require('./mongo-conn');
const { defaultUser } = require('../config');

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model('User', userSchema);
// store a default user
User.find((err, data) => {
    if (err) {
        throw err;
    }
    if (data.length == 0) {
        new User(defaultUser).save();
    }
});

module.exports = User;