//Autor: Vasquez Miguel, Alexandra Ivana

//importa el schema y modelo de moongose
const {Schema, model} = require('mongoose');

//Crea un schema para mongodb
const StopSchema = new Schema({
    car_schedules_drivers_id: {
        type: String,
        required: true
    },
    user_id:  {
        type: String,
        required: true
    },
    pick_hour:  {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});




//crea un modelo con el nombre elegido y la coleccion donde se guardará
module.exports = model('Stop', StopSchema, 'stops');

