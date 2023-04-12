const { Router } = require('express');
const router = Router();

const { 
    renderLogin,
    login, 
    logout
} = require('../controllers/user.controller');

router.get('/user/login', renderLogin);

router.post('/user/login', login);

router.get('/user/logout', logout);



module.exports = router;