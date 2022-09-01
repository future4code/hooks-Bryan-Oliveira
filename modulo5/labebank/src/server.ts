import express, {Request, Response} from 'express'
import cors from 'cors'

import { addBalance, createAccount, getBalance, internTransfer } from '.'
import { users } from './data'
import { adjustPrice } from './helpers/helpers'
import { userNotFound } from './getBalance/Error'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/users',(req: Request, res:Response)=>{
    res.status(200).send(users)
})

app.get('/users/user',(req: Request, res:Response)=>{
    const cpf = req.body.cpf

    try {
        const userMatched = users.find( user => user.cpf === cpf )

        if(!userMatched) throw new Error(userNotFound);
        
        res.status(200).send(userMatched)
    } catch (error: any) {
        res.status(404).send(error.message)
    }
})

app.get('/users/user/balance',(req: Request, res:Response)=>{
    const cpf = req.body.cpf
    const name = users.find( user => user.cpf === cpf )?.name
    
    try {
        const balance = getBalance(name, cpf)

        res.status(200).send(`usuário: ${name}, saldo: ${adjustPrice(balance)}`)

    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

app.post('/users/user',(req: Request, res:Response)=>{
    const body = req.body
    const {name, cpf, birthDate} = body

    try {
        createAccount(name, cpf, birthDate)

        res.status(201).send('conta criada com sucesso!')

    } catch (error: any) {
        res.status(422).send(error.message)
    }
})

app.post('/users/transfer',(req: Request, res: Response)=>{
    const body = req.body
    const {senderName, senderCpf, receiverName, receiverCpf, value} = body

    try {

        internTransfer(senderName, senderCpf, receiverName, receiverCpf, value)

        res.status(200).send(`Transferencia realizada com sucesso! valor enviado: ${adjustPrice(value)}`)
        
    } catch (error: any) {
        res.status(422).send(error.message)
    }
})

app.put('/users/user',(req: Request, res:Response)=>{
    const body = req.body
    const {name, cpf, value}= body

    try {
        
        const addBalanceReturn = addBalance(name, cpf, value)
        res.status(200).send(addBalanceReturn)

    } catch (error: any) {

        res.status(400).send(error.message)
    }
})

app.listen('3003',()=>{
    console.log('escutando na porta 3003')
})
