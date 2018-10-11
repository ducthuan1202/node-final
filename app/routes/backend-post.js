module.exports = (app, isLoggedIn) => {

    app.get('/admin/posts', (req, res) => {
        res.send(`<h1>Posts</h1>`);
    });

};
