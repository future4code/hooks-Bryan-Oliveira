import { isValidDate } from "../services/isValidDate";
import { BaseEntity } from "./BaseEntity";

export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }
 
 export type NewPostInput = {
     authorId: string,
     description: string,
    photo: string,
    type: POST_TYPES,
    createdAt: string | Date
 }

export class Post extends BaseEntity{
    constructor(
        private author_id: string,
        private description: string,
        private photo: string,
        private type?: POST_TYPES,
        private created_at?: Date,
        id?: string,
    ){
        super(id)

        this.setCreatedAt(created_at)
        this.setType(type)
    }

    setCreatedAt(createdAt: Date | undefined | string): void{

        try {
            
            if(typeof(createdAt)==='string' && !isValidDate(createdAt)) throw new Error("must pass a valid ate format");
            if(!createdAt) createdAt = new Date()
            
            createdAt = new Date(createdAt)
            this.created_at = createdAt
            

        } catch (error: any) {
            throw new Error(error.message);
            
        }
    }

    setType(type: POST_TYPES | undefined){
        this.type = type || POST_TYPES.NORMAL
    }
}