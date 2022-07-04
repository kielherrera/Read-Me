const db = require('../models/db.js');
const Essay = require('../models/EssayModel.js');
const Comment = require('../models/CommentModel.js');
const Credentials = require('../models/CredentialModel.js');
const path = require('path')
var nl2br  = require('nl2br');

const essay_controller = {
  
  postEssay: function (req, res) {
    var essaytitle = req.body.essaytitle;
    var essay = nl2br(req.body.essay);
    var date = new Date();
    var author = "user123456"/*req.session.username*/;

    const {image} = req.files;
    image.mv(path.resolve(__dirname,'../public/images',image.name));

    db.insertOne(Essay, {essaytitle: essaytitle, image:'/images/'+image.name, date: date, essay: essay, author: author}, (result) => {
            res.redirect('/Loggedin');
        });
  },

  getEntry: function (req, res){
        res.render('entry');
  },

  viewEssayandComment: async (req, res) => {

      const result = await Essay.find({essaytitle: req.query.essaytitle}); // Perform MongoDB query inside {} and store results into content
      const comment = await Comment.find({essaytitle: req.query.essaytitle}); // Perform MongoDB query inside {} and store results into content
      res.render('EssayMain', {comment, result});
  },

  getProfile: async (req, res) => {
    const info = await Credentials.find({username: req.query.username}); // Perform MongoDB query inside {} and store results into content
    const essay = await Essay.find({author: req.query.username}); // Perform MongoDB query inside {} and store results into content
    res.render('profile', {info, essay});
  },

  getDeleteEssay: function(req, res){
    var author = req.query.author;
    var essaytitle = req.query.essaytitle;
    db.deleteMany (Comment, {essaytitle: essaytitle}, result =>{
      db.deleteOne (Essay, {essaytitle: essaytitle}, (result) =>{
        res.redirect("/profile?username=" + req.query.author);
      });
    });
  }
};
module.exports = essay_controller;