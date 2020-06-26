const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const hbs = require('express-handlebars');
const {
    mongoDbUrl,
    PORT
} = require('./config/configuration');

//Configure Database
mongoose.connect(mongoDbUrl, {
    useNewUrlParser: true
}).then(response => {
    console.log("MongoDB Connected Succesfully");
}).catch(err => {
    console.log("Database Connection Failed");
});

//Configure Express
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

//Setup view engine to use handlebars
app.engine('handlebars', hbs({
    defaultLayout: 'default'
}));
app.set('view engine', 'handlebars');

//routes
app.use('/', (req, res) => {
    res.send('Welcome to velinbeauty.com');
});

//creating server with express.js
app.listen(PORT, () => {
    console.log(`Server running on the port ${PORT}`);
});