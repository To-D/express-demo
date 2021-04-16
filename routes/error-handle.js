const express = require('express');
const config = require('../config.js');

const router = express.Router();

// catch 404 and forward to error handler
router.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    res.render('error', {
        title: 'Sorry!',
        err
    });
});

// development error handler
// print stacktrace
if (config.env.name = 'dev') {
    router.use(function(err, req, res, next) {
        console.log(err.stack);
        res.status(err.status || 500);
        res.type('text/plain');
        // res.send(`${err.status} - ${err.message}
        // 	${err.stack}`);
        res.render('error', { message: err.stack });
    });
}

// production error handler
// no stakctraces leaked to user
router.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.type('text/plain');
    // res.send(`${err.status} - ${err.message}`);
    res.render('error', { message: err.stack });
});

module.exports = router;