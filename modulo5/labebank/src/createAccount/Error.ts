import { users } from "../data"
import { isValidCPF, howManyYears } from "../helpers/helpers"

export const lessThan18Err = 'para cirar uma conta o usuário deve ter 18 ou mais anos de idade'
export const invalidCpfErr = 'cpf invalido!'
export const incorrectDateFormatErr = 'passe a data no formato dd/mm/aaaa'
export const duplicatedCpfErr = 'já existe uma conta com esse cpf'

export function createAccountValidator(name:string, cpf:string, birthDate:string) {

    const [day, month, year] = birthDate.split('/').map( num => Number(num) )
    const age = howManyYears(day, month, year)

    if( isNaN(day) || isNaN(month) || isNaN(year) ) throw new Error(incorrectDateFormatErr)
    if( day > 31 || month > 12 || day === 0 || month === 0 ||  year === 0 ) throw new Error(incorrectDateFormatErr)
    if( (`${day}`.length !== 2 && `${day}`.length !== 1) || (`${month}`.length !== 2 && `${month}`.length !== 1) || `${year}`.length !== 4 )  throw new Error(incorrectDateFormatErr)
    
    if(age < 18) throw new Error(lessThan18Err)
    
    if(!isValidCPF(cpf)) throw new Error(invalidCpfErr);

    const duplicatedCpf = users.find( user => user.cpf === cpf)

    if(duplicatedCpf) throw new Error(duplicatedCpfErr);
    
}