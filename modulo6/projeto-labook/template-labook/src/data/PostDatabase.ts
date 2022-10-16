import { Post } from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase{
    static TABLE_NAME = "labook_posts"

    static async create(newPost: any) {

        try {
            
            await PostDatabase.connection(PostDatabase.TABLE_NAME).insert(newPost)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }

    static async getAll(): Promise<Post[]>{
        try {
            const posts: Post[] =  await PostDatabase.connection(PostDatabase.TABLE_NAME).select<any, Post[]>()

            return posts
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }

    static async getById(id: string): Promise<Post>{
        try {
             const post: Post[]  = await PostDatabase.connection(PostDatabase.TABLE_NAME).select<any, Post[]>().where({id})

            return post[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }

    
}