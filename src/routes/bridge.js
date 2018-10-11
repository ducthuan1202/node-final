require("dotenv").config();
const
    express = require("express"),
    path = require("path"),
    fs = require("fs"),
    appRoot = require("app-root-path").toString(),
    app = express();
const
    prefixApi = process.env.NODE_APP_API_PREFIX,
    prefixBackend = process.env.NODE_APP_BACKEND_PREFIX;
const
    folderApi = process.env.NODE_APP_API_FOLDER,
    folderBackend = process.env.NODE_APP_BACKEND_FOLDER,
    folderFrontend = process.env.NODE_APP_FRONTEND_FOLDER;
const
    routesFolder = path.join(appRoot, "src", "routes"),
    routesApi = path.join(routesFolder, folderApi),
    routeBackend = path.join(routesFolder, folderBackend),
    routeFrontend = path.join(routesFolder, folderFrontend);

app.disable("etag");

const isJsFile = (file) => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
try {

    /** init routes api */
    if (fs.existsSync(routesApi)) {
        fs.readdirSync(routesApi)
            .filter(file => isJsFile(file))
            .map(file => app.use(prefixApi, require(path.join(routesApi, file))));
        app.use(`^${prefixApi}(/)?`, (req, res) => res.send({ action: 404, from: 1 }));
    }

    /** init routes backend */
    if (fs.existsSync(routeBackend)) {
        fs.readdirSync(routeBackend)
            .filter(file => isJsFile(file))
            .map(file => app.use(prefixBackend, require(path.join(routeBackend, file))));
        app.use(`^${prefixBackend}(/)?`, (req, res) => res.send({ action: 404, from: 2 }));
    }

    /** init routes frontend */
    if (fs.existsSync(routeFrontend)) {
        fs.readdirSync(routeFrontend)
            .filter(file => isJsFile(file))
            .map(file => app.use("/", require(path.join(routeFrontend, file))));
        app.use("*", (req, res) => res.send({ action: 404, from: 3 }));
    }
} catch (e) {
    console.log(e.message);
}

/** module exports */
module.exports = app;

