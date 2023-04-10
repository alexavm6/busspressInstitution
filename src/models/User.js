const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    user_name: {
        type: String,
        required: true
    },
    document_type:  {
        type: String,
        required: true
    },
    document_number:  {
        type: String,
        required: true
    },
    names:  {
        type: String,
        required: true
    },
    last_names:  {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:  {
        type: String,
        required: true
    },
    address:  {
        type: String,
        required: true
    },
    campus:  {
        type: String,
        required: true
    },
    phone_number:  {
        type: String,
        required: true
    },
    college_career:  {
        type: String,
        required: true
    },
    course:  {
        type: String,
        required: true
    },
    start_service:  {
        type: String,
        required: true
    },
    end_service:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model('User', UserSchema);

