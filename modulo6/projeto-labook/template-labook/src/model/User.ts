import { BaseEntity } from "./BaseEntity"

export class User extends BaseEntity{
    constructor(
        private name: string,
        private email: string,
        private password: string,
        id?: string,
        ){
            super(id)
        }
        
     
}

export type NewUserInput = {
    name: string, 
    email: string, 
    password: string
 }