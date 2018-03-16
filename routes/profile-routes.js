const router = require('express').Router();
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');

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
    if(req.user.email==='admin@admin.com'){
        Complaint.find({}, function(err, data){
            res.render('admin', {user:req.user, title: 'Admin', complaint: data});
        });
    }else{
        res.render('profile', {user: req.user, title: 'Profile', message: ''});
    }
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
    upload(req, res, function(err){
        if(err){
            console.log(err);
        }
    });
    complaint.save(function(err){
        if(err){
            console.log(err);
        }else{
            res.render('profile', {user: req.user, title: 'Profile', message: 'Comlpaint Submitted!'});
        }
    });
});


//File Uploads

//Set storage engine
const storage = multer.diskStorage({
    destination: './public/uploads',
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

//init upload
const upload = multer({
    storage: storage
}).single('uploadImg');

// router.post('/upload', function(req, res){
//     upload(req, res, function(err){
//         if(err){
//             console.log(err);
//         }
//     });
// });

module.exports = router;