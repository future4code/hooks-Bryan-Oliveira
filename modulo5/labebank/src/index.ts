import { users } from "./data";
import { NewUSer, User, Spent } from "./types";

import { adjustPrice  } from "./helpers/helpers";

import { createAccountValidator } from "./createAccount/Error";
import { getBalanceValidator } from "./getBalance/Error";
import { addBalanceValidator } from "./addBalance/Error";
import { payBillValidator } from "./payBill/Error";
import { interTranferValidator } from "./interTransfer/Error";

export function createAccount (name:string, cpf:string, birthDate:string): User[]{

    const newUserName: string = name.trim()
    const newUsercpf = cpf.trim()
    const newUserbirthDate = birthDate.trim()

    const newUSer: NewUSer = {
        name: newUserName, 
        cpf: newUsercpf, 
        birthDate: newUserbirthDate}
    
    createAccountValidator(newUserName, newUsercpf, newUserbirthDate)

    users.push({...newUSer, balance:0, spending: []})
    return users
}

export function getBalance(name: string | undefined, cpf: string): number{
    const userMatched = users.find( user => user.cpf === cpf )
    
    getBalanceValidator( cpf, userMatched)

    return (userMatched as User).balance
}

export function addBalance(name: string, cpf: string, value: number): string {

    const userMatched = users.find( user => user.cpf === cpf && user.name.toLowerCase() === name.toLowerCase() ) 
    addBalanceValidator(name, cpf, value, userMatched)
    
    users.forEach( user => {
        if(user.cpf === userMatched?.cpf){
            user.balance = user.balance + value
        }
    })

    return `Valor adicionado: ${adjustPrice(value)},  saldo atual: ${adjustPrice((userMatched as User).balance)}`
}

export function payBill( name: string , cpf: string, value: number, description?: string, date?: string,){
    const paymentDate = date? date : new Date()
    const today = !date && (paymentDate as Date).getDate()
    const actualMonth = !date && (paymentDate as Date).getMonth()
    const actualYear = !date && (paymentDate as Date).getFullYear()

    const userMatched = users.find( user => user.cpf === cpf && user.name.toLowerCase() === name.toLowerCase() ) 

    payBillValidator(value,   cpf, userMatched, description, date)

    userMatched && users.forEach( user => {
        if(user.cpf === userMatched.cpf){
            user.balance = userMatched.balance - value
        }
    })
    userMatched && (userMatched as User).spending.push({value, description: description? description : "", date: date? date :  `${today}/${actualMonth}/${actualYear}`})

    return userMatched?.spending

}

export function internTransfer (senderName: string, senderCpf: string, receiverName: string, receiverCpf: string, value: number){

    const senderMatched = users.find( user => user.cpf === senderCpf && user.name.toLowerCase() === senderName.toLowerCase() )
    const receiverMatched = users.find( user => user.cpf === receiverCpf && user.name.toLowerCase() === receiverName.toLowerCase() )
    
    interTranferValidator(senderName, senderCpf, receiverName, receiverCpf, value, senderMatched, receiverMatched)

    users.forEach(user => {

        if(user.cpf === senderCpf){
            user.balance-= value
        }

        if(user.cpf === receiverCpf){
            user.balance+= value
        }
    })

    return [senderMatched, receiverMatched]

}