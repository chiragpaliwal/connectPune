const router = require('express').Router();
const bodyParser = require('body-parser');

//Models
let Feedback = require('../models/feedback-model');
let Complaint = require('../models/complaint-model');

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

router.post('/complaint', function(req, res){
    let complaint = new Complaint;
    complaint.complaintCategory = req.body.complaintCategory;
    complaint.desc = req.body.complaintDesc;
    complaint.location = req.body.complaintLoc;

    complaint.save(function(err){
        if(err){
            console.log(err);
        }else{
            res.render('profile', {user: req.user, title: 'Profile', message: 'Comlpaint Submitted!'});
        }
    })
});

module.exports = router;