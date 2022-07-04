const express = require(`express`);
const controller = require(`../controllers/controller.js`);
const signup_controller = require(`../controllers/signup-controller.js`);
const signin_controller = require(`../controllers/signin-controller.js`);
const entry_controller = require(`../controllers/entry-controller.js`);
const comment_controller = require(`../controllers/comment-controller.js`);
const app = express();
const fileUpload = require('express-fileupload');
app.use(fileUpload()); 

app.get(`/favicon.ico`, controller.getFavicon);
app.get(`/`, controller.getIndex);
app.get('/LoggedIn', controller.getIndexSignOut);
app.get('/postcred', signup_controller.postCredential)
app.get(`/getCheckUN`, signup_controller.getCheckUN);
app.get('/signup', signup_controller.getSignUp);
app.get('/getcred', signin_controller.getCreds);
app.get('/signin', signin_controller.getSignIn); 
app.get('/entry', entry_controller.getEntry);
app.post('/submit-content', entry_controller.postEssay);
app.get('/viewessayandcomment', entry_controller.viewEssayandComment);
app.get('/postcomment', comment_controller.postComment);
app.get('/0search', controller.getSISearch);
app.get('/1search', controller.getSOSearch);
app.get('/profile', entry_controller.getProfile);
app.get('/delete', entry_controller.getDeleteEssay);

module.exports = app;