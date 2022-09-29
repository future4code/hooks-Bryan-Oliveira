const {payBill}  =  require("../../build/index.js")
const {users} = require("../../build/data.js")
const { incorrectDateFormatErr, invalidCpfErr }= require("../../build/createAccount/Error.js")
const { insuficientBalanceErr, dateIsntInFutureErr }= require("../../build/payBill/Error.js")
const {seedDataBase, clearDataBase} = require("../../build/helpers/helpers.js")


describe("payBill",()=>{
    beforeEach(()=>{
        clearDataBase()
        seedDataBase()
    })

    test("não é possível pagar conta com valor maior que saldo",()=>{
        const user = users[0]
        const {name, cpf, balance} = user
        expect(() => payBill(name, cpf, balance + 1, 'teste')).toThrow(insuficientBalanceErr)
    })

    test("não é possível agendar para um dia que já passou", ()=>{
        const user = users[0]
        const {name, cpf, balance} = user
        
        const dateNow = new Date()
        const today =  dateNow.getDate()
        const actualMonth =  dateNow.getMonth()
        const actualYear =  dateNow.getFullYear()


        expect(() => payBill(name, cpf, balance + 1, 'teste', `${today}/${actualMonth}/${actualYear - 1}`)).toThrow(dateIsntInFutureErr)
        expect(() => payBill(name, cpf, balance + 1, 'teste', `${today}/${actualMonth - 1}/${actualYear}`)).toThrow(dateIsntInFutureErr)
        expect(() => payBill(name, cpf, balance + 1, 'teste', `${today - 1}/${actualMonth}/${actualYear}`)).toThrow(dateIsntInFutureErr)
    })

    test("verifica se o pagamento é adicionado a lista de pagamentos do usuario", ()=>{
        const user = users[1]
        const {name, cpf, balance, spending} = user
        const spendingLengthBefore = spending.length
        
        payBill(name, cpf, balance - 1, 'teste')
        
        expect(spending).toHaveLength(spendingLengthBefore + 1)
    })

    test("verfica se ao pagar a conta o valor é subtraído do saldo",()=>{
        const user = users[1]
        const {name, cpf, balance} = user

        payBill(name, cpf, balance - 1, 'teste')
        
        expect(user.balance).toBe(1)
    })
})