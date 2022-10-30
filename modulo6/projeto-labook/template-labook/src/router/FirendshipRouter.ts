import express from 'express'
import { FriendshipController } from '../controller/FriendshipController'

export const friendshipRouter = express.Router()
const friendshipController: FriendshipController = new FriendshipController()

friendshipRouter.get('/', friendshipController.getAllFirendships)
friendshipRouter.get('/user/:id', friendshipController.getFriendsIds)

friendshipRouter.post('/create', friendshipController.createFriendship)

friendshipRouter.delete('/:id', friendshipController.deleteFriendship)