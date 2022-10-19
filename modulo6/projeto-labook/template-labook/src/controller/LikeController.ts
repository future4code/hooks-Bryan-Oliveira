import { Request, Response } from "express";
import { LikeBusiness } from "../business/LikeBusiness";

export class LikeController {
    static likeBusiness = new LikeBusiness()

    async likePost(req: Request, res: Response):Promise<void> {
        try {
            const {userId, postId} = req.body
            const input = {userId, postId}
            await LikeController.likeBusiness.likePost(input)
            res.status(201).send({message: 'Success'})
        } catch (error: any) {
            res.status(400).send({message: error.sqlMessage || error.message})
        }
    }
}