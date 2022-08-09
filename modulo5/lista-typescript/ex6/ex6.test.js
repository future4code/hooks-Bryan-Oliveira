const Export = require('./ex6.js')
const { updateDebts, returnNegativeBalance, customers} = Export
describe('it should return only customers with neagtive balance',()=>{
    test('it should update balance', ()=>{
        
        const expectedReturn = [
            { cliente: 'João', saldoTotal: 400, debitos: [] },
            { cliente: 'Paula', saldoTotal: 6260, debitos: [] },
            { cliente: 'Pedro', saldoTotal: -3340, debitos: [] },
            { cliente: 'Luciano', saldoTotal: -1900, debitos: [] },
            { cliente: 'Artur', saldoTotal: 1300, debitos: [] },
            { cliente: 'Soter', saldoTotal: 1200, debitos: [] }
          ]
          
        const Test = customers.map(updateDebts)

        expect(Test).toEqual(expect.arrayContaining(expectedReturn))
        
    })
    test('it should return pedro and luciano', ()=>{
        const expectedReturn = [ 
            { cliente: 'Pedro', saldoTotal: -3340, debitos: [] },
            { cliente: 'Luciano', saldoTotal: -1900, debitos: [] }
        ]

        expect(returnNegativeBalance(customers)).toEqual(expect.arrayContaining(expectedReturn))
    })
})