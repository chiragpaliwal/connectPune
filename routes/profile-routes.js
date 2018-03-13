const router = require('express').Router();
const bodyParser = require('body-parser');

const authCheck = function(req, res, next){
    if(!req.user){
        //if user is not logged in
        res.redirect('/auth/login');
    }else{
        //if logged in
        next();
    }
}

router.get('/',authCheck, function(req, res){
    res.render('profile', {user: req.user, title: 'Profile', message: ''});
});

//Models
let Feedback = require('../models/feedback-model');

//POST for feedback
router.post('/feedback', function(req, res){
    let feedback = new Feedback;
    feedback.email = req.body.email;
    feedback.body = req.body.body;
    
    feedback.save(function(err){
       if(err){
           console.log(err);
       }else{
        res.render('profile', {user: req.user, title: 'Profile', message: 'Thanks for submitting feedback!'});
        }    
    });
});

module.exports = router;