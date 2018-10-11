const
    bridge = require("./src/routes/bridge"),
    backend = require("./src/routes/backend"),
    frontend = require("./src/routes/frontend"),
    express = require("express");
const
    app = express(),
    host = "127.0.0.1",
    port = 3000;

app.disable("etag");
app.use("/", express.static("./public"));
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.set("host", host);
app.set("port", port);

app.use("/admin", backend);
app.use("/", frontend);
// app.use(bridge);

app.listen(port, () => console.log(`Server started at: <http://${host}:${port}>`));