//Autores: Vasquez Miguel, Alexandra Ivana & Barandiaran Japaja, Jhossepy Alexander & Marquez Mendez, Andrea Janet.
//importa los modelos a usar
const Price = require('../models/Price.js');
const Car = require('../models/Car.js');
const InstitutionCar = require('../models/InstitutionCar.js');
const Driver = require('../models/Driver.js');
const DriverInService = require('../models/DriverInService.js');
const DriverPerCar = require('../models/DriverPerCar.js');
const path = require('path');
const passport = require('passport');
const fs = require('fs');

//crea un objeto donde iran los metodos
const uploadCtrl = {};

//importa modulo passport
const nodemailer = require('nodemailer');
const multer = require('multer');
const mime = require('mime-types');
const Institution = require('../models/Institution.js');
const Companie = require('../models/Companie.js');
const InstitutionTicket = require('../models/InstitutionTicket.js');
const InstitutionTicketDetail = require('../models/InstitutionTicketDetail.js');


uploadCtrl.renderInstitutionStudents = async (req, res) => {
    
    res.render('upload/institutionstudents');
};

uploadCtrl.institutionStudents = async (req, res) => {
    
    req.flash('success_msg', 'Archivo subido exitosamente');
    res.redirect("/dashboard/upload");
};




uploadCtrl.renderInstitutionStudentsClassSchedules = async (req, res) => {
    
    res.render('upload/institutionstudentsclassschedules');
};

uploadCtrl.institutionStudentsClassSchedules = async (req, res) => {
    
    req.flash('success_msg', 'Archivo subido exitosamente');
    res.redirect("/dashboard/upload");
};




uploadCtrl.renderInstitutionDaysCodeRuns = async (req, res) => {
    
    res.render('upload/institutiondayscoderuns');
};

uploadCtrl.institutionDaysCodeRuns = async (req, res) => {
    
    req.flash('success_msg', 'Archivo subido exitosamente');
    res.redirect("/dashboard/upload");
};




uploadCtrl.renderInstitutionCycleSchedules = async (req, res) => {
    
    res.render('upload/institutioncycleschedules');
};

uploadCtrl.institutionCycleSchedules = async (req, res) => {
    
    req.flash('success_msg', 'Archivo subido exitosamente');
    res.redirect("/dashboard/upload");
};

uploadCtrl.institutionstudentsdatabase = function (req, res)  {
    
    const {archiveName} = req.body;

    /*
    console.log(archiveName);

    console.log(__dirname);
    
    console.log(path.join(__dirname, '..', 'institutionJsons', 'studentsJsons', archiveName));
    */

    let data = fs.readFileSync(path.join(__dirname, '..', 'institutionJsons', 'studentsJsons', archiveName));

    let students = JSON.parse(data);

    console.log(students);

    req.flash('success_msg', 'Datos subidos a la base de datos');
    res.redirect("/dashboard/upload");
};

uploadCtrl.institutionstudentsclassschedulesdatabase = function (req, res)  {
    
    const {archiveName} = req.body;

    /*
    console.log(archiveName);

    console.log(__dirname);
    
    console.log(path.join(__dirname, '..', 'institutionJsons', 'studentsJsons', archiveName));
    */

    let data = fs.readFileSync(path.join(__dirname, '..', 'institutionJsons', 'studentsClassSchedulesJsons', archiveName));

    let classschedules = JSON.parse(data);

    console.log(classschedules);

    req.flash('success_msg', 'Datos subidos a la base de datos');
    res.redirect("/dashboard/upload");
};

uploadCtrl.institutiondayscoderunsdatabase = function (req, res)  {
    
    const {archiveName} = req.body;

    /*
    console.log(archiveName);

    console.log(__dirname);
    
    console.log(path.join(__dirname, '..', 'institutionJsons', 'studentsJsons', archiveName));
    */

    let data = fs.readFileSync(path.join(__dirname, '..', 'institutionJsons', 'daysCodeRunsJsons', archiveName));

    let dayscoderuns = JSON.parse(data);

    console.log(dayscoderuns);

    req.flash('success_msg', 'Datos subidos a la base de datos');
    res.redirect("/dashboard/upload");
};

uploadCtrl.institutioncycleschedulesdatabase = function (req, res)  {
    
    const {archiveName} = req.body;

    /*
    console.log(archiveName);

    console.log(__dirname);
    
    console.log(path.join(__dirname, '..', 'institutionJsons', 'studentsJsons', archiveName));
    */

    let data = fs.readFileSync(path.join(__dirname, '..', 'institutionJsons', 'cycleSchedulesJsons', archiveName));

    let cycleschedules = JSON.parse(data);

    console.log(cycleschedules);

    req.flash('success_msg', 'Datos subidos a la base de datos');
    res.redirect("/dashboard/upload");
};




 
module.exports = uploadCtrl;