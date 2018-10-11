module.exports = (app, isLoggedIn) => {

    app.get('/about', (req, res) => {
        res.send({
            action: 'about',
            user: req.user
        });
    });
};
