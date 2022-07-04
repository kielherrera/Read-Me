const db = require('../models/db.js');
const Credential = require('../models/CredentialModel.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const signup_controller = {

    postCredential: function(req, res) {
          bcrypt.hash(req.query.password, saltRounds, function(err, hash) {
                req.query.password = hash;
                db.insertOne(Credential, req.query, (result) => {
                    res.send(result);
          });
        });
    },

    getCheckUN: function(req, res) {
        
        var username = req.query.username;
         db.findOne(Credential, {username: username}, 'username', (result) => {
            res.send(result);
        });
    },
  
    getSignUp: function (req, res){
        res.render('signup');
    }
};

module.exports = signup_controller;
