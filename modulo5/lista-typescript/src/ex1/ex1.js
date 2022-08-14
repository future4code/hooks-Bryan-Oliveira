// exercício 1:
var returnBornDate = function (name, bornDate) {
    var splitedDate = bornDate.split('/');
    var day = Number(splitedDate[0]);
    var month = Number(splitedDate[1]);
    var year = splitedDate[2];
    var dateIncorrectFormat = "passe a data no formato correto (dd/mm/aaaa)";
    var correctPhrase = "\"Ol\u00E1 me chamo ".concat(name, ", nasci no dia ").concat(day, " do m\u00EAs de ").concat(month, " do ano de ").concat(year, "\"");
    if (day > 31 || !month || month > 12 || year.length !== 4)
        return dateIncorrectFormat;
    return "".concat(correctPhrase);
};
module.exports = returnBornDate;
