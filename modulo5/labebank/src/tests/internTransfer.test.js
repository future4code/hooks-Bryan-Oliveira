const {internTransfer} = require("../../build/index.js")
const {users} = require("../../build/data.js")
const {clearDataBase, seedDataBase} = require("../../build/helpers/helpers.js")
const {insuficientBalanceErr} = require("../../build/payBill/Error.js")

describe("internTransfer",()=>{
    beforeEach(()=>{
        clearDataBase()
        seedDataBase()
    })

    test('usuário com saldo insuficiente não pode transferir', ()=>{
        const user1 = users[1]
        const user2 = users[0]

        expect(() => internTransfer(user1.name, user1.cpf,
                        user2.name, user2.cpf,
                        user1.balance + 1
            )).toThrow(insuficientBalanceErr)

    })

    test('usuário remetente ao transferir deve ter do seu saldo subtraído o valor transferido',()=>{
        const user1 = users[1]
        const user2 = users[0]

        internTransfer(user1.name, user1.cpf,
            user2.name, user2.cpf,
            user1.balance - 1)

        expect(user1.balance).toBe(1)
    })

    test('usuário destinatário ao transferir deve ter do seu saldo somado o valor transferido',()=>{
        const user1 = users[1]
        const user2 = users[0]

        const BalanceUser1Before = user1.balance
        const BalanceUser2Before = user2.balance

        internTransfer(user1.name, user1.cpf,
            user2.name, user2.cpf,
            BalanceUser1Before - 1 )

        expect(user2.balance).toBe(BalanceUser2Before + BalanceUser1Before - 1)
    })
})