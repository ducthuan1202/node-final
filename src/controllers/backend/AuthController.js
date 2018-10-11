const Helper = require("../../common/Helper");

exports.actionLogin = async (req, res) => {

    if(req.user){
        res.redirect("/admin/dashboard");
        return !1;
    } 
    let viewFile = Helper.backendView("auth/login");
    let shared = {}
    res.render(viewFile, shared)
}

exports.actionLogout = async (req, res) => {

    res.send({
        action: "Logout admin",
        code: 200,
        data: []
    });
}