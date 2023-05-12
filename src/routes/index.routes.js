//Autor: Vasquez Miguel, Alexandra Ivana

//importa un enrutador
const { Router } = require('express');
const router = Router();

//importa las funciones que hará el enrutador dependiendo de la ruta
const { 
    renderIndex, 
    renderAbout, 
    renderContact, 
    renderRates,
    renderSteps 
} = require('../controllers/index.controller');

//dependiendo de la ruta que ingrese renderizará una vista
router.get('/', renderIndex);

router.get('/about', renderAbout);

router.get('/contact', renderContact);

router.get('/rates', renderRates);

router.get('/steps', renderSteps);



module.exports = router;