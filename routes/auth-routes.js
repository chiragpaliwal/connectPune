const router = require('express').Router();
const passport = require('passport');
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
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

//calback route for google
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send('you reached the redirect URI');
});

module.exports = router;