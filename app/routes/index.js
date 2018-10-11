const passport = require('passport');

module.exports = (app, isLoggedIn) => {

    app.get('/', isLoggedIn, (req, res) => {
        res.send({ action: 'home', user: req.user });
    });

    app.get('/logout', isLoggedIn, (req, res) => {
        req.logout();
        res.redirect('/login');
    });

    app.route('/login')
        .get((req, res) => {
            if (req.isAuthenticated()) res.redirect("/");
            else res.render('login', { message: req.flash('error') });
        })
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true
        }));
};
