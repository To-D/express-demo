const express = require('express');
const config = require('../config.js');

const router = express.Router();

// catch 404 and forward to error handler
router.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    throw err;
});

// error handler
router.use(function(err, req, res, next) {
    res.status(err.status || 500);
    // development env : print stacktrace
    if (config.env.name = 'dev') {
        console.log(err.stack);
        res.render('error', { err });
    }
    // production env : no stakctraces leaked to user
    res.stack = "";
    res.render('error', { err });
});

module.exports = router;