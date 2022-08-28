const {addBalance}  =  require("../../build/index.js")
const {users} = require("../../build/data.js")
const {invalidValueToAdd} = require("../../build/addBalance/Error.js")
const {seedDataBase, clearDataBase} = require("../../build/helpers/helpers.js")

describe('addBalance',()=>{
    
    beforeEach(()=>{
        clearDataBase()
        seedDataBase()
    })

    test('não é possível adicionar valores nulo e nem valores negativos',()=>{
        const {name, cpf} = users[0]

        expect(()=>addBalance(name, cpf, 0)).toThrow(invalidValueToAdd)
        expect(()=>addBalance(name, cpf, -5)).toThrow(invalidValueToAdd)
    })

    test('ao adicionar saldo o valor é somado ao saldo atual',()=>{
        const userMatched = users.find( (_, i) => i === 0 )
        const {name, cpf} = userMatched
        let expectedBalance = userMatched.balance + 5

        addBalance(name, cpf, 5)

        expect(userMatched.balance).toBe(expectedBalance)

        addBalance(name, cpf, 10)

        expectedBalance += 10

        expect(userMatched.balance).toBe(expectedBalance)

    })


})