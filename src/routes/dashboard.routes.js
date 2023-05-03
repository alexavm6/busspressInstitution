const { Router } = require('express');
const router = Router();

const { 
    renderDashboard,
    renderRoutes,
    renderStatistics, 
    renderAssessment,
    renderSchedule 
} = require('../controllers/dashboard.controller');

const { isAuthenticated } = require('../helpers/auth');

router.get('/dashboard', isAuthenticated, renderDashboard);

router.get('/dashboard/routes', isAuthenticated, renderRoutes);

router.get('/dashboard/statistics', isAuthenticated, renderStatistics);

router.get('/dashboard/assessment', isAuthenticated, renderAssessment);



router.get('/dashboard/schedule', isAuthenticated, renderSchedule);



module.exports = router;