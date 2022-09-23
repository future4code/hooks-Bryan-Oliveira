import cors from 'cors'
import express, { Request, Response,Express } from 'express'
import { v4 as uuid } from 'uuid'
import { connection } from '../connection'
import { tableUsersName, tableProductsName, tablePurchasesName } from './migrations/tableNames'

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get('/users',async (req: Request, res: Response)=>{
    let errorCode = 400

    try {
        const users = await connection(tableUsersName).select('id', 'name', 'email')

        if(users.length < 1){
            errorCode = 404 
            throw new Error("nenhum usuário encontrado!")
        }

        res.status(200).send(users)
    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
})

app.post('/users', async (req: Request, res: Response)=>{
    let errorCode = 400

    try {
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password
    
        if(!name || !email || !password){
            errorCode = 424
            throw new Error("insira os campos name, email e password");     
        }

        const userMatched = await connection(tableUsersName)
                                    .select()
                                    .where(`email`, `like`, email)

        if(userMatched.length){
            errorCode = 408
            throw new Error(`o email '${email}' já foi usado!`);
            
        }

        const id = uuid()

        const newUser = {name, email, password, id}

        await connection(tableUsersName).insert(newUser)

        res.status(201).send(`usuario ${name} criado com sucesso!`)
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
        
    }
})



app.listen('3003', ()=>{
    console.log('ouvindo na porta 3003')
})