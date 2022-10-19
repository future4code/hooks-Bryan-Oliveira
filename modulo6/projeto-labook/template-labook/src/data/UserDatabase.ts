import { Post } from "../model/Post";
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";
import { PostDatabase } from "./PostDatabase";

export class UserDatabase extends BaseDatabase{
    static TABLE_NAME = 'labook_users'
    
    static async create(user: User):Promise<void>{
        try {
            await UserDatabase.connection(UserDatabase.TABLE_NAME).insert(user)
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }

    static async getById(id:string): Promise<any[]>{
        try {
           const user =  await UserDatabase.connection(UserDatabase.TABLE_NAME).where({id}).select()

            return user
             
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }

    static async getTwoById(user1_id:string, user2_id: string): Promise<User[]>{
        try {
           const users: User[] =  await UserDatabase.connection(UserDatabase.TABLE_NAME).where({id: user1_id})
                                .orWhere({id: user2_id})
                                .select<any, User[]>()

            return users
             
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }

    static async getByEmail(email:string): Promise<any>{
        try {
           const user =  await UserDatabase.connection(UserDatabase.TABLE_NAME).where({email}).select()

            return user
             
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }

    static async getAll(): Promise<User[]>{
        try {
            const users: User[] =  await UserDatabase.connection(UserDatabase.TABLE_NAME).select<any, User[]>()
            return users
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }

    static async getUserPosts(id: string): Promise<any[]>{
        try {
            const posts = await UserDatabase.connection(`${UserDatabase.TABLE_NAME} as user`)
                                                .where({'user.id': id})
                                                .join(`${PostDatabase.TABLE_NAME} as post`, `post.author_id`, '=', `user.id`)
                                                .select('post.id','post.photo', 'post.type',  'post.description', 'post.created_at', 'post.author_id' )


            return posts
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }

    static async getUserFeed(friendsIds: string[], page?: number){
        try {
            page = page? page : 1
            const posts = await UserDatabase.connection(`${UserDatabase.TABLE_NAME} as user`)
                                .where( builder => builder.whereIn('user.id', friendsIds))
                                .join(`${PostDatabase.TABLE_NAME} as post`, `post.author_id`, '=', `user.id`)
                                .select('post.id','post.photo', 'post.type',  'post.description', 'post.created_at', 'post.author_id' )
                                .orderBy('post.created_at', 'desc')
                                .limit(5)
                                .offset(5 * page)


            return posts
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }

}

// # "createdAtt": ""