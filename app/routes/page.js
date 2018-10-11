module.exports = (app, isLoggedIn) => {

    app.get('/about', isLoggedIn, (req, res) => {
        res.send({
            action: 'about',
            user: req.user
        });
    });

};
