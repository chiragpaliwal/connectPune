const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

app.listen('3000', function(){
    console.log('Server started on port 3000');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public/assets')));

app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys: [keys.session.cookieKey]
}));

//init passport
app.use(passport.initialize());
app.use(passport.session());

//Connect mongodb
mongoose.connect(keys.mongodb.dbURI, function(){
    console.log('Connected to mongodb');
});

//Setup routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

//Home Route
app.get('/', function (req, res) {
    res.redirect('/auth/login');
});