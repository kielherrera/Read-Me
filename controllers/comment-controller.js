const db = require('../models/db.js');
const Comment = require('../models/CommentModel.js');

const comment_controller = {

    postComment: function(req, res) {
        
        console.log (req.query.username, req.query.essaytitle, req.query.comment);
         db.insertOne(Comment, {username: req.query.username, essaytitle: req.query.essaytitle, comment: req.query.comment}, (result) => {
            res.send(result);
        });
    }
  
};

module.exports = comment_controller;
