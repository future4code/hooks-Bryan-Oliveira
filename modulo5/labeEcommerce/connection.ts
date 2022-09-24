import knex from 'knex'
import { database } from './DATABASE'

const {user, password, 'database': db, port, host} = database

export const connection = knex({
    client: 'mysql',
    connection: {
        port,
        host,
        user,
        password,
        database: db
    }
})