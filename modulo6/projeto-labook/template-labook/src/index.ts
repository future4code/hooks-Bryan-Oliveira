/**************************** IMPORTS ******************************/
import { app } from "./app"
import { userRouter } from "./router/UserRouter"
import { postRouter } from "./router/PostRouter"
import { friendshipRouter } from "./router/FirendshipRouter"
import { likeRouter } from "./router/LikeRouter"


/**************************** ENDPOINTS ******************************/

app.use('/user', userRouter)
app.use('/post', postRouter)
app.use('/friendship', friendshipRouter)
app.use('/postLike', likeRouter)