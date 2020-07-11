const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProblemSchema = new Schema({
    problem: {
        type: Array,
        required: true
    },
    keratin: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('problem', ProblemSchema);