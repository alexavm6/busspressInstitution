const adminCtrl = {};

const User = require('../models/User');

adminCtrl.renderNewuser = (req, res) => {
    res.render('admin/newuser');
};

adminCtrl.newuser = async (req, res) => {
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
            user_name,
            user_email,
            user_document_number
        } = req.body;
        const user1 = await User.findOne({user: user_name}); 
        console.log(user1);
        if (user1) {
            errors.push({text: 'Ya existe un usuario con este codigo'});
        }
        const email1 = await User.findOne({email: user_email});
        if (email1) {
            errors.push({text: 'Ya existe con este email'});
        }
        const document_number1 = await User.findOne({document_number: user_document_number});
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
            req.flash('success_msg', 'Usuario registrado exitosamente');
            res.redirect('/admin/newuser'); 
            
        }
        
    }


};



module.exports = adminCtrl;