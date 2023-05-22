//Autores: Vasquez Miguel, Alexandra Ivana & Barandiaran Japaja, Jhossepy Alexander & Marquez Mendez, Andrea Janet.

//crea un objeto donde iran los metodos
const userCtrl = {};

//importa modulo passport
const passport = require('passport');

//por cada direccion renderiza una vista diferente
userCtrl.renderLogin = (req, res) => {
    res.render('user/login');
};

//si el ingreso de sesion es exitoso o falla te redirige a una vista diferente
userCtrl.login = passport.authenticate('local', {
    failureRedirect: '/user/login',
    successRedirect: '/dashboard',
    failureFlash: true
});

userCtrl.logout = (req, res, next) => {
    req.logout(function(err) {
        if (err) {
            return next(err);
        }
        req.flash('success_msg', 'Sesión cerrada exitosamente');
        res.redirect('/user/login');
    });
    /*
    req.flash('success_msg', 'Sesión cerrada exitosamente');
    res.redirect('/user/login');
    */
};

module.exports = userCtrl;