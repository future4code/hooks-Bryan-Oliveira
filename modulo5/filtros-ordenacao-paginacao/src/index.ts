import cors from 'cors'
import express, {Express, Request, Response} from 'express'
import { getAllUsers } from './endpoints/users'

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get('', getAllUsers)

app.listen('3003', ()=>{
    console.log('ouvindo na porta 3003')
})