import { Request, Response } from "express"
import { connection } from "../connection"
import selectAllUsers from "./Queries"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{

    
    try {
        let name = req.query.name as string
        let type = req.query.type as string
        let sort = req.query.sort as string
        let order = req.query.order as string
        let limit = Number(req.query.limit)
        let page = Number(req.query.page)
        // let {name, type, sort, order} = req.query

        if(!name) {
            name = `%`
        }

        if(!type) {
            type = `%`
        }

        if(!sort || sort.toLowerCase()!=='name' && sort.toLowerCase()!=='type'){
            sort = 'email'
        }

        if(!order || order.toLowerCase()!=='asc' && order.toLowerCase()!=='desc'){
            order = 'ASC'
        }

        if(!limit || limit < 1){
            limit = 5 
        }

        if(!page || page < 1){
            page = 1
        }

        const offset = limit * (page - 1)

       const users = await connection('aula48_exercicio')
                            .select()
                            .where('name', 'like', `%${name}%`)
                            .where('type', 'like', `%${type}%`)
                            .orderBy(sort, order)
                            .limit(limit)
                            .offset(offset)

       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }