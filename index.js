const
    fs = require("fs"),
    path = require("path"),
    appRoot = require("app-root-path").toString(),
    express = require('express'),
    passport = require('passport'),
    flash = require('connect-flash'),
    session = require('express-session'),
    bodyParser = require('body-parser');
const
    appPath = path.join(appRoot, "app"),
    app = express(),
    port = 3000,
    host = "127.0.0.1";
/** app set */
app.set("host", host);
app.set("port", port);
app.set("views", path.join(appPath, "views"));
app.set("view engine", "ejs");
/** app use */
app.use(flash());
app.use("/", express.static(path.join(appRoot, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: "nauht-cud-neyugn-20210991",
    resave: false,
    saveUninitialized: false
}));
/** passport config */
app.use(passport.initialize());
app.use(passport.session());
require('./app/passport')(passport);
/** use middleware check login */
const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) next();
    else res.redirect('/login');
}
app.use("/admin", isLoggedIn);
try {
    const routesFolder = path.join(appPath, "routes");
    if (fs.existsSync(routesFolder)) {
        fs.readdirSync(routesFolder)
            .filter(file => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js'))
            .map(file => require(path.join(routesFolder, file.slice(0, file.length - 3)))(app, isLoggedIn));
    }
} catch (e) {
    app.use("*", (req, res) => res.send({ action: 404, msg: e.message }));
}
app.listen(port, () => console.log(`Server started at: <http://${host}:${port}>`));