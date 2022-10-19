import express from 'express'
import { PostController } from '../controller/PostController'

export const postRouter = express.Router()
const postController: PostController = new PostController

postRouter.post('/create', postController.createPost)

postRouter.get('/getAll', postController.getAllPosts)
postRouter.get('/:id', postController.getPostById)


 