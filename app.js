const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const router = require('express').Router();

app.listen('3000', function(){
    console.log('Server started on port 3000');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

router.get('/', function(req, res, next){
    let pageTitle = 'Home from router';
    res.render('index', {pageTitle: pageTitle});
});