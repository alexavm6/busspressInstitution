const { Router } = require('express');
const router = Router();

const { 
    renderIndex, 
    renderAbout, 
    renderContact, 
    renderRates 
} = require('../controllers/index.controller');

router.get('/', renderIndex);

router.get('/about', renderAbout);

router.get('/contact', renderContact);

router.get('/rates', renderRates);



module.exports = router;