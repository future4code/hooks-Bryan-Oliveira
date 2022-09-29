import { Product } from "../models/Product";
import { BaseDatabase } from "./baseDatabase";

export class ProductDatabase extends BaseDatabase{
    static TABLE_PRODUCTS = "Labe_Products"

    static async createProduct(newProduct: Product): Promise<void>{
        await ProductDatabase.connection(ProductDatabase.TABLE_PRODUCTS).insert(newProduct)
    }

    static async getAllProducts(): Promise<Product[]>{
        const products: Product[] = await ProductDatabase.connection(ProductDatabase.TABLE_PRODUCTS).select()
        return products
    }

    static async getProductById(productId: string){
        const product = await ProductDatabase.connection(ProductDatabase.TABLE_PRODUCTS).select().where({id: productId})
        return product
    }
}