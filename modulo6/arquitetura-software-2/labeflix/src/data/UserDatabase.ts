import { User } from "../types/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create({ id, name, email, password }: any): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  public async getAll(): Promise<User[]>{
    try {

      const users = await UserDatabase.connection(UserDatabase.TABLE_NAME).select()
      return users

    } catch (error: any) {
      
      throw new Error(error.sqlMessage || error.messages);
      
    }
  }
}
