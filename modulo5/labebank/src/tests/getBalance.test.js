const {getBalance, createAccount} = require("../../build/index.js")
const {users} = require("../../build/data.js")
const {clearDataBase} = require("../../build/helpers/helpers.js")
const {userNotFound, invalidCpfErr} = require("../../build/getBalance/Error.js")

describe("getBalance",()=>{
    beforeEach(() => {
        clearDataBase();
      });
    
    test("retorna erro quando passado cpf que não consta no banco de dados",()=>{
        expect(() => getBalance( "bryan" , "145.382.206-20")).toThrow(userNotFound)
    })

    test("cpf invalido não pode pegar saldo",()=>{
        const invalidCpf = '111.111.111-11'
        expect(() => createAccount("Bryan", invalidCpf, '23/12/1999')).toThrow(invalidCpfErr)
    })

    test("retorna erro quando passado nome que não consta no banco de dados",()=>{
        createAccount("Bryan", "145.382.206-20", "23/12/1999")
        expect(() => getBalance( "maria" , "145.382.206-20")).toThrow(userNotFound)
    })
    
    test("a função deve retornar o saldo do usuário encontrado",()=>{
        const cpf = "145.382.206-20"
        createAccount("Bryan", cpf, "23/12/1999")
        const user = users[users.length - 1]

        const result = getBalance("Bryan", cpf)

        expect(result).toBe(user.balance)
    })
    
})