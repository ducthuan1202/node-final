const moment = require("moment");

function ajaxData(success, msg) {
    return {
        success: success,
        message: msg
    };
}


module.exports = {
    formatTime: (value, format = 'YYYY-MM-DD HH:mm:ss') => {
        return moment(value).format(format);
    },
    backendView: (path) => {
        return `backend/${path}`;
    },
    frontendView: (path) => {
        return `frontend/${path}`;
    },
    jsonError: (err) => {
        return ajaxData(false, err.message);
    },
    jsonSuccess: (msg) => {
        return ajaxData(true, msg);
    }
};