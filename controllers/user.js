const user = require("../models/user");

function register(req, res, next) {
    req.session.username = req.body.username;
    let username = req.body.username;
    user.findOne({ username }, function(err, result) {
        if (err) {
            console.log(err);
            throw err;
        }
        if (result) {
            res.send("username duplicated");
        }
        res.redirect(303, '/home');
    });
}

module.exports = { register };