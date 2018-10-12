module.exports = (app, isLoggedIn) => {

    app.get('/admin/posts',isLoggedIn, (req, res) => {
        res.send(`<h1>Posts</h1>`);
    });

};
