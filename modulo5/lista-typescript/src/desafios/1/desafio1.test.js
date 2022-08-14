const ExportDs1 = require('./desafio1.js')
const { adjustPrice, inventory, adjustInventory, sorByQuantity } = ExportDs1
describe('desafio 1',() => {
    test('it shlould adjust price param for a BR format',()=>{
        const Test = 55
        const expectedResult = 'R$ 55,00'

        expect(adjustPrice(Test)).toBe(expectedResult)
    })

    test('it should sort itens by quantity', ()=>{
        const expectedResult = [
            { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
            { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
            { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
            { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
            { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
            { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
            { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
        ]

        const result = inventory.sort(sorByQuantity)

        expect(result[0]).toEqual(expectedResult[0])
        expect(result[1]).toEqual(expectedResult[1])
        expect(result[result.length-1]).toEqual(expectedResult[expectedResult.length-1])
    })

    test('it should sort itens by quantity and adjust price for BR format',()=>{
        const expectedResult = [
            { nome: "O precioso", quantidade: 1, valorUnitario: 'R$ 9181,92'},
            { nome: "Plumbus", quantidade: 13, valorUnitario: 'R$ 140,44'},
            { nome: "Laço da verdade", quantidade: 32, valorUnitario: 'R$ 571,50'},
            { nome: "MacMugffin", quantidade: 37, valorUnitario: 'R$ 51,04'},
            { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 'R$ 210,00'},
            { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 'R$ 17,00'},
            { nome: "Pokebola", quantidade: 200, valorUnitario: 'R$ 99,99'}
        ]

        const result = adjustInventory(inventory)

        expect(result[0]).toEqual(expectedResult[0])
        expect(result[1]).toEqual(expectedResult[1])
        expect(result[result.length-1]).toEqual(expectedResult[expectedResult.length-1])
    })
})