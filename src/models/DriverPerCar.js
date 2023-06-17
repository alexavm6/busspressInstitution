//Autores: Vasquez Miguel, Alexandra Ivana & Barandiaran Japaja, Jhossepy Alexander & Marquez Mendez, Andrea Janet.

//importa el schema y modelo de moongose
const {Schema, model} = require('mongoose');

//Crea un schema para mongodb
const DriverPerCarSchema = new Schema({
    driver_id: {
        type: String,
        required: true
    },
    car_id: {
        type: String,
        required: true
    }
});




//crea un modelo con el nombre elegido y la coleccion donde se guardará
module.exports = model('DriverPerCar', DriverPerCarSchema, 'driversPerCars');

