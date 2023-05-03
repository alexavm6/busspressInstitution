const {Schema, model} = require('mongoose');

const CarScheduleDriversSchema = new Schema({
    day: {
        type: Date,
        required: true
    },
    drivers_per_cars_id: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});





module.exports = model('CarScheduleDrivers', CarScheduleDriversSchema, 'carSchedulesDrivers');

