//Autor: Vasquez Miguel, Alexandra Ivana

const helpers = {};

//crea un metodo que verifica si el usuario está autenticado
helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()){
        return next();
    }
    req.flash('error_msg', 'No estas autorizado');
    res.redirect('/user/login');
}

module.exports = helpers;