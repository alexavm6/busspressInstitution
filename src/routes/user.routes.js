const { Router } = require('express');
const router = Router();

const { 
    renderLogin, 
    renderSignout
} = require('../controllers/user.controller');

router.get('/user/login', renderLogin);

router.get('/user/signout', renderSignout);



module.exports = router;