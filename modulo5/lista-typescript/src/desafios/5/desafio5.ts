type romanNumeral = {
    letra: string,
    valor: number
}

const romanNumerals: romanNumeral[] = [
    {letra: "M", valor: 1000},
    {letra: "CM", valor: 900},
    {letra: "D", valor: 500},
    {letra: "CD", valor: 400},
    {letra: "C", valor: 100},
    {letra: "XC", valor: 90},
    {letra: "L", valor: 50},
    {letra: "XL", valor: 40},
    {letra: "X", valor: 10},
    {letra: "IX", valor: 9},
    {letra: "V", valor: 5},
    {letra: "IV", valor: 4},
    {letra: "I", valor: 1}
]

function toRomanNumeral(number: number): string{
    let RomanNumeral: string = ''
    let aux: number = number

    while (aux > 0){
        for(let numeral of romanNumerals ){
            if(aux - numeral.valor >= 0) {
                aux -= numeral.valor
                RomanNumeral+= numeral.letra
                break
            } 
        }
    }

    return RomanNumeral
}

module.exports = toRomanNumeral