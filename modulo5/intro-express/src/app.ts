import express  from 'express';
import cors from 'cors'
import { users } from "./examples.js";

const app = express();

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {          
  res.send("Hello from Express")
})

app.get("/users", (req, res) => {          
  res.send(users)
})

app.get("/posts/", (req, res) => {   
  const posts = users.map( user => user.posts ).flat(1)
  res.send(posts)
})

app.get("/posts/:user_id", (req, res) => {          
  const userId = Number(req.params.user_id)

  const userMatched = users.filter( user => user.id === userId )
  const posts = userMatched.map( user => user.posts ).flat(1)

  res.send(posts)
})

app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
})