const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth-routes');


app.listen('3000', function(){
    console.log('Server started on port 3000');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

//Setup routes
app.use('/auth', authRoutes);

//Home Route
app.get('/', function (req, res) {
    res.render('index', {title: 'Home'});
});