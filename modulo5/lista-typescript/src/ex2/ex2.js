"use strict";
// exercicio 2:
const toType = function (obj) {
    // @ts-ignore
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};
const whatTypeIs = (param) => {
    console.log(toType(param));
};
// console.log(toType([1,2,3]))
module.exports = whatTypeIs;
//# sourceMappingURL=ex2.js.map