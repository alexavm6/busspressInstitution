//Autores: Vasquez Miguel, Alexandra Ivana & Barandiaran Japaja, Jhossepy Alexander & Marquez Mendez, Andrea Janet.
const multer = require('multer');
const mime = require('mime-types');
const path = require('path');

const multerHelper = {};

const storageStudent = multer.diskStorage({
    destination: path.join(__dirname, '..','institutionJsons','studentsJsons'),
    filename: function(req,file,cb){
        cb("",file.originalname);
    }
});

const uploadStudentJsonMulter = multer({
    storage: storageStudent
});

multerHelper.uploadStudentJson = uploadStudentJsonMulter.single('students');


/*

const storageStudentClassSchedule = multer.diskStorage({
    destination: path.join(__dirname, '..','institutionJsons','studentsClassSchedulesJsons'),
    filename: function(req,file,cb){
        cb("",file.originalname);
    }
});

const uploadStudentClassScheduleJsonMulter = multer({
    storage: storageStudentClassSchedule
});

multerHelper.uploadStudentClassScheduleJson = uploadStudentClassScheduleJsonMulter.single('schedules');
*/



const storageDayCodeRuns = multer.diskStorage({
    destination: path.join(__dirname, '..','institutionJsons','daysCodeRunsJsons'),
    filename: function(req,file,cb){
        cb("",file.originalname);
    }
});

const uploadDayCodeRunsJsonMulter = multer({
    storage: storageDayCodeRuns
});

multerHelper.uploadDayCodeRunsJson = uploadDayCodeRunsJsonMulter.single('days');




const storageCycleSchedule = multer.diskStorage({
    destination: path.join(__dirname, '..','institutionJsons','cycleSchedulesJsons'),
    filename: function(req,file,cb){
        cb("",file.originalname);
    }
});

const uploadCycleScheduleJsonMulter = multer({
    storage: storageCycleSchedule
});

multerHelper.uploadCycleScheduleJson = uploadCycleScheduleJsonMulter.single('cycles');


module.exports = multerHelper;