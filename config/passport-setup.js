const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/user-model');

//Serialize user
passport.serializeUser(function(user, done){
    done(null, user.id); //id is from our mongodb
});

//De-serialize user
passport.deserializeUser(function(id, done){
    User.findById(id).then(function(user){
        done(null, user); //id is from our mongodb 
    });
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        //Check if user exists in db
        User.findOne({googleId: profile.id}).then(function(currentUser){
            if(currentUser){
                //already have the user
                console.log('User is: ' + currentUser);
                done(null, currentUser);
            }else{
                //create new user in db
                new User({
                    googleId: profile.id,
                    username: profile.displayName
                }).save().then((newUser) => {
                    console.log('new user created: ', newUser);
                    done(null, newUser);
                });
            }
        });
    })
);