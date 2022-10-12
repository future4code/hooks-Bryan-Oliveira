import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

export abstract class BaseDatabase {
    abstract TABLE_NAME: String;

    protected static connection = knex({
       client: "mysql",
       connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: 3306
     }
    })
}