const {Schema, model} = require('mongoose');

const CarSchema = new Schema({
    license_plate_number: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});





module.exports = model('Car', CarSchema, 'cars');

