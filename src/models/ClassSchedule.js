const {Schema, model} = require('mongoose');

const ClassScheduleSchema = new Schema({
    day: {
        type: String,
        required: true
    },
    start_hour:  {
        type: Date,
        required: true
    },
    end_hour:  {
        type: Date,
        required: true
    },
    class:  {
        type: String,
        required: true
    },
    user_id:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
});





module.exports = model('ClassSchedule', ClassScheduleSchema, 'classSchedules');

