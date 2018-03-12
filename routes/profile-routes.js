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
    res.render('profile', {user: req.user, title: 'Profile'});
});

//POST for feedback
router.post('/feedback', function(){

});

module.exports = router;