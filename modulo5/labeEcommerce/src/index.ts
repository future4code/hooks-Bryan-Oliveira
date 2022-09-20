import cors from 'cors'
import express, { Request, Response,Express } from 'express'

const app: Express = express()

app.use(express.json())
app.use(cors())


app.listen('3003', ()=>{
    console.log('ouvindo na porta 3003')
})