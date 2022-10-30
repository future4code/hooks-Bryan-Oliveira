/**************************** IMPORTS ******************************/
import { app } from "./app"
import { userRouter } from "./router/UserRouter"
import { postRouter } from "./router/PostRouter"
import { friendshipRouter } from "./router/FirendshipRouter"


/**************************** ENDPOINTS ******************************/

app.use('/user', userRouter)
app.use('/post', postRouter)
app.use('/friendship', friendshipRouter)




