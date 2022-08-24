import cors from 'cors'
import express, { Request, Response} from 'express'
import {v4 as uuidv4} from 'uuid'

import { Product } from './types'
import { products } from './data'

const app = express()

app.use(express.json())
cors()

app.get('/ping',(req: Request, res: Response)=>{
    res.send('pong')
})

app.post('/product', (req: Request, res: Response)=>{
    const {name, price} = req.body
    let statusCode: number = 0;
    try {
        if(!name || !price) {
            statusCode = 422
            throw new Error("passe os campos name e price do body")
        }

        if(Number(name) || typeof(name)!== "string"){
            statusCode = 422
            throw new Error("o campo name deve ser uma string")
        }

        if(!Number(price)){
            statusCode = 422
            throw new Error("o campo price deve ser um numero")
        }

        if(price<=0){
            statusCode = 422
            throw new Error("o campo price deve ser maior que 0")
        }

        statusCode = 201

        const product: Product = {name, price, id: uuidv4()}
        products.push(product)

        res.status(statusCode).send(products)
        
    } catch (error: any) {
        res.status(statusCode as number).send(error.message)
    }
})

app.get("/products",(req: Request, res: Response)=>{
    res.status(200).send(products)
})

app.put("/product/:id/price", (req: Request, res: Response)=>{
    const {id} = req.params
    const {price} = req.body
    let statusCode: number = 0;
    try {
        if(!id){
            statusCode = 422
            throw new Error("passe o id por path param")
        }

        if(!price){
            statusCode = 422
            throw new Error("o campo price e obrigatorio")
        }

        if(!Number(price)){
            statusCode = 422
            throw new Error("price deve ser um numero")
        }

        if(price<=0){
            statusCode = 422
            throw new Error("o campo price deve ser maior que 0")
        }

        let productMatched: Product | undefined = products.find( prod => prod.id === id)

        if(!productMatched) {
            statusCode = 422
            throw new Error("produto nao encontrado!")
        }

        statusCode = 200
        productMatched.price = price
        
        res.status(statusCode).send(products)
    } catch (error: any) {
        res.status(statusCode).send(error.message)
    }
})

app.delete("/product/:id", (req: Request, res: Response)=>{
    const {id} = req.params
    let statusCode: number = 0
    try {
        if(!id){
            statusCode = 422
            throw new Error("passe o id por path param")
        }

        const productMatched: Product | undefined = products.find( prod => prod.id === id)

        if(!productMatched) {
            statusCode = 422
            throw new Error("produto nao encontrado!")
        }

        products.forEach( product =>{
            if( product.id === productMatched.id){
                const prodIndex = products.indexOf(product)
                products.splice(prodIndex, 1)
            }
        })

        statusCode = 200

        res.status(statusCode).send(products)
        
    } catch (error: any) {
        
    }
})



app.listen('3003', ()=>{
    console.log('ouvindo na porta 3003')
})