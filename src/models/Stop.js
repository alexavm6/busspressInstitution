const {Schema, model} = require('mongoose');

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





module.exports = model('Stop', StopSchema, 'stops');

