import knex from "knex";
import { database } from "../DATABASE";

const {host, port , user, pass, name} = database

export const connection = knex({
    client: 'mysql',
    connection: {
        host,
        user,
        port,
        database: name,
        password: pass
    }
})
