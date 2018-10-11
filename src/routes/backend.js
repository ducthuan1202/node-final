require("dotenv").config();
const express = require("express");
const path = require("path");
const fs = require("fs");
const appRoot = require("app-root-path").toString();
const app = express();

const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const AdminModel = require("../database/models").Admin;
const AuthController = require("../controllers/backend/AuthController");

app.disable("etag");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: "unique-key-backend",
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(async (username, password, done) => {
    await AdminModel.findOne({ where: { email: username } }).then(result => {
        let dataLogin = (bcrypt.compareSync(password, result.password)) ? result : null;
        done(null, dataLogin);
    }).catch(e => done(null, null));
}));

passport.serializeUser((user, done) => { done(null, user) });
passport.deserializeUser((user, done) => { done(null, user) });

app.get("/login", AuthController.actionLogin);
app.post("/login", passport.authenticate("local", {
    failureRedirect: "/admin/login",
    successRedirect: "/admin/dashboard"
}));


try {

    const routesFolder = path.join(appRoot, "src", "routes");
    const folderBackend = process.env.NODE_APP_BACKEND_FOLDER;
    const basename = path.basename(__filename);
    /** init routes backend */
    const routeBackend = path.join(routesFolder, folderBackend);
    if (fs.existsSync(routeBackend)) {
        fs.readdirSync(routeBackend)
            .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
            .map(file => {
                console.log(file);
                app.use("/", require(path.join(routeBackend, file)));
            });
    }

} catch (e) {
    console.log(e.message);
}

/** module exports */
module.exports = app;