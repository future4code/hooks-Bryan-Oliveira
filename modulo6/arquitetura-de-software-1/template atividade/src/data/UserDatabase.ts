import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatavbase extends BaseDatabase{
    TABLE_NAME = 'User_Arq'

    public async create(user: User): Promise<void>{
        try {
            await UserDatavbase.connection(this.TABLE_NAME).insert(user)
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getAll(): Promise<User[]>{
        try {
            const result = await UserDatavbase.connection(this.TABLE_NAME).select()

            return result

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async delete(id: string): Promise<void>{
        try {
            await UserDatavbase.connection(this.TABLE_NAME).where({id}).del()
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

}