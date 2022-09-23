import { connection } from "../../connection";
import { tableProductsName, tablePurchasesName, tableUsersName } from "./tableNames";

const deleteTableUsers = async() => {
    try {
        await connection.raw(`
            DROP TABLE ${tableUsersName};
        `)

        console.log(`tabela ${tableUsersName} deletada!`)
    } catch (error: any) {
        console.log(error.sqlMessage)
    }
}

const deleteTableProducts = async() => {
    try {
        await connection.raw(`
        DROP TABLE ${tableProductsName};
    `)

        console.log(`tabela ${tableProductsName} deletada!`)
    } catch (error: any) {
        console.log(error.sqlMessage)
    }
}

const deleteTablePurchases = async() => {
    try {
        await connection.raw(`
            DROP TABLE ${tablePurchasesName};
        `)

        console.log(`tabela ${tablePurchasesName} deletada!`)
    } catch (error: any) {
        console.log(error.sqlMessage)
    }
}

deleteTablePurchases()
.then(()=> deleteTableUsers())
.then(()=> deleteTableProducts())
.finally(()=> process.exit())
