const Helper = require("../../common/Helper");

exports.actionLogin = async (req, res) => {

    let viewFile = Helper.frontendView("auth/login");
    let shared = {}
    res.render(viewFile, shared)
}

exports.actionLogout = async (req, res) => {

    res.send({
        action: "Logout frontend",
        code: 200,
    });
}