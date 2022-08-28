import { invalidCpfErr } from "../createAccount/Error"
import { users } from "../data";
import { isValidCPF } from "../helpers/helpers";
import { User } from "../types";

export const userNotFound = "usuário não encontrado!"

export function getBalanceValidator(name: string, cpf: string, userMatched: User | undefined): void {

    if(!isValidCPF(cpf)) throw new Error(invalidCpfErr);
    
    if(!userMatched) throw new Error(userNotFound);
    
}