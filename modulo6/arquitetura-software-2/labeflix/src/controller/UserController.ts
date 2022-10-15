import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { User } from "../types/User";

export class UserController {
  static userBusiness = new UserBusiness();

  async create(req: Request, res: Response):Promise<void> {
    try {
      const { email, name, password } = req.body;

      await UserController.userBusiness.create({ email, name, password });

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send({message:error.message})
    }
  }

  public async getAllUsers(req: Request, res: Response):Promise<void>{
    try {
      const users: User[] = await UserController.userBusiness.getAllUsers()

      res.send({users})
    } catch (error: any) {
      res.status(400).send({message:error.message})
    }
  }
}
