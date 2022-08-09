const returnBornDate = require('./ex1.js')

describe('it should receive a name (string) and a born date (string) in format dd/mm/yyyy, and it should return the name and splited born date', ()=>{
    const name = 'bryan'
    const day = '23'
    const month = '12'
    const year = '1999'
    const correctPhrase = `"Olá me chamo ${name}, nasci no dia ${day} do mês de ${month} do ano de ${year}"`
    const dateIncorrectFormat = `passe a data no formato correto (dd/mm/aaaa)`
    
    test('passing name and born date in correct format it should return "correctPhrase"', ()=>{
        expect(returnBornDate('bryan', `${day}/${month}/${year}`)).toBe(correctPhrase)
    })
    test('passing born date in format mm/dd/yyyy with "day">12 it should return "dateIncorrectFormat"', ()=>{
        expect(returnBornDate('bryan', `${month}/${day}/${year}`)).toBe(dateIncorrectFormat)
    })
    test('passing born date in format dd/mm/yy it should return "dateIncorrectFormat"', ()=>{
        const incorrectYearFormat = '99'
        expect(returnBornDate('bryan', `${day}/${month}/${incorrectYearFormat}`)).toBe(dateIncorrectFormat)
    })
    test('passing month in text format', ()=>{
        const incorrectMonthFormat = 'dez'
        expect(returnBornDate('bryan', `${day}/${incorrectMonthFormat}/${year}`)).toBe(dateIncorrectFormat)
    })
})