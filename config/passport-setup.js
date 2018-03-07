const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

passport.use(new GoogleStrategy({
    //options for google strategy
    callbackURL: 'auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, function(accessToken, refreshToken, profile, done){
    //passport callback
    new User({
        username: profile.displayName,
        googleId: profile.id
    }).save().then(function(newUser){
        console.log('New user created: ' + newUser);
    });
}));