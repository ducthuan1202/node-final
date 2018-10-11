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

app.set("host", host);
app.set("port", port);

app.use("/", express.static(path.join(appRoot, "public")));
app.set("views", path.join(appPath, "views"));
app.set("view engine", "ejs");
app.use(flash());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: "unique-key-backend",
}));

app.use(passport.initialize());
app.use(passport.session());

require('./app/passport')(passport);
require('./app/routes')(app, passport);
require('./app/routes.1')(app);

app.listen(port, () => console.log(`Server started at: <http://${host}:${port}>`));