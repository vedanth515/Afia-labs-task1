const mongoose = require('mongoose');


const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['available', 'borrowed', 'archived'],
        default: 'available',
    },
}, {
    timestamps: true,
});


module.exports = mongoose.model('Book', bookSchema);
