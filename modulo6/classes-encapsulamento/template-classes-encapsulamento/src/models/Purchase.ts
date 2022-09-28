import knex from "knex"
import dotenv from "dotenv"
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames";

dotenv.config()

export class Purchase{
    constructor(
                private id:string,
                private user_id: string,
                private product_id: string,
                private quantity: number,
                private total_price: number
    ){}
    
    public getId(): string{
        return this.id
    }

    public getUserId(): string{
        return this.user_id
    }

    public getProductId(): string{
        return this.product_id
    }

    public getQuantity(): number{
        return this.quantity
    }

    public getTotalPrice(): number{
        return this.total_price
    }

}

export class PurchaseDatabase {
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

    public async createPurchase(newPurchase: Purchase): Promise<void>{
        await this.connection(TABLE_PURCHASES).insert(newPurchase)
    }

    public async getPurchases(user_id: string): Promise<Purchase[]>{
        const purchases = await this.connection.raw(`
        SELECT
            ${TABLE_USERS}.email,
            ${TABLE_PRODUCTS}.name AS product_name,
            ${TABLE_PRODUCTS}.price AS product_price,
            ${TABLE_PURCHASES}.quantity AS product_quantity,
            ${TABLE_PURCHASES}.total_price
        FROM ${TABLE_PURCHASES}
        JOIN ${TABLE_USERS}
        ON ${TABLE_PURCHASES}.user_id = ${TABLE_USERS}.id
        JOIN ${TABLE_PRODUCTS}
        ON ${TABLE_PURCHASES}.product_id = ${TABLE_PRODUCTS}.id
        WHERE ${TABLE_PURCHASES}.user_id = ${user_id};
        `)

        return purchases
    }
}