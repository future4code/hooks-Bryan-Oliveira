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
var adjustPrice = function (preco) {
    var valorAjustado = preco.toFixed(2).replace('.', ',');
    return "R$ " + valorAjustado;
};
var inventory = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
];
var sorByQuantity = function (a, b) { return a.quantidade - b.quantidade; };
var adjustInventory = function (array) {
    return array
        .map(function (item) { return __assign(__assign({}, item), { valorUnitario: adjustPrice(item.valorUnitario) }); })
        .sort(sorByQuantity);
};
var ExportDs1 = {
    adjustPrice: adjustPrice,
    inventory: inventory,
    adjustInventory: adjustInventory,
    sorByQuantity: sorByQuantity
};
module.exports = ExportDs1;
