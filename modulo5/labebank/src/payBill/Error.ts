import { users } from "../data"
import { isValidCPF } from "../helpers/helpers"
import { incorrectDateFormatErr, invalidCpfErr } from "../createAccount/Error"
import { invalidValueToAdd } from "../addBalance/Error"
import { userNotFound } from "../getBalance/Error";
import { User } from "../types"

export const insuficientBalanceErr = "saldo insuficiente!"
export const dateIsntInFutureErr = "o pagamento deve ser agendo no futuro"

export function payBillValidator(value: number,  cpf: string, userMatched: User | undefined, description?: string, date?: string){
    if(date){
        const dateNow = new Date()
        const today =  dateNow.getDate()
        const actualMonth =  dateNow.getMonth()
        const actualYear =  dateNow.getFullYear()

        const [day, month, year] = date.split('/').map( num => Number(num) )

        if( isNaN(day) || isNaN(month) || isNaN(year) ) throw new Error(incorrectDateFormatErr)
        if( day > 31 || month > 12 || day === 0 || month === 0 ||  year === 0 ) throw new Error(incorrectDateFormatErr)
        if( (`${day}`.length !== 2 && `${day}`.length !== 1) || (`${month}`.length !== 2 && `${month}`.length !== 1) || `${year}`.length !== 4 )  throw new Error(incorrectDateFormatErr)
    
        if(year < actualYear) throw new Error(dateIsntInFutureErr);
        if(year === actualYear && month < actualMonth ) throw new Error(dateIsntInFutureErr);
        if(year === actualYear && month === actualMonth && day < today) throw new Error(dateIsntInFutureErr);
        
    }

    if(!isValidCPF(cpf)) throw new Error(invalidCpfErr);

    if(!userMatched) throw new Error(userNotFound);

    if(value > userMatched.balance) throw new Error(insuficientBalanceErr)

    if(value <= 0) throw new Error(invalidValueToAdd);
    

}