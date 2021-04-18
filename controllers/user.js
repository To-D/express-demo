const User = require("../models/user");

const userController = {
    register: function(req, res, next) {
        let params = JSON.parse(JSON.stringify(req.body));
        // whether duplicate
        User.find({ username: params.username }, function(err, data) {
            if (err) {
                throw err;
            }
            // duplicate username
            if (data != null && data.length != 0) {
                return res.send("username duplicated");
            }

            // not duplicate, store new user into db
            new User(params).save();

            // set login status
            req.session.username = params.username;

            // redirect to home page
            res.redirect(303, '/home');
        });
    },

    login: function(req, res, next) {
        let params = JSON.parse(JSON.stringify(req.body));
        User.findOne({ username: params.username }, (err, data) => {
            if (err) {
                throw err;
            }

            if (data == null) {
                return res.send("无此用户信息");
            }

            if (data.password != params.password) {
                return res.send("密码有误");
            }

            // set login status
            req.session.username = params.username;

            // redirect to home page
            res.redirect(303, '/home');
        })
    },

    logout: function(req, res, next) {
        if (req.session.username) {
            delete req.session.username;
        }
        res.redirect(303, '/user/login');
    }
}
module.exports = userController;