const  {createAccount}  =  require("../../build/index.js")
const {users} = require("../../build/data.js")
const {clearDataBase} = require("../../build/helpers/helpers.js")
const { lessThan18Err, invalidCpfErr, incorrectDateFormatErr, duplicatedCpfErr} = require("../../build/createAccount/Error.js")
 
describe("createAccount",()=>{
  
  beforeEach(() => {
    clearDataBase();
  });

  test("usuário menor de 18 anos não pode criar conta",()=>{
    const date = new Date()
    const day = date.getDay()
    const month = date.getUTCMonth() + 1 
    const lessThan18Year = (date.getFullYear()) - 17 
    expect(() => createAccount("Bryan", "145.382.206-20", `${day}/${month}/${lessThan18Year}`)).toThrow(lessThan18Err)
  })

  test("cpf invalido não pode criar conta",()=>{
    const invalidCpf = '111.111.111-11'
    expect(() => createAccount("Bryan", invalidCpf, '23/12/1999')).toThrow(invalidCpfErr)
  })

  test("data no formato incorreto não pode criar conta",()=>{
    
    expect(() => createAccount("Bryan", "145.382.206-20", "0/12/1999")).toThrow(incorrectDateFormatErr)
    expect(() => createAccount("Bryan", "145.382.206-20", "32/12/1999")).toThrow(incorrectDateFormatErr)
    expect(() => createAccount("Bryan", "145.382.206-20", "23/0/1999")).toThrow(incorrectDateFormatErr)
    expect(() => createAccount("Bryan", "145.382.206-20", "23/13/1999")).toThrow(incorrectDateFormatErr)
    expect(() => createAccount("Bryan", "145.382.206-20", "12/dez/1999")).toThrow(incorrectDateFormatErr)
    expect(() => createAccount("Bryan", "145.382.206-20", "test")).toThrow(incorrectDateFormatErr)
  })

  test("cpf que jã possua conta não pode criar nova conta",()=>{
    createAccount("Bryan", "145.382.206-20", "23/12/1999")
    expect(() => createAccount("Bryan", "145.382.206-20", "23/12/1999")).toThrow(duplicatedCpfErr)
  })

  test("verifica se a conta criada tem as propriedades name, cpf, birthDate, balance e sepending",()=>{
    createAccount("Bryan", "145.382.206-20", "23/12/1999")
    const newUser = users[users.length - 1]
    expect(newUser.hasOwnProperty("name")).toBe(true)
    expect(newUser.hasOwnProperty("cpf")).toBe(true)
    expect(newUser.hasOwnProperty("birthDate")).toBe(true)
    expect(newUser.hasOwnProperty("balance")).toBe(true)
    expect(newUser.hasOwnProperty("spending")).toBe(true)
  })

  test("verifica se a conta começa com saldo zerado",()=>{
    createAccount("Bryan", "145.382.206-20", "23/12/1999")
    const newUser = users[users.length - 1]

    expect(newUser.balance).toBe(0)
  })

  test("verifica se a conta começa sem gastos",()=>{
    createAccount("Bryan", "145.382.206-20", "23/12/1999")
    const newUser = users[users.length - 1]

    expect(newUser.spending).toHaveLength(0)
  })
 })