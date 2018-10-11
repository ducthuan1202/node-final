module.exports = (app, passport) => {

    app.get('/', isLoggedIn, (req, res) => {
        res.send({
            action: 'home',
            user: req.user
        });
    });

    app.route('/login')
        .get((req, res) => {
            if (req.isAuthenticated()) res.redirect("/");
            else res.render('login', { message: req.flash('error') });
        })
        .post(passport.authenticate('local', {
            successRedirect : '/',
            failureRedirect: '/login',
            failureFlash: true
        }));

        /** điều hướng login  */
    // app.post('/login', (req, res, next) => {
    //     passport.authenticate('local', (err, user, info) => {
    //         if (err) return next(err);
    //         const urlRec = req.headers.referer || '/login';
    //         if (!user) {                
    //             return res.render(urlRec, info);
    //         }
    //         req.login(user, loginErr => {
    //             console.log(2);
    //             if (loginErr) return next(loginErr);

    //             let urlRedirectAfterLoginSuccess = req.params.ref || "/";
    //             res.redirect(urlRedirectAfterLoginSuccess)
    //         });

    //     })(req, res, next);
    // });

    app.get('/logout', isLoggedIn, (req, res) => {
        req.logout();
        res.redirect('/login');
    });
};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) next();
    else res.redirect('/login');
}