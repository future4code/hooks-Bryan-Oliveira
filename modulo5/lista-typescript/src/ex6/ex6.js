// exercicio 6:
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var customers = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
];
var updateDebts = function (customer) {
    var debito = customer.debitos.reduce(function (previousValue, currentValue) { return previousValue + currentValue; }, 0);
    return __assign(__assign({}, customer), { saldoTotal: debito ? customer.saldoTotal - debito : customer.saldoTotal, debitos: [] });
};
var returnNegativeBalance = function (array) {
    return array.map(updateDebts).filter(function (customer) { return customer.saldoTotal < 0; });
};
var ExportEx6 = { updateDebts: updateDebts, returnNegativeBalance: returnNegativeBalance, customers: customers };
module.exports = ExportEx6;
