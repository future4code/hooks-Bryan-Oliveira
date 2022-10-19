import { Friendship } from "../model/Friendship";
import { BaseDatabase } from "./BaseDatabase";

export class FriendshipDatabase extends BaseDatabase{
    static TABLE_NAME = 'labook_firends'

    static async create(newFriends: Friendship):Promise<void>{
        try {
            await FriendshipDatabase.connection(FriendshipDatabase.TABLE_NAME).insert(newFriends)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }

    static async getAll(): Promise<Friendship[]>{
        try {
            const friends: Friendship[] = await FriendshipDatabase.connection(FriendshipDatabase.TABLE_NAME)
                                                .select<any, Friendship[]>()
            return friends
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);    
        }
    }

    static async getById(id: string):Promise<Friendship>{
        try {
            const friends: Friendship[] = await FriendshipDatabase.connection(FriendshipDatabase.TABLE_NAME)
                                                .select<any, Friendship[]>()
                                                .where({id})

            return friends[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);    
            
        }
    }

    static async remove(id: string):Promise<void>{
        try {
            await FriendshipDatabase.connection(FriendshipDatabase.TABLE_NAME).where({id}).del()
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);    
            
        }
    }

    static async getByUsersIds(user1_id: string, user2_id: string):Promise<Friendship>{
        try {
            const friends: Friendship[] = await  FriendshipDatabase.connection(FriendshipDatabase.TABLE_NAME).where({user1_id, user2_id})
                                        .orWhere({user1_id: user2_id, user2_id: user1_id})
                                        .select<any, Friendship[]>()

            return friends[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);    
            
        }
    }

    static async getUserFriendships(userId: string):Promise<any[]>{
        try {
            const friendships1 = await FriendshipDatabase.connection(FriendshipDatabase.TABLE_NAME)
                                                        .where({user1_id: userId})
                                                        .select('user2_id')
                                                        

            const friendships2 = await FriendshipDatabase.connection(FriendshipDatabase.TABLE_NAME)
                                            .where({user2_id: userId})
                                            .select('user1_id')

            const friendships = [...friendships1, ...friendships2]
                                                        
            return friendships
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);    
             
        }
    }

}