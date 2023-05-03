const {Schema, model} = require('mongoose');

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
}, {
    timestamps: true
});





module.exports = model('CarScheduleUsers', CarScheduleUsersSchema, 'carSchedulesUsers');

