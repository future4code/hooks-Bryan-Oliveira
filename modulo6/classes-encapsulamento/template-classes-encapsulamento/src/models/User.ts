import knex from "knex"
import dotenv from "dotenv"
import { TABLE_USERS } from "../database/tableNames"

dotenv.config()

export class User {
    constructor(
                private id: string,
                private email: string,
                private password: string
                ){}

    public getId(): string{
        return this.id
    }

    public getEmail(): string{
        return this.email
    }

    public getPassword(): string{
        return this.password
    }
}

export class UserDatabase {


    private connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      multipleStatements: true
   },
});

    public async createUser(newUser: User): Promise<void>{
        await this.connection(TABLE_USERS).insert(newUser)
    }

    public async getUsers(): Promise<User[]>{
        const users = await this.connection(TABLE_USERS).select()

        return users
    }

    public async getUserByEmail(email: string): Promise<any[]>{
        const user = await this.connection(TABLE_USERS).select().where('email', 'like', email)

        return user
    }

}