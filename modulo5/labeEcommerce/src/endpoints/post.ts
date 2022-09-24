import { Request, Response } from "express"
import { connection } from "../../connection"
import { tableProductsName, tablePurchasesName, tableUsersName } from "../migrations/tableNames"
import { v4 as uuid } from 'uuid'
import transporter from "../services/sendEmail"
import { database } from "../../DATABASE"

export const postUser = async (req: Request, res: Response)=>{
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

        const send = await transporter.sendMail({
            from: database.nodemailerUser,
            to: email,
            subject: "Criação da conta!",
            text: "Parabéns, conta criada com sucesso",
            html: `<p>Parabéns ${name}, sua conta foi criada com sucesso ❤️</p>`
        })

        res.status(201).send(`usuario ${name} cadastrado com sucesso!`)
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
        
    }
}

export const postProducts = async(req: Request, res: Response)=>{
    let errorCode = 400

    try {
        const name = req.body.name
        const price = Number(req.body.price)
        const imageUrl = req.body.imageUrl
    
        if(!name || !price ){
            errorCode = 424
            throw new Error("insira os campos name, e price");     
        }

        if(price <= 0){
            errorCode = 424
            throw new Error("o campo price deve ser maior que 0");
        }

        const productMatched = await connection(tableProductsName)
                                    .select()
                                    .where(`name`, `like`, name)

        if(productMatched.length){
            errorCode = 408
            throw new Error(`o produto '${name}' já foi cadastrado!`);
            
        }

        const id = uuid()

        const newProduct = {name, price, image_url: imageUrl, id}

        await connection(tableProductsName).insert(newProduct)

        res.status(201).send(`produto ${name} cadastrado com sucesso!`)
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
        
    }

}

export const postPurchases =  async(req: Request, res: Response)=>{
    let errorCode = 400

    try {
        const userId = req.body.userId
        const productId = req.body.productId
        const quantity = Number(req.body.quantity)
    
        if(!userId || !productId ){
            errorCode = 424
            throw new Error("insira os campos userId e productId");     
        }

        if(quantity <= 0){
            errorCode = 424
            throw new Error("o campo quantity deve ser maior que 0")
        }
        
        if(!Number.isInteger(quantity)){
            errorCode = 424
            throw new Error("o campo quantity deve um numero inteiro")
        }

        const userMatched = await connection(tableUsersName).select().where('id', 'like', userId)

        if(!userMatched.length){
            errorCode = 404
            throw new Error("usuario não encontrado");       
        }
        const productMatched = await connection(tableProductsName).select('price').where('id', 'like', productId)

        if(!productMatched.length){
            errorCode = 404
            throw new Error("produto não encontrado");       
        }

        const productPrice = productMatched[0].price

        const id = uuid()

        const total_price = quantity * productPrice

        const newPurchase = {user_id: userId, product_id: productId, quantity, id, total_price}

        await connection(tablePurchasesName).insert(newPurchase)

        res.status(201).send(`compra cadastrada com sucesso!`)
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
        
    }

}