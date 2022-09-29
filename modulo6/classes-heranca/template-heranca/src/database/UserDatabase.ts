import { BaseDatabase } from "./baseDatabase";
import { TABLE_USERS } from "./tableNames";
import { User } from "../models/User";

export class UserDatabase extends BaseDatabase {
    static TABLE_USERS = "Labe_Users"

    static async getAllUsers():Promise<User[]>{
        const users: User[] = await UserDatabase.connection(UserDatabase.TABLE_USERS)
        
        return users
    }
    static async createUser(newUser: User):Promise<void>{
        await UserDatabase.connection(UserDatabase.TABLE_USERS).insert(newUser)
    }
    static async getUsetById(userId: string):Promise<any>{
        const user  = await UserDatabase.connection(UserDatabase.TABLE_USERS).where({id: userId})
        
        return user
    }
}   