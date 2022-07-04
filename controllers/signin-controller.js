const db = require('../models/db.js');
const Credential = require('../models/CredentialModel.js');
const bcrypt = require('bcrypt');

const signin_controller = {
  
  getCreds: function (req, res) {

    db.findOne(Credential, {username: req.query.username}, 'username password',(result) => {
       
        bcrypt.compare(req.query.password, result.password, function(err, equal) {
          if(equal){
            res.send(result);
          }
          else{
            result = "";
            res.send(result);
          }
      });     
    });
  },

  getSignIn: function (req, res){
        res.render('signin');
  }
};
module.exports = signin_controller;