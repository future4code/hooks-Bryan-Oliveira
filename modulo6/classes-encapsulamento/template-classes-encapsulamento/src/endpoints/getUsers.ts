import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_USERS } from "../database/tableNames"
import { UserDatabase } from "../models/User"

export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {

        const userDatabase: UserDatabase = new UserDatabase()
        const result = await userDatabase.getUsers()
        
        res.status(200).send({ users: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}