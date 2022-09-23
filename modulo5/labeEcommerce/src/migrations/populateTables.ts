import { connection } from "../../connection"
import { v4 as uuid } from 'uuid'
import { tableProductsName, tablePurchasesName, tableUsersName } from "./tableNames";


const populateTableUsers = async () => {
    try {
        await connection.raw(`
        INSERT INTO ${tableUsersName} (id, name, email, password)
        VALUES
        ('${uuid()}', 'bryan', 'bryan@email.com', '123456'),
        ('${uuid()}', 'brenda', 'brenda@email.com', '123456');
        `)

        console.log(`tabela ${tableUsersName} populada com sucesso!`)
    } catch (error: any) {
        console.log(error.sqlMessage)
    }
}

const populateTableProducts = async () => {
    try {
        await connection.raw(`
        INSERT INTO ${tableProductsName} (id, name, price, image_url)
        VALUES
        ('${uuid()}', 'nave-espacial', 10.00 , ''),
        ('${uuid()}', 'carrinho-espacial', 8.50, '');
        `)

        console.log(`tabela ${tableProductsName} populada com sucesso!`)
    } catch (error: any) {
        console.log(error.sqlMessage)
    }
}

const populateTablePurchases = async () => {
    try {

        const products = await connection(`${tableProductsName}`).select('id', 'price')
        const usersIds = await connection(`${tableUsersName}`).select('id')

        await connection.raw(`
        INSERT INTO ${tablePurchasesName} (id, user_id, product_id, quantity, total_price)
        VALUES
        ('${uuid()}', '${usersIds[0].id}', '${products[0].id}', 5, '${5 * products[0].price}' ),
        ('${uuid()}', '${usersIds[0].id}', '${products[1].id}', 5, '${5 * products[0].price}' ),
        ('${uuid()}', '${usersIds[1].id}', '${products[0].id}', 5, '${5 * products[0].price}' ),
        ('${uuid()}', '${usersIds[1].id}', '${products[1].id}', 5, '${5 * products[0].price}' );
        `)

        console.log(`tabela ${tablePurchasesName} populada com sucesso!`)
    } catch (error: any) {
        console.log(error.sqlMessage)
    }
}

populateTableUsers()
.then(()=> populateTableProducts())
.then(()=> populateTablePurchases())
.finally(()=> process.exit())
