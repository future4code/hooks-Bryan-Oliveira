import { BaseEntity } from "./BaseEntity";

export class Like extends BaseEntity{
    constructor(
        private user_id: string,
        private post_id: string,
        id?: string
    ){
        super(id)
    }
}