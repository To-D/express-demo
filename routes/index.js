// import routes
const userRoutes = require('./user.js');
const errorHandler = require('./error-handle.js');

// using routes
// app is got from express-demo.js
module.exports = function(app) {
    app.use('/home', function(req, res, next) {
        res.send("home");
    });

    app.use('/user', userRoutes);

    // error-handler, must be the last
    app.use(errorHandler);
}