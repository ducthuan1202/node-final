// const express = require("express");
// const router = express.Router();
// const session = require('express-session');
// const bcrypt = require("bcrypt");
// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
// const AdminModel = require("../../database/models").Admin;

// const DashboardController = require("../../controllers/backend/DashboardController");
// const AuthController = require("../../controllers/backend/AuthController");

// router.use(session({
//     secret: "unique-key-backend",
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

// router.get("/login", AuthController.actionLogin);

// router.post("/login", passport.authenticate("local", {
//     failureRedirect: "/admin/login",
//     successRedirect: "/admin/dashboard"
// }));

// router.get("/logout", AuthController.actionLogout);
// router.get("/dashboard", DashboardController.actionDashboard);

// module.exports = router;