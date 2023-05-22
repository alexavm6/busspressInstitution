//Autores: Vasquez Miguel, Alexandra Ivana & Barandiaran Japaja, Jhossepy Alexander & Marquez Mendez, Andrea Janet.

//importa modulo mongoose
const mongoose = require('mongoose');

//trae las variables de entorno
const { BUSSPRESS_HOST, BUSSPRESS_DATABASE } = process.env; 
const MONGODB_URI = `mongodb://${BUSSPRESS_HOST}/${BUSSPRESS_DATABASE}`;

//se conecta a la base de datos de mongodb
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err)); 