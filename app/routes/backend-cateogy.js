module.exports = (app, isLoggedIn) => {

    app.get('/admin/category', isLoggedIn, (req, res) => {
        res.send(`<h1>Category</h1>`);
    });

};
