import { BaseEntity } from "./BaseEntity";

export type NewFriendshipInput = {
    user1Id: string,
    user2Id: string
}

export class Friendship extends BaseEntity{
    constructor(
        private user1_id: string,
        private user2_id: string,
        id?: string
    ){
        super(id)
    }

    getUser1Id(): string{
        return this.user1_id
    }

    getUser2Id(): string{
        return this.user2_id
    }
}