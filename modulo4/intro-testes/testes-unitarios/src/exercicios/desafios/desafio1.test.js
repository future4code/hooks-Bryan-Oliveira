import { ordenaNumeros } from './desafio1'
describe("checa função que ordena números", ()=>{
    test('retorna true para entarda=[3, 2, 1] saída=[1, 2, 3]',()=>{
        const resultado = ordenaNumeros([3, 2, 1])

        expect(resultado).toEqual([1, 2, 3])
    })
    test('retorna true para entarda=[4, 7, 1, 3] saída=`[1, 3, 4, 7]`',()=>{
        const resultado = ordenaNumeros([4, 7, 1, 3])

        expect(resultado).toEqual([1, 3, 4, 7])
    })
    test('retorna true para entarda=[20, -1, -4, 0, 6] saída=[-4, -1, 0, 6, 20]',()=>{
        const resultado = ordenaNumeros([20, -1, -4, 0, 6])

        expect(resultado).toEqual([-4, -1, 0, 6, 20])
    })
})