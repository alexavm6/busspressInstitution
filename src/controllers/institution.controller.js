//Autores: Vasquez Miguel, Alexandra Ivana & Barandiaran Japaja, Jhossepy Alexander & Marquez Mendez, Andrea Janet.
//importa los modelos a usar
const Price = require('../models/Price.js');
const path = require('path');

//crea un objeto donde iran los metodos
const institutionCtrl = {};

//importa modulo passport
const nodemailer = require('nodemailer');
const multer = require('multer');
const mime = require('mime-types');
const Institution = require('../models/Institution.js');
const Companie = require('../models/Companie.js');
const InstitutionTicket = require('../models/InstitutionTicket.js');
const InstitutionTicketDetail = require('../models/InstitutionTicketDetail.js');



//por cada direccion renderiza una vista diferente
institutionCtrl.renderSignup =  (req, res) => {
    res.render('institution/signupForm1');
};

let semanasGlobal, ciclosGlobal, carrosGlobal;
let nameGlobal, acronymGlobal, rucGlobal, emailGlobal, userGlobal, passwordGlobal;
let institutionRegistrationPriceGlobal, totalPorCantidadDeCarrosGlobal, totalSemanasDelServicioGlobal, totalGlobal;




//si el ingreso de sesion es exitoso o falla te redirige a una vista diferente
institutionCtrl.signupForm1 = async (req, res) => {
    try{
        console.log("POST: /institution/signupForm1", req.body);

        const {semanas, ciclos, carros} = req.body;

        

        semanasGlobal = semanas;
        ciclosGlobal = ciclos;
        carrosGlobal = carros;

        const institutionRegistration = await Price.findOne({name:"Institution Registration"});
        const institutionRegistrationPrice = institutionRegistration.price;

        institutionRegistrationPriceGlobal = institutionRegistrationPrice;

        const institutionUnitCar = await Price.findOne({name:"Institution Unit Car"});
        const institutionUnitCarPrice = institutionUnitCar.price;
        const totalPorCantidadDeCarros = carros * institutionUnitCarPrice;

        totalPorCantidadDeCarrosGlobal = totalPorCantidadDeCarros;

        const institutionUnitWeek = await Price.findOne({name:"Institution Unit Week"});
        const institutionUnitWeekPrice = institutionUnitWeek.price;
        const totalSemanasDelServicio = semanas * ciclos * institutionUnitWeekPrice;

        totalSemanasDelServicioGlobal = totalSemanasDelServicio;

        const total = totalPorCantidadDeCarros + totalSemanasDelServicio + institutionRegistrationPrice;

        totalGlobal = total;

        console.log(total, institutionRegistrationPrice, totalSemanasDelServicio, totalPorCantidadDeCarros);

        res.render('institution/signupForm2', {total, institutionRegistrationPrice, totalSemanasDelServicio, totalPorCantidadDeCarros});

    }catch(e){
        console.log(e.message);
    }
};



//si el ingreso de sesion es exitoso o falla te redirige a una vista diferente
institutionCtrl.signupForm2 = async (req, res) => {

    const {name, acronym, ruc, email, user, password} = req.body;
    nameGlobal = name;
    acronymGlobal = acronym;
    rucGlobal = ruc;
    emailGlobal = email;
    userGlobal = user;
    passwordGlobal = password; 
    

    console.log(req.body, semanasGlobal, carrosGlobal, ciclosGlobal, nameGlobal, acronymGlobal, rucGlobal, emailGlobal, userGlobal, passwordGlobal);
    res.render('institution/signupForm3');
};

institutionCtrl.signupForm3 = async (req, res) => {

    console.log("PUT: FORM3", semanasGlobal, carrosGlobal, ciclosGlobal, nameGlobal, acronymGlobal, rucGlobal, emailGlobal, institutionRegistrationPriceGlobal, totalPorCantidadDeCarrosGlobal, totalSemanasDelServicioGlobal, totalGlobal, userGlobal, passwordGlobal);

    res.render('institution/signupForm4', {semanasGlobal, carrosGlobal, ciclosGlobal, nameGlobal, acronymGlobal, rucGlobal, emailGlobal, institutionRegistrationPriceGlobal, totalPorCantidadDeCarrosGlobal, totalSemanasDelServicioGlobal, totalGlobal, userGlobal, passwordGlobal});
        
};

institutionCtrl.signupForm4 = async (req, res) => {
    
    const {name, acronym, ruc, weeksPerCycle, email, cycles, cars, institutionRegistrationPriceGlobal, totalPorCantidadDeCarrosGlobal, totalSemanasDelServicioGlobal, totalGlobal, user, password} = req.body;

    console.log("------------------------",req.body);
    console.log("------------------------",user, password);

    const newInstitution = new Institution({
        user: user,
        password: password,
        name: name,
        acronym: acronym,
        ruc: ruc,
        weeksPerCycle: parseInt(weeksPerCycle),
        email: email,
        cycles: parseInt(cycles),
        cars: parseInt(cars)
    });

    newInstitution.password = await newInstitution.encryptPassword(password);
                        console.log(newInstitution)
    
    await newInstitution.save();
                        console.log(newInstitution)

    const institution_id = newInstitution._id;
                        console.log(institution_id)

    const companieInfo = await Companie.findById('648ba532a5f1532634da4949');
                        console.log(companieInfo)

    const companie_id = companieInfo._id;
                        console.log(companie_id)
    
    const newInstitutionTicket = new InstitutionTicket({
        date: Date.now(),
        description: "Monto total",
        amount: parseInt(totalGlobal),
        companie_id: companie_id,
        institution_id: institution_id
    });

    await newInstitutionTicket.save();
                        console.log(newInstitutionTicket)

    const newInstitutionTicket_id = newInstitutionTicket._id;
                        console.log(newInstitutionTicket_id)

    const amounts = [parseInt(institutionRegistrationPriceGlobal), parseInt(totalPorCantidadDeCarrosGlobal), parseInt(totalSemanasDelServicioGlobal)];
    const descriptions = ["Monto de matricula para instituciones", "Monto por cantidad de carros", "Monto por semanas del servicio"];
                        console.log(amounts, descriptions)

    for (let index = 0; index < amounts.length; index++) {

        const newInstitutionTicketDetail = new InstitutionTicketDetail({
            amount: amounts[index],
            institution_ticket_id: newInstitutionTicket_id,
            description: descriptions[index]
        });

        await newInstitutionTicketDetail.save();
        console.log(newInstitutionTicketDetail)
    }


    /*
    const contentHTML = `
        <h1>Tu institution ha sido registrada correctamente</h1>
        <p></p>
        <ul>
            <li>Monto total: ${totalGlobal}</li>
            <li>${descriptions[0]}: ${amounts[0]}</li>
            <li>${descriptions[1]}: ${amounts[1]}</li>
            <li>${descriptions[2]}: ${amounts[2]}</li>
        </ul>
    `;

    try {
        
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // upgrade later with STARTTLS
            auth: {
              user: "busspressenterprise@gmail.com",
              pass: "ynyrcscacpgkzxwo",
            },
        });
                console.log("Envia correo 1")
                console.log(transporter)
    
        const info = await transporter.sendMail({
            from: "'Busspress' <busspressenterprise@gmail.com>",
            to: "alexaivanavm6@gmailcom",
            subject: "Comienza a usar Busspress",
            html: "contentHTML"
        });
                console.log("Envia correo 2")
                console.log(info)

    } catch (e) {
        console.log(e.message);
    }
    */
    


    req.flash('success_msg', 'Registro exitoso, revise su email');
    res.redirect('/institution/signup');
    
};
 
module.exports = institutionCtrl;