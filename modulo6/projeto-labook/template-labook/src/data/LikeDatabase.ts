import { Like } from "../model/Like";
import { BaseDatabase } from "./BaseDatabase";

export class LikeDatabase extends BaseDatabase{
    static TABLE_NAME = 'labook_post_likes'

    static async create(newPostLike: Like): Promise<void>{
        try {
            await LikeDatabase.connection(LikeDatabase.TABLE_NAME).insert(newPostLike)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);           
        }
    }

    static async delete(user_id: string, post_id: string): Promise<void>{
        try {
            await LikeDatabase.connection(LikeDatabase.TABLE_NAME).where({user_id, post_id}).del()
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);           
        }
    }

    static async getByUserAndPostIds(user_id: string, post_id: string): Promise<Like>{
        try {
            const like: Like[] = await LikeDatabase.connection(LikeDatabase.TABLE_NAME)
                                        .where({user_id, post_id})
                                        .select<any, Like[]>()
            return like[0]
        } catch (error: any) {
        throw new Error(error.sqlMessage || error.message);           
        }
    }

}