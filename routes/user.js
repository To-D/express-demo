/*
 * user manager module
 */
const express = require('express');
const router = express.Router();

// /user/register
router.use('/register',function(req, res, next) {
	res.send('register routes');
});

// /user/login
router.use('/login', function(req, res, next) {
	res.send('login routes');
});

module.exports = router;
