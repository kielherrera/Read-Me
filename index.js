const dotenv = require(`dotenv`);
const express = require(`express`);
const hbs = require(`hbs`);
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const bodyParser = require(`body-parser`);
const routes = require(`./routes/routes.js`);
const db = require(`./models/db.js`);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.set(`view engine`, `hbs`);
hbs.registerPartials(__dirname + `/views/partials`);

app.use(express.static(`public`));
app.use(`/`, routes);

db.connect();

app.use(session({
    'secret': 'readme-session',
    'resave': false,
    'saveUninitialized': false,
    store: MongoStore.create({mongoUrl: 'mongodb://localhost:27017/read-me'})
}));

var server = app.listen(3000, function() {
    console.log("Node server is running at port 3000....");
});
