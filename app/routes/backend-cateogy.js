module.exports = (app, isLoggedIn) => {

    app.get('/admin/category', (req, res) => {
        res.send(`<h1>Category</h1>`);
    });

};
