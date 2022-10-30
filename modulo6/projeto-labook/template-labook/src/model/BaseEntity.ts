import { v4 as generateId } from "uuid"

export class BaseEntity{
    constructor(
        protected id?: string
    ){
        this.id = id || generateId() 
    }
}