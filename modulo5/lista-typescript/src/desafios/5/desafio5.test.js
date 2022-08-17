const toRomanNumeral = require("./desafio5.js")

describe("convert normal numeral to Roman numerals",()=>{
    test("passing 1990 it should return MCMXC",()=>{
        expect(toRomanNumeral(1990)).toBe('MCMXC')
    })
    test("passing 800 it should return DCCC",()=>{
        expect(toRomanNumeral(800)).toBe('DCCC')
    })
    test("passing 3000 it should return MMM",()=>{
        expect(toRomanNumeral(3000)).toBe('MMM')
    })
    test("passing 1 it should return I",()=>{
        expect(toRomanNumeral(1)).toBe('I')
    })
    test("passing 10 it should return X",()=>{
        expect(toRomanNumeral(10)).toBe('X')
    })
    test("passing 5 it should return V",()=>{
        expect(toRomanNumeral(5)).toBe('V')
    })
})