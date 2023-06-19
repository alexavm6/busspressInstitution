//Autores: Vasquez Miguel, Alexandra Ivana & Barandiaran Japaja, Jhossepy Alexander & Marquez Mendez, Andrea Janet.

//importa un enrutador
const { Router } = require('express');
const router = Router();

const { isAuthenticated } = require('../helpers/auth');

//importa las funciones que hará el enrutador dependiendo de la ruta
const { 
    renderInstitutionStudents,
    institutionStudents,
    renderInstitutionStudentsClassSchedules,
    institutionStudentsClassSchedules,
    renderInstitutionDaysCodeRuns,
    institutionDaysCodeRuns,
    renderInstitutionCycleSchedules,
    institutionCycleSchedules,

    institutionstudentsdatabase,
    institutionstudentsclassschedulesdatabase,
    institutiondayscoderunsdatabase,
    institutioncycleschedulesdatabase
} = require('../controllers/upload.controller');


const { 
    uploadStudentJson,
    uploadStudentClassScheduleJson,
    uploadDayCodeRunsJson,
    uploadCycleScheduleJson
} = require('../helpers/multer.helper');


//dependiendo de la ruta que ingrese renderizará una vista
router.get('/upload/institutionstudents', isAuthenticated, renderInstitutionStudents);

router.post('/upload/institutionstudents', isAuthenticated, uploadStudentJson, institutionStudents);



router.get('/upload/institutionstudentsclassschedules', isAuthenticated, renderInstitutionStudentsClassSchedules);

router.post('/upload/institutionstudentsclassschedules', isAuthenticated, uploadStudentClassScheduleJson, institutionStudentsClassSchedules);



router.get('/upload/institutiondayscoderuns', isAuthenticated, renderInstitutionDaysCodeRuns); 

router.post('/upload/institutiondayscoderuns', isAuthenticated, uploadDayCodeRunsJson, institutionDaysCodeRuns);



router.get('/upload/institutioncycleschedules', isAuthenticated, renderInstitutionCycleSchedules);

router.post('/upload/institutioncycleschedules', isAuthenticated, uploadCycleScheduleJson, institutionCycleSchedules);




router.post('/upload/institutionstudentsdatabase', isAuthenticated, institutionstudentsdatabase);

router.post('/upload/institutionstudentsclassschedulesdatabase', isAuthenticated, institutionstudentsclassschedulesdatabase);

router.post('/upload/institutiondayscoderunsdatabase', isAuthenticated, institutiondayscoderunsdatabase);

router.post('/upload/institutioncycleschedulesdatabase', isAuthenticated, institutioncycleschedulesdatabase);




module.exports = router;