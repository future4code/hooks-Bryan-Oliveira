import {app} from "./app"
import { createUSer, deleteUser, getAllUSers } from "./controller/userController"



app.get("/", async function(){
   console.log("endpoint teste")
})

app.get('/all', getAllUSers)

app.post('/createUser', createUSer)

app.delete('/:id', deleteUser)


