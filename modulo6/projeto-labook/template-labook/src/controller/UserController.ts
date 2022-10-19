import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { NewUserInput, User } from "../model/User"



export class UserController{
    static userBusinness: UserBusiness = new UserBusiness()

     create = async (req: Request, res: Response): Promise<void> => {
        try {
           let message = "Success!"

           const name = req.body.name as string
           const email = req.body.email as string
           const password = req.body.password as string

           const input: NewUserInput = {name , email, password}

           await UserController.userBusinness.create(input)
     
           res.status(201).send({ message })
     
        } catch (error:any) {
           res.statusCode = 400
           let message = error.sqlMessage || error.message
           res.send({ message })
        }
     }

     async getAllUsers(req: Request, res: Response): Promise<void>{
      try {
         const users: User[] = await UserController.userBusinness.getAll()

         res.status(200).send({users})
      } catch (error: any) {
         res.statusCode = 400
           let message = error.sqlMessage || error.message
           res.send({ message })
      }
     }

     async getUserFeed(req: Request, res: Response): Promise<void>{
      try {
         const id = req.params.id
         const page: number = Number(req.query.page)
         const result = await UserController.userBusinness.getUserFeed(id, page)

         res.send(result)
      } catch (error: any) {
         res.statusCode = 400
           let message = error.sqlMessage || error.message
           res.send({ message })
      }
     }
}