const Essay = require('../models/EssayModel.js');

const controller = {

    getFavicon: function (req, res) {
        res.status(204);
    },

    getIndex: async (req, res) => {
        const result = await Essay.find({}); // Perform MongoDB query inside {} and store results into content
        res.render('index-signin', {result});
    },

    getIndexSignOut: async (req,res) => {
         const result = await Essay.find({}); // Perform MongoDB query inside {} and store results into content
         res.render('index-signout', {result});
    },

    getSISearch: async (req, res) => {
        const result = await Essay.find({$or: [{essaytitle: {$regex: new RegExp(req.query.search, "i")}}, {author: {$regex: new RegExp(req.query.search, "i")}}]}); // Perform MongoDB query inside {} and store results into content
        res.render('index-signin', {result});
    },
    
    getSOSearch: async (req,res) => {
        const result = await Essay.find({$or: [{essaytitle: {$regex: new RegExp(req.query.search, "i")}}, {author: {$regex: new RegExp(req.query.search, "i")}}]}); // Perform MongoDB query inside {} and store results into content
        res.render('index-signout', {result});
   }
}

module.exports = controller; 