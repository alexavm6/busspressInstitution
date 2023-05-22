//Autores: Vasquez Miguel, Alexandra Ivana & Barandiaran Japaja, Jhossepy Alexander & Marquez Mendez, Andrea Janet.

//importa un enrutador
const { Router } = require('express');
const router = Router();

//importa las funciones que hará el enrutador dependiendo de la ruta
const { 
    renderDashboard,
    renderRoutes,
    renderStatistics, 
    renderAssessment,
    renderSchedule,
    renderFirstSteps 
} = require('../controllers/dashboard.controller');

//importa la funcion que verificará si el usuario esta autentificado
const { isAuthenticated } = require('../helpers/auth');

//dependiendo de la ruta que ingrese renderizará una vista
router.get('/dashboard', isAuthenticated, renderDashboard);

router.get('/dashboard/routes', isAuthenticated, renderRoutes);

router.get('/dashboard/statistics', isAuthenticated, renderStatistics);

router.get('/dashboard/assessment', isAuthenticated, renderAssessment);



router.get('/dashboard/schedule', isAuthenticated, renderSchedule);

router.get('/dashboard/firstSteps', isAuthenticated, renderFirstSteps);


module.exports = router;