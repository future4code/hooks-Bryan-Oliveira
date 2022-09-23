import cors from 'cors'
import express, { Express } from 'express'

export const app: Express = express()

app.use(express.json())
app.use(cors())

app.listen('3003', ()=>{
    console.log('ouvindo na porta 3003')
})