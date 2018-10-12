const moment = require("moment");

exports.backendView = (path) => {
    return `backend/${path}`;
}

exports.frontendView = (path) => {
    return `frontend/${path}`;
}

exports.formatOutputData = (data, message, additionalProperties = {}) => {
    const result = {};
    result.data = typeof data === 'object' ? data : typeof data != undefined ? data : null;
    result.success = true;
    result.message = message ? message : 'common.success';
    Object.assign(result, additionalProperties);
    return result;
}

exports.displayErrorMessage = function (err) {
    return {
        success: false,
        message: err.message
    };
}

exports.displaySuccessMessage = (msg) => {
    return {
        success: true,
        message: msg
    };
}

exports.formatTime = (value, format = 'YYYY-MM-DD HH:mm:ss') => {
    return moment(value).format(format);
}