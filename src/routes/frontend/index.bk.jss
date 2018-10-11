// const express = require("express");
// const router = express.Router();
// const session = require('express-session');
// const bcrypt = require("bcrypt");
// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
// const AdminModel = require("../../database/models").Admin;

// const PageController = require("../../controllers/frontend/PageController");
// const AuthController = require("../../controllers/frontend/AuthController");

// router.use(session({
//     secret: "unique-key-frontend",
//     cookie: { maxAge: 600000 }
// }));
// router.use(passport.initialize());
// router.use(passport.session());

// passport.use(new LocalStrategy(async (username, password, done) => {
//     await AdminModel.findOne({ where: { email: username } }).then(result => {
//         let dataLogin = (bcrypt.compareSync(password, result.password)) ? result : null;
//         done(null, dataLogin);
//     }).catch(e => done(null, null));
// }));

// passport.serializeUser((user, done) => { done(null, user) });
// passport.deserializeUser((user, done) => { done(null, user) });

// router.get('/', PageController.actionIndex);
// router.get("/login", AuthController.actionLogin);
// router.post("/login", passport.authenticate("local", {
//     failureRedirect: "/login",
//     successRedirect: "/"
// }));
// router.get('/logout', AuthController.actionLogout);

// module.exports = router;