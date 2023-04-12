const userCtrl = {};

userCtrl.renderLogin = (req, res) => {
    res.render('user/login');
};

userCtrl.renderSignout = (req, res) => {
    res.send('cerrando sesion')
};

module.exports = userCtrl;