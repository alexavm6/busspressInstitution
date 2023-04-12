const { Router } = require('express');
const router = Router();

const { 
    renderDashboard,
    renderRoutes,
    renderStatistics, 
    renderAssessment 
} = require('../controllers/dashboard.controller');

router.get('/dashboard', renderDashboard);

router.get('/dashboard/routes', renderRoutes);

router.get('/dashboard/statistics', renderStatistics);

router.get('/dashboard/assessment', renderAssessment);



module.exports = router;