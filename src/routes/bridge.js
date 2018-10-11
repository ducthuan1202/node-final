require("dotenv").config();
const express = require("express");
const path = require("path");
const fs = require("fs");
const appRoot = require("app-root-path").toString();
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

const routesFolder = path.join(appRoot, "src", "routes");

/** get prefix route */
const prefixApi = process.env.NODE_APP_API_PREFIX;
const prefixBackend = process.env.NODE_APP_BACKEND_PREFIX;

/** get folder name */
const folderApi = process.env.NODE_APP_API_FOLDER;
const folderBackend = process.env.NODE_APP_BACKEND_FOLDER;
const folderFrontend = process.env.NODE_APP_FRONTEND_FOLDER;

app.disable("etag");
app.set("views", path.join(appRoot, "src", "views"));
app.set("view engine", "ejs");
app.use(express.static("./public"));

/** Login with passport */
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(session({
//     secret: "unique-key",
//     cookie: { maxAge: 6000 }
// }));

try {

    /** init routes api */
    const routesApi = path.join(routesFolder, folderApi);
    if (fs.existsSync(routesApi)) {
        fs.readdirSync(routesApi).map(file => {
            app.use(prefixApi, require(path.join(routesApi, file)));
        });
        app.use(`^${prefixApi}(/)?`, (req, res) => res.send({ action: 404, from: 1 }));
    }

    /** init routes backend */
    const routeBackend = path.join(routesFolder, folderBackend);
    if (fs.existsSync(routeBackend)) {
        fs.readdirSync(routeBackend).map(file => {
            app.use(prefixBackend, require(path.join(routeBackend, file)));
        });
        app.use(`^${prefixBackend}(/)?`, (req, res) => res.send({ action: 404, from: 2 }));
    }

    /** init routes frontend */
    const routeFrontend = path.join(routesFolder, folderFrontend);
    if (fs.existsSync(routeFrontend)) {
        fs.readdirSync(routeFrontend).map(file => {
            app.use("/", require(path.join(routeFrontend, file)));
        });
        app.use("*", (req, res) => res.send({ action: 404, from: 3 }));
    }
} catch (e) {
    console.log(e.message);
}

/** module exports */
module.exports = app;