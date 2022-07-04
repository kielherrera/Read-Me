var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
        //unique:true
    },
    essaytitle: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Comment', CommentSchema);