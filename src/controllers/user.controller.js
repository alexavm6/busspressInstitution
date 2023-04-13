const userCtrl = {};

const passport = require('passport');

userCtrl.renderLogin = (req, res) => {
    res.render('user/login');
};

userCtrl.login = passport.authenticate('local', {
    failureRedirect: '/user/login',
    successRedirect: '/dashboard',
    failureFlash: true
});

userCtrl.logout = (req, res) => {
    res.send('cerrando sesion')
};

module.exports = userCtrl;