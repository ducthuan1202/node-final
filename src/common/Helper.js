const moment = require("moment");

function ajaxData(success, msg) {
    return {
        success: success,
        message: msg
    };
}

function isCall(input, type) {
    return Object.prototype.toString.call(input) === "[object " + type + "]"
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
    },
    // check
    isString: (input) => {
        return isCall(input, "String");
    },
    isObject: (input) => {
        return isCall(input, "Object");
    },
    isNumber: (input) => {
        return isCall(input, "Number");
    },
    isArray: (input) => {
        return isCall(input, "Array");
    },
    isFunction: (input) => {
        return isCall(input, "Function");
    },
    isEmpty: (input) => {
        if (isCall(input, "String")) return input.length === 0;
        if (isCall(input, "Number")) return input === 0 || isNaN(input);
        if (isCall(input, "Array")) return input.length;        
        if (isCall(input, "Object")) return Object.keys(input).length;        
        return true;
    },
    // array 
    arrayRandom: (array)=>{
        return array[Math.floor(Math.random() * array.length)]
    }

};