const dashboardCtrl = {};

dashboardCtrl.renderDashboard = (req, res) => {
    res.render('dashboard/dashboard');
};

dashboardCtrl.renderRoutes = (req, res) => {
    res.render('dashboard/routes');
};

dashboardCtrl.renderStatistics = (req, res) => {
    res.render('dashboard/statistics');
};

dashboardCtrl.renderAssessment = (req, res) => {
    res.render('dashboard/assessment');
};



module.exports = dashboardCtrl;