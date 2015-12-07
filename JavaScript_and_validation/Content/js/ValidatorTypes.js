var compareValues = function (v1, v2) {
    var b = false;
    if (v1 == v2) { b=true };
    return b;
};
var validateNumbers = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


var validateUrl = function(u) {
    var regex = /(http|https|ftp)?(:\/\/)?(www\.)?[A-Za-z]{1,253}\.([A-Za-z]{1,3}\.)?[A-Za-z]{1,63}/;
    return regex.test(u);
};


var validateEmail = function (e) {
    var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(e);
};
