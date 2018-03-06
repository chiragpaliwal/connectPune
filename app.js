const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const mongoose =  require('mongoose');

app.listen('3000', function(){
    console.log("App listening on port 3000");
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');    
});