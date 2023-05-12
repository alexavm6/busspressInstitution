//Autor: Vasquez Miguel, Alexandra Ivana

//importa el schema y modelo de moongose
const {Schema, model} = require('mongoose');

//Crea un schema para mongodb
const DriverSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    names: {
        type: String,
        required: true
    },
    last_names: {
        type: String,
        required: true
    },
    document_type: {
        type: String,
        required: true
    },
    document_number: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

//coloca meotodos de encriptacion de password al schema
DriverSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

DriverSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

//crea un modelo con el nombre elegido y la coleccion donde se guardará
module.exports = model('Driver', DriverSchema, 'drivers');

