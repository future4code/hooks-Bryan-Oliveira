import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_USERS } from "../database/tableNames"
import { User, UserDatabase } from "../models/User"

export const createUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            throw new Error("Body inválido.")
        }
        const userDatabase: UserDatabase = new UserDatabase()

        const duplicatedEmail = await userDatabase.getUserByEmail(email)

        if(duplicatedEmail.length){
           throw new Error("email já cadastrado");
            
        }
        
        const id = Date.now().toString()
        const newUser: User = new User(id, email, password)
        
        await userDatabase.createUser(newUser)

        res.status(201).send({ message: "Usuário criado", user: newUser })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}