const
    path = require("path"),
    appRoot = require("app-root-path").toString(),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    bridge = require("./src/routes/bridge"),
    express = require("express");

const
    app = express(),
    host = "127.0.0.1",
    port = 3000;

app.set("views", path.join(appRoot, "src", "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(appRoot, "public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: "unique-key",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 2.592e9 }, // 2.592e9 = 2592000000 = 60*60*24*30*100 = 1 month
}));

app.set("host", host);
app.set("port", port);

app.use(bridge);

app.listen(port, () => console.log(`Server started at: <http://${host}:${port}>`));