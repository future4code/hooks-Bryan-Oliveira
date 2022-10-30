import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { NewPostInput, Post, POST_TYPES } from "../model/Post"

export class PostController{
    static postBusiness: PostBusiness = new PostBusiness()

    createPost = async(req: Request, res: Response) => {
        try {
           let message = "Success!"
     
           const  photo = req.body.photo as string
           const  description = req.body.description as string
           const  type = req.body.type as POST_TYPES
           const  authorId = req.body.authorId as string
           const  createdAt = req.body.createdAt as string

           const input: NewPostInput = {photo, description, type, authorId, createdAt}
     
           await PostController.postBusiness.createPost(input)
     
           res.status(201).send({ message })
     
        } catch (error:any) {
           let message = error.sqlMessage || error.message
           res.statusCode = 400
           res.send({ message })
        }
     }

     async getAllPosts(req: Request, res: Response):Promise<void> {
        try {

            const posts = await PostController.postBusiness.getAllPosts()

            res.status(200).send({posts})
            
        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400
            res.send({ message })
            
        }
     }

     async getPostById(req: Request, res: Response):Promise<void>{
        try {
            const id = req.params.id as string

            const post: Post =  await PostController.postBusiness.getPostById(id)

            res.send({post})
        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400
            res.send({ message })
        }
     }
}