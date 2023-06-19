//Autores: Vasquez Miguel, Alexandra Ivana & Barandiaran Japaja, Jhossepy Alexander & Marquez Mendez, Andrea Janet.

//crea un objeto donde iran los metodos
const dashboardCtrl = {};

//importa los modelos a usar
const Car = require('../models/Car');
const CarScheduleDrivers = require('../models/CarScheduleDrivers');
const CarScheduleUsers = require('../models/CarScheduleUsers');
const ClassSchedule = require('../models/ClassSchedule');
const Driver = require('../models/Driver');
const DriverPerCar = require('../models/DriverPerCar');
const Service = require('../models/Service');
const Stop = require('../models/Stop');
const TripControl = require('../models/TripControl');
const User = require('../models/User');


//por cada direccion renderiza una vista diferente
dashboardCtrl.renderDashboard = (req, res) => {
    res.render('dashboard/dashboard');
};

dashboardCtrl.renderRoutes = (req, res) => {
    res.render('dashboard/routes');
};

dashboardCtrl.renderStatistics = async (req, res) => {
    const control = await TripControl.find({user_id: req.user._id});
    res.render('dashboard/statistics', {control});
};

dashboardCtrl.renderAssessment = async (req, res) => {

    const horariosDeCarroUsuarioVista = await CarScheduleUsers.find({user_id: req.user._id})
    

    res.render('dashboard/assessment', {horariosDeCarroUsuarioVista});
};


dashboardCtrl.renderUpload = async (req, res) => {


    res.render('dashboard/upload');
};


dashboardCtrl.renderSchedule = async (req, res) => {
    const horarios = await ClassSchedule.find({user_id: req.user._id})
    res.render('dashboard/schedule', {horarios});
};

dashboardCtrl.renderFirstSteps = async (req, res) => {
    
    res.render('dashboard/firstSteps');
};



module.exports = dashboardCtrl;