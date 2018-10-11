const
    bridge = require("./src/routes/bridge"),
    express = require("express");
const
    app = express(),
    host = "127.0.0.1",
    port = 3000;

app.use("/", express.static("./public"));
app.set("host", host);
app.set("port", port);

app.use(bridge);

app.listen(port, () => console.log(`Server started at: <http://${host}:${port}>`));