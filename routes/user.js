/*
 * user manager module
 */
const express = require('express');
const router = express.Router();

// /user/register
router.get('/register', function(req, res, next) {
    res.render('register');
});

router.post('/register', function(req, res, next) {
    res.redirect(303, '/home');
});

// /user/login
router.get('/login', function(req, res, next) {
    res.render('login');
});

router.post('/login', function(req, res, next) {
    res.redirect(303, '/home');
});

module.exports = router;