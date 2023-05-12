//Autor: Vasquez Miguel, Alexandra Ivana

//importa un enrutador
const { Router } = require('express');
const router = Router();

//importa las funciones que hará el enrutador dependiendo de la ruta
const { 
    renderNewuser,
    newuser
    
} = require('../controllers/admin.controller');

//importa la funcion que verificará si el usuario esta autentificado
const { isAuthenticated } = require('../helpers/auth');

//dependiendo de la ruta que ingrese renderizará una vista
router.get('/admin/newuser', isAuthenticated, renderNewuser);

router.post('/admin/newuser', isAuthenticated, newuser);



module.exports = router;
