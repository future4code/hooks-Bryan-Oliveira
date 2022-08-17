function spliCPF(CPF) {
    var arrCPF = CPF.trim().replace('.', '').replace('.', '').replace('-', '').split('');
    return arrCPF;
}
function duplicatedItens(CPF) {
    var itens = spliCPF(CPF);
    var duplicatedItens = [];
    for (var a = 0; a < itens.length; a++) {
        for (var i = 0; i < itens.length; i++) {
            var prevItem = itens[a];
            if (i !== a && i > a) {
                var postItem = itens[i];
                if (prevItem === postItem) {
                    duplicatedItens.push(prevItem);
                    break;
                }
            }
        }
    }
    return duplicatedItens;
}
function verifyDV(CPF) {
    var arrCPF = spliCPF(CPF);
    var sum = 0;
    var arrayDVMultiplicators = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    for (var i = 0; i < 9; i++) {
        sum += Number(arrCPF[i]) * arrayDVMultiplicators[i + 1];
    }
    var firstDV = (11 - (sum % 11)) >= 10 ? 0 : 11 - (sum % 11);
    sum = 0;
    for (var i = 0; i < 10; i++) {
        sum += Number(arrCPF[i]) * arrayDVMultiplicators[i];
    }
    var secondDV = (11 - (sum % 11)) >= 10 ? 0 : 11 - (sum % 11);
    return (Number(arrCPF[9]) !== firstDV || Number(arrCPF[10]) !== secondDV) ? false : true;
}
function isValidCPF(CPF) {
    var arrCPF = spliCPF(CPF);
    if (arrCPF.length !== 11 || duplicatedItens(CPF).length === arrCPF.length - 1)
        return false;
    return verifyDV(CPF);
}
module.exports = { isValidCPF: isValidCPF, verifyDV: verifyDV, duplicatedItens: duplicatedItens, spliCPF: spliCPF };
