exports.actionIndex = async (req, res) => {

    res.send({
        action: "index admin",
        code: 200,
    });
}

exports.actionDashboard = async (req, res) => {
    res.send({
        action: "dashboard admin",
        code: 200,
    });
}