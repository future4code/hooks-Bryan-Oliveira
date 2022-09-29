import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"
import { ProductDatabase } from "../models/Product"

export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const productDatabase: ProductDatabase = new ProductDatabase()
        const result = await productDatabase.getProducts()
        
        res.status(200).send({ products: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}