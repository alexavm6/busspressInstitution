//Autores: Vasquez Miguel, Alexandra Ivana & Barandiaran Japaja, Jhossepy Alexander & Marquez Mendez, Andrea Janet.

const helpers = {};

//crea un metodo que verifica si el usuario está autenticado
helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()){
        return next();
    }
    req.flash('error_msg', 'No estas autorizado');
    res.redirect('/institution/login');
}

module.exports = helpers;