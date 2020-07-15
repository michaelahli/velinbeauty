const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FnCSchema = new Schema({
    fragrance: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('fragranceandcolor', FnCSchema);