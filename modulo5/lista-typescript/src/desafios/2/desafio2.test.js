const shouldRenew = require('./desafio2.js')
describe('Verify ID',()=>{
    test('people who is less than 20 , or is 20, has to renew ID 5-5 years',()=>{
        expect(shouldRenew("23/12/2003", "23/12/2021")).toBe(false)
        expect(shouldRenew("23/12/2003", "23/12/2016")).toBe(true)
    })
    test('people who is 21-50 YO has to renew ID 10-10 years',()=>{
        expect(shouldRenew("23/12/1999", "23/12/2021")).toBe(false)
        expect(shouldRenew("23/12/1999", "23/12/2011")).toBe(true)
    })
    test('people who is more than 50 has to renew ID 15-15 years',()=>{
        expect(shouldRenew("23/12/1969", "23/12/2021")).toBe(false)
        expect(shouldRenew("23/12/1969", "23/12/2005")).toBe(true)
    })
    

})