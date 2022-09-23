import { Request, Response } from "express"
import { connection } from "../../connection"
import { tableProductsName, tablePurchasesName, tableUsersName } from "../migrations/tableNames"

export const getUsers = async (req: Request, res: Response)=>{
    let errorCode = 400

    try {
        const users = await connection(`${tableUsersName} as u`)
                                // .join(`${tablePurchasesName} as p`, `p.user_id`, `u.id` )
                                .select()


        if(users.length < 1){
            errorCode = 404 
            throw new Error("nenhum usuário encontrado!")
        }

        res.status(200).send(users)
    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}

export const getProducts = async (req: Request, res: Response)=>{
    let errorCode = 400

    try {
        let order = req.query.order as string
        let search = req.query.search as string

        if(order?.toUpperCase()!== 'ASC' && order?.toUpperCase()!== 'DESC'){
            order = 'ASC'
        }

        if(!search){
            search = '%'
        }

        const products = await connection(tableProductsName)
                                    .select()
                                    .where('name', 'like', `%${search}%`)
                                    .orderBy('name', order)

        if(products.length < 1){
            errorCode = 404 
            throw new Error("nenhum produto encontrado!")
        }

        res.status(200).send(products)
    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}

export const getPurchases = async (req: Request, res: Response)=>{
    let errorCode = 400
    
    try {
        const purchases = await connection(tablePurchasesName).select()

        if(purchases.length < 1){
            errorCode = 404 
            throw new Error("nenhum produto encontrado!")
        }

        res.status(200).send(purchases)
    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}
