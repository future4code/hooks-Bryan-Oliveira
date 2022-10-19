import knex from "knex"
import dotenv from "dotenv"
import Knex from "knex"

dotenv.config()

export abstract class BaseDatabase{

   protected static connection: Knex = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: 3306,
      multipleStatements: true
   }
})

static async migrations(): Promise<void>{
   try {
      BaseDatabase.connection
   .raw(`
      CREATE TABLE IF NOT EXISTS labook_users(
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS labook_posts(
         id VARCHAR(255) PRIMARY KEY,
         photo VARCHAR(255) NOT NULL,
         description VARCHAR(255) NOT NULL,
         type ENUM("normal","event") DEFAULT "normal",
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
         author_id VARCHAR(255),
         FOREIGN KEY (author_id) REFERENCES labook_users (id)
      );

      CREATE TABLE IF NOT EXISTS labook_firends(
         id VARCHAR(255) PRIMARY KEY,
         user1_id  VARCHAR(255) NOT NULL,
         user2_id  VARCHAR(255) NOT NULL,
         FOREIGN KEY (user1_id) REFERENCES labook_users (id),
         FOREIGN KEY (user2_id) REFERENCES labook_users (id)
      );

      CREATE TABLE IF NOT EXISTS labook_post_likes(
         id VARCHAR(255) PRIMARY KEY,
         post_id  VARCHAR(255) NOT NULL,
         user_id  VARCHAR(255) NOT NULL,
         FOREIGN KEY (post_id) REFERENCES labook_posts (id),
         FOREIGN KEY (user_id) REFERENCES labook_users (id)
      )
   `)
   .then(console.log)
   .finally(process.exit)
   } catch (error: any) {
      console.log(error)
   }
}

}