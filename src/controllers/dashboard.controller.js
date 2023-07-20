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

const InstitutionStudent = require('../models/InstitutionStudent');
const InstitutionCar = require('../models/InstitutionCar');
const DriverInService = require('../models/DriverInService');
const DayCodeRunsByInstitution = require('../models/DayCodeRunsByInstitution');
const CycleScheduleByInstitution = require('../models/CycleScheduleByInstitution');


//por cada direccion renderiza una vista diferente
dashboardCtrl.renderDashboard = async (req, res) => {

    const institution_id = req.user._id;

    try{
        const institutionStudents = await InstitutionStudent.countDocuments({institution_id: institution_id});
            
        const users = await User.countDocuments({institution_id: institution_id});

        const institutionCars = await InstitutionCar.countDocuments({institution_id: institution_id});

        const driversInService = await DriverInService.countDocuments({institution_id: institution_id});

        
        
        res.render('dashboard/dashboard', {institutionStudents, users, institutionCars, driversInService});

    }catch(e){
        console.log(e);
    }

};

dashboardCtrl.renderDates = async (req, res) => {

    try {

        const institution_id = req.user._id;
        const daysCodeRunsByInstitution = await DayCodeRunsByInstitution.find({institution_id: institution_id});
        const cycleSchedulesByInstitution = await CycleScheduleByInstitution.find({institution_id: institution_id});
        res.render('dashboard/dates', {daysCodeRunsByInstitution, cycleSchedulesByInstitution});

    }catch(e){
        console.log(e);
    }
    
};

dashboardCtrl.renderStatistics = async (req, res) => {
    try {

        
        res.render('dashboard/statistics');

    }catch(e){
        console.log(e);
    }
    
};

dashboardCtrl.renderCars = async (req, res) => {

    try {

        const carsArray = [];

        const institution_id = req.user._id;
        const institutionCars = await InstitutionCar.find({institution_id: institution_id});

        for (const institutionCar of institutionCars) {

            const driverPerCarArray = await DriverPerCar.find({institution_car_id: institutionCar._id}).populate({ path: 'driver_in_service_id', model: DriverInService}).populate({ path: 'institution_car_id', model: InstitutionCar});
            const driverPerCar = driverPerCarArray[0];

            carsArray.push(driverPerCar);
            
        }

        res.render('dashboard/cars', {carsArray});

    }catch(e){
        console.log(e);
    }

};


dashboardCtrl.renderUpload = async (req, res) => {


    res.render('dashboard/upload');
};


dashboardCtrl.renderDrivers = async (req, res) => {
    
    try {

        const carsArray = [];

        const institution_id = req.user._id;
        const institutionCars = await InstitutionCar.find({institution_id: institution_id});

        for (const institutionCar of institutionCars) {

            const driverPerCarArray = await DriverPerCar.find({institution_car_id: institutionCar._id}).populate({ path: 'driver_in_service_id', model: DriverInService}).populate({ path: 'institution_car_id', model: InstitutionCar});
            const driverPerCar = driverPerCarArray[0];

            carsArray.push(driverPerCar);
            
        }

        res.render('dashboard/drivers', {carsArray});

    }catch(e){
        console.log(e);
    }

};


dashboardCtrl.renderUsers = async (req, res) => {
    
    try {

        const institution_id = req.user._id;
        const institutionStudents = await InstitutionStudent.find({institution_id: institution_id});

        const users = await User.find({institution_id: institution_id});

        res.render('dashboard/users', {institutionStudents, users});

    }catch(e){
        console.log(e);
    }

};

dashboardCtrl.renderFirstSteps = async (req, res) => {
    
    res.render('dashboard/firstSteps');
};



module.exports = dashboardCtrl;