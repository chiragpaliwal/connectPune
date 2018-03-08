const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');

app.listen('3000', function(){
    console.log('Server started on port 3000');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

//Connect mongodb
mongoose.connect(keys.mongodb.dbURI, function(){
    console.log('Connected to mongodb');
});

//Setup routes
app.use('/auth', authRoutes);

//Home Route
app.get('/', function (req, res) {
    res.render('index', {title: 'Home'});
});