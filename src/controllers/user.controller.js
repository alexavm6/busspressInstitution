const userCtrl = {};

userCtrl.renderLogin = (req, res) => {
    res.render('user/login');
};

userCtrl.login = (req, res) => {
    res.send('iniciando sesion');
};

userCtrl.logout = (req, res) => {
    res.send('cerrando sesion')
};

module.exports = userCtrl;