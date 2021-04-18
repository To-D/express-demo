const router = require('express').Router();
const userController = require('../controllers/user');

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
router.post('/login', userController.login)

module.exports = router;