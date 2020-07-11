const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerInfoSchema = new Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hairmodel: {
        type: Schema.Types.ObjectId,
        ref: 'hair'
    },
});

module.exports = mongoose.model('customer', CustomerInfoSchema);