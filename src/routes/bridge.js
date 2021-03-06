require("dotenv").config();
const
    appRoot = require("app-root-path"),
    fs = require("fs"),
    path = require("path"),
    express = require("express"),
    app = express();
app.disable("etag");
app.set("views", path.join(appRoot.toString(), "src", "views"));
const
    prefixBackend = process.env.NODE_APP_BACKEND_PREFIX;
const
    folderBackend = process.env.NODE_APP_BACKEND_FOLDER,
    folderFrontend = process.env.NODE_APP_FRONTEND_FOLDER;
const
    routesFolder = path.join(appRoot.toString(), "src", "routes"),
    routeBackend = path.join(routesFolder, folderBackend),
    routeFrontend = path.join(routesFolder, folderFrontend);
try {
    const isJsFile = (file) => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');

    /** init routes backend */
    if (fs.existsSync(routeBackend)) {
        fs.readdirSync(routeBackend).filter(file => isJsFile(file)).map(file => app.use(prefixBackend, require(path.join(routeBackend, file))));
    }

    /** init routes frontend */
    if (fs.existsSync(routeFrontend)) {
        fs.readdirSync(routeFrontend).filter(file => isJsFile(file)).map(file => app.use("/", require(path.join(routeFrontend, file))));
    }

    /** error: api, backend, frontend */
    app.use(`^${prefixBackend}(/)?`, (req, res) => res.send({ action: 404, from: 1 }));
    app.use("*", (req, res) => res.send({ action: 404, from: 2 }));

} catch (e) {
    app.use("*", (req, res) => res.send({ action: 404, msg: e.message }));
}

/** module exports */
module.exports = app;