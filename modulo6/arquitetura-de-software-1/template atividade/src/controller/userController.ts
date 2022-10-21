import { Request, Response } from "express"
import { UserBusiness } from "../business/userBusiness";

const userBusiness = new UserBusiness()

export const createUSer = async(req: Request, res: Response) =>{
    try {
        const input = {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password
        }

        await userBusiness.createUser(input);

        res.status(201).send({ message: "Usuário criado!" });

    } catch (error:any) {
        res.status(400).send({ error: error.message });
    }
}

export const getAllUSers = async (req: Request, res: Response) => {
    try {
        const users = await userBusiness.getAll()

        res.status(200).send({users})
    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string

        userBusiness.deleteUser(id)

        res.send('ususario deletado!')
    } catch (error: any) {
        res.status(400).send({ error: error.message });
        
    }
}