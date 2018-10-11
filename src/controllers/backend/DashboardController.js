exports.actionIndex = async (req, res) => {

    res.send({
        action: "index admin",
        code: 200,
        auth: req.isAuthenticated(),
        data: req.user
    });
}

exports.actionDashboard = async (req, res) => {
    res.send({
        action: "dashboard admin",
        code: 200,
        auth: req.isAuthenticated(),
        data: req.user
    });
}