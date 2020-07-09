const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('product', ProductSchema);