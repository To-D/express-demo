const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();

// /user/register
router.get('/register', function(req, res, next) {
    res.render('register');
});

router.post('/register', userController.register);

// /user/login
router.get('/login', function(req, res, next) {
    req.session.login = "true";
    res.render('login');
});

router.post('/login', function(req, res, next) {
    req.session.login = "true";
    res.redirect(303, '/home');
});

module.exports = router;