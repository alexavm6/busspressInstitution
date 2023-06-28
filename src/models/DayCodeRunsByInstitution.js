//Autores: Vasquez Miguel, Alexandra Ivana & Barandiaran Japaja, Jhossepy Alexander & Marquez Mendez, Andrea Janet.

//importa el schema y modelo de moongose
const {Schema, model, SchemaTypes} = require('mongoose');


//Crea un schema para mongodb
const DayCodeRunsByInstitutionSchema = new Schema({
    cycle: {
        type: String,
        required: true
    },
    fill_day:  {
        type: Date,
        required: true
    },
    delete_day: {
        type: Date,
        required: true
    },
    institution_id:  {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: "Institution"
    }
});




//crea un modelo con el nombre elegido y la coleccion donde se guardará
module.exports = model('DayCodeRunsByInstitution', DayCodeRunsByInstitutionSchema, 'daysCodeRunsByInstitution');

