const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    author: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    }

}, {timestamps: true})

// Create Schema and Exporting
const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;