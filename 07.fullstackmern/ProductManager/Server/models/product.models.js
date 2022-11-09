const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },
    price: {
        type: Number,
        required: [true,"{PATH} must be present"]
    },
    description: {
        type: String,
        required: [true, "{PATH} must be present"]
    }

}, {timestamps: true})

// Create Schema and Exporting
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;