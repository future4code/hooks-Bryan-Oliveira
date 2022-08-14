const {isValidCPF, verifyDV, duplicatedItens, spliCPF} = require('./desafio4.js')

describe('verify CPF', ()=>{
    test('testing splitCPF passing "111.111.111-11"',()=>{
        const expectedResult = ['1','1','1','1','1','1','1','1','1','1','1']
        expect(spliCPF("111.111.111-11")).toEqual(expect.arrayContaining(expectedResult))
    })
    test('testing duplicatedItens passing "111.111.111-11" and "123.456.789-12"',()=>{
        expect(duplicatedItens("111.111.111-11")).toHaveLength(10)
        expect(duplicatedItens("123.456.789-12")).toHaveLength(2)
    })
    test('testing verifyDV passing  "145.382.206-20" it should return true',()=>{
        expect(verifyDV("145.382.206-20")).toBe(true)
    })
    test('testing verifyDV passing  "145.382.206-30" it should return false',()=>{
        expect(verifyDV("145.382.206-30")).toBe(false)
    })
    test('testing verifyDV passing  "145.382.206-25" it should return false',()=>{
        expect(verifyDV("145.382.206-25")).toBe(false)
    })
    test('testing isValidCpf passing "145.382.206-20" it should return true',()=>{
        expect(isValidCPF("145.382.206-20")).toBe(true)
    })
    test('isValidCpf passing "145.382.206-30" it should return false',()=>{
        expect(isValidCPF("145.382.206-30")).toBe(false)
    })
    test('isValidCpf passing "145.382.206-25" it should return false',()=>{
        expect(isValidCPF("145.382.206-25")).toBe(false)
    })
    test('isValidCpf passing equal numbers in correct format "111.111.111-11" it should return false',()=>{
        expect(isValidCPF("111.111.111-11")).toBe(false)
        expect(isValidCPF("222.222.222-22")).toBe(false)
        expect(isValidCPF("777.777.777-77")).toBe(false)
    })
})