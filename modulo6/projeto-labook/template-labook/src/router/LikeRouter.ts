import express from 'express'
import { LikeController } from '../controller/LikeController'

export const likeRouter = express.Router()
const likeController = new LikeController()

likeRouter.post('/create', likeController.likePost)