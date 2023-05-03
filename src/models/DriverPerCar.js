const {Schema, model} = require('mongoose');

const DriverPerCarSchema = new Schema({
    driver_id: {
        type: String,
        required: true
    },
    car_id: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});





module.exports = model('DriverPerCar', DriverPerCarSchema, 'driversPerCars');

