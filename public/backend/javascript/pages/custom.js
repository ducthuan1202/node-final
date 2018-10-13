"use strict";

/** 
 * Function Anonymous
 * -------------------------------------
 * auto run
**/
!function (doc, width, height) {

    var body = document.body,
        html = document.documentElement;
    var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    console.log(width + 'x' + height);
    console.log(docHeight);

}(document, 300, 250);


/** 
 * Function Setting
 * -------------------------------------
 * Setting.init(); 
**/

var Setting = function () {

    var myFunc = function (text) {
        $('#showtoast').click(function () {
            console.log(text);
        });
    }

    // return method
    return {
        init: function (str) {
            myFunc(str);
        }
    };

}();


/** 
 * Function Class  
 * --------------------------------------
 * var fnClass = new Website();
 * fnClass.id = 1202;
 * fnClass.helper.say();
 * 
 */
var Website = function () {
    this.id = null;
    this.initObject();
}

Website.prototype.initObject = function () {

    var self = this;

    function say() {
        console.log(self.id);
    }

    // return method
    self.helper = {
        say: say
    }

};
