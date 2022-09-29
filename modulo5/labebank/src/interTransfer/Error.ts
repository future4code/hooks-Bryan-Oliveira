import { users } from "../data"
import { isValidCPF } from "../helpers/helpers"
import { invalidCpfErr } from "../createAccount/Error"
import { invalidValueToAdd } from "../addBalance/Error"
import { insuficientBalanceErr } from "../payBill/Error"
import { User } from "../types"

export const senderNotFoundErr = "remetente náo encontrado"
export const receiverNotFoundErr = "destinatário náo encontrado"

export function interTranferValidator(senderName: string, senderCpf: string, receiverNmae: string, receiverCpf: string, value: number, senderMatched: User | undefined, receiverMatched: User | undefined){

    if(!isValidCPF(senderCpf)) throw new Error(invalidCpfErr);
    if(!isValidCPF(receiverCpf)) throw new Error(invalidCpfErr);

    if(!senderMatched ) throw new Error(senderNotFoundErr);
    if(!receiverMatched ) throw new Error(receiverNotFoundErr);
    
    if(value > senderMatched.balance) throw new Error(insuficientBalanceErr)

    if(value <= 0) throw new Error(invalidValueToAdd);
    
}