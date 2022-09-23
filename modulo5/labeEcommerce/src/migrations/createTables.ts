import { connection } from "../../connection";
import { tableProductsName, tablePurchasesName, tableUsersName } from "./tableNames";

const createTableUsers =async () => {
    try {
        await connection.raw(`
            CREATE TABLE ${tableUsersName} (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(10) NOT NULL,
                email VARCHAR(50) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL
            );
        `)

        console.log(`tabela ${tableUsersName} criada com sucesso!`)
    } catch (error: any) {
        console.log(error.sqlMessage)
    }
}

const createTableProducts =async () => {
    try {
        await connection.raw(`
            CREATE TABLE ${tableProductsName} (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(50) UNIQUE NOT NULL,
                price DECIMAL(8,2) NOT NULL,
                image_url VARCHAR(255)
            );
        `)

        console.log(`tabela ${tableProductsName} criada com sucesso!`)
    } catch (error: any) {
        console.log(error.sqlMessage)
    }
}

const createTablePurchases =async () => {
    
    try{
        await connection.raw(`
               CREATE TABLE ${tablePurchasesName} (
               id VARCHAR(255) PRIMARY KEY,
               user_id VARCHAR(255) NOT NULL,
               product_id VARCHAR(255) NOT NULL,
               quantity INT NOT NULL,
               total_price DECIMAL(8,2) NOT NULL,

               FOREIGN KEY (user_id) REFERENCES ${tableUsersName}(id),
               FOREIGN KEY (product_id) REFERENCES ${tableProductsName}(id)
               );
               `)
               
        console.log(`tabela ${tablePurchasesName} criada com sucesso!`)
    }catch (error: any) {
        console.log(error.sqlMessage)
    }
}



createTableUsers()
.then(()=> createTableProducts())
.then(()=> createTablePurchases())
.finally(()=> process.exit())
