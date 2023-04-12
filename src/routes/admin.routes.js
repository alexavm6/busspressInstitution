const { Router } = require('express');
const router = Router();

const { 
    renderNewuser,
    newuser
    
} = require('../controllers/admin.controller');

router.get('/admin/newuser', renderNewuser);

router.post('/admin/newuser', newuser);



module.exports = router;