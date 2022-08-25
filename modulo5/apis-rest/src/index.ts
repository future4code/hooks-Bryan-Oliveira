import { users, User } from "./data";

import express, { Request, Response} from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

//exercicio 1

// a) get
// b) users

// exercicio2

// a) por queryParams, pois é o retorno da busca possivelmente será mais de um user
// b) validações

// exercicio4

// a) não tem diferença no código, nesse caso o post é usado por boas práticas
// b) o melhor seria usar post, pois o endpoint é de criação


app.get('/users',(req: Request, res: Response)=>{
    let errorCode = 400
    const type: string  = (req.query.type as string)?.toUpperCase().trim() 
    const name: string  = (req.query.name as string)?.toUpperCase().trim() 

    try {
        if(!type && !name)res.status(200).send(users)

        if(type && type !== "NORMAL" && 
        type !== "ADMIN"){
            errorCode = 422
            throw new Error('passe a query type no formato correto')
        }

        let usersMatched: User[] = []

        if(name && type) usersMatched = users.filter( user => user.type === type && user.name.toUpperCase() === name )
        
        else name?  usersMatched = users.filter( user => user.name.toUpperCase() === name ) : 
        usersMatched = users.filter( user => user.type === type )

        if(!usersMatched.length) {
            errorCode = 404
            throw new Error('nenhum usuario encontrado')
        }

        res.status(200).send(usersMatched)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
    
})

app.post('/user',(req: Request, res: Response)=>{
    const body: User = req.body
    const {name, email, type, age} = body
    let errorCode = 422

    try {
        
        if(!name || !email || !type || !age){
            throw new Error("passe todos os campos (name, email, type, age)")
        }

        if(isNaN(age)){
            throw new Error("o campo age deve ser um numero");
        }

        if(type.toUpperCase().trim() !== "NORMAL" && 
        type.toUpperCase().trim() !== "ADMIN"){
            throw new Error("o campo type de ser 'ADMIN' OU 'NORMAL'");
        }

        const newUser: User = {...body, id: users[users.length - 1].id + 1 , type: body.type.toUpperCase().trim() }

        users.push(newUser)
        res.status(201).send(users)
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
    
})

app.put('/user/last',(req: Request, res: Response)=>{
    const lastUserId = users[users.length -1].id
    users.forEach( user =>{
        if(user.id === lastUserId){
            user.name = `${user.name}-ALTERADO` 
        }
    })
    res.status(200).send(users)
})

app.patch('/user/last',(req: Request, res: Response)=>{
    const lastUserId = users[users.length -1].id
    users.forEach( user =>{
        if(user.id === lastUserId){
            user.name = user.name.replace('-ALTERADO', '-REALTERADO') 
        }
    })
    res.status(200).send(users)
})

app.delete('/user/:id',(req: Request, res: Response)=>{
    const id: number = Number(req.params.id)
    let errorCode = 400
    try {
        if(isNaN(id)){
            errorCode = 422
            throw new Error("id deve ser um numero");
            
        }
        const userMatched: User | undefined = users.find( user => user.id === id)
      
        if(!userMatched){
            errorCode = 404
            throw new Error("usuario nao encontrado");  
        }

        const userMatchedIndex = users.indexOf(userMatched)
        users.splice(userMatchedIndex, 1)

        res.status(200).send(users)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }

})

app.listen('3003',()=>{
    console.log('ouvindo na porta 3003')
})