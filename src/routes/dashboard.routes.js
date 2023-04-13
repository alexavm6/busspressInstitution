const { Router } = require('express');
const router = Router();

const { 
    renderDashboard,
    renderRoutes,
    renderStatistics, 
    renderAssessment 
} = require('../controllers/dashboard.controller');

const { isAuthenticated } = require('../helpers/auth');

router.get('/dashboard', isAuthenticated, renderDashboard);

router.get('/dashboard/routes', isAuthenticated, renderRoutes);

router.get('/dashboard/statistics', isAuthenticated, renderStatistics);

router.get('/dashboard/assessment', isAuthenticated, renderAssessment);



module.exports = router;