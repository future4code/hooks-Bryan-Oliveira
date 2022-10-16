import { Request, Response } from "express";
import { FriendsBusiness } from "../business/FriendshipBusiness";
import { Friendship } from "../model/Friendship";

export class FriendshipController{
    static friendsipBusiness: FriendsBusiness = new FriendsBusiness()

    async createFriendship(req: Request,res: Response): Promise<void>{
        try {
            const user1Id: string = req.body.user1Id as string
            const user2Id: string = req.body.user2Id as string

            const newFrienshipInput = {user1Id, user2Id}
            await FriendshipController.friendsipBusiness.createFriendship(newFrienshipInput)

            res.status(201).send({message: 'success!'})
        } catch (error: any) {
            res.status(400).send({message: error.message})
        }
    }

    async getAllFirendships(req: Request,res: Response):Promise<void>{
        try {
            const friendships: Friendship[] = await FriendshipController.friendsipBusiness.getAllFriendships()

            res.status(200).send({friendships})
        } catch (error: any) {
            res.status(400).send({message: error.message})
        }
    }

    async deleteFriendship(req: Request,res: Response): Promise<void>{
        try {
            const id: string = req.params.id as string

            await FriendshipController.friendsipBusiness.deleteFriendship(id)

            res.send({message: 'friendship was removed'})
        } catch (error: any) {
            res.status(400).send({message: error.message})
            
        }
    }

    async getFriendsIds(req: Request,res: Response): Promise<void>{
        try {
            const id: string = req.params.id as string

           const friends =  await FriendshipController.friendsipBusiness.getFriendsIds(id)

           res.send(friends)
        } catch (error: any) {
            res.status(400).send({message: error.message})
            
        }
    }
}