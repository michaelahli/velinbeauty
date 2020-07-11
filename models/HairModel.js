const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HairSchema = new Schema({
    hairtype: {
        type: String,
        required: true
    },
    activity: {
        type: String,
        required: true
    },
    moisture: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('hair', HairSchema);