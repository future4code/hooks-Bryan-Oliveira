// exercicio 2:
var toType = function (obj) {
    // @ts-ignore
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};
var whatTypeIs = function (param) {
    console.log(toType(param));
};
// console.log(toType([1,2,3]))
module.exports = whatTypeIs;
