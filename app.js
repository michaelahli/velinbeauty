const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const hbs = require('express-handlebars');
const {
    mongoDbUrl,
    PORT
} = require('./config/configuration');
//require('dotenv').config();
//var TWILIO_TOKEN = "270ff32fe16828869dc30e0c6926fa9e";
//var TWILIO_ACCOUNT_SID = "AC55a59221acb23a5aa6f046740bb73317";
//var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_TOKEN);

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
//app.use(client);

//Setup view engine to use handlebars
app.engine('handlebars', hbs({
    defaultLayout: 'default'
}));
app.set('view engine', 'handlebars');

//routes
const defaultRoutes = require('./routes/defaultRoutes');
const adminRoutes = require('./routes/adminRoutes');
app.use('/', defaultRoutes);
app.use('/admin', adminRoutes);

//creating server with express.js
app.listen(PORT, () => {
    console.log(`Server running on the port ${PORT}`);
});