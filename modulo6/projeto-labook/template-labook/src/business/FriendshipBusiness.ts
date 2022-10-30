import { FriendshipDatabase } from "../data/FriendsDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { Friendship, NewFriendshipInput } from "../model/Friendship";

export class FriendsBusiness{
    async createFriendship(newFriendshipInput: NewFriendshipInput): Promise<void>{
        try {
            const {user1Id, user2Id} = newFriendshipInput

            if(!user1Id || !user2Id)throw new Error("users ids must be passed");
            
            const [user1] = await  UserDatabase.getById(user1Id)
            const [user2] = await  UserDatabase.getById(user2Id)

            if(!user1)throw new Error("user1Id not found");
            if(!user2)throw new Error("user2Id not found");

            const findFirendshipByUsersId = await FriendshipDatabase.getByUsersIds(user1Id, user2Id)
            if(findFirendshipByUsersId) throw new Error("users are alredy friends");

            const newFriendship: Friendship = new Friendship(user1Id, user2Id)
            await FriendshipDatabase.create(newFriendship)
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);    
        }
    }

    async getAllFriendships(): Promise<Friendship[]>{
        try {
            const friendships: Friendship[] = await FriendshipDatabase.getAll()

            if(!friendships.length)throw new Error("no friendships found");
            

            return friendships
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);    
            
        }
    }

    async deleteFriendship(id: string): Promise<void>{
        try {
            const friendship = await FriendshipDatabase.getById(id)

            if(!friendship)throw new Error("friendship not found");

            await FriendshipDatabase.remove(id)
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);    
            
        }
    }

    async getFriendsIds(id: string): Promise<string[]>{
        try {
            const friendships = await FriendshipDatabase.getUserFriendships(id)

            if(!friendships.length)throw new Error("user has no friendships");     

            const [teste] = friendships

            console.log(friendships)

            const friends: string[] = friendships
                                        .map(friendship => friendship?.user1_id? friendship.user1_id : friendship.user2_id)

            return friends

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);    
            
        }
    }
}