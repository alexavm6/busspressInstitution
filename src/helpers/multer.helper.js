//Autores: Vasquez Miguel, Alexandra Ivana & Barandiaran Japaja, Jhossepy Alexander & Marquez Mendez, Andrea Janet.
const multer = require('multer');
const mime = require('mime-types');
const path = require('path');

const multerHelper = {};

const storageStudent = multer.diskStorage({
    destination: path.join(__dirname, '..','institutionJsons','studentJsons'),
    filename: function(req,file,cb){
        cb("",file.originalname+".json");
    }
});

const uploadStudentJsonsMulter = multer({
    storage: storageStudent
});

multerHelper.uploadStudentJsons = uploadStudentJsonsMulter.single('student');




const storageDate = multer.diskStorage({
    destination: path.join(__dirname, '..','institutionJsons','dateJsons'),
    filename: function(req,file,cb){
        cb("",file.originalname+".json");
    }
});

const uploadDateJsonsMulter = multer({
    storage: storageDate
});

multerHelper.uploadDateJsons = uploadDateJsonsMulter.single('date');


module.exports = multerHelper;