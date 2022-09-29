import knex from "knex"
import dotenv from "dotenv"
import { TABLE_PRODUCTS } from "../database/tableNames";

dotenv.config()

export class Product {
    constructor(
                private id: string,
                private name: string,
                private price: number
    ){}
    
    public getId(): string{
        return this.id
    }

    public getName(): string{
        return this.name
    }

    public getPrice(): number{
        return this.price
    }
}

export class ProductDatabase {
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

    public async createProduct(newProduct: Product): Promise<void>{
        await this.connection(TABLE_PRODUCTS).insert(newProduct)
    }

    public async getProducts(): Promise<Product[]>{
        const products = await this.connection(TABLE_PRODUCTS).select()

        return products
    }

}