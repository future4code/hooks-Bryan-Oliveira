var romanNumerals = [
    { letra: "M", valor: 1000 },
    { letra: "CM", valor: 900 },
    { letra: "D", valor: 500 },
    { letra: "CD", valor: 400 },
    { letra: "C", valor: 100 },
    { letra: "XC", valor: 90 },
    { letra: "L", valor: 50 },
    { letra: "XL", valor: 40 },
    { letra: "X", valor: 10 },
    { letra: "IX", valor: 9 },
    { letra: "V", valor: 5 },
    { letra: "IV", valor: 4 },
    { letra: "I", valor: 1 }
];
function toRomanNumeral(number) {
    var RomanNumeral = '';
    var aux = number;
    while (aux > 0) {
        for (var _i = 0, romanNumerals_1 = romanNumerals; _i < romanNumerals_1.length; _i++) {
            var numeral = romanNumerals_1[_i];
            if (aux - numeral.valor >= 0) {
                aux -= numeral.valor;
                RomanNumeral += numeral.letra;
                break;
            }
        }
    }
    return RomanNumeral;
}
module.exports = toRomanNumeral;
