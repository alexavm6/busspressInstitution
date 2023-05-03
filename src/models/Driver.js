const {Schema, model} = require('mongoose');

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


DriverSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

DriverSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}


module.exports = model('Driver', DriverSchema, 'drivers');

