//Autores: Vasquez Miguel, Alexandra Ivana & Barandiaran Japaja, Jhossepy Alexander & Marquez Mendez, Andrea Janet.

//importa el schema y modelo de moongose
const {Schema, model, SchemaTypes} = require('mongoose');


//Crea un schema para mongodb
const DriverServiceSchema = new Schema({
    start_service:  {
        type: Date,
        required: true
    },
    end_service: {
        type: Date,
        required: true
    },
    driver_id:  {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: "DriverInService"
    }
},
{
    timestamps: true
});




//crea un modelo con el nombre elegido y la coleccion donde se guardará
module.exports = model('DriverService', DriverServiceSchema, 'driverServices');

