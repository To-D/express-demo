const errorHandler = require('./error-handle');
const userRoute = require('./user');

// Routes to custom pages
// app is got from express-demo.js
module.exports = function(app) {
    // home
    app.get('/home', function(req, res) {
        if (req.session.username) {
            res.render('home', { msg: "Welcom," + req.session.username + "!" });
            // res.send("Welcome, " + req.session.username + " !");
            return;
        }
        res.redirect(303, '/user/login');
    });

    // user
    app.use('/user', userRoute);

    // error-handler, must be the last
    app.use(errorHandler);
}