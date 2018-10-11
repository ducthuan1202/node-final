module.exports = (app) => {

    app.get('/about', isLoggedIn, (req, res) => {
        res.send({
            action: 'home',
            user: req.user
        });
    });   
};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) next();
    else res.redirect('/login');
}