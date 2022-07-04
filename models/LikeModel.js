var mongoose = require('mongoose');

var LikeSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },
    essaytitle: {
        type: String,
        required: true,
    },
    commentnos: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Like', LikeSchema);