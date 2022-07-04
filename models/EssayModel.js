var mongoose = require('mongoose');

var EssaySchema = new mongoose.Schema({

    essaytitle: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    essay: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Essay', EssaySchema);