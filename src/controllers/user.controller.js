//Autores: Vasquez Miguel, Alexandra Ivana & Barandiaran Japaja, Jhossepy Alexander & Marquez Mendez, Andrea Janet.
//importa los modelos a usar
const User = require('../models/User');

//crea un objeto donde iran los metodos
const userCtrl = {};

//importa modulo passport
const passport = require('passport');
const nodemailer = require('nodemailer');

//por cada direccion renderiza una vista diferente
userCtrl.renderLogin = (req, res) => {
    res.render('user/login');
};

//si el ingreso de sesion es exitoso o falla te redirige a una vista diferente
userCtrl.login = passport.authenticate('local', {
    failureRedirect: '/user/login',
    successRedirect: '/dashboard',
    failureFlash: true
});

userCtrl.logout = (req, res, next) => {
    req.logout(function(err) {
        if (err) {
            return next(err);
        }
        req.flash('success_msg', 'Sesión cerrada exitosamente');
        res.redirect('/user/login');
    });
    /*
    req.flash('success_msg', 'Sesión cerrada exitosamente');
    res.redirect('/user/login');
    */
};

userCtrl.renderSignup = (req, res) => {
    res.render('user/signup');
};

userCtrl.signup = async (req, res) => {
    const errors = [];
    const { 
        user,
        document_type,
        document_number,
        names,
        last_names,
        email,
        address,
        campus,
        phone_number,
        college_career,
        course,
        start_service,
        end_service,
        password,
        confirm_password
    } = req.body;

    const contentHTML = `
        <h1>Haz sido registrado exitosamente</h1>
        <p>Ingresa a Busspress con los siguientes datos</p>
        <ul>
            <li>Codigo: ${user}</li>
            <li>Contraseña: La que ingresaste en el formulario</li>
        </ul>
    `;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // upgrade later with STARTTLS
        auth: {
          user: "busspressenterprise@gmail.com",
          pass: "ynyrcscacpgkzxwo",
        },
    });

    if (password != confirm_password) {
        errors.push({text: 'Las contraseñas no coinciden'});
    }
    
    if (password.length < 8) {
        errors.push({text: 'Las contraseñas deben tener al menos 8 caracteres'});
    }

    if (errors.length > 0) {
        res.render('admin/newuser', {
            errors,
            user,
            document_type,
            document_number,
            names,
            last_names,
            email,
            address,
            campus,
            phone_number,
            college_career,
            course,
            start_service,
            end_service,
            password,
            confirm_password
        });

    }else{

        const { 
            user,
            email,
            document_number
        } = req.body;

        //console.log(user, email, document_number);

        const user1 = await User.findOne({user: user}); 
        //console.log('Usuario', user1);
        if (user1) {
            errors.push({text: 'Ya existe un usuario con este codigo'});
        }
        
        
        const email1 = await User.findOne({email: email});
        //console.log('Email', email1);
        if (email1) {
            errors.push({text: 'Ya existe un usuario con este email'});
        }

        
        const document_number1 = await User.findOne({document_number: document_number});
        //console.log('Numero de documento', document_number1);
        if (document_number1) {
            errors.push({text: 'Ya existe un usuario con este numero de documento'});
        }

        if (errors.length > 0) {
            res.render('admin/newuser', {
                errors,
                user,
                document_type,
                document_number,
                names,
                last_names,
                email,
                address,
                campus,
                phone_number,
                college_career,
                course,
                start_service,
                end_service,
                password,
                confirm_password
            });
        }else{
            const newUser = new User({
                user,
                document_type,
                document_number,
                names,
                last_names,
                email,
                address,
                campus,
                phone_number,
                college_career,
                course,
                start_service,
                end_service,
                password
            });
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();

            const info = await transporter.sendMail({
                from: "'Busspress' <busspressenterprise@gmail.com>",
                to: email,
                subject: "Comienza a usar Busspress",
                html: contentHTML
            });

            console.log('Correo enviado', info.messageId);

            req.flash('success_msg', 'Usuario registrado exitosamente, revisa tu correo electronico');
            res.redirect('/user/login'); 
            
        }
        
    }
};

module.exports = userCtrl;