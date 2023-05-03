const {Schema, model} = require('mongoose');

const ServiceSchema = new Schema({
    start_service: {
        type: Date,
        required: true
    },
    end_service: {
        type: Date,
        required: true
    },
    user_or_driver_id: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});





module.exports = model('Service', ServiceSchema, 'services');

