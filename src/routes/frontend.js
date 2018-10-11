require("dotenv").config();
const express = require("express");
const path = require("path");
const fs = require("fs");
const appRoot = require("app-root-path").toString();

const bcrypt = require("bcrypt");
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const AdminModel = require("../database/models").Admin;
const AuthController = require("../controllers/frontend/AuthController");

const app = express();
app.disable("etag");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: "unique-key-frontend",
}));

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
    failureRedirect: "/login",
    successRedirect: "/"
}));
app.get('/logout', AuthController.actionLogout);

try {

    const routesFolder = path.join(appRoot, "src", "routes");
    const folderFrontend = process.env.NODE_APP_FRONTEND_FOLDER;
    const basename = path.basename(__filename);
    /** init routes frontend */
    const routeFrontend = path.join(routesFolder, folderFrontend);
    if (fs.existsSync(routeFrontend)) {
        fs.readdirSync(routeFrontend)
            .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
            .map(file => {
                console.log(file);
                app.use("/", require(path.join(routeFrontend, file)));
            });
    }
} catch (e) {
    console.log(e.message);
}

/** module exports */
module.exports = app;