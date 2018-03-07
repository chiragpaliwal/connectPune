const router = require('express').Router();

//Auth Login
router.get('/login', function(req, res){
    res.render('login', {title: 'Login'});
});

//Auth Logout
router.get('/logout', function(req, res){
    res.send('Logging out..');
    //passport
});

//Auth with Google
router.get('/google', function(req, res){
    //passport
    res.send('Loggin in with Google..');
});

module.exports = router;