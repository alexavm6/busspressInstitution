const {Schema, model} = require('mongoose');

const TripControlSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    total_trips:  {
        type: Number,
        required: true
    },
    taken_trips:  {
        type: Number,
        required: true
    },
    untaken_trips:  {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});





module.exports = model('TripControl', TripControlSchema, 'tripControls');

