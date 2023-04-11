const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

//Initializations
const app = express();

/*
Es mucho muy importante que pongan el seteo de views antes del seteo del motor porque sio les va a aparecer un error  como este:
Error: ENOENT: no such file or directory, open 'C:\Users\yo\src\views\layouts\main.hbs'
que es un error de cuando no encuentran el archivo
*/
//Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials')
}));
app.set('view engine', '.hbs'); 

//Middlewares
app.use(express.urlencoded({extended: false}));


//Global Variables


//Routes
app.get('/', (req, res) => {
    res.render('index');
});

//Static Files
app.use(express.static(path.join(__dirname, 'public'))); 





module.exports = app;

