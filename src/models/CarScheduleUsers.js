//Autores: Vasquez Miguel, Alexandra Ivana & Barandiaran Japaja, Jhossepy Alexander & Marquez Mendez, Andrea Janet.

//importa el schema y modelo de moongose
const {Schema, model} = require('mongoose');

//Crea un schema para mongodb
const CarScheduleUsersSchema = new Schema({
    day: {
        type: Date,
        required: true
    },
    drivers_per_cars_id:  {
        type: String,
        required: true
    },
    pick_hour:  {
        type: Date,
        required: true
    },
    user_id:  {
        type: String,
        required: true
    }
});




//crea un modelo con el nombre elegido y la coleccion donde se guardará
module.exports = model('CarScheduleUsers', CarScheduleUsersSchema, 'carSchedulesUsers');

