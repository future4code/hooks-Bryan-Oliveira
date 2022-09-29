import { invalidCpfErr } from "../createAccount/Error"
import { users } from "../data";
import { isValidCPF } from "../helpers/helpers";
import { User } from "../types";
import { userNotFound } from "../getBalance/Error";

export const invalidValueToAdd = "insira um valor numerico maior que 0"

export function addBalanceValidator(name: string, cpf: string, value: number , userMatched: User | undefined) {

    if(isNaN(value)) throw new Error(invalidValueToAdd)

    if(value<=0) throw new Error(invalidValueToAdd);
    
    if(!isValidCPF(cpf)) throw new Error(invalidCpfErr);
    
    if(!userMatched) throw new Error(userNotFound);
    
}