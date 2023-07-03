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
const InstitutionStudent = require('../models/InstitutionStudent.js');
const DayCodeRunsByInstitution = require('../models/DayCodeRunsByInstitution.js');
const CycleScheduleByInstitution = require('../models/CycleScheduleByInstitution.js');
const InstitutionService = require('../models/InstitutionService.js');
const DriverService = require('../models/DriverService.js');

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
const InstitutionStudentClassSchedule = require('../models/InstitutionStudentClassSchedule.js');


uploadCtrl.renderInstitutionStudents = async (req, res) => {
    
    res.render('upload/institutionstudents');
};

uploadCtrl.institutionStudents = async (req, res) => {
    
    req.flash('success_msg', 'Archivo subido exitosamente');
    res.redirect("/dashboard/upload");
};



/*
uploadCtrl.renderInstitutionStudentsClassSchedules = async (req, res) => {
    
    res.render('upload/institutionstudentsclassschedules');
};

uploadCtrl.institutionStudentsClassSchedules = async (req, res) => {
    
    req.flash('success_msg', 'Archivo subido exitosamente');
    res.redirect("/dashboard/upload");
};
*/



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




uploadCtrl.institutionstudentsdatabase = async (req, res) => {
    
    const {archiveName} = req.body;

    

    let data = fs.readFileSync(path.join(__dirname, '..', 'institutionJsons', 'studentsJsons', archiveName));

    let studentsArray = JSON.parse(data);

    console.log(studentsArray);

    const institution_id = req.user._id;

    console.log("ID:-----------",institution_id);

    for (const student of studentsArray) {
      
        const newInstitutionStudent = new InstitutionStudent({
            user: student.user,
            document_type: student.document_type,
            document_number: student.document_number,
            names: student.names,
            last_names: student.last_names,
            email: student.email,
            address: student.address,
            campus: student.campus,
            phone_number: student.phone_number,
            college_career: student.college_career,
            course: student.course,
            gender: student.gender,
            age: student.age,
            institution_id: institution_id
        });

                            console.log(newInstitutionStudent);

        await newInstitutionStudent.save();

                            console.log(newInstitutionStudent);

        const schedulesArray = student.schedule;

                            console.log(schedulesArray);

        for (const schedule of schedulesArray) {
            
            const newInstitutionStudentClassSchedule = new InstitutionStudentClassSchedule({
                day: schedule.day,
                start_hour: schedule.start_hour,
                end_hour: schedule.end_hour,
                class: schedule.class,
                institution_student_id: newInstitutionStudent._id
            });

                            console.log(newInstitutionStudentClassSchedule);

            await newInstitutionStudentClassSchedule.save();

                            console.log(newInstitutionStudentClassSchedule);

        }

    

    }


    req.flash('success_msg', 'Datos subidos a la base de datos');
    res.redirect("/dashboard/upload");
};




uploadCtrl.institutiondayscoderunsdatabase = async (req, res) => {
    
    const {archiveName} = req.body;

    const institution_id = req.user._id;

    let data = fs.readFileSync(path.join(__dirname, '..', 'institutionJsons', 'daysCodeRunsJsons', archiveName));

    let dayscoderunsArray = JSON.parse(data);

    console.log(dayscoderunsArray);

    for (const dayCodeRuns of dayscoderunsArray) {

        
        
        const newDayCodeRunsByInstitution = new DayCodeRunsByInstitution({
            cycle: dayCodeRuns.cycle,
            fill_day: dayCodeRuns.fill_day,
            delete_day: dayCodeRuns.delete_day,
            institution_id: institution_id
        });

        await newDayCodeRunsByInstitution.save();

        console.log(newDayCodeRunsByInstitution);
        

    }




    req.flash('success_msg', 'Datos subidos a la base de datos');
    res.redirect("/dashboard/upload");

};




uploadCtrl.institutioncycleschedulesdatabase = async (req, res) => {
    
    const {archiveName} = req.body;

    const institution_id = req.user._id;

    let data = fs.readFileSync(path.join(__dirname, '..', 'institutionJsons', 'cycleSchedulesJsons', archiveName));

    let cycleSchedulesArray = JSON.parse(data);

    console.log(cycleSchedulesArray);
    
    const cycleSchedulesArrayObjects = [];

    for (const cycleSchedule of cycleSchedulesArray) {
        
        const newCycleScheduleByInstitution = new CycleScheduleByInstitution({
            cycle: cycleSchedule.cycle,
            cycle_start: cycleSchedule.cycle_start,
            cycle_end: cycleSchedule.cycle_end,
            institution_id: institution_id
        });

        await newCycleScheduleByInstitution.save();

        console.log(newCycleScheduleByInstitution);

        cycleSchedulesArrayObjects.push(newCycleScheduleByInstitution);
    }
                    console.log(cycleSchedulesArrayObjects);


    const cyclesWithService = [];

    const cycles = req.user.cycles;
                    console.log(cycles);

    const currentDate = new Date("2023-03-30T00:00:00.000+00:00");
                    console.log(currentDate);

    let i = 0;

    //Tienes que inscribirte antes de que inicie el ciclo que quieres pagar
    // Fecha en que subes el archivo es menor a la fecha cuando empieza el ciclo que pagaras
    //el archivo con los ciclos debe estar en orden, 1,2,3...
    for (const cycleScheduleObject of cycleSchedulesArrayObjects) {
        
        if (currentDate < cycleScheduleObject.cycle_start) {
                    console.log("Cumple:----------",currentDate,"  <  ", cycleScheduleObject.cycle_start);
            cyclesWithService.push(cycleScheduleObject);
            i++;

        }

        if(i==cycles){
            break;
        }

    }

    const start_service = cyclesWithService[0].cycle_start;
    const end_service = cyclesWithService[cycles-1].cycle_end;

    const newInstitutionService = new InstitutionService({
        start_service: start_service,
        end_service: end_service,
        institution_id:  institution_id
    });

    await newInstitutionService.save();


    const institutionDriversInServiceArray = await DriverInService.find({institution_id: institution_id});

    for (const institutionDriversInService of institutionDriversInServiceArray) {
        
        const newDriverService = new DriverService({
            start_service: start_service,
            end_service: end_service,
            driver_id: institutionDriversInService._id
        });

        await newDriverService.save();

    }


    req.flash('success_msg', 'Datos subidos a la base de datos');
    res.redirect("/dashboard/upload");

};




 
module.exports = uploadCtrl;