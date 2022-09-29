import { Purchase } from "../models/Purchase";
import { BaseDatabase } from "./baseDatabase";
import { ProductDatabase } from "./ProductDatabase";
import { UserDatabase } from "./UserDatabase";


export class PurchaseDatabase extends BaseDatabase{
    static TABLE_PURCHASES = "Labe_Purchases"

    static async getUserPurchases(userId: string){
        const purchases = PurchaseDatabase.connection.raw(`
        SELECT
            ${UserDatabase.TABLE_USERS}.email,
            ${ProductDatabase.TABLE_PRODUCTS}.name AS product_name,
            ${ProductDatabase.TABLE_PRODUCTS}.price AS product_price,
            ${PurchaseDatabase.TABLE_PURCHASES}.quantity AS product_quantity,
            ${PurchaseDatabase.TABLE_PURCHASES}.total_price
        FROM ${PurchaseDatabase.TABLE_PURCHASES}
        JOIN ${UserDatabase.TABLE_USERS}
        ON ${PurchaseDatabase.TABLE_PURCHASES}.user_id = ${UserDatabase.TABLE_USERS}.id
        JOIN ${ProductDatabase.TABLE_PRODUCTS}
        ON ${PurchaseDatabase.TABLE_PURCHASES}.product_id = ${ProductDatabase.TABLE_PRODUCTS}.id
        WHERE ${PurchaseDatabase.TABLE_PURCHASES}.user_id = ${userId};
        `)
        return purchases
    }
    
    static async getPurchaseById(PurchaseId: string){
        const purchase = PurchaseDatabase.connection(PurchaseDatabase.TABLE_PURCHASES).select().where({id: PurchaseId})

        return purchase
    }

    static async createPurchase(newPurchase: Purchase): Promise<void>{
        await PurchaseDatabase.connection(PurchaseDatabase.TABLE_PURCHASES).insert(newPurchase)
    }
}